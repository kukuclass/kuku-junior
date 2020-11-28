### 1、同源策略
最初，它的含义是指，A网页设置的 Cookie，B网页不能打开，除非这两个网页"同源"。
同源指的是三个相同：“协议”、“域名”、“端口”.
同源政策的目的是保证用户的信息安全，防止恶意网站窃取数据。
以下请求会有同源策略的限制
<li>AJAX请求不能发送
<li>无法获取DOM元素并进行操作
<li>无法读取Cookie、LocalStorage和IndexDB

#### (1) cookie

如果两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置document.domain共享 Cookie。

这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexDB 无法通过这种方法，规避同源政策 。

另外，服务器也可以在设置Cookie的时候，指定Cookie的所属域名为一级域名，这样的话二级三级域名可以不用做任何设置读取到这个cookie。 

#### (2) iframe

 如果两个网页不同源，就无法拿到对方的DOM。典型的例子是`iframe`窗口和`window.open`方法打开的窗口，它们与父窗口无法通信。 

 如果两个窗口一级域名相同，只是二级域名不同，那么通过设置`document.domain`属性，就可以规避同源政策，拿到DOM。 

对于完全不同源的网站，有三种方式可以解决跨域窗口的通信问题。
<li>片段识别符（fragment identifier）
<li>window.name
<li>跨文档通信API（Cross-document messaging）

①片段标识符（fragment identifier）指的是，URL的#号后面的部分，比如http://example.com/x.html#fragment的#fragment。如果只是改变片段标识符，页面不会重新刷新。

父窗口可以把信息，写入子窗口的片段标识符。
```js
var src = originURL + '#' + data;
document.getElementById('myIFrame').src = src;
子窗口通过监听hashchange事件得到通知。


window.onhashchange = checkMessage;

function checkMessage() {
  var message = window.location.hash;
  // ...
}
同样的，子窗口也可以改变父窗口的片段标识符。


parent.location.href= target + "#" + hash;
```

②window.name

浏览器窗口有`window.name`属性。这个属性的最大特点是，无论是否同源，只要在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它。

父窗口先打开一个子窗口，载入一个不同源的网页，该网页将信息写入`window.name`属性。

> ```javascript
> window.name = data;
> ```

接着，子窗口跳回一个与主窗口同域的网址。

> ```javascript
> location = 'http://parent.url.com/xxx.html';
> ```

然后，主窗口就可以读取子窗口的`window.name`了。

> ```javascript
> var data = document.getElementById('myFrame').contentWindow.name;
> ```

这种方法的优点是，`window.name`容量很大，可以放置非常长的字符串；缺点是必须监听子窗口`window.name`属性的变化，影响网页性能。

③window.postMessage

跨文档通信 API（Cross-document messaging）。

这个API为`window`对象新增了一个`window.postMessage`方法，允许跨窗口通信，不论这两个窗口是否同源。

举例来说，父窗口`http://aaa.com`向子窗口`http://bbb.com`发消息，调用`postMessage`方法就可以了。

> ```javascript
> var popup = window.open('http://bbb.com', 'title');
> popup.postMessage('Hello World!', 'http://bbb.com');
> ```

`postMessage`方法的第一个参数是具体的信息内容，第二个参数是接收消息的窗口的源（origin），即"协议 + 域名 + 端口"。也可以设为`*`，表示不限制域名，向所有窗口发送。

`message`事件的事件对象`event`，提供以下三个属性。

> - `event.source`：发送消息的窗口
> - `event.origin`: 消息发向的网址
> - `event.data`: 消息内容

下面的例子是，子窗口通过`event.source`属性引用父窗口，然后发送消息。

> ```javascript
> window.addEventListener('message', receiveMessage);
> function receiveMessage(event) {
>   event.source.postMessage('Nice to see you!', '*');
> }
> ```

`event.origin`属性可以过滤不是发给本窗口的消息。

> ```javascript
> window.addEventListener('message', receiveMessage);
> function receiveMessage(event) {
>   if (event.origin !== 'http://aaa.com') return;
>   if (event.data === 'Hello World') {
>       event.source.postMessage('Hello', event.origin);
>   } else {
>     console.log(event.data);
>   }
> }
> ```

#### （3）AJAX

同源政策规定，AJAX请求只能发给同源的网址，否则就报错。

