'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Beaker,
  FolderOpen,
  LineChart,
  BarChart3,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: '数据大屏',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: '实验管理',
    href: '/experiments',
    icon: Beaker,
  },
  {
    title: '文件管理',
    href: '/files',
    icon: FolderOpen,
  },
  {
    title: '信号可视化',
    href: '/signals',
    icon: LineChart,
  },
  {
    title: '数据分析',
    href: '/analysis',
    icon: BarChart3,
  },
  {
    title: '系统设置',
    href: '/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-60 flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          磁检测数据管理
        </h1>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">
          版本 1.0.0
        </p>
      </div>
    </div>
  );
}
