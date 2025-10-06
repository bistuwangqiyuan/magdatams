# 部署指南

## 快速部署到Vercel

### 方法一：通过Vercel CLI（推荐）

1. **安装Vercel CLI**

```bash
npm install -g vercel
```

2. **登录Vercel**

```bash
vercel login
```

3. **部署项目**

```bash
# 在项目根目录执行
vercel

# 生产环境部署
vercel --prod
```

4. **配置环境变量**

在Vercel部署过程中，会提示你配置环境变量。或者在Vercel Dashboard中配置：

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### 方法二：通过Vercel Dashboard

1. **访问** [https://vercel.com/](https://vercel.com/)

2. **点击 "New Project"**

3. **导入GitHub仓库**
   - 如果还没推送到GitHub，先创建仓库并推送代码：
   
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

4. **配置项目**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
   - Install Command: `npm install`

5. **添加环境变量**

在 "Environment Variables" 部分添加：

```
NEXT_PUBLIC_SUPABASE_URL=https://zzyueuweeoakopuuwfau.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6eXVldXdlZW9ha29wdXV3ZmF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODEzMDEsImV4cCI6MjA1OTk1NzMwMX0.y8V3EXK9QVd3txSWdE3gZrSs96Ao0nvpnd0ntZw_dQ4
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6eXVldXdlZW9ha29wdXV3ZmF1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM4MTMwMSwiZXhwIjoyMDU5OTU3MzAxfQ.CTLF9Ahmxt7alyiv-sf_Gl3U6SNIWZ01PapTI92Hg0g
```

6. **点击 "Deploy"**

7. **等待构建完成**

## Supabase数据库设置

在部署前，需要在Supabase中创建数据库表：

1. 访问 [Supabase Dashboard](https://app.supabase.com/)
2. 进入你的项目
3. 点击 **SQL Editor**
4. 复制 `supabase-schema.sql` 的内容并执行

或者使用Supabase CLI：

```bash
# 安装Supabase CLI
npm install -g supabase

# 登录
supabase login

# 链接项目
supabase link --project-ref zzyueuweeoakopuuwfau

# 执行SQL
supabase db push
```

## 创建Storage Bucket

1. 在Supabase Dashboard中，进入 **Storage**
2. 点击 **New bucket**
3. 输入名称：`magnetic-data-files`
4. 设置为 Public bucket
5. 创建以下Policies：

```sql
-- 允许所有人上传
CREATE POLICY "Public Upload"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'magnetic-data-files');

-- 允许所有人读取
CREATE POLICY "Public Read"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'magnetic-data-files');

-- 允许所有人删除
CREATE POLICY "Public Delete"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'magnetic-data-files');
```

## 部署后测试

1. **访问部署的URL**

2. **测试功能**：
   - ✅ 导航是否正常工作
   - ✅ 数据大屏页面显示
   - ✅ 实验管理页面
   - ✅ 文件管理页面
   - ✅ 信号可视化页面
   - ✅ 数据分析页面
   - ✅ 系统设置页面

3. **测试数据库连接**：
   - 打开浏览器控制台
   - 检查是否有Supabase连接错误

4. **测试文件上传**（如果已配置Storage）：
   - 尝试上传示例CSV文件
   - 检查是否能正确上传

## 常见问题

### 构建失败

**问题**: `Module not found` 错误

**解决**: 
```bash
# 删除 node_modules 和锁文件
rm -rf node_modules package-lock.json
npm install
```

### 环境变量未生效

**问题**: 应用无法连接Supabase

**解决**: 
1. 检查环境变量名称是否正确（必须以 `NEXT_PUBLIC_` 开头的才能在客户端使用）
2. 重新部署项目

### 页面404错误

**问题**: 部署后某些页面404

**解决**: 
1. 检查 `next.config.js` 配置
2. 确保所有页面文件都已提交到Git

## 性能优化建议

部署后可以做以下优化：

1. **启用Vercel Analytics**
2. **配置CDN缓存**
3. **启用Image Optimization**
4. **配置自定义域名**

## 监控和日志

1. **查看部署日志**：
   - Vercel Dashboard > Deployments > 选择部署 > View Logs

2. **查看运行时日志**：
   - Vercel Dashboard > Logs

3. **监控性能**：
   - Vercel Dashboard > Analytics

## 回滚

如果部署出现问题，可以快速回滚：

1. 进入 Vercel Dashboard
2. 选择 Deployments
3. 找到之前的稳定版本
4. 点击 "Promote to Production"

## 持续部署

Vercel会自动为每次Git提交创建部署：

- **main分支**: 自动部署到生产环境
- **其他分支**: 创建预览部署

## 自定义域名

1. Vercel Dashboard > Settings > Domains
2. 添加你的域名
3. 配置DNS记录（按照Vercel提供的说明）

---

**部署完成后，你的应用将在：**
- 生产环境：`https://your-project.vercel.app`
- 预览环境：`https://your-project-git-branch.vercel.app`

