# Deepseek工具站

## 项目简介
这是一个展示当前所有支持 Deepseek 的 AI 工具和平台的导航站。提供最全面的 Deepseek 模型应用导航，包括满血R1和V3版本。支持免费使用、直连访问。

## 技术栈
- Vite
- React
- TypeScript
- Tailwind CSS

## 功能特点
- 展示所有支持 Deepseek 的工具和平台
- 按类别分类展示（科技巨头、AI平台、云服务、国际平台、其他服务）
- 支持搜索和分类筛选
- 显示工具评分和用户数
- 标记满血R1和蒸馏版本
- SEO 优化

## 本地开发
1. 克隆项目：
   ```bash
   git clone <repository-url>
   cd deepseek-tools
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 构建项目：
   ```bash
   npm run build
   ```

5. 预览构建：
   ```bash
   npm run preview
   ```

## 部署指南

### Vercel 部署
1. Fork 本项目到你的 GitHub
2. 在 Vercel 中导入项目
3. 选择 GitHub 仓库
4. 使用以下配置：
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 点击 Deploy 开始部署

### Netlify 部署
1. Fork 本项目到你的 GitHub
2. 在 Netlify 中点击 "New site from Git"
3. 选择 GitHub 仓库
4. 使用以下配置：
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Node version: `18.x` (或更高)
5. 点击 Deploy site 开始部署

## 环境要求
- Node.js 18.x 或更高版本
- npm 9.x 或更高版本

## 项目结构
```
deepseek-tools/
├── public/              # 静态资源
├── src/                 # 源代码
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 入口文件
│   └── index.css       # 全局样式
├── index.html          # HTML 模板
├── vite.config.ts      # Vite 配置
├── package.json        # 项目配置
└── README.md           # 项目说明
```

## 贡献指南
欢迎提交 Pull Request 或提出 Issue。

## 许可证
MIT License

## 联系方式
如有问题或建议，请提交 Issue 或 PR。 
