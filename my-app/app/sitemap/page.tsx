import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '网站地图 - 贸易制造业 ',
  description: '贸易制造业  的网站地图，浏览我们网站的所有页面和内容。',
};

type SitemapGroup = {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
};

export default function SitemapPage() {
  const sitemapGroups: SitemapGroup[] = [
    {
      title: '主要页面',
      links: [
        { name: '首页', url: '/' },
        { name: '产品', url: '/product' },
        { name: '公司介绍', url: '/company' },
        { name: '联系我们', url: '/contact' },
      ],
    },
    {
      title: '信息页面',
      links: [
        { name: '常见问题', url: '/faq' },
        { name: '视频专区', url: '/movie' },
        { name: '经销商网络', url: '/dealer' },
        { name: '招聘信息', url: '/recruit' },
      ],
    },
    {
      title: '法律页面',
      links: [
        { name: '隐私政策', url: '/privacy' },
        { name: '使用条款', url: '/terms' },
      ],
    },
  ];

  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">网站地图</h1>
            <p className="text-lg">浏览我们网站的所有页面和内容。</p>
          </div>
        </div>
      </div>

      {/* 网站地图内容 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapGroups.map((group, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-xl font-bold text-primary dark:text-primary-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                    {group.title}
                  </h2>
                  <ul className="space-y-2">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.url}
                          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-primary dark:text-primary-400 mb-4">
                其他信息
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                如果您无法找到所需的信息，请随时联系我们的客户服务团队：
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>电子邮件：</strong> info@valentijapan.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>电话：</strong> +81-3-1234-5678
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>营业时间：</strong> 周一至周五 9:00 - 17:30 (日本时间)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 