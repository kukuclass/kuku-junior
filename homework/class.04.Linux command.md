## 1.学习/复习markdown语法

   *  [markdown 语法](https://www.runoob.com/markdown/md-tutorial.html)   

## 2. 了解Linux基本命令：ls,l,vi,vim,curl,wget,apt-get,oh-my-zsh

* ls:

  > (list files)  列出目录及文件名

* l

* vi,vim

  > Vim是从 vi 发展出来的一个文本编辑器。代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。
  >
  > 简单的来说， vi 是老式的字处理器，不过功能已经很齐全了，但是还是有可以进步的地方。 vim 则可以说是程序开发者的一项很好用的工具
  >
  > ## vi/vim 的使用
  >
  > 基本上 vi/vim 共分为三种模式，分别是**命令模式（Command mode）**，**输入模式（Insert mode）**和**底线命令模式（Last line mode）**。 这三种模式的作用分别是：
  >
  > ### 命令模式：
  >
  > 用户刚刚启动 vi/vim，便进入了命令模式。
  >
  > 此状态下敲击键盘动作会被Vim识别为命令，而非输入字符。比如我们此时按下i，并不会输入一个字符，i被当作了一个命令。
  >
  > 以下是常用的几个命令：
  >
  > - **i** 切换到输入模式，以输入字符。
  > - **x** 删除当前光标所在处的字符。
  > - **:** 切换到底线命令模式，以在最底一行输入命令。
  >
  > 若想要编辑文本：启动Vim，进入了命令模式，按下i，切换到输入模式。
  >
  > 命令模式只有一些最基本的命令，因此仍要依靠底线命令模式输入更多命令
  >
  > ### 输入模式
  >
  > 在命令模式下按下i就进入了输入模式。
  >
  > 在输入模式中，可以使用以下按键：
  >
  > - **字符按键以及Shift组合**，输入字符
  > - **ENTER**，回车键，换行
  > - **BACK SPACE**，退格键，删除光标前一个字符
  > - **DEL**，删除键，删除光标后一个字符
  > - **方向键**，在文本中移动光标
  > - **HOME**/**END**，移动光标到行首/行尾
  > - **Page Up**/**Page Down**，上/下翻页
  > - **Insert**，切换光标为输入/替换模式，光标将变成竖线/下划线
  > - **ESC**，退出输入模式，切换到命令模式
  >
  > ### 底线命令模式
  >
  > 在命令模式下按下:（英文冒号）就进入了底线命令模式。
  >
  > 底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。
  >
  > 在底线命令模式中，基本的命令有（已经省略了冒号）：
  >
  > - q 退出程序
  > - w 保存文件
  >
  > 按ESC键可随时退出底线命令模式。

  

* curl:  

  > 用URL传输数据的命令行工具和库，支持以下协议：DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMTP, SMTPS, TELNET,TFTP等。官网：https://curl.haxx.se/

* wget:      https://www.cnblogs.com/peida/archive/2013/03/18/2965369.html

  > Linux系统中的wget是一个下载文件的工具，它用在命令行下。对于Linux用户是必不可少的工具，我们经常要下载一些软件或从远程服务器恢复备份到本地服务器。wget支持HTTP，HTTPS和FTP协议，可以使用HTTP代理。所谓的自动下载是指，wget可以在用户退出系统的之后在后台执行。这意味这你可以登录系统，启动一个wget下载任务，然后退出系统，wget将在后台执行直到任务完成，相对于其它大部分浏览器在下载大量数据时需要用户一直的参与，这省去了极大的麻烦。
  >
  > wget 可以跟踪HTML页面上的链接依次下载来创建远程服务器的本地版本，完全重建原始站点的目录结构。这又常被称作”递归下载”。在递归下载的时候，wget 遵循Robot Exclusion标准(/robots.txt). wget可以在下载的同时，将链接转换成指向本地文件，以方便离线浏览。
  >
  > wget 非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性.如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。
  >
  > **1．****命令格式：**
  >
  > wget [参数] [URL地址]
  >
  > **2．****命令功能：**
  >
  > 用于从网络上下载资源，没有指定目录，下载资源回默认为当前目录。wget虽然功能强大，但是使用起来还是比较简单：
  >
  > 1）支持断点下传功能；这一点，也是网络蚂蚁和FlashGet当年最大的卖点，现在，Wget也可以使用此功能，那些网络不是太好的用户可以放心了；
  >
  > 2）同时支持FTP和HTTP下载方式；尽管现在大部分软件可以使用HTTP方式下载，但是，有些时候，仍然需要使用FTP方式下载软件；
  >
  > 3）支持代理服务器；对安全强度很高的系统而言，一般不会将自己的系统直接暴露在互联网上，所以，支持代理是下载软件必须有的功能；
  >
  > 4）设置方便简单；可能，习惯图形界面的用户已经不是太习惯命令行了，但是，命令行在设置上其实有更多的优点，最少，鼠标可以少点很多次，也不要担心是否错点鼠标；
  >
  > 5）程序小，完全免费；程序小可以考虑不计，因为现在的硬盘实在太大了；完全免费就不得不考虑了，即使网络上有很多所谓的免费软件，但是，这些软件的广告却不是我们喜欢的。

* apt-get:       https://www.sysgeek.cn/apt-vs-apt-get/

  > 虽然 apt 与 apt-get 有一些类似的命令选项，但它并不能完全向下兼容 apt-get 命令。也就是说，可以用 apt 替换部分 apt-get 系列命令，但不是全部。
  >
  > |     apt 命令     |      取代的命令      |           命令的功能           |
  > | :--------------: | :------------------: | :----------------------------: |
  > |   apt install    |   apt-get install    |           安装软件包           |
  > |    apt remove    |    apt-get remove    |           移除软件包           |
  > |    apt purge     |    apt-get purge     |      移除软件包及配置文件      |
  > |    apt update    |    apt-get update    |         刷新存储库索引         |
  > |   apt upgrade    |   apt-get upgrade    |     升级所有可升级的软件包     |
  > |  apt autoremove  |  apt-get autoremove  |       自动删除不需要的包       |
  > | apt full-upgrade | apt-get dist-upgrade | 在升级软件包时自动处理依赖关系 |
  > |    apt search    |   apt-cache search   |          搜索应用程序          |
  > |     apt show     |    apt-cache show    |           显示装细节           |
  >
  > 当然，apt 还有一些自己的命令：
  >
  > |   新的apt命令    |              命令的功能              |
  > | :--------------: | :----------------------------------: |
  > |     apt list     | 列出包含条件的包（已安装，可升级等） |
  > | apt edit-sources |              编辑源列表              |
  >
  > 需要注意的是：apt 命令也还在不断发展， 因此，你可能会在将来的版本中看到新的选项。

* apt:       https://www.runoob.com/linux/linux-comm-apt.html

  > apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。
  >
  > apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。
  >
  > apt 命令执行需要超级管理员权限(root)。
  >
  > ### apt 语法
  >
  > ```
  >   apt [options] [command] [package ...]
  > ```
  >
  > - **options：**可选，选项包括 -h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。
  > - **command：**要进行的操作。
  > - **package**：安装的包名。
  >
  > ------
  >
  > ## apt 常用命令
  >
  > - 列出所有可更新的软件清单命令：**sudo apt update**
  >
  > - 升级软件包：**sudo apt upgrade**
  >
  >   列出可更新的软件包及版本信息：**apt list --upgradeable**
  >
  >   升级软件包，升级前先删除需要更新软件包：**sudo apt full-upgrade**
  >
  > - 安装指定的软件命令：**sudo apt install <package_name>**
  >
  >   安装多个软件包：**sudo apt install <package_1> <package_2> <package_3>**
  >
  > - 更新指定的软件命令：**sudo apt update <package_name>**
  >
  > - 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等：**sudo apt show <package_name>**
  >
  > - 删除软件包命令：**sudo apt remove <package_name>**
  >
  > - 清理不再使用的依赖和库文件: **sudo apt autoremove**
  >
  > - 移除软件包及配置文件: **sudo apt purge <package_name>**
  >
  > - 查找软件包命令： **sudo apt search <keyword>**
  >
  > - 列出所有已安装的包：**apt list --installe**d
  >
  >   列出所有已安装的包的版本信息：**apt list --all-versions**

* oh-my-zsh:     使用方法：https://www.jianshu.com/p/d194d29e488c

  > oh-my-zsh是一款社区驱动的命令行工具。有许多精美的主题和强大的插件，还有比bash更强大别名功能，美观方便
  >
  > 各种主题：https://github.com/ohmyzsh/ohmyzsh/wiki/Themes

