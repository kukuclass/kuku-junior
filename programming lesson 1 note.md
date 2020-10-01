# 前端工具

* IDE工具:[webstorm](https://www.jetbrains.com/webstorm/download/)
  
  * **IDE**: Integrated Development Environment 集成开发环境
  
* 灵活管理node版本工具:[nvm](https://github.com/coreybutler/nvm-windows)

* 终端工具：mac端-**终端**，windows端-[windows terminal](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?rtc=1)

* git协作工具：[gitkraken](https://www.gitkraken.com/download/mac)

* vpn工具：[clash](https://github.com/Fndroid/clash_for_windows_pkg/releases/download/0.11.9/Clash.for.Windows-0.11.9.dmg)

  

---



# 基础命令

* **调试**：debug
* **搜索**：command+f
* **替换**：command+r
* **撤销一个命令**：command+c
* **查看version**：-v （version）
* **帮助**：-h （help）
* **进入某个文件夹**：cd
* **移除某个文件/文件夹**：rm （remove）
* **创建一个文件夹**：mkdir <name>
* **创建一个文件**：touch+...
* **查看当前目录文件**：ls
* **代码推断**：command+模块名
* **折叠所有代码**：command+shift+-
* **回退**：command+z

* **前进**：command+x

* **注释**：command+shift+/ 

---



# git协作命令

* **上传代码**：git push
* **拉代码**：git pull
* **切换分支**：git checkout
* **创建分支**：git create branch

---



# 前端相关知识初解

## 对前端的认知

### Web前端有三层：

- HTML：从语义的角度，描述页面**结构**
- CSS：从审美的角度，描述**样式**（美化页面）
- JavaScript：从交互的角度，描述**行为**（实现业务逻辑和页面控制）

## vue、react等前端框架

## css2、css3

## TCP,UDP,HTTP(s),HTTP状态码

## Javascript

Javascript是前端语言，运行在用户的终端网页上，服务于页面的交互效果、美化

### javascript的组成

* **ECMAScript**: JS的语法标准
* **DOM**: document object model（文档对象模型），操作页面上的API
* **BOM**：browser object model（浏览器对象模型），操作浏览器部分功能的API

DOM和BOM浏览器运行环境为JS提供的API

### Javascript的特点

1. **解释型语言**

不需要事先被翻译成机器码，而是边翻译边执行的。（翻译一行执行一行）

优点是移植性好、跨平台，例：JS, Python, php

2. **单线程**
3. **ECMAScript标准**

所有浏览器厂商共同遵守的一套JS语法工业标准

4. **弱类型语言/动态语言**

不需要提前声明变量的类型，程序运行过程中类型会自动确定



## Javascript的数据类型一共六种

* **基本数据类型（值类型）**：String字符串、Number数值、Boolean布尔值、Null空值、Undefined未定义
* **引用数据类型（引用类型）**：Object对象（除了五种基本数据类型之外，其他的都属于Object类型）

#### 数据类型之间最大的区别：

* 基本数据类型：参数赋值的时候，传数值，直接保存在栈内存中 *就像ai中嵌入的对象，不受变化影响*
* 引用数据类型：参数赋值的时候，传地址（修改的同一片内存空间），保存在堆内存中 *像ai中的置入链接，随原文件变化而变化*

## babel、webpack

## node、npm







