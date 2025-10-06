import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function FilesPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">文件管理</h1>
            <p className="text-muted-foreground">
              上传、管理和预览CSV数据文件
            </p>
          </div>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            上传文件
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>文件上传区</CardTitle>
            <CardDescription>
              拖拽文件到此处或点击上传按钮
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center border-2 border-dashed rounded-lg text-muted-foreground">
              拖拽CSV文件到此处或点击上传
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>文件列表</CardTitle>
            <CardDescription>已上传的所有数据文件</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[300px] items-center justify-center text-muted-foreground">
              暂无文件，请先上传数据
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
