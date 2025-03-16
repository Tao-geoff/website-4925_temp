import ClientLayout from './ClientLayout';

export const metadata = {
  title: '贸易制造业  - 管理系统',
  description: '网站内容管理系统，用于更新网站内容和图片',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <ClientLayout>
        {children}
      </ClientLayout>
    </div>
  );
} 