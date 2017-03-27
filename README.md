# require-demo

## 简介

这是一套基于RequireJS的前端项目demo，后端使用Java&FreeMarker语言。
  
#### 前端

- 使用RequireJS进行模块化
- 基于 [fed2](https://www.npmjs.com/package/fed2 "fed2") 模拟后端FreeMarker页面、接口，实现前后端分离
- 基于GruntJS实现自动化测试（jsHint），压缩，打包等
- 使用bower管理第三方模块
  
#### 后端

Java、FreeMarker

## 配置

配置文件是 `/WEB-INF/template/ftl/inc/global.ftl`，可以切换不同的环境  

- `development`：本地开发使用，所有amd模块异步加载  
- `testing`：测试环境，使用本地`dist`目录打包好的脚本  
- `production`：生产环境，可以将`dist`目录发布到cdn，配置成cdn上的脚本

## 使用方法

#### 安装

```shell
grunt install
```

#### 运行

```shell
grunt server
```
#### 编译

```shell
grunt build
```
  

