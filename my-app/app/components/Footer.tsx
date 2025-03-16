'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  // 导航菜单项
  const footerLinks = {
    product: [
      { name: '汽车照明', path: '/product/lighting' },
      { name: '改装配件', path: '/product/accessories' },
      { name: '内饰升级', path: '/product/interior' }
    ],
    company: [
      { name: '公司简介', path: '/company' },
      { name: '历史沿革', path: '/company/history' },
      { name: '企业文化', path: '/company/culture' },
      { name: '招聘信息', path: '/recruit' }
    ],
    support: [
      { name: '常见问题', path: '/faq' },
      { name: '视频专区', path: '/movie' },
      { name: '经销商网络', path: '/dealer' },
      { name: '联系我们', path: '/contact' }
    ],
    legal: [
      { name: '使用条款', path: '/terms' },
      { name: '隐私政策', path: '/privacy' },
      { name: '网站地图', path: '/sitemap' },
      { name: '管理入口', path: '/admin' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* 主要页脚内容 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Logo className="h-10 w-auto text-white" />
            </Link>
            <p className="mb-6 text-sm">
              贸易制造业  作为汽车零部件制造领域的先驱，我们致力于提供高品质的创新产品，为汽车爱好者带来卓越的驾驶体验。
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">产品 & 公司</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={`product-${index}`}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 mt-2 border-t border-gray-800"></li>
              {footerLinks.company.map((link, index) => (
                <li key={`company-${index}`}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 支持 & 其他链接 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">支持 & 其他</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={`support-${index}`}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 mt-2 border-t border-gray-800"></li>
              {footerLinks.legal.map((link, index) => (
                <li key={`legal-${index}`}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 & 工作时间 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm">123 汽车产业大道, 东京, 日本</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm">+81-3-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm">info@valentijapan.com</span>
              </li>
            </ul>
            
            <h3 className="text-white text-lg font-semibold mt-6 mb-4">工作时间</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm">周一至周五: 9:00 - 17:30</p>
                  <p className="text-sm">周六周日: 休息</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 贸易制造业 . 保留所有权利。
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path} 
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 