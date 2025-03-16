'use client';

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

export default function DealerPage() {
  const [region, setRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 过滤经销商
  const filteredDealers = dealers.filter(dealer => {
    const matchesRegion = region === 'all' || dealer.region === region;
    const matchesSearch = searchQuery === '' || 
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">授权经销商</h1>
            <p className="text-lg">
              查找离您最近的 贸易制造业  授权经销商。
            </p>
          </div>
        </div>
      </div>

      {/* 经销商查询 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">查找经销商</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="region" className="block text-gray-700 dark:text-gray-300 mb-2">
                    地区
                  </label>
                  <select
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">所有地区</option>
                    <option value="east">东部地区</option>
                    <option value="west">西部地区</option>
                    <option value="south">南部地区</option>
                    <option value="north">北部地区</option>
                    <option value="central">中部地区</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="search" className="block text-gray-700 dark:text-gray-300 mb-2">
                    搜索
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="输入城市、地址或经销商名称..."
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                找到 {filteredDealers.length} 个经销商
              </div>
            </div>
            
            {/* 经销商列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredDealers.length > 0 ? (
                filteredDealers.map((dealer, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{dealer.name}</h3>
                      <div className="mb-4">
                        <span className={`inline-block px-2 py-1 text-xs rounded-md ${getDealerTypeClass(dealer.type)}`}>
                          {getDealerTypeLabel(dealer.type)}
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p className="flex items-start">
                          <svg className="mt-1 mr-2 w-5 h-5 text-primary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{dealer.address}, {dealer.city}</span>
                        </p>
                        <p className="flex items-start">
                          <svg className="mt-1 mr-2 w-5 h-5 text-primary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>{dealer.phone}</span>
                        </p>
                        {dealer.email && (
                          <p className="flex items-start">
                            <svg className="mt-1 mr-2 w-5 h-5 text-primary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="break-all">{dealer.email}</span>
                          </p>
                        )}
                        {dealer.website && (
                          <p className="flex items-start">
                            <svg className="mt-1 mr-2 w-5 h-5 text-primary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <a href={dealer.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                              {dealer.website.replace(/^https?:\/\//, '')}
                            </a>
                          </p>
                        )}
                      </div>
                      <div className="mt-4">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(`${dealer.address}, ${dealer.city}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                        >
                          <span>在地图上查看</span>
                          <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">没有找到符合条件的经销商，请尝试其他搜索条件。</p>
                </div>
              )}
            </div>
            
            {/* 经销商地图 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">经销商分布地图</h2>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400 text-center px-4">
                  此处将显示经销商地图。<br />
                  实际项目中可使用 Google Maps API 或其他地图服务展示经销商位置。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 成为经销商 */}
      <section id="become" className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">成为 贸易制造业  授权经销商</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              加入 贸易制造业  的全球经销网络，获取独家产品、营销支持和技术培训，共同拓展市场。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">独家产品与价格</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  获取 贸易制造业  的独家产品及优惠价格，提高您的竞争力和利润空间。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">营销与品牌支持</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  我们提供全面的营销工具、品牌资产和宣传材料，帮助您吸引更多客户。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">技术培训与支持</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  定期的产品培训和技术支持，确保您能为客户提供专业的服务和建议。
                </p>
              </div>
            </div>
            
            <Link
              href="/contact?subject=经销商申请"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              申请成为经销商
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// 经销商数据
const dealers = [
  {
    name: '东京中央汽配中心',
    type: 'premium',
    address: '123 汽车大道',
    city: '东京',
    region: 'east',
    phone: '+81-3-1234-5678',
    email: 'tokyo@example.com',
    website: 'https://tokyo-auto.example.com',
  },
  {
    name: '大阪汽车配件专卖店',
    type: 'authorized',
    address: '456 樱花路',
    city: '大阪',
    region: 'west',
    phone: '+81-6-8765-4321',
    email: 'osaka@example.com',
    website: 'https://osaka-parts.example.com',
  },
  {
    name: '名古屋汽车用品店',
    type: 'authorized',
    address: '789 技术街',
    city: '名古屋',
    region: 'central',
    phone: '+81-52-2468-1357',
    email: 'nagoya@example.com',
    website: null,
  },
  {
    name: '福冈汽车改装店',
    type: 'service',
    address: '101 海港大道',
    city: '福冈',
    region: 'south',
    phone: '+81-92-1357-2468',
    email: null,
    website: 'https://fukuoka-tuning.example.com',
  },
  {
    name: '札幌汽车零件商',
    type: 'authorized',
    address: '202 雪花路',
    city: '札幌',
    region: 'north',
    phone: '+81-11-9876-5432',
    email: 'sapporo@example.com',
    website: null,
  },
  {
    name: '横滨汽车配件中心',
    type: 'premium',
    address: '303 港湾街',
    city: '横滨',
    region: 'east',
    phone: '+81-45-3698-5214',
    email: 'yokohama@example.com',
    website: 'https://yokohama-auto.example.com',
  },
  {
    name: '神户汽车专业店',
    type: 'service',
    address: '404 山景路',
    city: '神户',
    region: 'west',
    phone: '+81-78-1598-7532',
    email: 'kobe@example.com',
    website: 'https://kobe-pro.example.com',
  },
  {
    name: '千叶汽车零售中心',
    type: 'authorized',
    address: '505 樱桃街',
    city: '千叶',
    region: 'east',
    phone: '+81-43-7539-8642',
    email: 'chiba@example.com',
    website: null,
  },
  {
    name: '京都精品汽车店',
    type: 'premium',
    address: '606 古都路',
    city: '京都',
    region: 'west',
    phone: '+81-75-3574-9512',
    email: 'kyoto@example.com',
    website: 'https://kyoto-luxury.example.com',
  },
];

// 获取经销商类型标签
function getDealerTypeLabel(type) {
  switch (type) {
    case 'premium':
      return '高级经销商';
    case 'authorized':
      return '授权经销商';
    case 'service':
      return '服务中心';
    default:
      return '经销商';
  }
}

// 获取经销商类型样式
function getDealerTypeClass(type) {
  switch (type) {
    case 'premium':
      return 'bg-primary text-white';
    case 'authorized':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
    case 'service':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
  }
} 