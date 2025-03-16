import React from 'react';
import Link from 'next/link';

export default function CompanyPage() {
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">公司简介</h1>
            <p className="text-lg">
              了解 贸易制造业  的历史、使命和愿景。
            </p>
          </div>
        </div>
      </div>

      {/* 公司概况 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">关于我们</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                贸易制造业  成立于1995年，是一家专业从事汽车配件研发、生产和销售的企业。25年来，我们始终坚持"品质第一"的原则，为全球客户提供高品质、高性能的汽车配件。
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                我们的产品线包括 LED 照明系统、高性能轮胎、运动排气系统等多种汽车配件，广泛应用于乘用车和商用车领域。通过持续创新和严格的质量控制，我们的产品赢得了全球客户的信赖和好评。
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                今天的 贸易制造业  已发展成为一家拥有完整研发、生产和销售体系的综合性企业，产品远销日本、亚洲、欧洲和北美等地区。我们将继续努力，为全球客户提供更好的产品和服务。
              </p>
            </div>

            {/* 使命与愿景 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">我们的使命</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  通过创新技术和卓越品质，提供超越客户期望的汽车配件产品，引领行业发展，促进汽车文化的进步。
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">我们的愿景</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  成为全球领先的汽车配件供应商，打造受人尊敬的国际品牌，为汽车爱好者提供更安全、更环保、更高性能的产品。
                </p>
              </div>
            </div>

            {/* 核心价值观 */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">核心价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {values.map((value, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>

            {/* 公司发展历程 */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">公司发展历程</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
              <div className="space-y-8">
                {history.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 min-w-[100px]">
                      <span className="font-bold text-primary">{item.year}</span>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 公司团队 */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">公司领导团队</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {team.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="h-60 bg-gray-200 dark:bg-gray-700 relative">
                    {/* 占位符图标 */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                      <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.title}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 加入我们 */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">加入我们</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            贸易制造业  正在寻找有才华的专业人士加入我们的团队。如果您对汽车行业充满热情，并希望在全球性企业中发展您的职业生涯，我们期待与您相见。
          </p>
          <Link
            href="/recruit"
            className="px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary inline-block"
          >
            查看职位空缺
          </Link>
        </div>
      </section>
    </div>
  );
}

// 核心价值观数据
const values = [
  {
    title: '品质卓越',
    description: '我们坚持最高标准，确保每一个产品都经过严格的质量控制流程，为客户提供可靠的产品。',
    icon: (
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '持续创新',
    description: '我们不断探索和应用新技术，致力于开发更高性能、更环保的产品，引领行业发展。',
    icon: (
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: '客户至上',
    description: '我们始终将客户需求放在首位，提供专业的技术支持和售后服务，确保客户满意度。',
    icon: (
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// 发展历程数据
const history = [
  { year: '1995年', event: '贸易制造业  在东京成立，开始生产汽车照明产品。' },
  { year: '2000年', event: '扩展产品线，增加轮胎和排气系统等产品。' },
  { year: '2005年', event: '在大阪建立第二家工厂，扩大生产规模。' },
  { year: '2008年', event: '产品开始出口到亚洲其他国家和地区。' },
  { year: '2010年', event: '成立研发中心，加强创新能力。' },
  { year: '2015年', event: '进入欧洲和北美市场，业务范围扩展至全球。' },
  { year: '2020年', event: '庆祝成立25周年，推出新一代环保型产品系列。' },
];

// 团队成员数据
const team = [
  {
    name: '山田太郎',
    title: '首席执行官 / 创始人',
    bio: '拥有30年汽车行业经验，1995年创立贸易制造业 ，带领公司从小型企业发展为全球知名品牌。',
  },
  {
    name: '铃木一郎',
    title: '首席技术官',
    bio: '拥有多项技术专利，领导研发团队开发创新产品，确保Valenti保持技术领先优势。',
  },
  {
    name: '李梅',
    title: '国际业务总监',
    bio: '负责公司全球市场拓展，成功将Valenti产品引入多个国际市场，建立全球销售网络。',
  },
]; 