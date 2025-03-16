import React from 'react';
import Link from 'next/link';

// 视频卡片组件
const VideoCard = ({ video }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-[56.25%] bg-gray-200 dark:bg-gray-700">
        {/* 实际项目中这里会是真实的视频缩略图或嵌入的视频播放器 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500 dark:text-gray-400 text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>视频缩略图</span>
          </div>
        </div>
        
        {/* 视频时长 */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{video.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{video.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600 dark:text-gray-400">{video.date}</span>
          <span className="text-xs inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-300">
            {video.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function MoviePage() {
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">视频中心</h1>
            <p className="text-lg">
              观看我们的产品展示、安装教程和使用技巧视频。
            </p>
          </div>
        </div>
      </div>

      {/* 视频过滤器 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                全部
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2">
                产品展示
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2">
                安装教程
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2">
                使用技巧
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2">
                用户分享
              </button>
            </div>

            {/* 特色视频 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">特色视频</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="relative pb-[56.25%] bg-gray-200 dark:bg-gray-700">
                    {/* 实际项目中这里会是特色视频的嵌入播放器 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-500 dark:text-gray-400 text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg">特色视频播放器</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      贸易制造业  2023 新产品发布会
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      了解我们 2023 年的最新产品系列，包括全新 LED 头灯技术、高性能轮胎和创新排气系统。
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">2023-05-15</span>
                      <span className="text-sm inline-block px-3 py-1 bg-primary bg-opacity-10 rounded-full text-primary">
                        新品发布
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:grid lg:grid-rows-2 gap-6 hidden">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-2/5 relative pb-[56.25%] sm:pb-0 bg-gray-200 dark:bg-gray-700">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="sm:w-3/5 p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">LED 头灯安装指南</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">详细的安装步骤和注意事项，帮助您正确安装 Valenti LED 头灯。</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-2/5 relative pb-[56.25%] sm:pb-0 bg-gray-200 dark:bg-gray-700">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="sm:w-3/5 p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">高性能轮胎测试</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">看看我们的高性能轮胎在各种道路条件下的表现如何。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 视频列表 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">所有视频</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </div>
              
              {/* 加载更多按钮 */}
              <div className="mt-10 text-center">
                <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2">
                  加载更多视频
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 订阅视频更新 */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">订阅视频更新</h2>
            <p className="text-white mb-8">
              订阅我们的视频更新，第一时间获取最新产品资讯和技术教程。
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="您的电子邮箱"
                  className="px-4 py-3 w-full sm:flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                />
                <button className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                  订阅
                </button>
              </div>
              <p className="text-sm text-white text-opacity-80 mt-3">
                我们尊重您的隐私，不会向第三方分享您的信息。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 视频数据
const videos = [
  {
    title: 'LED 头灯安装指南',
    description: '详细的安装步骤和注意事项，帮助您正确安装 Valenti LED 头灯。',
    thumbnail: '/images/videos/led-installation.jpg',
    duration: '8:24',
    date: '2023-06-10',
    category: '安装教程'
  },
  {
    title: '高性能轮胎测试',
    description: '看看我们的高性能轮胎在各种道路条件下的表现如何。',
    thumbnail: '/images/videos/tire-test.jpg',
    duration: '12:37',
    date: '2023-05-22',
    category: '产品测试'
  },
  {
    title: '排气系统声音对比',
    description: '对比不同型号排气系统的声音特性，帮助您选择最适合的产品。',
    thumbnail: '/images/videos/exhaust-sound.jpg',
    duration: '6:15',
    date: '2023-04-18',
    category: '产品展示'
  },
  {
    title: '如何清洁和保养 LED 灯具',
    description: '学习正确的清洁和保养方法，延长 LED 灯具的使用寿命。',
    thumbnail: '/images/videos/led-maintenance.jpg',
    duration: '5:42',
    date: '2023-03-30',
    category: '使用技巧'
  },
  {
    title: '客户改装案例分享',
    description: '看看我们的客户如何使用 Valenti 产品改装他们的爱车。',
    thumbnail: '/images/videos/customer-showcase.jpg',
    duration: '10:18',
    date: '2023-02-25',
    category: '用户分享'
  },
  {
    title: '轮胎更换完整指南',
    description: '从选择合适的轮胎到安装的完整指南，包括注意事项和建议。',
    thumbnail: '/images/videos/tire-replacement.jpg',
    duration: '14:53',
    date: '2023-01-12',
    category: '安装教程'
  },
]; 