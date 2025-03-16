'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  { 
    label: '产品', 
    href: '/product',
    children: [
      { label: '汽车照明', href: '/product/lighting' },
      { label: '改装配件', href: '/product/accessories' },
      { label: '内饰升级', href: '/product/interior' }
    ]
  },
  { 
    label: '关于我们', 
    href: '/company',
    children: [
      { label: '公司简介', href: '/company' },
      { label: '历史沿革', href: '/company/history' },
      { label: '企业文化', href: '/company/culture' }
    ]
  },
  { 
    label: '支持服务', 
    href: '#',
    children: [
      { label: '常见问题', href: '/faq' },
      { label: '视频专区', href: '/movie' },
      { label: '经销商网络', href: '/dealer' }
    ]
  },
  { label: '招聘信息', href: '/recruit' },
  { label: '联系我们', href: '/contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // 检测系统主题偏好
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(
        localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && prefersDark)
      );

      document.documentElement.classList.toggle('dark', isDarkMode);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    closeDropdowns();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent dark:bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* 公司Logo */}
          <Link 
            href="/" 
            className="flex items-center" 
            onClick={handleLinkClick}
          >
            <Logo className="h-10 w-auto" />
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400'
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1">▼</span>
                  )}
                </Link>

                {/* 下拉菜单 */}
                {item.children && (
                  <div 
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? 'opacity-100 visible transform translate-y-0'
                        : 'opacity-0 invisible transform -translate-y-2'
                    }`}
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* 暗黑模式切换 */}
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "切换到浅色模式" : "切换到深色模式"}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div 
        className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
        <nav className="absolute right-0 top-0 bottom-0 w-64 md:w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/" onClick={handleLinkClick}>
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="关闭菜单"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2 px-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className={`flex justify-between items-center w-full py-2 text-left text-sm font-medium ${
                          pathname === item.href
                            ? 'text-primary dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <span className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      {activeDropdown === item.label && (
                        <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={`block py-2 text-sm ${
                                  pathname === child.href
                                    ? 'text-primary dark:text-primary-400'
                                    : 'text-gray-700 dark:text-gray-300'
                                }`}
                                onClick={handleLinkClick}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2 text-sm font-medium ${
                        pathname === item.href
                          ? 'text-primary dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              切换主题
            </div>
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "切换到浅色模式" : "切换到深色模式"}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 