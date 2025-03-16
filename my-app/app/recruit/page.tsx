'use client';

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

// 职位卡片组件
const JobCard = ({ job, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(job)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">{job.title}</h3>
        <span className={`inline-block px-3 py-1 text-xs rounded-full ${getJobTypeClass(job.type)}`}>
          {job.type}
        </span>
      </div>
      <div className="mb-4 space-y-2">
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{job.department}</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{job.summary}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400">发布日期: {job.postedDate}</span>
        <button className="text-primary hover:text-primary-dark transition-colors focus:outline-none">
          查看详情
        </button>
      </div>
    </div>
  );
};

// 职位详情模态框组件
const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* 关闭按钮 */}
          <button 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={onClose}
            aria-label="关闭"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* 内容 */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">{job.title}</h2>
              <span className={`inline-block px-3 py-1 text-xs rounded-full ${getJobTypeClass(job.type)}`}>
                {job.type}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{job.department}</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>发布日期: {job.postedDate}</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{job.salary}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">职位概述</h3>
              <p className="text-gray-700 dark:text-gray-300">{job.summary}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">职责</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">要求</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">福利</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <Link
                href={`/contact?subject=申请职位:${job.title}`}
                className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                申请职位
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RecruitPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [department, setDepartment] = useState('all');
  const [jobType, setJobType] = useState('all');
  
  // 过滤职位
  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = department === 'all' || job.department === department;
    const matchesType = jobType === 'all' || job.type === jobType;
    
    return matchesDepartment && matchesType;
  });
  
  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">加入我们</h1>
            <p className="text-lg">
              探索 贸易制造业  的职业机会，成为我们团队的一员。
            </p>
          </div>
        </div>
      </div>

      {/* 职业介绍 */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">为什么选择 贸易制造业 </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-12">
              加入 贸易制造业 ，您将有机会与行业最优秀的人才一起工作，参与创新项目，共同成长。我们重视员工的发展，提供具有竞争力的薪酬和福利，以及良好的工作环境。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">创新与发展</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  我们鼓励创新思维，为员工提供参与前沿项目的机会，共同推动行业发展。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">多元化团队</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  我们重视多元化和包容性，欢迎不同背景和文化的人才加入，共同创造更好的未来。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">工作与生活平衡</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  我们提供灵活的工作安排和完善的福利制度，帮助员工在事业和生活之间取得平衡。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 职位列表 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">当前职位空缺</h2>
            
            {/* 过滤器 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="department" className="block text-gray-700 dark:text-gray-300 mb-2">
                    部门
                  </label>
                  <select
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">所有部门</option>
                    <option value="研发部">研发部</option>
                    <option value="营销部">营销部</option>
                    <option value="销售部">销售部</option>
                    <option value="技术支持部">技术支持部</option>
                    <option value="人力资源部">人力资源部</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="job-type" className="block text-gray-700 dark:text-gray-300 mb-2">
                    工作类型
                  </label>
                  <select
                    id="job-type"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">所有类型</option>
                    <option value="全职">全职</option>
                    <option value="兼职">兼职</option>
                    <option value="实习">实习</option>
                    <option value="合同制">合同制</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* 职位列表 */}
            <div className="space-y-6 mb-12">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <JobCard key={index} job={job} onClick={setSelectedJob} />
                ))
              ) : (
                <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">暂无符合条件的职位，请尝试其他筛选条件或稍后再查看。</p>
                </div>
              )}
            </div>
            
            {/* 未找到合适职位 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">没有找到合适的职位？</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                即使当前没有适合您的职位空缺，我们也欢迎优秀人才的加入。请发送您的简历，我们会在有合适职位时与您联系。
              </p>
              <Link
                href="/contact?subject=人才简历投递"
                className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                投递简历
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 申请流程 */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">申请流程</h2>
            
            <div className="relative">
              {/* 连接线 */}
              <div className="absolute left-[19px] top-10 bottom-10 w-[2px] bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
              
              <div className="space-y-12">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <div className="flex items-center justify-center sm:block mb-4 sm:mb-0">
                      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="sm:ml-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 职位详情模态框 */}
      {selectedJob && (
        <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

// 获取职位类型样式
function getJobTypeClass(type) {
  switch (type) {
    case '全职':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
    case '兼职':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
    case '实习':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
    case '合同制':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
  }
}

// 职位数据
const jobs = [
  {
    title: '产品开发工程师',
    type: '全职',
    location: '东京',
    department: '研发部',
    salary: '面议',
    postedDate: '2023-06-01',
    summary: '负责开发和改进我们的汽车照明产品，包括 LED 头灯、尾灯等。通过创新设计和工程技术，提高产品性能和用户体验。',
    responsibilities: [
      '设计和开发创新的汽车照明产品',
      '与跨职能团队合作，确保产品符合市场需求和行业标准',
      '分析和解决产品开发过程中的技术问题',
      '进行产品测试和验证，确保产品质量和可靠性',
      '参与新技术研究和应用',
    ],
    requirements: [
      '光学、电子工程或相关领域的学士学位或以上学历',
      '至少3年汽车照明产品开发经验',
      '熟悉LED技术和光学设计软件',
      '具有良好的团队合作精神和沟通能力',
      '能够在压力下工作并满足项目截止日期',
      '日语和英语流利（中文是加分项）',
    ],
    benefits: [
      '具有竞争力的薪资和奖金',
      '全面的健康保险',
      '带薪假期和节假日',
      '职业发展和培训机会',
      '灵活的工作安排',
    ],
  },
  {
    title: '市场营销专员',
    type: '全职',
    location: '东京',
    department: '营销部',
    salary: '面议',
    postedDate: '2023-05-25',
    summary: '负责规划和执行市场营销活动，提高品牌知名度和产品销售。通过数据分析优化营销策略，为公司的市场扩展提供支持。',
    responsibilities: [
      '开发和执行市场营销策略和活动',
      '创建和管理营销内容，包括社交媒体、网站和广告',
      '收集和分析市场数据，了解市场趋势和消费者行为',
      '与销售团队合作，支持销售目标的实现',
      '管理营销预算和评估营销活动的效果',
    ],
    requirements: [
      '市场营销、商业或相关领域的学士学位',
      '至少2年市场营销经验，汽车行业经验优先',
      '熟悉数字营销渠道和工具',
      '具有良好的创意思维和项目管理能力',
      '出色的沟通和人际交往能力',
      '日语和英语流利（中文是加分项）',
    ],
    benefits: [
      '具有竞争力的薪资和奖金',
      '全面的健康保险',
      '带薪假期和节假日',
      '职业发展和培训机会',
      '灵活的工作安排',
    ],
  },
  {
    title: '销售代表',
    type: '全职',
    location: '大阪',
    department: '销售部',
    salary: '基本工资 + 提成',
    postedDate: '2023-05-20',
    summary: '负责在指定区域内开发和维护客户关系，实现销售目标。向潜在客户展示和推广我们的产品，提供专业的售前咨询。',
    responsibilities: [
      '开发新客户并维护现有客户关系',
      '通过电话、邮件和面对面会议与客户沟通',
      '向客户介绍和展示公司产品',
      '收集市场信息和客户反馈',
      '参与行业展会和活动',
      '完成销售报告和预测',
    ],
    requirements: [
      '商业、市场营销或相关领域的学士学位',
      '至少2年销售经验，汽车行业经验优先',
      '有良好的客户服务意识和谈判技巧',
      '能够独立工作并实现销售目标',
      '愿意出差',
      '日语流利（英语和中文是加分项）',
    ],
    benefits: [
      '有竞争力的基本工资和丰厚的销售提成',
      '全面的健康保险',
      '带薪假期和节假日',
      '公司车辆和通讯津贴',
      '职业发展和培训机会',
    ],
  },
  {
    title: '技术支持专员',
    type: '全职',
    location: '东京',
    department: '技术支持部',
    salary: '面议',
    postedDate: '2023-05-15',
    summary: '为客户提供技术支持和问题解决方案，确保客户对我们的产品和服务满意。回应客户查询，分析和解决技术问题。',
    responsibilities: [
      '为客户和经销商提供产品技术支持',
      '解答产品相关的技术问题',
      '创建和维护技术文档和用户手册',
      '收集客户反馈并与产品团队合作改进产品',
      '进行产品培训和演示',
    ],
    requirements: [
      '汽车工程、电子工程或相关领域的学士学位',
      '至少2年技术支持或客户服务经验',
      '熟悉汽车配件，特别是照明系统',
      '良好的问题解决能力和耐心',
      '优秀的沟通技巧和团队合作精神',
      '日语和英语流利（中文是加分项）',
    ],
    benefits: [
      '具有竞争力的薪资',
      '全面的健康保险',
      '带薪假期和节假日',
      '职业发展和培训机会',
      '灵活的工作安排',
    ],
  },
  {
    title: '人力资源助理',
    type: '兼职',
    location: '东京',
    department: '人力资源部',
    salary: '按小时计算',
    postedDate: '2023-05-10',
    summary: '支持人力资源团队的日常工作，包括招聘、员工关系和福利管理。维护人事记录和文件，协助组织员工活动。',
    responsibilities: [
      '协助招聘流程，包括简历筛选和面试安排',
      '维护员工记录和人力资源数据库',
      '支持员工入职和离职流程',
      '协助组织员工活动和培训',
      '回应员工的人力资源相关查询',
    ],
    requirements: [
      '人力资源管理、商业或相关领域的学位（在读学生也可考虑）',
      '人力资源经验优先，但不是必需',
      '熟悉办公软件，如Microsoft Office',
      '高度的责任心和保密意识',
      '良好的组织和沟通能力',
      '日语流利（英语是加分项）',
    ],
    benefits: [
      '有竞争力的时薪',
      '灵活的工作时间',
      '积累人力资源实际工作经验的机会',
      '优先考虑转为全职职位',
      '友好的工作环境',
    ],
  },
  {
    title: '产品设计实习生',
    type: '实习',
    location: '东京',
    department: '研发部',
    salary: '实习津贴',
    postedDate: '2023-05-05',
    summary: '协助产品设计团队开发创新的汽车配件。参与设计流程的各个阶段，包括概念开发、原型设计和测试。',
    responsibilities: [
      '在资深设计师的指导下参与产品设计项目',
      '协助创建产品设计草图和3D模型',
      '参与产品原型的测试和评估',
      '收集和分析市场和竞争对手的信息',
      '参与设计团队会议并提供创意想法',
    ],
    requirements: [
      '工业设计、产品设计或相关领域的在读学生',
      '熟悉设计软件，如Adobe Creative Suite和3D建模软件',
      '对汽车行业有浓厚兴趣',
      '有创造力和学习意愿',
      '团队合作精神和良好的沟通能力',
      '日语流利（英语是加分项）',
    ],
    benefits: [
      '有竞争力的实习津贴',
      '灵活的工作时间，适合学生',
      '在实际项目中学习的机会',
      '有可能转为全职职位',
      '积累汽车行业经验',
    ],
  },
];

// 申请流程数据
const applicationSteps = [
  {
    title: '寻找合适的职位',
    description: '浏览我们的职位列表，找到符合您技能和兴趣的职位。点击"查看详情"了解更多信息。',
  },
  {
    title: '提交申请',
    description: '点击"申请职位"按钮，填写在线申请表并上传您的简历和求职信。请确保您的申请材料能够突出展示您与职位相关的技能和经验。',
  },
  {
    title: '简历筛选',
    description: '我们的人力资源团队将审核您的申请，并将与最符合职位要求的候选人联系进行下一步面试。',
  },
  {
    title: '面试过程',
    description: '面试通常包括电话面试、视频面试和现场面试。根据职位不同，可能还会有技术测试或案例分析。',
  },
  {
    title: '录用和入职',
    description: '成功的候选人将收到录用通知，并进入入职流程。我们的团队将确保您顺利融入新的工作环境。',
  },
]; 