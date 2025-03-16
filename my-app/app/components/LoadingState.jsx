'use client';

import React from 'react';

/**
 * 加载状态组件
 * @param {Object} props
 * @param {string} [props.message='加载中...'] - 显示的加载消息
 * @param {string} [props.className=''] - 额外的CSS类名
 */
export default function LoadingState({ message = '加载中...', className = '' }) {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
        <p className="text-gray-700 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
} 