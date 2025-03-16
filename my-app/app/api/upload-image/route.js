import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';

// 确保图片目录存在
function ensureDirectoryExists(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

export async function POST(request) {
  try {
    // 使用 formData 处理文件上传
    const formData = await request.formData();
    const file = formData.get('file');
    const directory = formData.get('directory') || 'misc'; // 默认目录
    
    if (!file) {
      return NextResponse.json(
        { error: '未找到上传的文件' },
        { status: 400 }
      );
    }
    
    // 安全检查：验证文件类型
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: '不支持的文件类型。仅允许 JPEG、PNG、GIF 和 WebP 格式。' },
        { status: 400 }
      );
    }
    
    // 安全检查：限制文件大小（5MB）
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: '文件过大。最大支持 5MB。' },
        { status: 400 }
      );
    }
    
    // 获取文件数据和原始文件名
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // 处理文件名，确保安全并添加时间戳避免覆盖
    const originalName = file.name;
    const timestamp = Date.now();
    const extension = path.extname(originalName);
    const baseName = path.basename(originalName, extension);
    const safeName = baseName
      .replace(/[^a-zA-Z0-9]/g, '-') // 只保留字母和数字，其他替换为连字符
      .toLowerCase();
    const finalName = `${safeName}-${timestamp}${extension}`;
    
    // 创建目标目录
    const targetDir = path.join(process.cwd(), 'public', 'images', directory);
    ensureDirectoryExists(targetDir);
    
    // 保存文件
    const filePath = path.join(targetDir, finalName);
    await writeFile(filePath, buffer);
    
    // 返回相对路径，便于在JSON中使用
    const relativePath = `/images/${directory}/${finalName}`;
    
    return NextResponse.json({ 
      success: true, 
      message: '图片已成功上传',
      filePath: relativePath
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { error: `上传图片时出错: ${error.message}` },
      { status: 500 }
    );
  }
}

// 设置更大的响应体大小限制
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb',
    },
  },
}; 