除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。

> - JSONP
> - WebSocket
> - CORS

①JSONP

为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是**允许用户传递一个`callback`参数给服务端，然后服务端返回数据时会将这个`callback`参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了**。

 HTML 中的 `<script>` 标签是可以访问别的域名的，JSONP 就是利用 `<script>` 标签进行跨域访问的。

考虑我们通过 XMLHttpRequest 向服务器发送请求： `http://server.example.com/Users/1234`，将用户 ID：1234 作为参数传给服务器，服务器返回一个 JSON 对象，如下：

```json
{    
   "Name": "Foo",    
   "Id": 1234,    
   "Rank": 7
}
```

但是浏览器拒绝了这个跨域请求，所以我们要另寻它法，方法就是利用`<script>`标签，如下：

```html
<script type="application/javascript"        
    src="http://server.example.com/Users/1234">
</script>
```

上述这段代码会从服务器 `http://server.example.com/Users/1234` 上获取相应的内容，并将它作为 Javascript 执行。

然而我们知道，服务器返回的是一个 JSON 格式的数据，如果把这段代码作为 Javascript 执行则浏览器会报语法错误 `SyntaxError: missing ; before statement`。因此，这个技巧想要成功的话，还需要目标服务器帮忙。

如果目标服务器对返回的 JSON 数据进行一下包装：

```js
parseResponse({"Name": "Foo", "Id": 1234, "Rank": 7});
```

那么我们只要事先定义好 `parseResponse` 函数，就可以对返回的数据进行处理了。

②WebSocket

WebSocket是一种通信协议，使用`ws://`（非加密）和`wss://`（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

下面是一个例子

> ```http
> GET /chat HTTP/1.1
> Host: server.example.com
> Upgrade: websocket
> Connection: Upgrade
> Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
> Sec-WebSocket-Protocol: chat, superchat
> Sec-WebSocket-Version: 13
> Origin: http://example.com
> ```

上面代码中，有一个字段是`Origin`，表示该请求的请求源（origin），即发自哪个域名。

正是因为有了`Origin`这个字段，所以WebSocket才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。

③ CORS

它是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是W3C标准，是跨源AJAX请求的根本解决方法。相比JSONP只能发`GET`请求，CORS允许任何类型的请求。 

### 2、csrf（跨站请求伪造）

 也被称为 **one-click attack** 或者 **session riding**，通常缩写为 **CSRF** 或者 **XSRF**， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。 

一个典型的CSRF攻击有着如下的流程：

- 受害者登录a.com，并保留了登录凭证（Cookie）。
- 攻击者引诱受害者访问了b.com。
- b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带a.com的Cookie。
- a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。
- a.com以受害者的名义执行了act=xx。
- 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作。

**防护策略**

CSRF通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对CSRF的防护能力来提升安全性。

CSRF有两个特点：

- CSRF（通常）发生在第三方域名。
- CSRF攻击者不能获取到Cookie等信息，只是使用。

针对这两点，我们可以专门制定防护策略，如下：

- 阻止不明外域的访问
  - 同源检测
  - Samesite Cookie
- 提交时要求附加本域才能获取的信息
  - CSRF Token
  - 双重Cookie验证

### 3、MIME

 Multipurpose Internet Mail Extensions （多用途互联网邮件扩展）

```html
Content-Type: [type]/[subtype]; parameter
```

type有下面的形式。

- Text：用于标准化地表示的文本信息，文本消息可以是多种字符集和或者多种格式的；
- Multipart：用于连接消息体的多个部分构成一个消息，这些部分可以是不同类型的数据；
- Application：用于传输应用程序数据或者二进制数据；
- Message：用于包装一个E-mail消息；
- Image：用于传输静态图片数据；
- Audio：用于传输音频或者音声数据；
- Video：用于传输动态影像数据，可以是与音频编辑在一起的视频数据格式。

subtype用于指定type的详细形式。content-type/subtype配对的集合和与此相关的参数，将随着时间而增长。为了确保这些值在一个有序而且公开的状态下开发，MIME使用Internet Assigned Numbers Authority (IANA)作为中心的注册机制来管理这些值。常用的subtype值如下所示：

