import { MainLayout } from '@/components/layout/main-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SignalsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">信号可视化</h1>
          <p className="text-muted-foreground">
            查看和分析磁检测信号数据
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>选择文件</CardTitle>
            <CardDescription>
              选择要可视化的数据文件
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[500px] items-center justify-center text-muted-foreground">
              请先上传并选择一个数据文件进行可视化
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
