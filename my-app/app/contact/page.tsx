'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors: {
      name?: string;
      email?: string;
      message?: string;
      [key: string]: string | undefined;
    } = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = '请输入您的姓名';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = '请输入您的电子邮箱';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = '请输入有效的电子邮箱地址';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = '请输入您的留言';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // 在真实环境中，这里会发送表单数据到服务器
      console.log('表单数据：', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="pt-20 pb-16">
      {/* 页面标题 */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">联系我们</h1>
            <p className="text-lg">
              有任何问题或需求？请随时联系我们，我们将尽快回复您。
            </p>
          </div>
        </div>
      </div>

      {/* 联系信息和表单 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* 联系表单 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">发送留言</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded mb-6">
                  <p>感谢您的留言！我们将尽快与您联系。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                      电子邮箱 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">
                      电话号码
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                      主题
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">选择主题</option>
                      <option value="产品咨询">产品咨询</option>
                      <option value="技术支持">技术支持</option>
                      <option value="合作机会">合作机会</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                      留言 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      提交
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* 联系信息 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">联系方式</h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">地址</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        123 汽车产业大道, <br />
                        东京, 日本 <br />
                        邮编: 123-4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">电话</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        <a href="tel:+81-3-1234-5678" className="hover:text-primary transition-colors">
                          +81-3-1234-5678
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">电子邮箱</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        <a href="mailto:info@valentijapan.com" className="hover:text-primary transition-colors">
                          info@valentijapan.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">工作时间</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        周一至周五: 9:00 - 18:00 <br />
                        周六: 10:00 - 15:00 <br />
                        周日: 休息
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 地图 */}
              <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                {/* 实际项目中这里可以嵌入 Google 地图或其他地图服务 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400 text-center px-4">
                    这里可以嵌入地图，显示公司位置。<br />
                    实际项目中使用 Google Maps API 或其他地图服务。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全球办公室 */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">全球办公室</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">{office.city}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{office.address}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>电话:</strong> {office.phone}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>邮箱:</strong>{' '}
                  <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                    {office.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// 全球办公室数据
const offices = [
  {
    city: '东京 (总部)',
    address: '123 汽车产业大道, 东京, 日本',
    phone: '+81-3-1234-5678',
    email: 'tokyo@valentijapan.com',
  },
  {
    city: '大阪',
    address: '456 工业园区, 大阪, 日本',
    phone: '+81-6-8765-4321',
    email: 'osaka@valentijapan.com',
  },
  {
    city: '上海',
    address: '789 汽车配件街, 上海, 中国',
    phone: '+86-21-9876-5432',
    email: 'shanghai@valentijapan.com',
  },
]; 