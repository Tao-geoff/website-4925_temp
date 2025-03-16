import { ClientLayout } from '../components/ClientLayout';

export const metadata = {
  title: '贸易制造业  | 图片管理',
  description: '管理网站图片资源',
};

export default function ImagesLayout({ children }) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
} 