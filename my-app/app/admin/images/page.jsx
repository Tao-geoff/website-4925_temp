'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Upload, CheckCircle, AlertCircle, FolderOpen, Image as ImageIcon, RefreshCw } from "lucide-react";

// 图片目录选项
const IMAGE_DIRECTORIES = [
  { id: 'products', name: '产品图片', description: '所有产品相关的图片' },
  { id: 'company', name: '公司图片', description: '公司环境、办公室等图片' },
  { id: 'team', name: '团队照片', description: '团队成员的照片' },
  { id: 'testimonials', name: '客户评价', description: '客户评价的人物照片' },
  { id: 'banners', name: '横幅图片', description: '网站横幅和大型广告图' },
  { id: 'misc', name: '其他图片', description: '未分类的杂项图片' }
];

export default function ImageManager() {
  const [selectedDirectory, setSelectedDirectory] = useState('products');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [uploading, setUploading] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid 或 list
  const fileInputRef = useRef(null);

  // 加载指定目录的图片
  const loadImages = async (directory) => {
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      const response = await fetch(`/api/list-images?directory=${directory}`);
      
      if (!response.ok) {
        throw new Error('获取图片列表失败');
      }
      
      const data = await response.json();
      setImages(data.images || []);
      
      if (data.images.length === 0) {
        setMessage({ type: 'info', text: '此目录中没有图片' });
      }
    } catch (error) {
      console.error('加载图片时出错:', error);
      setMessage({ type: 'error', text: '加载图片失败: ' + error.message });
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  // 目录更改时加载图片
  useEffect(() => {
    loadImages(selectedDirectory);
  }, [selectedDirectory]);

  // 处理图片上传
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // 重置上传后文件选择
    event.target.value = '';
    
    // 检查文件类型
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setMessage({ type: 'error', text: '只支持 JPG, PNG, GIF 和 WebP 格式的图片' });
      return;
    }
    
    // 检查文件大小
    if (file.size > 5 * 1024 * 1024) { // 5MB
      setMessage({ type: 'error', text: '图片大小不能超过 5MB' });
      return;
    }
    
    setUploading(true);
    setMessage({ type: '', text: '' });
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('directory', selectedDirectory);
    
    try {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || '上传失败');
      }
      
      setMessage({ type: 'success', text: '图片上传成功' });
      
      // 刷新图片列表
      await loadImages(selectedDirectory);
    } catch (error) {
      console.error('上传图片时出错:', error);
      setMessage({ type: 'error', text: '上传失败: ' + error.message });
    } finally {
      setUploading(false);
    }
  };

  // 复制图片路径到剪贴板
  const copyImagePath = (path) => {
    navigator.clipboard.writeText(path)
      .then(() => {
        setMessage({ type: 'success', text: '图片路径已复制到剪贴板' });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      })
      .catch(err => {
        setMessage({ type: 'error', text: '复制失败: ' + err.message });
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">图片管理</h1>
      
      {/* 显示消息 */}
      {message.text && (
        <div className={`mb-6 p-4 rounded flex items-center ${
          message.type === 'error' ? 'bg-red-100 text-red-800' :
          message.type === 'success' ? 'bg-green-100 text-green-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {message.type === 'error' ? <AlertCircle className="mr-2" size={20} /> :
           message.type === 'success' ? <CheckCircle className="mr-2" size={20} /> :
           <ImageIcon className="mr-2" size={20} />}
          <span>{message.text}</span>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* 左侧目录面板 */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">图片目录</h2>
            <ul className="space-y-2">
              {IMAGE_DIRECTORIES.map(dir => (
                <li key={dir.id}>
                  <button
                    onClick={() => setSelectedDirectory(dir.id)}
                    className={`w-full text-left p-3 rounded-md flex items-center ${
                      selectedDirectory === dir.id
                        ? 'bg-blue-100 text-blue-800'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <FolderOpen className="mr-2" size={18} />
                    <div>
                      <span className="font-medium">{dir.name}</span>
                      <p className="text-sm text-gray-600">{dir.description}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 上传图片面板 */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">上传新图片</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <ImageIcon className="mx-auto mb-2" size={30} />
              <p className="mb-4 text-gray-600">
                选择要上传的图片文件<br />
                <span className="text-sm">(最大 5MB, JPG/PNG/GIF/WebP)</span>
              </p>
              <label className="block">
                <span className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer inline-flex items-center">
                  <Upload className="mr-2" size={16} />
                  {uploading ? '上传中...' : '选择图片'}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  onChange={handleUpload}
                  disabled={uploading}
                />
              </label>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              当前目录: <strong>{IMAGE_DIRECTORIES.find(d => d.id === selectedDirectory)?.name}</strong>
            </p>
          </div>
        </div>
        
        {/* 右侧图片列表 */}
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {IMAGE_DIRECTORIES.find(d => d.id === selectedDirectory)?.name}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => loadImages(selectedDirectory)}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                  disabled={loading}
                >
                  <RefreshCw className={`mr-1 ${loading ? 'animate-spin' : ''}`} size={16} />
                  刷新
                </button>
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded"
                >
                  {viewMode === 'grid' ? '列表视图' : '网格视图'}
                </button>
              </div>
            </div>
            
            {loading ? (
              <div className="text-center py-10">
                <RefreshCw className="animate-spin mx-auto mb-2" size={30} />
                <p>加载中...</p>
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                <ImageIcon className="mx-auto mb-2" size={40} />
                <p>此目录中没有图片</p>
                <p className="text-sm mt-2">上传一些图片以便在此处显示</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden bg-gray-50 hover:shadow-md transition-shadow">
                    <div className="relative w-full h-40">
                      <Image
                        src={image.path}
                        alt={image.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-sm truncate" title={image.name}>{image.name}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{image.size}</span>
                        <button
                          onClick={() => copyImagePath(image.path)}
                          className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-2 rounded"
                        >
                          复制路径
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">图片</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文件名</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">大小</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {images.map((image, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-3 whitespace-nowrap">
                        <div className="relative w-12 h-12">
                          <Image
                            src={image.path}
                            alt={image.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded"
                          />
                        </div>
                      </td>
                      <td className="py-2 px-3 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{image.name}</span>
                      </td>
                      <td className="py-2 px-3 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{image.size}</span>
                      </td>
                      <td className="py-2 px-3 whitespace-nowrap">
                        <button
                          onClick={() => copyImagePath(image.path)}
                          className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-2 rounded"
                        >
                          复制路径
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 