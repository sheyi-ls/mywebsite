# 🌐 Vercel + GitHub 网站搭建完整教程

本教程将指导您如何使用 GitHub 和 Vercel 免费搭建和部署一个现代化的网站。

## 📋 目录

1. [准备工作](#准备工作)
2. [创建 GitHub 仓库](#创建-github-仓库)
3. [连接 Vercel](#连接-vercel)
4. [部署网站](#部署网站)
5. [自定义域名](#自定义域名)
6. [进阶配置](#进阶配置)

## 🚀 准备工作

### 需要的账户
- **GitHub 账户**: [注册地址](https://github.com)
- **Vercel 账户**: [注册地址](https://vercel.com)

### 本地环境
- Git (可选，用于本地开发)
- 任何代码编辑器 (推荐 VS Code)

## 📂 项目结构

```
my-website/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # JavaScript 功能
├── vercel.json     # Vercel 配置文件 (可选)
└── README.md       # 项目说明
```

## 🎯 第一步：创建 GitHub 仓库

### 1.1 登录 GitHub
访问 [GitHub](https://github.com) 并登录您的账户。

### 1.2 创建新仓库
1. 点击右上角的 **"+"** 按钮
2. 选择 **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `my-website` (或您喜欢的名字)
   - **Description**: `我的第一个网站`
   - 选择 **Public** (公开仓库)
   - 勾选 **"Add a README file"**
4. 点击 **"Create repository"**

### 1.3 上传项目文件

**方法一：通过 GitHub 网页界面**
1. 在仓库页面点击 **"Add file"** → **"Upload files"**
2. 拖拽或选择本项目的所有文件
3. 在底部添加提交信息：`初始网站文件`
4. 点击 **"Commit changes"**

**方法二：使用 Git 命令行**
```bash
# 克隆仓库到本地
git clone https://github.com/您的用户名/my-website.git
cd my-website

# 复制项目文件到此文件夹
# 然后提交到 GitHub
git add .
git commit -m "初始网站文件"
git push origin main
```

## ⚡ 第二步：连接 Vercel

### 2.1 注册 Vercel
1. 访问 [Vercel](https://vercel.com)
2. 点击 **"Sign Up"**
3. 选择 **"Continue with GitHub"** 用 GitHub 账户登录

### 2.2 导入项目
1. 登录后进入 Vercel 控制台
2. 点击 **"New Project"**
3. 在 "Import Git Repository" 部分找到您刚创建的仓库
4. 点击仓库右侧的 **"Import"**

### 2.3 配置部署设置
1. **Project Name**: 保持默认或修改为您喜欢的名字
2. **Framework Preset**: 选择 **"Other"** (对于静态 HTML 网站)
3. **Root Directory**: 保持默认 `./`
4. **Build and Output Settings**: 
   - Build Command: 留空 (静态网站不需要构建)
   - Output Directory: 留空
   - Install Command: 留空

### 2.4 部署
点击 **"Deploy"** 按钮开始部署！

## 🎉 第三步：查看您的网站

部署完成后（通常需要1-2分钟），您将看到：
- ✅ 部署成功的确认页面
- 🔗 您的网站链接 (格式：`https://your-project-name.vercel.app`)

点击链接即可查看您的网站！

## 🌍 第四步：自定义域名（可选）

### 4.1 在 Vercel 中添加域名
1. 进入项目的 Vercel 控制台
2. 点击 **"Settings"** 选项卡
3. 在左侧菜单选择 **"Domains"**
4. 点击 **"Add"** 按钮
5. 输入您的域名，如：`www.yourdomain.com`

### 4.2 配置 DNS
根据 Vercel 提供的说明，在您的域名提供商处设置：
- **A 记录**: 指向 `76.76.19.61`
- **CNAME 记录**: `www` 指向 `cname.vercel-dns.com`

## 🔧 第五步：进阶配置

### 5.1 创建 vercel.json 配置文件
为了更好地控制部署行为，您可以创建 `vercel.json` 文件：

```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 5.2 环境变量（如需要）
在 Vercel 控制台的 Settings → Environment Variables 中可以设置环境变量。

### 5.3 自动部署
每当您向 GitHub 仓库推送代码时，Vercel 会自动重新部署您的网站！

## 🔄 更新网站内容

### 方法一：GitHub 网页编辑
1. 在 GitHub 仓库中点击要编辑的文件
2. 点击铅笔图标 ✏️ 进行编辑
3. 编辑完成后滚动到底部
4. 填写提交信息，点击 "Commit changes"
5. Vercel 会自动检测到变化并重新部署

### 方法二：本地开发
```bash
# 修改文件后提交
git add .
git commit -m "更新网站内容"
git push origin main
```

## 🎨 自定义您的网站

### 修改颜色主题
在 `style.css` 中修改 CSS 变量：
```css
:root {
  --primary-color: #4f46e5;  /* 主色调 */
  --secondary-color: #667eea; /* 辅助色 */
  --text-color: #333;        /* 文字颜色 */
}
```

### 添加新页面
1. 创建新的 HTML 文件，如 `about.html`
2. 在导航栏中添加链接
3. 推送到 GitHub，Vercel 会自动部署

### 集成其他功能
- **表单处理**: 使用 Vercel 的 Serverless Functions
- **数据库**: 集成 PlanetScale、Supabase 等
- **CMS**: 集成 Contentful、Sanity 等

## 🚨 常见问题

### Q: 网站没有正确显示？
A: 检查文件路径和文件名是否正确，确保 `index.html` 在根目录。

### Q: 域名配置后无法访问？
A: DNS 配置需要时间生效，通常在 24 小时内。请耐心等待。

### Q: 如何查看部署日志？
A: 在 Vercel 控制台的 "Functions" 或 "Deployments" 选项卡中可以查看详细日志。

### Q: 可以使用自己的 CSS 框架吗？
A: 当然可以！您可以使用 Bootstrap、Tailwind CSS 等任何前端框架。

## 🔗 有用的资源

- [Vercel 官方文档](https://vercel.com/docs)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [HTML/CSS 教程](https://www.w3schools.com)
- [现代 JavaScript 教程](https://javascript.info)

## 🎯 下一步

恭喜！您已经成功搭建了第一个网站。接下来您可以：

1. **学习前端框架**: React、Vue.js、Next.js
2. **添加后端功能**: 使用 Vercel Serverless Functions
3. **优化 SEO**: 添加 meta 标签、结构化数据
4. **性能优化**: 图片压缩、代码压缩
5. **分析工具**: 集成 Google Analytics

祝您建站愉快！🎉

---

**技术支持**: 如果遇到问题，欢迎在 GitHub Issues 中提问。 