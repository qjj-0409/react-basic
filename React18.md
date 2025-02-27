# React18

## 开发环境搭建

### 1.使用 `create-react-app`

使用`create-react-app` 快速搭建开发环境

`create-react-app` 是一个快速创建React开发环境的工具，底层由webpack构建，封装了配置细节，开箱即用。

执行命令：

```bash
# 全局安装 create-react-app
npm install -g create-react-app
# 创建一个新的react应用
create-react-app my-app
# 运行你的应用
cd my-app
npm start
```

### 2.使用Vite

Vite 是一个新兴的现代化前端构建工具，它提供了快速的冷启动和即时模块热更新。

```bash
# 创建vite项目
npm create vite@latest my-vite-app -- --template react
# 或
yarn create vite my-vite-app -- --template react
# 进入项目目录并安装
cd my-vite-app
npm install  # 或 yarn install
# 运行你的应用
npm run dev  # 或 yarn dev
```

### 3.使用 Webpack 和 Babel（手动配置）

如果你想要更高级的配置能力，你可以手动设置Webpack和Babel。这种方法提供了最大的灵活性，但也需要更多的配置工作。

1. 初始化项目

   ```bash
   mkdir my-custom-react-app && cd my-custom-react-app
   npm init -y
   ```

2. 安装依赖

   ```bash
   npm install react react-dom --save
   npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
   npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
   npm install --save-dev style-loader css-loader babel-loader @babel/preset-react @babel/preset-env html-webpack-plugin clean-webpack-plugin copy-webpack-plugin terser-webpack-plugin css-minimizer-webpack-plugin mini-css-extract-plugin
   ```

3. 配置 Babel（在项目根目录创建 `.babelrc` 或 `babel.config.json`）

   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

4. 配置 Webpack（在项目根目录创建 `webpack.config.js`）

   ```js
   const path = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清理/dist文件夹（可选）
   // 更多配置...（根据你的需求添加）... 例如入口、输出、loader等配置。 参考官方文档。 示例省略详细配置以保持简洁。 详细配置请查阅Webpack文档。 确保至少包含HTML模板插件和Babel loader。 示例省略详细配置以保持简洁。 详细配置请查阅Webpack文档。 确保至少包含HTML模板插件和Babel loader。 示例省略详细配置以保持简洁。 详细配置请查阅Webpack文档。 确保至少包含HTML模板插件和Babel loader。 示例省略详细配置以保持简洁。 详细配置请查阅Webpack文档。 确保至少包含HTML模板插件和
   ```

创建React项目的更多方式：https://zh-hans.react.dev/learn/start-a-new-react-project