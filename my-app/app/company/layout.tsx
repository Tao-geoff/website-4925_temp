import React from 'react';

export const metadata = {
  title: '公司简介 - 贸易制造业 ',
  description: '了解 贸易制造业  的历史、使命和愿景。我们致力于为全球客户提供高品质的汽车配件。',
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 