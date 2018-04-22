# 拳头数据

## 项目使用

以下安装都通过`npm`安装

**安装（更新） webpack 命令行工具。**

```bash
npm install webpack -g
npm install webpack-cli -g
```

**在git拉取代码。**

```bash
git clone https://github.com/XThomasMan/qtsj.git
```

**切换至项目目录。**

```bash
cd qtsj
```
**安装依赖包。**

```bash
npm i
```

**开发实时编译刷新页面。**

```bash
npm run dev
```

**开发实时编译刷新页面并拦截接口请求返回模拟数据。**

```bash
npm run mock
```

**生成线上压缩过的代码。**

```bash
npm run build
```

#### 项目目录结构
```
├── dist                   编译后的代码（仅在build模式下产生）
├── node_modules           
├── src                    代码编写的目录
|   ├── components         组件文件夹（非完整页面）
|   |   ├── com_a.vue      可复用组件 a
|   |   └── com_b.vue      可复用组件 b
|   ├── pages              页面文件夹（完整页面）
|   |   ├── index.vue      页面 index
|   |   └── page.vue       页面 page
|   ├── main.js            vue配置项（页面路由配置等）
|   └── mock.js            api拦截配置（返回模拟数据）
├── package.json           package 配置
└── webpack.config.js      webpack 配置
```
