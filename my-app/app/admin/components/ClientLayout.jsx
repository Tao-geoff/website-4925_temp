"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FilePenLine, LayoutDashboard, HelpCircle, Image as ImageIcon } from 'lucide-react';

export function ClientLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Effect for handling dark mode preference
  useEffect(() => {
    // Check if user has a saved preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="bg-primary dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">贸易制造业  管理系统</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-md bg-white/20 hover:bg-white/30"
              >
                {darkMode ? '🌞 亮色模式' : '🌙 暗色模式'}
              </button>
              <Link 
                href="/"
                className="px-4 py-2 bg-white text-primary dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                返回网站
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-4">
          <nav className="space-y-2">
            <Link 
              href="/admin"
              className="flex items-center p-3 rounded-md hover:bg-white dark:hover:bg-gray-800"
            >
              <LayoutDashboard className="mr-3" size={20} />
              <span>内容管理</span>
            </Link>
            <Link 
              href="/admin/images"
              className="flex items-center p-3 rounded-md hover:bg-white dark:hover:bg-gray-800"
            >
              <ImageIcon className="mr-3" size={20} />
              <span>图片管理</span>
            </Link>
            <Link 
              href="/admin/help"
              className="flex items-center p-3 rounded-md hover:bg-white dark:hover:bg-gray-800"
            >
              <HelpCircle className="mr-3" size={20} />
              <span>使用帮助</span>
            </Link>
          </nav>

          <div className="mt-8 p-3 bg-white dark:bg-gray-800 rounded-md">
            <h3 className="font-medium mb-2">快速链接</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link 
                  href="/admin?file=home.json" 
                  className="text-primary dark:text-primary-400 hover:underline flex items-center"
                >
                  <FilePenLine className="mr-1" size={14} />
                  <span>编辑首页内容</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin?file=products.json" 
                  className="text-primary dark:text-primary-400 hover:underline flex items-center"
                >
                  <FilePenLine className="mr-1" size={14} />
                  <span>编辑产品内容</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin?file=contact.json" 
                  className="text-primary dark:text-primary-400 hover:underline flex items-center"
                >
                  <FilePenLine className="mr-1" size={14} />
                  <span>编辑联系信息</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-gray-50 dark:bg-gray-800 dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
} 