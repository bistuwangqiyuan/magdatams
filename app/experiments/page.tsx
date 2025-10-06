import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ExperimentsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">实验管理</h1>
            <p className="text-muted-foreground">
              管理磁检测实验的完整生命周期
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            创建实验
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>实验列表</CardTitle>
            <CardDescription>
              显示所有实验记录，支持筛选和搜索
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[400px] items-center justify-center text-muted-foreground">
              暂无实验记录，点击「创建实验」开始
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
