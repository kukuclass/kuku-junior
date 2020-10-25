## 安装适用于Windows的Linux子系统

安装成功后，可以通过Hyper终端，连接ubuntu，使用linux命令直接操作Windows中的fs。

参考：https://evdokimovm.github.io/windows/zsh/shell/syntax/highlighting/ohmyzsh/hyper/terminal/2017/02/24/how-to-install-zsh-and-oh-my-zsh-on-windows-10.html

### 安装步骤如下：

#### 1.将windows设置成开发人员模式

设置——开发者选项——开发人员模式

#### 2.从windows store安装ubuntu

参考：https://docs.microsoft.com/zh-cn/windows/wsl/install-win10，只见步骤6，直接安装ubuntu即可。在安装Ubuntu并重新启动PC后，可以在命令提示符下使用bash或ubuntu命令运行它

#### 3.安装 Hyper Terminal

去https://hyper.is/，安装适合本机的Hyper

#### 4.安装Zsh和Oh My Zsh

启动ubuntu，安装zsh和 oh-my-zsh

安装Zsh：

```
`sudo apt-get install zsh`
```

oh-my-zsh地址：https://github.com/ohmyzsh/ohmyzsh

作用：

1.zsh和bash是两个不同的概念，zsh是bash的增强版，zsh更加强大。通常zsh配置起来非常麻烦，且相当的复杂，所以oh-my-zsh是为了简化zsh的配置而开发的，因此oh-my-zsh算是zsh的配置。

2.`oh-my-zsh` 的强大：

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

安装oh-my-zsh：

```
`curl -L https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh | bash`
```

注意：这里容易出现443，需要在hosts配置文件中增加199.232.68.133 raw.githubusercontent.com

执行：

```
`sudo vim /etc/hosts`
```

hosts文件位于" C:\Windows\System32\drivers\etc "目录下，主要作用是定义IP地址和主机名的映射关系，是一个映射IP地址和主机名的规定。在浏览器中通过域名访问网站，首先查看hosts文件中是否存在域名与IP的地址转换，如果存在则直接根据IP地址进行访问；否则向DNS服务器发送请求，根据返回结果中的IP进行访问。

hosts文件作用：

​	1.提升网站的访问速度。如果在hosts中配置了常用的网址和IP的映射关系，就省去了向DNS服务器发送请求获取IP的过程，从而更快的访问网站速度。

​	2.记录常用IP地址

#### 5.配置并运行我的Zsh

打开ubuntu，执行 chsh -s /usr/bin/zsh，它将zsh作为默认的shell环境自动运行

#### 6.配置并运行超级终端

安装超级终端后，打开`%USERPROFILE%/.hyper.js`配置文件并替换行：

```
shell: '',
shellArgs: ['--login'],
```

替换为

```
shell: 'C:\\Windows\\System32\\cmd.exe',
shellArgs: ['--login', '-i', '/c wsl'],
```

#### 7.更换终端

可以使用下列命令在不同终端间切换。

```bash
chsh -s /bin/zsh #切换为zsh
chsh -s /bin/bash #切换回bash
```

#### 8.总结

​	zsh是ubuntu的一个命令行插件，兼容 Bash，据传说 99% 的 Bash 操作 和 Zsh 是相同的，默认 CentOS / Ubuntu / Mac 系统用的是 Bash。

​	要注意的是，如果之前有配置在bash中的配置文件，切换了终端之后会无法使用，需要在zsh终端重新配置。一般来说，bash的配置文件在~/.bashrc 或者~/.bash_profile中，而zsh则在~/.zshrc中。