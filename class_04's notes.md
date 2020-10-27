#### 一、markdown语法

##### 1、标题

在想要设置为标题的文字前面加#来表示
 一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。

注：标准语法一般在#后跟个空格再写文字，貌似简书不加空格也行。

示例：

```markdown
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

##### 2、字体

要加粗的文字左右分别用两个*号包起来

要倾斜的文字左右分别用一个*号包起来

要倾斜和加粗的文字左右分别用三个*号包起来

要加删除线的文字左右分别用两个~~号包起来

示例：

```markdown
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```

##### 3、引用

在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>
 n个...
 貌似可以一直加下去，但没神马卵用

示例：

```markdown
>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容
```

##### 4、分割线

三个或三个以上的-或者*

---

##### 5、图片

```markdown
![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
```

##### 6、超链接

```markdown
[超链接名](超链接地址 "超链接title")
title可加可不加
```

 Markdown本身语法不支持链接在新页面中打开，如果想要在新页面中打开的话可以用html语言的a标签代替。 

##### 7、列表

无序列表用 - + *都可以

```markdown
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
```

有序列表

数字加点

```markdown
1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
```

列表嵌套

上一级和下一级之前敲三个空格

##### 8、表格

```markdown
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
```

##### 9、代码

单行代码用反引号包起来

```markdown
  `代码内容`
```

代码块：代码之间用三个反引号包起来，且两边的反引号单独占一行

```markdown
(```)
  代码...
  代码...
  代码...
(```)
```

#### 二、 了解linux的基本命令

##### 1、ls：命令用于显示指定工作目录下之内容

​       -a 显示所有文件及目录(.开头的隐藏文件不会列出)

​       -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出

​       -r 将文件以相反次序显示(原定依英文字母次序)

​       -t 将文件依建立时间之先后次序列出

​       -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)

   **cd命令**用来切换工作目录至dirname。 其中dirName表示法可为绝对路径或相对路径 

```shell
cd    # 进入用户主目录；
cd /  # 进入根目录
cd ~  # 进入用户主目录；
cd ..  # 返回上级目录（若当前目录为“/“，则执行完后还在“/"；".."为上级目录的意思）；
cd ../..  # 返回上两级目录；
```

**rm** **命令** 可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。

语法

```shell
rm (选项)(参数)
```

选项

```shell
-d：直接把欲删除的目录的硬连接数据删除成0，删除该目录；
-f：强制删除文件或目录；
-i：删除已有文件或目录之前先询问用户；
-r或-R：递归处理，将指定目录下的所有文件与子目录一并处理；
--preserve-root：不对根目录进行递归操作；
-v：显示指令的详细执行过程。
```

**rm 命令删除文件**

```shellbash
# rm 文件1 文件2 ...
rm testfile.txt
```

**rm 命令删除目录**

> rm -r [目录名称] -r 表示递归地删除目录下的所有文件和目录。 -f 表示强制删除

```shell
rm -rf testdir
rm -r testdir
```

**删除操作前有确认提示**

> rm -i [文件/目录]

```shell
rm -r -i testdir
```

**rm 忽略不存在的文件或目录**

> -f 选项（LCTT 译注：即 “force”）让此次操作强制执行，忽略错误提示

```shell
rm -f [文件...]
```

##### 2、vi/vim 文本编辑器

​      分为三种模式：命令模式、输入模式和底线命令模式

​      命令模式：启动vi/vim，即进入了命令模式，在此状态下敲击键盘动作会被Vim识别为命令，而非识别字符。常用命令有：

​      i 切换到输入模式，以输入字符

​      x 删除当前光标所在处的字符

​      ：切换到底线命令模式，以在最底一行输入命令

在命令模式下按下i就进入了输入模式。 

在输入模式中，可以使用以下按键：

- **字符按键以及Shift组合**，输入字符
- **ENTER**，回车键，换行
- **BACK SPACE**，退格键，删除光标前一个字符
- **DEL**，删除键，删除光标后一个字符
- **方向键**，在文本中移动光标
- **HOME**/**END**，移动光标到行首/行尾
- **Page Up**/**Page Down**，上/下翻页
- **Insert**，切换光标为输入/替换模式，光标将变成竖线/下划线
- **ESC**，退出输入模式，切换到命令模式

###### 底线命令模式

在命令模式下按下:（英文冒号）就进入了底线命令模式。 

 底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。 

 在底线命令模式中，基本的命令有（已经省略了冒号）：

- q 退出程序
- w 保存文件

按ESC键可随时退出底线命令模式。

###### 其他常用的vim按键

移动：

0或功能键[home] ：移动到这一行最前面字符处

$或功能键[End]：移动到这一行的最后面字符处

G：移动到这个档案的最后一行

gg：移动到这个档案的第一行

n enter：n为数字，光标向下移动n行

搜索替换：

/word ：向光标之下寻找一个名为word的字符串

？word：向光标之上寻找一个名为word的字符串

n：重复前一个搜寻动作，若是/word，则继续向下搜索一个名为word的字符串，

​      ？word的话则继续向上搜寻。

N：与n相反，代表反向搜寻

| :n1,n2s/word1/word2/g                      | n1 与 n2 为数字。在第 n1 与 n2 行之间寻找 word1 这个字符串，并将该字符串取代为 	word2 ！举例来说，在 100 到 200 行之间搜寻 vbird 并取代为 VBIRD 则：  	『:100,200s/vbird/VBIRD/g』。 |
| ------------------------------------------ | ------------------------------------------------------------ |
| :1,$s/word1/word2/g 或 :%s/word1/word2/g   | 从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 	word2 ！ |
| :1,$s/word1/word2/gc 或 :%s/word1/word2/gc | 从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 	word2 ！且在取代前显示提示字符给用户确认 (confirm) 	是否需要取代！ |

删除、复制与粘贴：

dd：删除游标所在的那一整行

ndd：n为数字。删除光标所在的向下n行

yy：复制游标所在的那一行

nyy：复制光标所在的向下n行

y0/$：复制光标所在位置到该行行首/行尾的所有数据

| u        | 复原前一个动作。 |
| -------- | ---------------- |
| [Ctrl]+r | 重做上一个动作。 |

p, P：p将已复制的内容放在光标下一行位置贴上，P则贴在光标的上一行



##### 3、curl：

 curl 是常用的命令行工具，用来请求 Web 服务器。它的名字就是客户端（client）的 URL 工具的意思。

 curl命令可以用来执行下载、发送各种HTTP请求，指定HTTP头部等操作。

不带有任何参数时，curl 就是发出 GET 请求。

> ```bash
> $ curl https://www.example.com
> ```

上面命令向`www.example.com`发出 GET 请求，服务器返回的内容会在命令行输出。



`-A`参数指定客户端的用户代理标头，即`User-Agent`。curl 的默认用户代理字符串是`curl/[version]`。

> ```bash
> $ curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com
> ```

上面命令将`User-Agent`改成 Chrome 浏览器。

> ```bash
> $ curl -A '' https://google.com
> ```

上面命令会移除`User-Agent`标头。

也可以通过`-H`参数直接指定标头，更改`User-Agent`。

> ```bash
> $ curl -H 'User-Agent: php/1.0' https://google.com
> ```



`-b`参数用来向服务器发送 Cookie。

> ```bash
> $ curl -b 'foo=bar' https://google.com
> ```

上面命令会生成一个标头`Cookie: foo=bar`，向服务器发送一个名为`foo`、值为`bar`的 Cookie。

> ```bash
> $ curl -b 'foo1=bar;foo2=bar2' https://google.com
> ```

上面命令发送两个 Cookie。

> ```bash
> $ curl -b cookies.txt https://www.google.com
> ```

上面命令读取本地文件`cookies.txt`，里面是服务器设置的 Cookie（参见`-c`参数），将其发送到服务器。



`-c`参数将服务器设置的 Cookie 写入一个文件。

> ```bash
> $ curl -c cookies.txt https://www.google.com
> ```

上面命令将服务器的 HTTP 回应所设置 Cookie 写入文本文件`cookies.txt`。



`-d`参数用于发送 POST 请求的数据体。

> ```bash
> $ curl -d'login=emma＆password=123'-X POST https://google.com/login
> # 或者
> $ curl -d 'login=emma' -d 'password=123' -X POST  https://google.com/login
> ```

使用`-d`参数以后，HTTP 请求会自动加上标头`Content-Type : application/x-www-form-urlencoded`。并且会自动将请求转为 POST 方法，因此可以省略`-X POST`。

`-d`参数可以读取本地文本文件的数据，向服务器发送。

> ```bash
> $ curl -d '@data.txt' https://google.com/login
> ```

上面命令读取`data.txt`文件的内容，作为数据体向服务器发送。



`--data-urlencode`参数等同于`-d`，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码。

> ```bash
> $ curl --data-urlencode 'comment=hello world' https://google.com/login
> ```

上面代码中，发送的数据`hello world`之间有一个空格，需要进行 URL 编码。



`-e`参数用来设置 HTTP 的标头`Referer`，表示请求的来源。

> ```bash
> curl -e 'https://google.com?q=example' https://www.example.com
> ```

上面命令将`Referer`标头设为`https://google.com?q=example`。

`-H`参数可以通过直接添加标头`Referer`，达到同样效果。

> ```bash
> curl -H 'Referer: https://google.com?q=example' https://www.example.com
> ```



`-F`参数用来向服务器上传二进制文件。

> ```bash
> $ curl -F 'file=@photo.png' https://google.com/profile
> ```

上面命令会给 HTTP 请求加上标头`Content-Type: multipart/form-data`，然后将文件`photo.png`作为`file`字段上传。

`-F`参数可以指定 MIME 类型。

> ```bash
> $ curl -F 'file=@photo.png;type=image/png' https://google.com/profile
> ```

上面命令指定 MIME 类型为`image/png`，否则 curl 会把 MIME 类型设为`application/octet-stream`。

`-F`参数也可以指定文件名。

> ```bash
> $ curl -F 'file=@photo.png;filename=me.png' https://google.com/profile
> ```

上面命令中，原始文件名为`photo.png`，但是服务器接收到的文件名为`me.png`。



`-G`参数用来构造 URL 的查询字符串。

> ```bash
> $ curl -G -d 'q=kitties' -d 'count=20' https://google.com/search
> ```

上面命令会发出一个 GET 请求，实际请求的 URL 为`https://google.com/search?q=kitties&count=20`。如果省略`--G`，会发出一个 POST 请求。

如果数据需要 URL 编码，可以结合`--data--urlencode`参数。

> ```bash
> $ curl -G --data-urlencode 'comment=hello world' https://www.example.com
> ```



`-H`参数添加 HTTP 请求的标头。

> ```bash
> $ curl -H 'Accept-Language: en-US' https://google.com
> ```

上面命令添加 HTTP 标头`Accept-Language: en-US`。

> ```bash
> $ curl -H 'Accept-Language: en-US' -H 'Secret-Message: xyzzy' https://google.com
> ```

上面命令添加两个 HTTP 标头。

> ```bash
> $ curl -d '{"login": "emma", "pass": "123"}' -H 'Content-Type: application/json' https://google.com/login
> ```

上面命令添加 HTTP 请求的标头是`Content-Type: application/json`，然后用`-d`参数发送 JSON 数据。



`-i`参数打印出服务器回应的 HTTP 标头。

> ```bash
> $ curl -i https://www.example.com
> ```

上面命令收到服务器回应后，先输出服务器回应的标头，然后空一行，再输出网页的源码。



`-I`参数向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来。

> ```bash
> $ curl -I https://www.example.com
> ```

上面命令输出服务器对 HEAD 请求的回应。

`--head`参数等同于`-I`。

> ```bash
> $ curl --head https://www.example.com
> ```



`-k`参数指定跳过 SSL 检测。

> ```bash
> $ curl -k https://www.example.com
> ```

上面命令不会检查服务器的 SSL 证书是否正确。



`-L`参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。

> ```bash
> $ curl -L -d 'tweet=hi' https://api.twitter.com/tweet
> ```



`--limit-rate`用来限制 HTTP 请求和回应的带宽，模拟慢网速的环境。

> ```bash
> $ curl --limit-rate 200k https://google.com
> ```

上面命令将带宽限制在每秒 200K 字节。



`-o`参数将服务器的回应保存成文件，等同于`wget`命令。

> ```bash
> $ curl -o example.html https://www.example.com
> ```

上面命令将`www.example.com`保存成`example.html`。



`-O`参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名。

> ```bash
> $ curl -O https://www.example.com/foo/bar.html
> ```

上面命令将服务器回应保存成文件，文件名为`bar.html`。



`-s`参数将不输出错误和进度信息。

> ```bash
> $ curl -s https://www.example.com
> ```

上面命令一旦发生错误，不会显示错误信息。不发生错误的话，会正常显示运行结果。

如果想让 curl 不产生任何输出，可以使用下面的命令。

> ```bash
> $ curl -s -o /dev/null https://google.com
> ```



`-S`参数指定只输出错误信息，通常与`-s`一起使用。

> ```bash
> $ curl -s -o /dev/null https://google.com
> ```

上面命令没有任何输出，除非发生错误。



`-u`参数用来设置服务器认证的用户名和密码。

> ```bash
> $ curl -u 'bob:12345' https://google.com/login
> ```

上面命令设置用户名为`bob`，密码为`12345`，然后将其转为 HTTP 标头`Authorization: Basic Ym9iOjEyMzQ1`。

curl 能够识别 URL 里面的用户名和密码。

> ```bash
> $ curl https://bob:12345@google.com/login
> ```

上面命令能够识别 URL 里面的用户名和密码，将其转为上个例子里面的 HTTP 标头。

> ```bash
> $ curl -u 'bob' https://google.com/login
> ```

上面命令只设置了用户名，执行后，curl 会提示用户输入密码。



`-v`参数输出通信的整个过程，用于调试。

> ```bash
> $ curl -v https://www.example.com
> ```

`--trace`参数也可以用于调试，还会输出原始的二进制数据。

> ```bash
> $ curl --trace - https://www.example.com
> ```



`-x`参数指定 HTTP 请求的代理。

> ```bash
> $ curl -x socks5://james:cats@myproxy.com:8080 https://www.example.com
> ```

上面命令指定 HTTP 请求通过`myproxy.com:8080`的 socks5 代理发出。

如果没有指定代理协议，默认为 HTTP。

> ```bash
> $ curl -x james:cats@myproxy.com:8080 https://www.example.com
> ```

上面命令中，请求的代理使用 HTTP 协议。



`-X`参数指定 HTTP 请求的方法。

> ```bash
> $ curl -X POST https://www.example.com
> ```

上面命令对`https://www.example.com`发出 POST 请求。



##### 4、wget

 **wget命令**用来从指定的URL下载文件。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。 

语法：

```
wget(选项)(参数)
```

选项 

```
-a<日志文件>：在指定的日志文件中记录资料的执行过程；
-A<后缀名>：指定要下载文件的后缀名，多个后缀名之间使用逗号进行分隔；
-b：进行后台的方式运行wget；
-B<连接地址>：设置参考的连接地址的基地地址；
-c：继续执行上次终端的任务；
-C<标志>：设置服务器数据块功能标志on为激活，off为关闭，默认值为on；
-d：调试模式运行指令；
-D<域名列表>：设置顺着的域名列表，域名之间用“，”分隔；
-e<指令>：作为文件“.wgetrc”中的一部分执行指定的指令；
-h：显示指令帮助信息；
-i<文件>：从指定文件获取要下载的URL地址；
-l<目录列表>：设置顺着的目录列表，多个目录用“，”分隔；
-L：仅顺着关联的连接；
-r：递归下载方式；
-nc：文件存在时，下载文件不覆盖原有文件；
-nv：下载时只显示更新和出错信息，不显示指令的详细执行过程；
-q：不显示指令执行过程；
-nh：不查询主机名称；
-v：显示详细执行过程；
-V：显示版本信息；
--passive-ftp：使用被动模式PASV连接FTP服务器；
--follow-ftp：从HTML文件中下载FTP连接文件。
```

参数 

URL：下载指定的URL地址。

 **使用wget下载单个文件** 

```shell
wget http://www.linuxde.net/testfile.zip
```

 以下的例子是从网络下载一个文件并保存在当前目录，在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。

 **下载并以不同的文件名保存**

```shell
wget -O wordpress.zip http://www.linuxde.net/download.aspx?id=1080
```

 wget默认会以最后一个符合`/`的后面的字符来命令，对于动态链接的下载通常文件名会不正确。

 错误：下面的例子会下载一个文件并以名称`download.aspx?id=1080`保存:

```shell
wget http://www.linuxde.net/download?id=1
```

 即使下载的文件是zip格式，它仍然以`download.php?id=1080`命令。

 正确：为了解决这个问题，我们可以使用参数`-O`来指定一个文件名：

```shell
wget -O wordpress.zip http://www.linuxde.net/download.aspx?id=1080
```

 **wget限速下载**

```shell
wget --limit-rate=300k http://www.linuxde.net/testfile.zip
```

 当你执行wget的时候，它默认会占用全部可能的宽带下载。但是当你准备下载一个大文件，而你还需要下载其它文件时就有必要限速了。

 **使用wget断点续传**

```shell
wget -c http://www.linuxde.net/testfile.zip
```

 使用`wget -c`重新启动下载中断的文件，对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。需要继续中断的下载时可以使用`-c`参数。

 **使用wget后台下载**

```shell
wget -b http://www.linuxde.net/testfile.zip

Continuing in background, pid 1840.
Output will be written to `wget-log'.
```

 对于下载非常大的文件的时候，我们可以使用参数`-b`进行后台下载，你可以使用以下命令来察看下载进度：

```shell
tail -f wget-log
```

 **伪装代理名称下载**

```shell
wget --user-agent="Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16" http://www.linuxde.net/testfile.zip
```

 有些网站能通过根据判断代理名称不是浏览器而拒绝你的下载请求。不过你可以通过`--user-agent`参数伪装。

 **测试下载链接**

 当你打算进行定时下载，你应该在预定时间测试下载链接是否有效。我们可以增加`--spider`参数进行检查。

```shell
wget --spider URL
```

 如果下载链接正确，将会显示:

```shell
Spider mode enabled. Check if remote file exists.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Remote file exists and could contain further links,
but recursion is disabled -- not retrieving.
```

 这保证了下载能在预定的时间进行，但当你给错了一个链接，将会显示如下错误:

```shell
wget --spider url
Spider mode enabled. Check if remote file exists.
HTTP request sent, awaiting response... 404 Not Found
Remote file does not exist -- broken link!!!
```

 你可以在以下几种情况下使用`--spider`参数：

-  定时下载之前进行检查
-  间隔检测网站是否可用
-  检查网站页面的死链接

 **增加重试次数**

```shell
wget --tries=40 URL
```

 如果网络有问题或下载一个大文件也有可能失败。wget默认重试20次连接下载文件。如果需要，你可以使用`--tries`增加重试次数。

 **下载多个文件**

```shell
wget -i filelist.txt
```

 首先，保存一份下载链接文件：

```shell
cat > filelist.txt
url1
url2
url3
url4
```

 接着使用这个文件和参数`-i`下载。

 **镜像网站**

```shell
wget --mirror -p --convert-links -P ./LOCAL URL
```

 下载整个网站到本地。

-  `--miror`开户镜像下载。
-  `-p`下载所有为了html页面显示正常的文件。
-  `--convert-links`下载后，转换成本地的链接。
-  `-P ./LOCAL`保存所有文件和目录到本地指定目录。

 **过滤指定格式下载**

```shell
wget --reject=gif ur
```

 下载一个网站，但你不希望下载图片，可以使用这条命令。

 **把下载信息存入日志文件**

```shell
wget -o download.log URL
```

 不希望下载信息直接显示在终端而是在一个日志文件，可以使用。

 **限制总下载文件大小**

```shell
wget -Q5m -i filelist.txt
```

 当你想要下载的文件超过5M而退出下载，你可以使用。注意：这个参数对单个文件下载不起作用，只能递归下载时才有效。

 **下载指定格式文件**

```shell
wget -r -A.pdf url
```

 可以在以下情况使用该功能：

-  下载一个网站的所有图片。
-  下载一个网站的所有视频。
-  下载一个网站的所有PDF文件。

 **FTP下载**

```shell
wget ftp-url
wget --ftp-user=USERNAME --ftp-password=PASSWORD url
```

 可以使用wget来完成ftp链接的下载。

 使用wget匿名ftp下载：

```shell
wget ftp-url
```

 使用wget用户名和密码认证的ftp下载：

```shell
wget --ftp-user=USERNAME --ftp-password=PASSWORD url
```

##### 5、apt-get 

  Ubuntu源自Debian Linux。Debian使用dpkg打包系统。包装系统是一种为安装提供程序和应用程序的方法。 apt-get命令 是Debian Linux发行版中的APT软件包管理工具。 

 apt更适合处理包装。您可以使用它来查找和安装新软件包，升级软件包，清理软件包等，  它有两个主要工具：apt-get和apt-cache。apt-get用于安装，升级和清理包，而apt-cache用于查找新包。 

**语法**

```shell
apt-get [OPTION] PACKAGE
```

 更新 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的地址，而是相当于windows下面的检查更新，获取的是软件的状态。需要用户权限，加上sudo 

```shell
sudo apt-get update
```

更新软件包数据库后，可以升级已安装的软件包。最方便的方法是升级所有可用更新的软件包。您可以使用以下命令来实现此目的：

```shell
sudo apt-get upgrade
```

要仅升级特定程序：

```shell
sudo apt-get upgrade <package_name>
```

使用apt-cache命令搜索包：

```
apt-cache search <search term>
```

搜索具有特定包名称的包，将为您提供以搜索词开头的所有包的列表：

```shell
apt-cache pkgnames <search_term>
```

一旦知道确切的包名，就可以使用以下命令获取有关它的更多信息，例如版本，依赖关系等：

```shell
apt-cache showpkg <package_name>
```

apt-get安装新软件包：

如果知道包的名称，可以使用以下命令安装：

```shell
sudo apt-get install <package_name>
```

 如果不确定确切的包名称，可以键入几个字母并按Tab键，它会建议所有包含这些字母的包。

可以通过提供名称一次安装多个包：

```shell
sudo apt-get install <package_1> <package_2> <package_3> 
```

已经安装了一个软件包，但是已经为已安装的软件包使用了install命令。这实际上会查看数据库，如果找到更新的版本，它会将已安装的软件包升级到更新的软件包。

假设由于某种原因你想要安装一个软件包但是如果已经安装了它就不想升级它。

对于这种情况，您可以按以下方式使用sub -no-upgrade：

```shell
sudo apt-get install <package_name> --no-upgrade
```

指定版本号安装：

添加带有包名称的= version

```shell
sudo apt-get install <package_name>=<version_number>
```

卸载一个已安装的软件包（保留配置文件）：

```shell
sudo apt-get remove packagename
```

卸载一个已安装的软件包（删除配置文件）：

```shell
sudo apt-get purge packagename
```

apt-get安装的软件包会存储在`/var/cache/apt/archives/`和`/var/cache/apt/archives/partial/`两个目录下，长期使用会占用硬盘空间。clean指令就是删除掉这两个目录中的软件包，除了已经被锁定的文件。这个命令会把安装的软件的备份也删除，不过这样不会影响软件的使用的：

```shell
apt-get clean
```

 同样是这两个目录下的软件包，不同的是autoclean只删除不能被再次下载的软件包，所以说`apt-get clean`删除清理更彻底。 

```shell
apt-get autoclean
```

自动卸载软件，及其有依赖相关的软件包；和一些Ubuntu认为不常用的软件包。**这个命令使用要小心**

```shell
apt-get autoremove
```

