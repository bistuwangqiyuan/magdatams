import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '磁检测数据管理系统',
  description: '专业的磁检测数据管理、可视化和分析平台',
  keywords: ['磁检测', '无损检测', '数据管理', '数据可视化'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={cn(inter.className, 'min-h-screen antialiased')}>
        {children}
      </body>
    </html>
  );
}
