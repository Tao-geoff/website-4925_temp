import { NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import path from 'path';

// 允许的图片目录
const ALLOWED_DIRECTORIES = [
  'products',
  'company',
  'team',
  'testimonials',
  'banners',
  'misc'
];

// 转换文件大小为人类可读格式
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
}

export async function GET(request) {
  try {
    // 获取目录参数
    const { searchParams } = new URL(request.url);
    const directory = searchParams.get('directory');
    
    // 验证目录参数
    if (!directory) {
      return NextResponse.json(
        { error: '缺少目录参数' }, 
        { status: 400 }
      );
    }
    
    // 验证目录是否在允许列表中
    if (!ALLOWED_DIRECTORIES.includes(directory)) {
      return NextResponse.json(
        { error: '不允许访问此目录' }, 
        { status: 403 }
      );
    }
    
    // 构建目录路径
    const dirPath = path.join(process.cwd(), 'public', 'images', directory);
    
    // 读取目录内容
    let files;
    try {
      files = await readdir(dirPath);
    } catch (error) {
      // 如果目录不存在，则创建目录并返回空数组
      if (error.code === 'ENOENT') {
        return NextResponse.json({ images: [] });
      }
      throw error;
    }
    
    // 过滤出图片文件并获取文件信息
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imagePromises = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(async (file) => {
        const filePath = path.join(dirPath, file);
        const fileStat = await stat(filePath);
        
        return {
          name: file,
          path: `/images/${directory}/${file}`,
          size: formatFileSize(fileStat.size),
          lastModified: fileStat.mtime.toISOString()
        };
      });
    
    const images = await Promise.all(imagePromises);
    
    // 按修改时间倒序排序（最新的先显示）
    images.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
    
    return NextResponse.json({ images });
  } catch (error) {
    console.error('获取图片列表时出错:', error);
    return NextResponse.json(
      { error: '获取图片列表失败', message: error.message }, 
      { status: 500 }
    );
  }
} 