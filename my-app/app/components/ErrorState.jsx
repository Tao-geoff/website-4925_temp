'use client';

import React from 'react';

/**
 * 错误状态组件
 * @param {Object} props
 * @param {Error} [props.error] - 错误对象
 * @param {string} [props.message='加载数据时出错'] - 显示的错误消息
 * @param {Function} [props.onRetry] - 重试回调函数
 * @param {string} [props.className=''] - 额外的CSS类名
 */
export default function ErrorState({ 
  error, 
  message = '加载数据时出错', 
  onRetry,
  className = '' 
}) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="inline-block bg-red-100 dark:bg-red-900 p-4 rounded-full mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-red-600 dark:text-red-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{message}</h3>
      {error && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {error.message || String(error)}
        </p>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          重试
        </button>
      )}
    </div>
  );
} 