- text/plain（[纯文本](https://zh.wikipedia.org/wiki/纯文本)）
- text/html（HTML文档）
- application/xhtml+xml（XHTML文档）
- image/gif（GIF图像）
- image/jpeg（JPEG图像）【PHP中为：image/pjpeg】
- image/png（PNG图像）【PHP中为：image/x-png】
- video/mpeg（MPEG动画）
- application/octet-stream（任意的二进制数据）
- application/pdf（PDF文档）
- application/msword（Microsoft Word文件）
- application/vnd.wap.xhtml+xml (wap1.0+)
- application/xhtml+xml (wap2.0+)
- message/rfc822（RFC 822形式）
- multipart/alternative（HTML邮件的HTML形式和纯文本形式，相同内容使用不同形式表示）
- application/x-www-form-urlencoded（使用HTTP的POST方法提交的表单）
- multipart/form-data（同上，但主要用于表单提交时伴随文件上传的场合）

### 4、RESTful api

  一种万维网软件架构风格，目的是便于不同软件/程序在网络（例如互联网）中互相传递信息。 

REST( Representational State Transfer )表现层状态转化，RESTful则代表满足REST原则的。

这里的表现层实质上是资源的表现层， **所谓"资源"，就是网络上的一个实体，或者说是网络上的一个具体信息。**它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在。  所谓"上网"，就是与互联网上一系列的"资源"互动，调用它的URI。 

 "资源"是一种信息实体，它可以有多种外在表现形式。**我们把"资源"具体呈现出来的形式，叫做它的"表现层"（Representation）。** URI只代表资源的实体，不代表它的形式。 

状态转化： 访问一个网站，就代表了客户端和服务器的一个互动过程。在这个过程中，势必涉及到数据和状态的变化。  互联网通信协议HTTP协议，是一个无状态协议。这意味着，所有的状态都保存在服务器端。因此，**如果客户端想要操作服务器，必须通过某种手段，让服务器端发生"状态转化"（State Transfer）。而这种转化是建立在表现层之上的，所以就是"表现层状态转化"。** 

 客户端用到的手段，只能是HTTP协议。具体来说，就是HTTP协议里面，四个表示操作方式的动词：GET、POST、PUT、DELETE。它们分别对应四种基本操作：**GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源。** 

REST架构风格有如下六个限制：

- 客户端-服务器（Client-Server）

   通过将用户接口问题与数据存储问题分开，我们通过简化服务器组件来提高跨多个平台的用户接口的可移植性并提高可伸缩性。 

- 无状态（Stateless） 

  服务器不能保存客户端的信息, 每一次从客户端发送的请求中, 要包含所有的必须的状态信息, 会话信息由客户端保存 

- 缓存（ Cacheability ）

  如同万维网一样, 客户端和中间的通讯传递者可以将回复缓存起来. 回复必须明确的或者间接的表明本身是否可以进行缓存, 这可以预防客户端在将来进行请求的时候得到陈旧的或者不恰当的数据. 管理良好的缓存机制可以减少客户端-服务器之间的交互, 甚至完全避免客户端-服务器交互, 这进一步提了高性能和可扩展性。 

- 统一接口（ Uniform Interface ）

  这是 RESTful 系统设计的基本出发点. 它简化了系统架构, 减少了耦合性, 可以让所有模块各自独立的进行改进. 包括下列四个限制:

  ①请求中包含资源的 ID (Resource identification in requests)
         请求中包含了各种独立资源的标识, 例如, 在 Web 服务中的 URIs. 资源本身和发送给客户端的标识是独立. 例如, 服务器可以将自身的数据库信息以 HTML XML 或者 JSON 的方式发送给客户端, 但是这些可能都不是服务器的内部记录方式.
  ②资源通过标识来操作 (Resource manipulation through representations)
        当客户端拥有一个资源的标识, 包括附带的元数据, 则它就有足够的信息来删除这个资源.
  ③消息的自我描述性 (Self-descriptive messages)
        每一个消息都包含足够的信息来描述如何来处理这个信息. 例如, 媒体类型 (midia-type) 就可以确定需要什么样的分析器来分析媒体数据.
  ④用超媒体驱动应用状态 (Hypermedia as the engine of application state (HATEOAS))
        同用户访问 Web 服务器的 Home 页面相似,当一个 REST 客户端访问了最初的 REST 应用的 URI 之后, REST 客户端应该可以使用服务器端提供的链接,动态的发现所有的可用的资源和可执行的操作.随着访问的进行, 服务器在响应中提供文字超链接, 以便客户端可以得到当前可用的操作. 客户端无需用确定的编码的方式记录下服务器端所提供的动态应用的结构信息.

- 分层系统（ Layered System ）

  客户端一般不知道是否直接连接到了最终的服务器, 或者是路径上的中间服务器. 中间服务器可以通过负载均衡和共享缓存的机制提高系统的可扩展性,这样可也便于安全策略的部署. 

- 按需代码（ Code-On-Demand ）

  服务器可以通过发送可执行代码给客户端的方式临时性的扩展功能或者定制功能.例如Java Applet、Flash或JavaScript。 

### 5、CSS选择器及基本属性

#### 基本选择器：

##### 通用选择器

 它可以匹配任意类型的HTML元素.在配合其他简单选择器的时候,省略掉通配选择器会有同样的效果. 

##### 元素选择器

 按照给定的节点名称，选择所有匹配的元素。 例如选中h1元素

 `h1 { color: #333333; } `

##### 类选择器

 按照给定的 `class` 属性的值，选择所有匹配的元素。
`.classname` 

##### id选择器

按照 `id` 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 ID 属性都应当是唯一的。
`#idname`

##### 属性选择器

 按照给定的属性，选择所有匹配的元素。
**语法：**`[attr]` 

`[attr=value]` 选择属性为attr，值为value的元素

`[attr~=value]`  选择属性为attr，且该属性具有一个或多个值，其中一个值即为val字符串的元素。 

`[attr|=value]`  选择定义了attr属性，且该属性的值为连字符(-)分割的一个或多个值，其中第一个字符串为val的元素。例如，用选择器`[lang|="en"]`可以选择`en-us`以及`en` 

`[attr^=value]` 选择定义了attr属性，且该属性的值以val字符串打头的元素 

 `[attr$=value]`  选择定义了attr属性，且该属性的值以val字符串结尾的元素 

`[attr*=value]` 选择定义了attr属性，且该属性的值包含val字符串的元素 

#### 分组选择器：

 `,` 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。
**语法**：`A, B`
**示例**：`div, span` 会同时匹配 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 元素和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 元素。 

#### 组合器：

##### 后代组合器

` `（空格）组合器选择前一个元素的后代节点。
**语法：**`A B`
**例子：**`div span` 匹配所有位于任意`<div>`元素之内的 `<span>`元素。

##### 直接子代组合器

 `>` 组合器选择前一个元素的直接子代的节点。
**语法**：`A > B`
**例子**：`ul > li` 匹配直接嵌套在 `<ul>`元素内的所有`<li>`元素。 

##### 一般兄弟组合器

`~` 组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。
**语法**：`A ~ B`
**例子**：`p ~ span` 匹配同一父元素下，`<p>`元素后的所有`<span>`元素。

##### 紧邻兄弟组合器

`+` 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。
**语法：**`A + B`
**例子：**`h2 + p` 会匹配所有紧邻在`<h2>`元素后的`<p>`元素。

##### 列组合器

`||` 组合器选择属于某个表格行的节点。
**语法：** `A || B`
**例子：** `col || td` 会匹配所有 `<col>`作用域内的`<td>`元素。





#### 复合选择器：



###  6. 了解px是什么，rem、em、dp、vw、vh是什么 

px：像素pixel的缩写，相对于图像而言的，电子屏幕中组成一幅图像或照片的基本单位。

em：相对长度单位。浏览器的默认字体都是16px，那么1em=16px，以此类推计算12px=0.75em，10px=0.625em，2em=32px；

rem： rem是CSS3新增的一个相对单位（root em，根em），与em的区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。

dp：device independent pixels，长度单位（设备独立像素），1dp = 160ppi 屏幕上一个物理像素的长度 = 1 / 160 inch.

vw：css3新单位，viewpoint width的缩写，视窗宽度，1vw等于视窗宽度的1%。

若浏览器宽度1200px, 1 vw = 1200px/100 = 12 px。

vh：css3新单位，viewpoint height的缩写，视窗高度，1vh等于视窗高度的1%。

若浏览器高度900px, 1 vh = 900px/100 = 9 px。