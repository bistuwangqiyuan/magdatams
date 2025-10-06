# 磁检测数据管理系统 | Magnetic Detection Data Management System

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

一个现代化、专业化的磁检测数据管理平台，支持CSV数据上传、可视化、分析和实验管理。

A modern, professional platform for magnetic detection data management, supporting CSV data upload, visualization, analysis, and experiment management.

[功能特性](#功能特性) • [快速开始](#快速开始) • [技术栈](#技术栈) • [部署](#部署) • [文档](#文档)

</div>

---

## 📋 目录

- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [环境变量配置](#环境变量配置)
- [Supabase配置](#supabase配置)
- [开发指南](#开发指南)
- [项目结构](#项目结构)
- [部署指南](#部署指南)
- [常见问题](#常见问题)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## 项目简介

磁检测数据管理系统是一个面向无损检测行业的Web应用，专门用于管理和分析磁检测实验数据。系统遵循国际标准（ISO 9934, ASTM E709等），提供从数据采集、存储、可视化到分析的完整解决方案。

### 适用场景

- **航空航天**：发动机叶片、结构件的疲劳裂纹检测
- **石油化工**：压力容器、管道焊缝检测
- **钢铁制造**：钢板、型材的表面缺陷检测
- **质量检验**：产品质量控制、检测记录管理

### 核心优势

- ✨ **现代化界面**：工业化设计风格，直观易用
- 📊 **强大的可视化**：热力图、3D曲面图、多维度展示
- 🔍 **智能分析**：峰值检测、特征提取、缺陷识别
- 📦 **完整的实验管理**：从创建到报告的全生命周期管理
- 🚀 **高性能**：支持大文件上传，快速数据处理
- 🔐 **安全可靠**：基于Supabase的企业级后端

---

## 功能特性

### 1. 📈 数据大屏

- 实时统计卡片（实验数、文件数、今日上传、异常检测）
- 实验状态分布可视化（饼图、柱状图）
- 数据上传趋势分析（折线图、区域图）
- 最近实验快速访问
- 磁信号强度热力图概览
- 数据质量指标仪表盘

### 2. 🧪 实验管理

- **实验列表**：支持筛选、排序、搜索、批量操作
- **创建实验**：完整的实验信息录入（基本信息、技术参数）
- **实验类型**：焊缝检测、表面缺陷检测、双层结构检测、应力集中区检测
- **国际标准**：遵循ISO 9934-1, ASTM E709等标准
- **实验详情**：查看关联文件、分析结果、操作历史
- **报告导出**：生成PDF格式专业报告

### 3. 📁 文件管理

- **文件上传**：拖拽上传、多文件上传、进度显示
- **智能验证**：格式验证、结构验证、数据验证
- **文件列表**：列表/网格双视图，支持排序筛选
- **文件预览**：查看前100行数据，基础统计信息
- **批量操作**：批量下载（ZIP打包）、批量删除
- **元数据编辑**：修改文件名、关联实验、添加备注

### 4. 📊 信号可视化

- **2D热力图**：Frame × Position信号强度展示
- **3D曲面图**：三维立体信号展示（可旋转、缩放）
- **折线图**：时间序列分析、多Beam对比
- **直方图**：信号强度分布统计
- **交互式操作**：缩放、平移、标注、测量
- **多种配色**：Viridis、Jet、工业化配色方案
- **数据导出**：PNG、SVG、CSV多格式导出

### 5. 🔬 数据分析

- **峰值检测**：自动识别信号峰值，可调参数
- **基线校正**：多项式拟合、移动平均、中值滤波
- **噪声过滤**：低通/高通/带通滤波器
- **特征提取**：时域特征、频域特征、形状特征
- **缺陷识别**：基于阈值、形态学、机器学习方法
- **分析报告**：自动生成PDF/HTML/Word格式报告

### 6. ⚙️ 系统设置

- 数据导入配置（分隔符、编码、验证级别）
- 显示偏好（语言、时区、日期格式、主题）
- 分析参数配置（默认阈值、滤波参数）
- 数据保留策略（保留期限、自动归档）
- 系统信息查看（版本、存储、API统计）

---

## 技术栈

### 前端技术

| 技术 | 版本 | 用途 |
|-----|------|-----|
| [Next.js](https://nextjs.org/) | 14 | React框架，App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5.0 | 类型安全 |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | 样式框架 |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | UI组件库 |
| [Recharts](https://recharts.org/) | 2.10 | 图表库 |
| [D3.js](https://d3js.org/) | 7.8 | 高级可视化 |
| [Zustand](https://github.com/pmndrs/zustand) | 4.4 | 状态管理 |
| [Papa Parse](https://www.papaparse.com/) | 5.4 | CSV解析 |
| [date-fns](https://date-fns.org/) | 3.0 | 日期处理 |
| [Lucide React](https://lucide.dev/) | Latest | 图标库 |

### 后端服务

| 服务 | 用途 |
|-----|-----|
| [Supabase](https://supabase.com/) | PostgreSQL数据库 |
| Supabase Storage | 文件存储 |
| Supabase Realtime | 实时数据同步 |
| Supabase Auth | 用户认证（预留） |

### 开发工具

- **包管理器**：pnpm (推荐) / npm / yarn
- **代码格式化**：Prettier
- **代码检查**：ESLint
- **版本控制**：Git
- **CI/CD**：GitHub Actions
- **部署平台**：Vercel

---

## 快速开始

### 前置要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0（推荐）或 npm >= 9.0.0
- Git
- Supabase账号（免费）

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/yourusername/magdatams.git
cd magdatams
```

2. **安装依赖**

```bash
# 使用pnpm（推荐）
pnpm install

# 或使用npm
npm install

# 或使用yarn
yarn install
```

3. **配置环境变量**

复制环境变量模板并填写配置：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填入Supabase配置（见下一节）。

4. **运行开发服务器**

```bash
pnpm dev
# 或
npm run dev
```

5. **访问应用**

打开浏览器访问：[http://localhost:3000](http://localhost:3000)

---

## 环境变量配置

在项目根目录创建 `.env.local` 文件：

```env
# Supabase配置
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# 应用配置
NEXT_PUBLIC_APP_NAME=磁检测数据管理系统
NEXT_PUBLIC_APP_VERSION=1.0.0

# 可选配置
NEXT_PUBLIC_MAX_FILE_SIZE=524288000  # 500MB，单位：字节
NEXT_PUBLIC_MAX_FILES_PER_UPLOAD=10
```

### 获取Supabase配置

1. 访问 [Supabase Dashboard](https://app.supabase.com/)
2. 创建新项目或选择现有项目
3. 进入 **Settings** → **API**
4. 复制以下信息：
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ 保密)

---

## Supabase配置

### 数据库表创建

1. 进入Supabase Dashboard → **SQL Editor**

2. 创建数据库表：

```sql
-- 创建实验记录表
CREATE TABLE experiments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    standard TEXT,
    test_date TIMESTAMP WITH TIME ZONE NOT NULL,
    operator TEXT,
    material TEXT,
    thickness NUMERIC,
    magnetization_method TEXT,
    equipment TEXT,
    description TEXT,
    status TEXT DEFAULT '进行中',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建数据文件表
CREATE TABLE data_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    experiment_id UUID REFERENCES experiments(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_size BIGINT NOT NULL,
    row_count INTEGER,
    frame_count INTEGER,
    upload_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    checksum TEXT,
    metadata JSONB
);

-- 创建信号数据表
CREATE TABLE signal_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    file_id UUID REFERENCES data_files(id) ON DELETE CASCADE,
    frame_id INTEGER NOT NULL,
    beam_id INTEGER NOT NULL,
    positions NUMERIC[] NOT NULL,
    max_value NUMERIC,
    min_value NUMERIC,
    avg_value NUMERIC,
    anomaly_detected BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建分析结果表
CREATE TABLE analysis_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    file_id UUID REFERENCES data_files(id) ON DELETE CASCADE,
    analysis_type TEXT NOT NULL,
    parameters JSONB,
    results JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建自动更新updated_at的触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_experiments_updated_at
    BEFORE UPDATE ON experiments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 创建索引以提高查询性能
CREATE INDEX idx_data_files_experiment_id ON data_files(experiment_id);
CREATE INDEX idx_signal_data_file_id ON signal_data(file_id);
CREATE INDEX idx_signal_data_frame_beam ON signal_data(frame_id, beam_id);
CREATE INDEX idx_analysis_results_file_id ON analysis_results(file_id);
CREATE INDEX idx_experiments_status ON experiments(status);
CREATE INDEX idx_experiments_test_date ON experiments(test_date DESC);
```

3. 创建存储桶（Storage Bucket）：

进入 **Storage** → **Create bucket**
- Bucket名称：`magnetic-data-files`
- 公开访问：`Public bucket`（或根据需求设置）
- 文件大小限制：`500MB`

4. 设置存储策略（Storage Policies）：

```sql
-- 允许所有人上传文件（公开访问模式）
CREATE POLICY "Public Upload"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'magnetic-data-files');

-- 允许所有人读取文件
CREATE POLICY "Public Read"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'magnetic-data-files');

-- 允许所有人删除文件
CREATE POLICY "Public Delete"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'magnetic-data-files');
```

---

## 开发指南

### 项目命令

```bash
# 开发服务器
pnpm dev          # 启动开发服务器（端口3000）

# 构建
pnpm build        # 构建生产版本
pnpm start        # 运行生产服务器

# 代码质量
pnpm lint         # 运行ESLint检查
pnpm lint:fix     # 自动修复ESLint问题
pnpm format       # 格式化代码（Prettier）

# 类型检查
pnpm type-check   # TypeScript类型检查
```

### 开发规范

#### 代码风格

- **缩进**：2空格
- **引号**：单引号
- **分号**：可选（Prettier自动处理）
- **命名规范**：
  - 文件名：kebab-case（如 `experiment-list.tsx`）
  - 组件名：PascalCase（如 `ExperimentList`）
  - 函数名：camelCase（如 `fetchExperiments`）
  - 常量名：UPPER_SNAKE_CASE（如 `MAX_FILE_SIZE`）

#### 组件结构

```tsx
// components/features/example-component.tsx
'use client'; // 如果需要客户端交互

import React from 'react';
import { Button } from '@/components/ui/button';

interface ExampleComponentProps {
  title: string;
  onAction: () => void;
}

export function ExampleComponent({ title, onAction }: ExampleComponentProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Button onClick={onAction}>执行操作</Button>
    </div>
  );
}
```

#### Git提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type类型**：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档修改
- `style`: 代码格式修改
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建/工具相关

**示例**：
```
feat(experiments): 添加实验创建功能

- 实现创建实验表单
- 添加表单验证逻辑
- 连接Supabase API

Closes #123
```

### 添加shadcn/ui组件

```bash
# 添加Button组件
pnpm dlx shadcn-ui@latest add button

# 添加多个组件
pnpm dlx shadcn-ui@latest add card dialog form input
```

### 调试技巧

1. **React DevTools**：安装浏览器扩展进行组件调试
2. **Network面板**：查看API请求和响应
3. **Console日志**：合理使用 `console.log` 和 `console.error`
4. **Supabase Logs**：查看数据库查询日志

---

## 项目结构

```
magdatams/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页（重定向到/dashboard）
│   ├── dashboard/           # 数据大屏
│   │   └── page.tsx
│   ├── experiments/         # 实验管理
│   │   ├── page.tsx        # 实验列表
│   │   ├── [id]/           # 实验详情
│   │   │   └── page.tsx
│   │   └── new/            # 创建实验
│   │       └── page.tsx
│   ├── files/              # 文件管理
│   │   └── page.tsx
│   ├── signals/            # 信号可视化
│   │   └── [fileId]/
│   │       └── page.tsx
│   ├── analysis/           # 数据分析
│   │   └── page.tsx
│   ├── settings/           # 系统设置
│   │   └── page.tsx
│   ├── api/                # API路由（如需）
│   ├── globals.css         # 全局样式
│   └── favicon.ico         # 网站图标
├── components/              # React组件
│   ├── ui/                 # shadcn/ui基础组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── layout/             # 布局组件
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   └── main-layout.tsx
│   ├── charts/             # 图表组件
│   │   ├── heatmap.tsx
│   │   ├── line-chart.tsx
│   │   └── ...
│   └── features/           # 业务组件
│       ├── experiment-list.tsx
│       ├── file-upload.tsx
│       └── ...
├── lib/                    # 工具函数和配置
│   ├── supabase.ts         # Supabase客户端
│   ├── utils.ts            # 通用工具函数
│   ├── csv-parser.ts       # CSV解析器
│   ├── validators.ts       # 数据验证
│   └── constants.ts        # 常量定义
├── types/                  # TypeScript类型定义
│   ├── database.ts         # 数据库类型
│   ├── experiment.ts       # 实验相关类型
│   ├── file.ts            # 文件相关类型
│   └── index.ts           # 类型导出
├── stores/                 # Zustand状态管理
│   ├── experiment-store.ts
│   ├── file-store.ts
│   └── ui-store.ts
├── hooks/                  # 自定义React Hooks
│   ├── use-experiments.ts
│   ├── use-files.ts
│   └── use-toast.ts
├── data/                   # 示例数据
│   ├── 1-焊缝.csv
│   ├── 2-斜坡.csv
│   ├── 2-双层-3.csv
│   └── 3-单层-1.csv
├── docs/                   # 文档
│   ├── PRD.md             # 产品需求文档
│   ├── API.md             # API文档
│   └── USER_GUIDE.md      # 用户指南
├── public/                 # 静态资源
│   ├── images/
│   └── icons/
├── .env.example            # 环境变量示例
├── .env.local              # 本地环境变量（git忽略）
├── .eslintrc.json          # ESLint配置
├── .prettierrc             # Prettier配置
├── next.config.js          # Next.js配置
├── tailwind.config.ts      # Tailwind配置
├── tsconfig.json           # TypeScript配置
├── package.json            # 项目依赖
├── pnpm-lock.yaml          # 依赖锁定文件
└── README.md               # 本文件
```

---

## 部署指南

### Vercel部署（推荐）

1. **准备工作**
   - 确保代码已推送到GitHub/GitLab/Bitbucket
   - 确保 `.env.local` 已添加到 `.gitignore`

2. **连接Vercel**
   - 访问 [Vercel Dashboard](https://vercel.com/)
   - 点击 **New Project**
   - 导入Git仓库

3. **配置环境变量**
   
   在Vercel项目设置中添加环境变量：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`（Production only）

4. **部署**
   - 点击 **Deploy**
   - 等待构建完成（约2-5分钟）
   - 访问生成的URL

5. **自定义域名**（可选）
   - Settings → Domains
   - 添加自定义域名
   - 配置DNS记录

### 手动部署

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

### Docker部署（高级）

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# 安装依赖
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# 构建应用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm && pnpm build

# 运行应用
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

```bash
# 构建Docker镜像
docker build -t magdatams .

# 运行容器
docker run -p 3000:3000 --env-file .env.local magdatams
```

---

## 常见问题

### Q1: 启动时报错 "Module not found"

**A**: 删除 `node_modules` 和锁定文件，重新安装依赖：

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Q2: Supabase连接失败

**A**: 检查以下几点：
1. 环境变量是否正确配置
2. Supabase项目是否激活
3. 网络连接是否正常
4. API密钥是否过期

### Q3: CSV文件上传失败

**A**: 确认：
1. 文件格式是否为CSV
2. 文件大小是否超过限制（500MB）
3. 文件编码是否为UTF-8
4. CSV结构是否符合规范（898列）

### Q4: 图表显示异常

**A**: 尝试：
1. 清除浏览器缓存
2. 检查数据格式是否正确
3. 查看浏览器控制台是否有错误信息
4. 确认浏览器版本是否支持

### Q5: 构建时内存不足

**A**: 增加Node.js内存限制：

```json
// package.json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}
```

---

## 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. **Fork项目**
2. **创建特性分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'feat: Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **开启Pull Request**

### 贡献类型

- 🐛 报告Bug
- ✨ 提出新功能
- 📝 改进文档
- 🎨 优化UI/UX
- ⚡ 性能优化
- ✅ 添加测试

### 代码审查

所有Pull Request都将经过代码审查，请确保：
- 代码符合项目规范
- 添加必要的测试
- 更新相关文档
- 提交信息清晰明确

---

## 许可证

本项目采用 [MIT License](LICENSE) 许可证。

---

## 联系方式

- **问题反馈**：[GitHub Issues](https://github.com/yourusername/magdatams/issues)
- **功能建议**：[GitHub Discussions](https://github.com/yourusername/magdatams/discussions)
- **邮箱**：your.email@example.com

---

## 致谢

感谢以下开源项目：

- [Next.js](https://nextjs.org/) - React框架
- [Supabase](https://supabase.com/) - 开源Firebase替代方案
- [shadcn/ui](https://ui.shadcn.com/) - 精美的React组件库
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Recharts](https://recharts.org/) - React图表库

---

## 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 了解版本更新历史。

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个Star！⭐**

Made with ❤️ by MagData Team

</div>

