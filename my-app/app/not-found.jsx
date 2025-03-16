import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <div className="text-6xl font-bold text-primary mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        页面未找到
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        很抱歉，您请求的页面不存在或已被移除。
      </p>
      <div className="space-x-4">
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          返回首页
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          联系我们
        </Link>
      </div>
    </div>
  );
} 