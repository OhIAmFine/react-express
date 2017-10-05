# 基于express搭建react的开发项目脚手架

## 步骤
 - 安装express-generator， 生成项目：express-react
 ` npm install express-generator && express react-express && cd express-react`
- 安装react-create-app ,生成react-project
` npm install create-react-app && create-react-app build && cd build`
- build中文件将用于我们的react前端项目构建，
- 将build中的package.json中的dependencies与主目录的package.json中的dependencies合并
- 进入主目录新建webpack.config.js打包文件，用于将react项目进行打包
- 新建.babelrc文件，设置 babel
- 进入主目录按照package.json安装webpack，express和react相关模块的依赖：`npm install`
- 进行webpack打包 ` webpack -w`
- 进行express服务器搭建 ` npm start`
- 进入localhost可以看到服务搭建成功
