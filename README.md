# vueblog api server(v0.1.0)
## 前言
本套API相比之前无太大改动，仅对错误处理和安全方面进行了合理优化。  

## 本地运行
- 安装[MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)数据库和[Node.js](https://nodejs.org/en/)环境
- 开启数据库服务，以windows电脑为例: 在桌面上新建一个`demo`文件夹，命令行执行`mongod --dbpath c:demo`就成功在本地开启服务了
- 运行项目
```shell
# 下载项目
git clone https://github.com/wmui/vueblog-server.git
cd vueblog-server
# 安装依赖
npm install
# 运行
node server.js
# 访问http://localhost:8080/
```

## API文档
[API文档](https://github.com/wmui/vueblog/wiki)  

## 开源协议
GPL  