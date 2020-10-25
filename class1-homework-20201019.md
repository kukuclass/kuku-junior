### 作业1: 学习/复习markdown语法

#### Markdown基本语法

​	HTML 的全称是hypertext markup language ，注意里面的markup ，刚好和markdown 相反，所以Markdown的意思应该是反标记。 Markdown都不是用来替代 HTML 的，更不是用于前端开发、写完整页面的。Markdown 的设计目的是方便写作的时候，标记格式、同时使标记格式后的纯文本，比起 HTML 源码，更有可读性。

| markdown语法  |                            语法糖                            |                             案例                             |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|     标题      | 一个#是一级标题，二个#是二级标题，以此类推。<br>注：标准语法一般在#后跟个空格再写文字 |                            # tyw                             |
|   字体-加粗   |                   左右分别用两个*号包起来                    |                      **这是加粗的文字**                      |
|   字体-斜体   |                   左右分别用一个*号包起来                    |                       *这是倾斜的文字*                       |
| 字体-斜体加粗 |                   左右分别用三个*号包起来                    |                   ***这是斜体加粗的文字***                   |
|  字体-删除线  |                   左右分别用两个~~号包起来                   |                    ~~这是加删除线的文字~~                    |
|     引用      | 在引用的文字前加>即可。<br>引用也可以嵌套，如加两个>>三个<br>>>> n个... |                       > 这是引用的内容                       |
|     图片      | ![图片alt](图片地址 ''图片title'')<br/><br/>图片alt就是显示在图片下面的文字，相当于对图片内容的解释。<br/>图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加 |                                                              |
|    超链接     |   [超链接名](超链接地址 "超链接title")<br/>title可加可不加   |           [简书](http://jianshu.com "baidu")<br/>            |
| 列表-无序列表 |               无序列表用 - + * 任何一种都可以                | - 列表内容<br/>+ 列表内容<br/>* 列表内容<br/><br/>注意：- + * 跟内容之间都要有一个空格 |
| 列表-有序列表 |                           数字加点                           | 1. 列表内容 2. 列表内容 3. 列表内容  注意：序号跟内容之间要有空格 |
|     表格      |                \|,原声语法两边都要用｜包起来                 |                      \|dayao1\|dayao2\|                      |
| 代码-单行代码 |           单行代码：代码之间分别用一个反引号包起来           |                          `代码内容`                          |
|  代码-代码块  | 代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行 |                           ```we```                           |
|    流程图     |                             flow                             | ```flow<br/>st=>start: 开始<br/>op=>operation: My Operation<br/>cond=>condition: Yes or No?<br/>e=>end<br/>st->op->cond<br/>cond(yes)->e<br/>cond(no)->op<br/>&``` |

### 作业2: 了解linux的基本命令: ls, l, vi, vim, curl, wget, apt-get

|                    命令                     |                             作用                             |                             备注                             |
| :-----------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                     Tab                     |             具有『命令补全』不『档案补齐』的功能             |                           常用热键                           |
|                   Ctrl+c                    |                     让当前的程序『停掉』                     |                           常用热键                           |
|                   Ctrl+d                    | 通常代表着：『键盘输入结束(End Of File, EOF 戒 End OfInput)』的意思；另外，他也可以用来取代exit |                           常用热键                           |
|                     cd                      |                           切换目录                           |                                                              |
|                     pwd                     |                       显示当前所在目录                       |                                                              |
|                    mkdir                    |                          建立新目录                          |                                                              |
|                    rmdir                    |                          删除空目录                          |                                                              |
|                     ls                      |                       档案与目录的显示                       |                                                              |
|                     cp                      |                        复制档案或目录                        |                                                              |
|                     rm                      |                        移除档案或目录                        |                                                              |
|                     mv                      |                        移动档案与目录                        |                                                              |
|              basename、dirname              |                   取得路径的文件名与目录名                   |                                                              |
|                     cat                     |                   由第一行开始显示档案内容                   |                                                              |
|                     tac                     |   从最后一行开始显示：tac（可以看出 tac 是 cat 的倒着写）    |                                                              |
|                    head                     |                          只看头几行                          |                                                              |
|                    tail                     |                          只看尾几行                          |                                                              |
|                    touch                    |                    修改档案时间或新建档案                    |                                                              |
|                    which                    |                  搜索系统命令所在路径及别名                  |                                                              |
|                   whereis                   |                     搜索系统命令所在位置                     |                                                              |
|                    find                     |                      查找符合条件的文件                      |                                                              |
|        zip 【压缩文件名】 【源文件】        |                       zip格式压缩文件                        |                                                              |
|      zip -r 【压缩文件名】 【源目录】       |                       zip格式压缩目录                        |                                                              |
|             unzip 【压缩文件】              |                        解压缩.zip文件                        |                                                              |
|               gzip 【源文件】               |             压缩为.gz格式的压缩文件，源文件消失              |                                                              |
|      gzip -c 【源文件】 > 【压缩文件】      |                  压缩为.gz格式，源文件保留                   |                                                              |
|  gzip -d 【压缩文件】、gunzip 【压缩文件】  |                        解压缩.gz文件                         |                                                              |
|              bzip2 【源文件】               |                压缩为.bz2格式，bu不保留源文件                |                                                              |
|             bzip2 -k 【源文件】             |                       压缩后保留源文件                       |                                                              |
| bzip2 -d 【压缩文件】、bunzip2 【压缩文件】 |                    解压缩，-k保留压缩文件                    |                                                              |
|     tar -cvf 【打包文件名】 【源文件】      |          打包命令tar，用于解决目录不能被压缩的问题           |                                                              |
|           tar -xvf 【打包文件名】           |                            解打包                            |                                                              |
|         ls 【选项】 【文件或目录】          |                              -a                              |                  显示所有文件，包括隐藏文件                  |
|                                             |                              -l                              |                         显示详细信息                         |
|                                             |                              -d                              |                         查看目录属性                         |
|                                             |                              -h                              |                     人性化显示文件的大小                     |
|                                             |                              -i                              |                          显示inode                           |
|                      l                      |                              -a                              |                         显示所有文件                         |
|                                             |                              -b                              |                      带单位显示文件大小                      |
|                                             |                              -d                              |                    显示文件目录，不是内容                    |
|                   vi/vim                    | vim编辑器是所有Unix及Linux系统下标准的编辑器，它的强大不逊色于任何最新的文本编辑器;vi也是Linux中最基本的文本编辑器,vim就是vi的升级版。 | vi/vim可以分为三种状态，分别是命令模式（command mode）、插入模式（Insert mode）和底行模式（last line mode） |
|                   进入vi                    |                                                              |                                                              |
|                                             |                         vi filename                          |             打开或新建文件，并将光标置于第一行首             |
|                                             |                        vi +n filename                        |                打开文件，并将光标置于第n行首                 |
|                                             |                        vi + filename                         |               打开文件，并将光标置于最后一行首               |
|                                             |                    vi +/pattern filename                     |       打开文件，并将光标置于第一个与pattern匹配的串处        |
|                                             |                        vi -r filename                        |         在上次正用vi编辑时发生系统崩溃，恢复filename         |
|                                             |                   vi filename....filename                    |                  打开多个文件，依次进行编辑                  |
|    切换至插入模式（Insert mode）编辑文件    |                                                              |                                                              |
|                                             | 按「i」切换进入插入模式「insert mode」，按"i"进入插入模式后是从光标当前位置开始输入文件； |                                                              |
|                                             | 按「a」进入插入模式后，是从目前光标所在位置的下一个位置开始输入文字； |                                                              |
|                                             | 按「o」进入插入模式后，是插入新的一行，从行首开始输入文字。  |                                                              |
|              退出vi及保存文件               |                按「ESC」键，切换为命令行模式                 |                                                              |
|                                             | 在「命令行模式（command mode）」下，按一下「：」冒号键进入「Last line mode」，例如： |                                                              |
|                                             |                         : w filename                         |   （输入 「w filename」将文章以指定的文件名filename保存）    |
|                                             |                             : wq                             |                  (输入「wq」，存盘并退出vi)                  |
|                                             |                             : q!                             |                 (输入q!， 不存盘强制退出vi)                  |
|                    curl                     | 在Linux中curl是一个利用URL规则在命令行下工作的文件传输工具，可以说是一款很强大的http命令行工具。它支持文件的上传和下载，是综合传输工具，但按传统，习惯称url为下载工具。 |                                                              |
|             curl [option] [url]             |             基本用法：curl http://www.linux.com              |                                                              |
|                                             |                   -A/--user-agent <string>                   |                   设置用户代理发送给服务器                   |
|                                             |                -b/--cookie <name=string/file>                |                  cookie字符串或文件读取位置                  |
|                                             |                    -c/--cookie-jar <file>                    |              操作结束后把cookie写入到这个文件中              |
|                                             |                  -C/--continue-at <offset>                   |                           断点续转                           |
|                                             |                   -D/--dump-header <file>                    |                  把header信息写入到该文件中                  |
|                                             |                         -e/--referer                         |                           来源网址                           |
|                                             |                          -f/--fail                           |                   连接失败时不显示http错误                   |
|                                             |                         -o/--output                          |                      把输出写到该文件中                      |
|                                             |                       -O/--remote-name                       |           把输出写到该文件中，保留远程文件的文件名           |
|                                             |                      -r/--range <range>                      |             检索来自HTTP/1.1或FTP服务器字节范围              |
|                                             |                         -s/--silent                          |                   静音模式。不输出任何东西                   |
|                                             |                   -T/--upload-file <file>                    |                           上传文件                           |
|                                             |                 -u/--user <user[:password]>                  |                    设置服务器的用户和密码                    |
|                                             |                   -w/--write-out [format]                    |                        什么输出完成后                        |
|                                             |                   -x/--proxy <host[:port]>                   |                  在给定的端口上使用HTTP代理                  |
|                                             |                      -#/--progress-bar                       |                   进度条显示当前的传送状态                   |
|                    wget                     |              wget命令用来从指定的URL下载文件。               |                                                              |
|              wget(选项)(参数)               |                                                              | wget http://test.com/testfile.zip ->下载指定文件到当前文件夹 |
|                                             |                              -b                              | 进行后台的方式运行wget，wget -b http://www.linuxde.net/testfile.zip ->后台下载 |
|                                             |                              -c                              | 继续执行上次终端的任务；例：wget -c http://www.linuxde.net/testfile.zip ->断点续传 |
|                                             |                             -nc                              |             文件存在时，下载文件不覆盖原有文件；             |
|                                             |                             -nv                              |    下载时只显示更新和出错信息，不显示指令的详细执行过程；    |
|                                             |                              -q                              |                     不显示指令执行过程；                     |
|                                             |                              v                               |                      显示详细执行过程；                      |
|                                             |                  -O，-output-document=file                   | 将下载内容写入到file文件中。wget -O wordpress.zip http://test.com/download ->指定保存名字 |
|                                             |                         --limit-rate                         | wget --limit-rate=300k http://www.linuxde.net/testfile.zip ->限制下载速度 |
|                   apt-get                   | apt-get，是一条linux命令，适用于deb包管理式的操作系统，主要用于自动从互联网的软件仓库中搜索、安装、升级、卸载软件或操作系统。apt-get命令一般需要root权限执行，所以一般跟着sudo命令。 |                                                              |
|                                             |                         update：更新                         |                     sudo apt-get update                      |
|                                             |           upgrate：升级（dist-upgrade 不建议使用）           |                     sudo apt-get upgrade                     |
|                                             |        sudo apt-get update && sudo apt-get upgrade -y        | 更新是更新包的数据库，让系统知道有新的包了。升级呢？是真的去升级，因此，这两个命令通常一起使用。 |
|                                             |                        install：安装                         |         sudo apt-get install <package_1> <package_2>         |
|                                             | remove：删除（只删除包的二进制文件。不会触及其他文件。程序就是可执行的二进制文件） | apt-get remove packagename #卸载一个已安装的软件包（保留配置文档） |
|                                             |     purge：删除（删除与包相关的所有内容，包括配置文件）      | apt-get remove --purge packagename #卸载一个已安装的软件包（删除配置文档） |
|                                             |            clean ：清除检索到的包文件的本地存储库            |                                                              |
|                                             |  autoclean：删除现在有更新版本的检索包文件，它们将不再使用   |  sudo apt-get clean && sudo apt-get autoclean 清理无用的包   |
|                                             | autoremove：删除自动安装的lib和软件包，以满足以安装软件的依赖关系 |    apt-get autoremove packagename #删除包及其依赖的软件包    |
|                  apt-cache                  |                        search：搜索包                        |                                                              |
|                                             |                pkgnames：搜索具有特定名称的包                |                                                              |
|                                             |                  showpkg：查看包的详细信息                   |                                                              |

##### Linux下载：wget、curl、yum与apt-get用法及区别

一般来说著名的linux系统基本上分两大类：

- RedHat系列：Redhat、Centos、Fedora等
- Debian系列：Debian、Ubuntu等

RedHat 系列

- 常见的安装包格式 rpm包,安装rpm包的命令是“rpm -参数”
- 包管理工具 yum
- 支持tar包

Debian系列

1. 常见的安装包格式 deb包,安装deb包的命令是“dpkg -参数”
2. 包管理工具 apt-get
3. 支持tar包

yum可以用于运作rpm包，能够从指定资源服务器下载rpm安装包并自动安装，可以自动处理依赖关系，并且一次性安装所有的依赖包，例如在Fedora系统上对某个软件的管理：

1. 安装：yum install
2. 卸载：yum remove
3. 更新：yum update

apt-get可以用于运作deb包，例如在Ubuntu系统上对某个软件的管理：

1. 安装：apt-get install
2. 卸载：apt-get remove
3. 更新：apt-get update

​	wget不是安装方式，而是一种下载工具，简单，专一，极致；而curl可以下载，但是长项不在于下载，而在于模拟提交web数据，POST/GET请求，调试网页，等等。在下载上，也各有所长，wget可以递归，支持断点；而curl支持URL中加入变量，因此可以批量下载。综上，curl由于可自定义各种请求参数所以在模拟web请求方面更擅长；wget由于支持ftp和Recursive所以在下载文件方面更擅长。类比的话curl是浏览器，而wget是迅雷9。

如果当前ubuntu未安装wget，可按下列操作进行安装和检查是否安装成功：

- sudo apt-get update
- sudo apt-get install wget
- wget --version

### 作业2补充：yum是什么

中文名：Shell前端软件包管理器

[yum](http://www.yanghengfei.com/tag/yum/)（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE中的Shell前端软件包管理器。基于RPM包(RPM 是 Red Hat Package Manager 的缩写，本意是Red Hat 软件包管理，顾名思义是Red Hat 贡献出来的软件包管理)管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。

yum的宗旨是自动化地升级，安装/移除rpm包，收集rpm包的相关信息，检查依赖性并自动提示用户解决。yum的关键之处是要有可靠的repository，顾名思义，这是软件的仓库，它可以是http或ftp站点， 也可以是本地软件池，

### 作业2补充：了解学习oh-my-zsh

1.zsh是ubuntu的一个命令行插件，兼容 Bash，据传说 99% 的 Bash 操作 和 Zsh 是相同的，默认 CentOS / Ubuntu / Mac 系统用的是 Bash。

2.zsh和bash是两个不同的概念，zsh是bash的增强版，zsh更加强大。通常zsh配置起来非常麻烦，且相当的复杂，所以oh-my-zsh是为了简化zsh的配置而开发的，因此oh-my-zsh算是zsh的配置。

3.`oh-my-zsh` 的强大：

a.**主题选择**

```
$ vim ~/.zshrc
#修改主题名称
ZSH_THEME="ys"
#然后重新加载配置文件，每次修改配置文件后，都需要再次加载配置文件才能生效
$ source ~/.zshrc
```

b.**插件**

oh-my-zsh默认安装了git插件，在git仓库中，会提示当前所在的分支。此外，还有大量优秀的插件，比如：extract、z、zsh-autosuggestions，具体可查看插件仓库https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins.

