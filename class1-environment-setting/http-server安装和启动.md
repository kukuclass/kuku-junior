## http-server安装和启动

​	Http-server是一个基于nodejs的轻量级的http服务器，它最大好处就是：可以使任意一个本地目录开起成为一个本地服务器。比如，vue项目执行build构建，会生成一个dist目录，我们若想将项目部署到服务器，除了通过复制dist静态文件到服务器nginx目录下，然后启动nginx来启动项目，另外一个办法就是安装http-server 直接启动本地服务。

### 下面则是http-server安装和启动：

​	参考：https://www.npmjs.com/package/http-server

##### 全局安装：

`npm install --global http-server`

##### 作为npm包依赖安装：

`npm install http-server`

##### 运行

终端进入你想要成为服务器的目录下，运行如下命令

`http-server`

若要禁用缓存，请使用如下命令运行

`http-server -c-1`

执行成功后，在浏览器输入http://localhost:8080/或者http://127.0.0.1:8080就可以访问你得文件了。

##### 停止运行

Ctrl+C