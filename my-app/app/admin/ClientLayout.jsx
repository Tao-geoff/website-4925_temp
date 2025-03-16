'use client';

import AdminProtect from './protect';

export default function ClientLayout({ children }) {
  return <AdminProtect>{children}</AdminProtect>;
} 