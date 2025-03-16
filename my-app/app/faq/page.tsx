'use client';

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

// FAQ 项组件
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  );
};

// FAQ 分类组件
const FAQCategory = ({ title, faqs }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">常见问题</h1>
            <p className="text-lg">
              查找关于我们产品和服务的常见问题解答。
            </p>
          </div>
        </div>
      </div>

      {/* FAQ 内容 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 搜索框 */}
            <div className="mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索问题..."
                  className="w-full py-3 px-4 pl-12 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
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

            {/* FAQ 分类 */}
            <div className="space-y-6 mb-12">
              <div className="flex overflow-x-auto py-2 -mx-4 px-4 scrollbar-hide">
                <div className="flex space-x-2">
                  {faqCategories.map((category, index) => (
                    <a
                      key={index}
                      href={`#${category.id}`}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-800 dark:text-gray-200 whitespace-nowrap hover:bg-primary hover:text-white transition-colors"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ 列表 */}
            {faqCategories.map((category, index) => (
              <div key={index} id={category.id}>
                <FAQCategory title={category.title} faqs={category.faqs} />
              </div>
            ))}

            {/* 未解决问题 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">没有找到您的问题？</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                如果您的问题没有在上面列出，请随时联系我们的客户支持团队。
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// FAQ 数据
const faqCategories = [
  {
    id: 'products',
    title: '产品相关',
    faqs: [
      {
        question: '哪里可以购买 贸易制造业  的产品？',
        answer: '我们的产品可以通过授权经销商网络购买。您可以在我们的<a href="/dealer" class="text-primary hover:underline">经销商页面</a>上找到离您最近的经销商。此外，部分产品也可以通过我们的官方网上商店购买。',
      },
      {
        question: '贸易制造业  的产品是否提供保修？',
        answer: '是的，我们所有的产品都提供标准的一年保修，涵盖材料和工艺上的缺陷。部分高端产品系列提供延长保修期。保修详情可以在产品包装中找到，或者联系您购买产品的授权经销商。',
      },
      {
        question: '如何确认我购买的是正品 贸易制造业  产品？',
        answer: '所有正品 贸易制造业  产品都带有防伪标签和唯一的序列号。您可以在我们的官方网站上输入序列号进行验证。此外，我们的产品包装上有明显的品牌标志和质量保证印章。',
      },
      {
        question: '产品使用说明书丢失了，如何获取新的？',
        answer: '您可以在我们的官方网站上下载所有产品的电子版使用说明书。请访问<a href="/support" class="text-primary hover:underline">支持页面</a>，输入产品型号即可找到相应的说明书。',
      },
    ],
  },
  {
    id: 'shipping',
    title: '配送与退货',
    faqs: [
      {
        question: '贵公司的配送范围是什么？',
        answer: '我们目前在亚洲、欧洲和北美地区提供产品配送服务。具体的配送时间和费用取决于您的位置和选择的配送方式。',
      },
      {
        question: '如何追踪我的订单？',
        answer: '下单后，您将收到一封含有追踪号码的确认邮件。您可以使用此号码在我们的网站上或相应的物流公司网站上查询配送状态。',
      },
      {
        question: '如果我对产品不满意，可以退货吗？',
        answer: '是的，我们提供30天无理由退货政策。产品必须保持未使用状态，并且包装完好。退货运费由客户承担，除非产品存在质量问题。详细的退货流程请参阅我们的<a href="/terms" class="text-primary hover:underline">退货政策</a>。',
      },
    ],
  },
  {
    id: 'installation',
    title: '安装与维护',
    faqs: [
      {
        question: '我可以自己安装 贸易制造业  的灯具产品吗？',
        answer: '部分产品适合自行安装，但我们建议由专业技师进行安装，特别是涉及到车辆电气系统的产品。不当安装可能会影响产品性能和保修。',
      },
      {
        question: '如何清洁和维护我的 Valenti 产品？',
        answer: '对于灯具产品，请使用柔软的布和中性清洁剂轻轻擦拭。避免使用研磨性材料和强酸/强碱清洁剂。对于轮胎和其他产品，请参考产品附带的维护指南。',
      },
      {
        question: '产品安装后出现问题怎么办？',
        answer: '如果您在安装后遇到任何问题，请首先参考产品说明书中的故障排除部分。如果问题仍然存在，请联系我们的技术支持团队或您购买产品的经销商获取帮助。',
      },
    ],
  },
  {
    id: 'business',
    title: '商务合作',
    faqs: [
      {
        question: '如何成为 贸易制造业  的经销商？',
        answer: '我们欢迎有实力的零售商加入我们的经销网络。请访问我们的<a href="/dealer#become" class="text-primary hover:underline">经销商申请页面</a>填写申请表格，我们的业务团队将与您联系。',
      },
      {
        question: '贵公司提供OEM/ODM服务吗？',
        answer: '是的，我们提供OEM和ODM服务，可以根据客户需求定制产品。如果您有兴趣了解更多信息，请通过<a href="/contact" class="text-primary hover:underline">联系表单</a>与我们的业务开发团队联系。',
      },
    ],
  },
]; 