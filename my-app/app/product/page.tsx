import React from 'react';
import Link from 'next/link';

export default function ProductPage() {
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">产品目录</h1>
            <p className="text-lg">
              探索 贸易制造业  精心设计的高品质汽车配件，提升您的驾驶体验。
            </p>
          </div>
        </div>
      </div>

      {/* 产品类别 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* 占位符图标 */}
                <div className="absolute inset-0 flex items-center justify-center text-primary">
                  <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{category.description}</p>
                <Link 
                  href={`/product/category/${category.id}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span>浏览类别</span>
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">热门产品</h2>
        
        {/* 产品列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* 占位符图标 */}
                <div className="absolute inset-0 flex items-center justify-center text-primary">
                  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 min-h-[40px]">{product.description}</p>
                <div className="mt-4">
                  <Link 
                    href={`/product/${product.id}`}
                    className="text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 咨询帮助 */}
      <div className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">找不到您需要的产品？</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              我们的团队随时准备为您提供帮助。无论您需要特定的配件，还是想了解更多关于我们产品的信息，都可以联系我们。
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// 产品类别数据
const categories = [
  {
    id: 'lighting',
    name: '照明系统',
    description: '高品质的 LED 头灯、尾灯、转向灯和雾灯，提供卓越的照明效果和安全保障。',
  },
  {
    id: 'wheels',
    name: '轮胎与轮毂',
    description: '性能轮胎和时尚轮毂，提升车辆的抓地力、操控性和外观。',
  },
  {
    id: 'exhaust',
    name: '排气系统',
    description: '专业的排气系统，优化引擎性能，提供独特的声音效果。',
  },
];

// 产品数据
const products = [
  {
    id: 1,
    name: 'LED 头灯套件',
    description: '高亮度 LED 头灯，提供卓越的夜间视野。',
    category: 'lighting',
  },
  {
    id: 2,
    name: '高性能轮胎',
    description: '全天候高性能轮胎，提供出色的抓地力和耐用性。',
    category: 'wheels',
  },
  {
    id: 3,
    name: '运动型排气系统',
    description: '优化的流动性和独特的声音，提升驾驶体验和性能。',
    category: 'exhaust',
  },
  {
    id: 4,
    name: 'LED 雾灯',
    description: '明亮的 LED 雾灯，在恶劣天气条件下提供更好的能见度。',
    category: 'lighting',
  },
  {
    id: 5,
    name: '轻量化轮毂',
    description: '铝合金轻量化轮毂，减重的同时提供出色的强度。',
    category: 'wheels',
  },
  {
    id: 6,
    name: '后视镜转向灯',
    description: '集成在后视镜上的 LED 转向灯，提高安全性和时尚感。',
    category: 'lighting',
  },
  {
    id: 7,
    name: '高性能刹车片',
    description: '提供更强的制动力和更低的衰减，适合高性能驾驶。',
    category: 'brakes',
  },
  {
    id: 8,
    name: '车身贴膜',
    description: '高品质车身保护膜，防止划痕并提供自定义外观。',
    category: 'exterior',
  },
]; 