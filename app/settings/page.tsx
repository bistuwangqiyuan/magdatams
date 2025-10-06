import { MainLayout } from '@/components/layout/main-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">系统设置</h1>
          <p className="text-muted-foreground">
            配置系统参数和偏好设置
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>数据导入配置</CardTitle>
            <CardDescription>CSV文件导入相关设置</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">CSV分隔符</label>
              <select className="mt-1 w-full rounded-md border p-2">
                <option>逗号（,）</option>
                <option>分号（;）</option>
                <option>制表符（Tab）</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">默认编码</label>
              <select className="mt-1 w-full rounded-md border p-2">
                <option>UTF-8</option>
                <option>GBK</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>显示偏好</CardTitle>
            <CardDescription>界面显示相关设置</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">主题</label>
              <select className="mt-1 w-full rounded-md border p-2">
                <option>深色</option>
                <option>浅色</option>
                <option>自动</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">日期格式</label>
              <select className="mt-1 w-full rounded-md border p-2">
                <option>YYYY-MM-DD</option>
                <option>DD/MM/YYYY</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>系统信息</CardTitle>
            <CardDescription>查看系统状态和信息</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">版本号</span>
                <span className="font-medium">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">数据库状态</span>
                <span className="font-medium text-green-500">已连接</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">存储空间</span>
                <span className="font-medium">0 MB / 无限制</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
