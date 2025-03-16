# 贸易制造业  网站前端项目

这是一个基于 Next.js 开发的 贸易制造业  公司网站前端项目。该项目参考了 [https://valentijapan.com/](https://valentijapan.com/) 的结构和内容，但使用了更现代的设计和更符合无障碍标准的界面。

## 技术栈

- **框架**: [Next.js](https://nextjs.org/) (基于 React)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **字体**: [Geist](https://vercel.com/font) (由 Vercel 提供)
- **图标**: 使用 SVG 内联图标

## 特性

- 响应式设计，适配各种屏幕尺寸
- 黑暗模式支持
- 无障碍设计，遵循 WCAG 2.1 标准
- 基于组件的架构，易于维护和扩展
- 服务端渲染 (SSR)，有利于 SEO
- 使用 TypeScript 类型检查

## 项目结构

```
my-app/
  ├── app/                  # Next.js 应用目录
  │   ├── components/       # 共用组件
  │   │   ├── Header.tsx    # 网站头部导航组件
  │   │   └── Footer.tsx    # 网站页脚组件
  │   ├── company/          # 公司简介页面
  │   ├── contact/          # 联系我们页面
  │   ├── product/          # 产品页面
  │   ├── favicon.ico       # 网站图标
  │   ├── globals.css       # 全局 CSS 样式
  │   ├── layout.tsx        # 主布局组件
  │   └── page.tsx          # 首页组件
  ├── public/               # 静态资源目录
  │   └── images/           # 图片资源
  ├── next.config.ts        # Next.js 配置文件
  ├── package.json          # 项目依赖配置
  ├── postcss.config.mjs    # PostCSS 配置
  ├── tailwind.config.js    # Tailwind CSS 配置
  └── tsconfig.json         # TypeScript 配置
```

## 运行项目

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 运行生产版本

```bash
npm run start
# 或
yarn start
```

## 页面说明

- **首页**: 展示公司概览、主要产品和客户评价
- **产品页面**: 展示产品类别和热门产品列表
- **公司简介**: 介绍公司历史、使命、价值观和团队
- **联系我们**: 提供联系表单和公司联系信息

## 后续开发计划

1. 添加更多产品详情页面
2. 实现经销商查询功能
3. 添加多语言支持
4. 整合后端 API 实现表单提交和数据获取
5. 优化页面加载性能

## 注意事项

- 本项目仅实现了前端界面，暂未连接后端服务
- 所有表单提交和交互功能仅为前端模拟
- 图片资源需要替换为实际的公司图片

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

此项目遵循 MIT 许可证

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
