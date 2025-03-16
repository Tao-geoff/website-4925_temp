'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const JSON_FILES = [
  { name: '全局设置', path: 'settings.json' },
  { name: '首页内容', path: 'home.json' },
  { name: '产品数据', path: 'products.json' },
  { name: '公司信息', path: 'company.json' },
  { name: '联系页面', path: 'contact.json' }
];

// 添加JSON验证功能
function validateJSON(text) {
  try {
    JSON.parse(text);
    return { valid: true, error: null };
  } catch (err) {
    return { 
      valid: false, 
      error: err.message,
      // 提取行号和位置信息，如果有的话
      position: err.message.match(/position\s(\d+)/) ? 
        parseInt(err.message.match(/position\s(\d+)/)[1]) : null 
    };
  }
}

// 添加格式化JSON功能
function formatJSON(text) {
  try {
    const obj = JSON.parse(text);
    return JSON.stringify(obj, null, 2);
  } catch (err) {
    // 如果解析失败，返回原始文本
    return text;
  }
}

export default function AdminPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [editorContent, setEditorContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [allFiles, setAllFiles] = useState(JSON_FILES);
  // 添加JSON验证状态
  const [validation, setValidation] = useState({ valid: true, error: null, position: null });
  // 添加定时验证标志
  const [validationTimeout, setValidationTimeout] = useState(null);
  
  // 加载选中的文件
  useEffect(() => {
    if (!selectedFile) return;
    
    async function loadFile() {
      try {
        setIsLoading(true);
        setMessage({ type: '', text: '' });
        
        const timestamp = new Date().getTime();
        const response = await fetch(`/data/${selectedFile}?t=${timestamp}`);
        
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const formattedContent = JSON.stringify(data, null, 2);
        setEditorContent(formattedContent);
        // 重置验证状态
        setValidation({ valid: true, error: null });
      } catch (error) {
        console.error('Error loading file:', error);
        setMessage({ type: 'error', text: `加载文件失败: ${error.message}` });
      } finally {
        setIsLoading(false);
      }
    }
    
    loadFile();
  }, [selectedFile]);
  
  // 保存文件
  const handleSave = async () => {
    try {
      // 先进行JSON验证
      const validationResult = validateJSON(editorContent);
      if (!validationResult.valid) {
        setValidation(validationResult);
        setMessage({ 
          type: 'error', 
          text: `JSON格式错误: ${validationResult.error}` 
        });
        return;
      }
      
      setIsLoading(true);
      setMessage({ type: '', text: '' });
      
      // 调用API保存文件
      const response = await fetch('/api/update-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: selectedFile,
          content: editorContent
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || '保存失败');
      }
      
      // 格式化JSON显示
      const formattedJSON = formatJSON(editorContent);
      setEditorContent(formattedJSON);
      
      setMessage({ 
        type: 'success', 
        text: result.message || `文件 ${selectedFile} 已成功保存！` 
      });
      // 重置验证状态
      setValidation({ valid: true, error: null });
    } catch (error) {
      console.error('Error saving file:', error);
      setMessage({ 
        type: 'error', 
        text: error instanceof SyntaxError 
          ? `JSON格式错误: ${error.message}`
          : `保存文件失败: ${error.message}` 
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // 处理编辑器内容变化
  const handleEditorChange = (e) => {
    const newContent = e.target.value;
    setEditorContent(newContent);
    
    // 清除之前的验证超时
    if (validationTimeout) {
      clearTimeout(validationTimeout);
    }
    
    // 设置新的验证超时 - 用户停止输入500ms后验证
    const timeout = setTimeout(() => {
      const result = validateJSON(newContent);
      setValidation(result);
    }, 500);
    
    setValidationTimeout(timeout);
  };
  
  // 文件选择变化
  const handleFileChange = (e) => {
    setSelectedFile(e.target.value);
  };
  
  // 格式化JSON
  const handleFormatJSON = () => {
    try {
      const formattedContent = formatJSON(editorContent);
      setEditorContent(formattedContent);
      setValidation({ valid: true, error: null });
      setMessage({ type: 'success', text: 'JSON已成功格式化' });
    } catch (error) {
      setMessage({ type: 'error', text: `格式化失败: ${error.message}` });
    }
  };

  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">网站内容管理</h1>
            <div className="space-x-4">
              <Link 
                href="/admin/images"
                className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors"
              >
                图片管理
              </Link>
              <Link 
                href="/"
                className="px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
              >
                返回网站
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 管理界面 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          {/* 文件选择 */}
          <div className="mb-6">
            <label htmlFor="fileSelect" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              选择要编辑的数据文件:
            </label>
            <select
              id="fileSelect"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              value={selectedFile || ''}
              onChange={handleFileChange}
            >
              <option value="">-- 选择文件 --</option>
              {allFiles.map(file => (
                <option key={file.path} value={file.path}>
                  {file.name} ({file.path})
                </option>
              ))}
            </select>
          </div>
          
          {/* 编辑器 */}
          {selectedFile && (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="jsonEditor" className="block text-gray-700 dark:text-gray-300 font-medium">
                    编辑 {selectedFile}:
                  </label>
                  <button
                    type="button"
                    onClick={handleFormatJSON}
                    className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                  >
                    格式化JSON
                  </button>
                </div>
                
                <div className="relative">
                  <textarea
                    id="jsonEditor"
                    className={`w-full p-4 border ${
                      !validation.valid
                        ? 'border-red-500 dark:border-red-700' 
                        : 'border-gray-300 dark:border-gray-700'
                    } rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-mono h-[60vh] resize-none`}
                    value={editorContent}
                    onChange={handleEditorChange}
                    disabled={isLoading}
                  ></textarea>
                  
                  {/* 验证错误提示 */}
                  {!validation.valid && (
                    <div className="absolute bottom-4 right-4 left-4 bg-red-100 text-red-700 dark:bg-red-900/70 dark:text-red-200 p-3 rounded-md">
                      <p className="font-medium">JSON格式错误:</p>
                      <p className="text-sm">{validation.error}</p>
                      {validation.position && (
                        <p className="text-xs mt-1">大约在位置: {validation.position}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* 消息显示 */}
              {message.text && (
                <div className={`mb-6 p-4 rounded-md ${
                  message.type === 'error' 
                    ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200' 
                    : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {message.text}
                </div>
              )}
              
              {/* 动作按钮 */}
              <div className="flex justify-end">
                <button
                  className={`px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 ${
                    !validation.valid ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                  onClick={handleSave}
                  disabled={isLoading || !validation.valid}
                >
                  {isLoading ? '保存中...' : '保存更改'}
                </button>
              </div>
              
              {/* 说明 */}
              <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  使用说明
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>请确保编辑后的JSON格式正确，否则将无法保存</li>
                  <li>修改后请刷新相应页面以查看更改效果</li>
                  <li>添加图片时，请先使用图片管理功能上传图片</li>
                  <li>所有路径应相对于public目录，例如：/images/product.jpg</li>
                  <li>点击"格式化JSON"按钮可以自动整理格式，便于编辑</li>
                </ul>
              </div>
            </>
          )}
        </div>
        
        {/* 功能卡片 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 图片管理卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">图片管理</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              上传和管理网站使用的图片资源。图片会分类存储，便于在JSON数据中引用。
            </p>
            <Link 
              href="/admin/images"
              className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              进入图片管理
            </Link>
          </div>
          
          {/* 帮助指南卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">帮助指南</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              关于如何使用内容管理系统的帮助和指南。包括JSON数据格式说明和常见问题解答。
            </p>
            <Link 
              href="/admin/help"
              className="inline-block px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              查看指南
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 