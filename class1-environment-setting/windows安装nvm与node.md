## windows安装nvm与node

nvm是nodejs版本管理工具，通过它可以方便地在本地切换node版本。

### 环境说明：

系统：

​	win10

nvm与node安装路径：

​	D:\nvm

​	D:\nodejs

参考：https://github.com/nvm-sh/nvm

### 问题主线：

第一步：nvm安装成功

第二步：nvm install <version>

第三步: nvm ls，刚刚安装的node版本已经存在，貌似成功

第四步：nvm use <version>切换node版本，成功

第五步：node  -v，检验node报错。即使node成功后，在执行npm - v，npm仍然报错，windows真的好硬核。错误内容可能有如下几种（本人踩坑的几种）

```
<Bug One>：
node : 无法将“node”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写， 如果包括路径，请确保路径正确
，然后再试一次。
所在位置 行:1 字符: 1
+ node
+ ~~~~
    + CategoryInfo          : ObjectNotFound: (node:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
解决:我最开始出现的原因是因为我之前装过一个node，没有删除，又接着装nvm，导致之前的node版本把nvm中的node覆盖了。后来，又出现了这个bug，是因为重装之后，在nodejs安装路径下，所安装的node文件名是node64.exe，而不再是node.exe，于是直接重命名，64去掉，node正常了。

或者
程序“node.exe”无法运行: 指定的可执行文件不是此操作系统平台的有效应用程序。所在位置 行:1 字符: 1
+ node
+ ~~~~。
所在位置 行:1 字符: 1
+ node
+ ~~~~
    + CategoryInfo          : ResourceUnavailable: (:) [], ApplicationFailedException
    + FullyQualifiedErrorId : NativeCommandFailed
解决：重装。
```

```
<Bug Two>：
node -v
npm -v
都出现：拒绝访问
解决：这是因为你的node、npm都没有安装成功，或者安装错误。去nvm安装路径下D:\nvm\v12.19.0\node_modules查看，发现真的是空的，没有npm，而npm安装失败极有可能就是网络问题，那就换镜像源吧
```

```
<Bug Three>：
wsarecv: An existing connection was forcibly closed by the remote host.
解决：换镜像源
```

```
<Bug Four>：
Failed to extract npm. Could not find D:\nvm\temp\nvm-npm\npm-6.14.8\bin
解决：查nvm配置文件，查环境变量。bug2和3，其实就是告诉你，你的node或者npm实际上是没有安装成功的
```

注意：nvm ls命令列出来当前安装的node，并非真实成功安装的node。似乎只要你执行了nvm install <version>,nvm就会默认当前版本是已安装，但这并不能说明你真的就安装成功了。

### 总结：



1.更换node和npm镜像源：

将D:\nvm\settings内容修改如下：

root: D:\nvm
path: D:\nodejs
arch: 64
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/



2.如果在安装nvm之前安装过node，请把node删除干净，在重装nvm，以及后面一系列。

3.如果之前执行nvm install  <version>，但没有成功安装，需要清除，清除旧版本，即nvm uninstall <version>，或者手动删除D:/nvm/<version>/，否则会提示版本已存在。

4.node -v不成功，你就有必要怀疑电脑真的有正确安装么，nvm  ls说明不了什么，别信它，去安装路径下看看。

5.npm  -v 不成功，或者缺少vue cli。

在执行nvm install <version>的时候，会在D:\nvm文件夹下创建一个temp文件夹，npm的安装包就会下载在这里，但是注意：下载的安装包为D:\nvm\temp\npm-v<version>.zip，这个包安装完后会被删除，文件夹会清空，只留下一个压缩包。所以，卡好时间，在下载完，安装中的时间点，把安装包copy出来。最后，提示安装完成，你会发现D:\nvm\v<version>\node_modules下空空如也，这也是为什么npm -v有问题，因为压根没存在。然后，将之前copy的包下的cli-<version>放到D:\nvm\v<version>\node_modules下，重命名为npm。最后，npm -v执行成功。 

6.简直就是个会移动会变化的bug，神奇的不行！每一次重装得到的结果、出现的错误、不同的时间、bug好像都不太一样，真的是厉害了！然后，一天又过去了！

