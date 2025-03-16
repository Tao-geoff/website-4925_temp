'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Wrench, Truck } from 'lucide-react';
import { useHomeData } from './hooks/useData';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';

// 图标映射
const iconMap = {
  shield: ShieldCheck,
  tool: Wrench,
  truck: Truck,
};

// 主页组件
export default function Home() {
  const { data, loading, error } = useHomeData();
  
  // 处理加载状态
  if (loading) {
    return <LoadingState message="正在加载首页内容..." />;
  }
  
  // 处理错误状态
  if (error || !data) {
    return (
      <ErrorState 
        error={error} 
        message="加载首页内容时出错" 
        onRetry={() => window.location.reload()}
      />
    );
  }
  
  // 解构数据
  const { hero, features, aboutSection, popularProducts, testimonials } = data;

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* 英雄区域 */}
      <section className="relative w-full h-[80vh] min-h-[600px]">
        {/* 背景图像 */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* 背景图片 */}
            <div 
              className="absolute inset-0 bg-primary opacity-20"
              style={{
                backgroundImage: 'url(/images/banners/hero-banner.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* 英雄内容 */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {hero.title}
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              {hero.subtitle}
            </p>
            <Link
              href={hero.ctaLink}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {hero.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* 特点区域 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || null;
              return (
                <div key={feature.id} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                  {IconComponent && (
                    <div className="text-blue-500 mb-4">
                      <IconComponent size={48} strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 关于我们区域 */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {aboutSection.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {aboutSection.description}
              </p>
              <Link
                href={aboutSection.ctaLink}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {aboutSection.ctaText}
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden h-80 bg-gray-200 dark:bg-gray-700">
              <div className="h-full w-full relative">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${aboutSection.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 热门产品 */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">热门产品</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              探索我们最受欢迎的汽车配件产品，提供卓越性能和可靠品质。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  {/* 产品图片 */}
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 min-h-[40px]">{product.description}</p>
                  <div className="mt-4">
                    <Link 
                      href={product.link}
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
      </section>

      {/* 客户评价 */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">客户评价</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              听听我们客户的真实反馈，了解他们使用Valenti产品的体验。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex flex-col mb-4">
                  <p className="text-gray-700 dark:text-gray-200 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div 
                      className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 mr-4"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    ></div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备升级您的汽车体验？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            立即联系我们，我们的专业团队随时为您提供帮助和建议。
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
} 