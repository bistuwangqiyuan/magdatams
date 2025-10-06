import { MainLayout } from '@/components/layout/main-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Flask, FileText, Upload, AlertTriangle } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: '总实验数',
      value: '0',
      icon: Flask,
      description: '全部实验记录',
      color: 'text-blue-500',
    },
    {
      title: '总文件数',
      value: '0',
      icon: FileText,
      description: '已上传文件',
      color: 'text-green-500',
    },
    {
      title: '今日上传',
      value: '0',
      icon: Upload,
      description: '今天上传的文件',
      color: 'text-purple-500',
    },
    {
      title: '异常检测',
      value: '0',
      icon: AlertTriangle,
      description: '检测到的异常',
      color: 'text-orange-500',
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">数据大屏</h1>
          <p className="text-muted-foreground">系统概览和关键指标监控</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>实验状态分布</CardTitle>
              <CardDescription>各状态实验数量统计</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                暂无数据
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>数据上传趋势</CardTitle>
              <CardDescription>最近30天文件上传统计</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                暂无数据
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>最近实验</CardTitle>
            <CardDescription>最新的10条实验记录</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[150px] items-center justify-center text-muted-foreground">
              暂无实验记录
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
