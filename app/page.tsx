import { redirect } from 'next/navigation';

export default function Home() {
  // 重定向到数据大屏
  redirect('/dashboard');
}
