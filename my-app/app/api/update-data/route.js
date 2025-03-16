import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

// 允许的文件列表，安全措施
const ALLOWED_FILES = [
  'settings.json',
  'home.json',
  'products.json',
  'company.json',
  'contact.json'
];

export async function POST(request) {
  try {
    // 解析请求体
    const body = await request.json();
    const { fileName, content } = body;
    
    // 安全检查: 确保文件名是允许的
    if (!fileName || !ALLOWED_FILES.includes(fileName)) {
      return NextResponse.json(
        { error: `不允许更新文件: ${fileName}` },
        { status: 403 }
      );
    }
    
    // 验证内容格式
    try {
      // 确保内容是有效的JSON
      const parsedContent = JSON.parse(content);
      
      // 再次序列化，以便格式化
      const formattedContent = JSON.stringify(parsedContent, null, 2);
      
      // 构建文件路径
      const filePath = path.join(process.cwd(), 'public', 'data', fileName);
      
      // 写入文件
      await writeFile(filePath, formattedContent, 'utf8');
      
      return NextResponse.json({ success: true, message: `文件 ${fileName} 已成功更新` });
    } catch (parseError) {
      return NextResponse.json(
        { error: `JSON格式无效: ${parseError.message}` },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error updating data file:', error);
    return NextResponse.json(
      { error: `更新文件时出错: ${error.message}` },
      { status: 500 }
    );
  }
} 