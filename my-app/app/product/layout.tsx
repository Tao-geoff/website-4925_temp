import React from 'react';

export const metadata = {
  title: '产品 - 贸易制造业 ',
  description: '贸易制造业  提供各种高品质汽车配件，包括车灯、轮胎等汽车零部件。',
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 