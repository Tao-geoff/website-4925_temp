'use client';

import { useState, useEffect } from 'react';

/**
 * 通用数据加载钩子
 * @param {string} dataPath - JSON数据文件路径，不包含/data前缀
 * @returns {{data: any, loading: boolean, error: Error | null}} 加载状态和数据
 */
export function useData(dataPath) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // 构建完整路径
        const fullPath = `/data/${dataPath}`;
        
        // 添加时间戳以避免缓存
        const timestamp = new Date().getTime();
        const response = await fetch(`${fullPath}?t=${timestamp}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${fullPath}: ${response.status} ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [dataPath]);

  return { data, loading, error };
}

/**
 * 获取全局设置数据
 * @returns {{data: any, loading: boolean, error: Error | null}} 设置数据和加载状态
 */
export function useSettings() {
  return useData('settings.json');
}

/**
 * 获取首页数据
 * @returns {{data: any, loading: boolean, error: Error | null}} 首页数据和加载状态
 */
export function useHomeData() {
  return useData('home.json');
}

/**
 * 获取产品数据
 * @returns {{data: any, loading: boolean, error: Error | null}} 产品数据和加载状态
 */
export function useProductsData() {
  return useData('products.json');
}

/**
 * 获取公司信息数据
 * @returns {{data: any, loading: boolean, error: Error | null}} 公司数据和加载状态
 */
export function useCompanyData() {
  return useData('company.json');
}

/**
 * 获取联系页面数据
 * @returns {{data: any, loading: boolean, error: Error | null}} 联系数据和加载状态
 */
export function useContactData() {
  return useData('contact.json');
} 