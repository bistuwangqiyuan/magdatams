import { MainLayout } from '@/components/layout/main-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AnalysisPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">数据分析</h1>
          <p className="text-muted-foreground">
            智能信号分析和缺陷识别
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>分析类型</CardTitle>
              <CardDescription>选择分析方法</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded cursor-pointer hover:bg-accent">
                  峰值检测
                </div>
                <div className="p-3 border rounded cursor-pointer hover:bg-accent">
                  基线校正
                </div>
                <div className="p-3 border rounded cursor-pointer hover:bg-accent">
                  噪声过滤
                </div>
                <div className="p-3 border rounded cursor-pointer hover:bg-accent">
                  特征提取
                </div>
                <div className="p-3 border rounded cursor-pointer hover:bg-accent">
                  缺陷识别
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>分析参数</CardTitle>
              <CardDescription>配置分析参数</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                请先选择分析类型
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>分析结果</CardTitle>
            <CardDescription>查看分析结果和可视化</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[300px] items-center justify-center text-muted-foreground">
              执行分析后显示结果
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
