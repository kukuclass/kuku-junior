# 1.学习AJAX是什么，AJAX实现方法

什么是AJAX？(Asynchronous Javascript And XML)

即异步的 JavaScript 和 XML，是一种用于创建快速动态网页的技术；

传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

使用AJAX则不需要加载更新整个网页，实现部分内容更新

> #### 1-1、什么是ajax

AJAX

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。

AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下。

> #### 1-2、常见的ajax使用场景

谷歌地图，甚至一些弹幕，微博的实时更新评论等等

> #### 1-3、为什么需要使用ajax

ajax主要是实现页面和web服务器之间数据的异步传输。简单来说，不采用ajax的页面，当用户在页面发起请求时，就要进行整个页面的刷新，刷新快慢取决于服务器的处理快慢。在这个过程中用户必须得等待，不能进行其他操作。也就是同步的方式。客户端和服务端传递了很多不需要的数据。效率低，用户体验差。

- 采用ajax的页面，可以实现页面的局部更新，而不是整个页面的更新；
- b、并且发起请求后，用户还可以进行页面上的其他操作。这就是异步的方式。
- c、客户端和服务端间只传递需要的数据，效率高，用户体验性好。
- d、并且Ajax引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了大用户量下的服务器负载。

> #### 1-4、Ajax的工作原理

图片里面提到一个xhr，所谓的“XHR”（浏览器内置对象”XMLHttpRequest”），也就是Ajax功能实现所依赖的对象，AJAX就是通过浏览器的内置对象XHMHttpResquest来发送异步请求的，异步请求不会妨碍客户端的任何操作。

- 异步：

​                XHR相当于是一个通信兵，来负责客户端与服务器之间的通信传输。举个栗子：

​                要打仗了，前方阵地（客服端）不可能只等着通信兵（XHR）传递消息其他什么也不干吧，所以前方阵地还在干着自己的事情然后派通信兵去请求后方指挥部（服务器）的命令，指挥部下达命令指挥，通信兵再把命令传到前方阵地，然后前方阵地再执行命令相关的操作（客户端把数据渲染到页面），这也就是Ajax的异步原理。

* 同步：

​               所谓的同步就是前方阵地和通信兵一起去向服务器请求数据，直到通信兵请求到数据，我才开始渲染页面，在请求的过程中页面一直是白屏等待的。

> #### 1-5、XMLHttpRequest常用方法

* 1-5-1、open();

​          XMLHttpRequest.open()方法用于指定 HTTP 请求的参数，或者说初始化 XMLHttpRequest 实例对象。它一共可以接受五个参数。

例：

xhr.open(‘POST’, ‘/carrots-admin-ajax/a/login’, true);

参数:

a, method:用于指定请求的类型  “GET"或者"POST”

b, url:用于请求的地址, 可相对可绝对

c, asyncFlag:指定请求方式为同步还是异步, true为异步, false为同步

* 1-5-2、send();

​            XMLHttpRequest.send()方法用于实际发出 HTTP 请求。它的参数是可选的，如果不带参数，就表示 HTTP 请求只包含头信息，也就是只有一个 URL，典型例子就是 GET请求；如果带有参数，就表示除了头信息，还带有包含具体数据的信息体，典型例子就是 POST 请求。

```javascript
var xhr = new XMLHttpRequest();

var data = ‘name=’ + userVal + ‘&pwd=’ + pwVal;



xhr.open(‘POST’, ‘/carrots-admin-ajax/a/login’, true);



/* POST的请求头 */

xhr.setRequestHeader(‘Content-Type’, ‘application/x-www-form-urlencoded’);



/* 发出HTTP请求 */

xhr.send(data);
```

注意，所有 XMLHttpRequest 的监听事件，都必须在send()方法调用之前设定。（send放在最后）





> #### 1-6、XMLHttpRequest常用属性

* 1-6-1, readyState

​                XMLHttpRequest.readyState返回一个整数，表示实例对象的当前状态。该属性只读。它可能返回以下值。

​                 0，表示 XMLHttpRequest 实例已经生成，但是实例的open()方法还没有被调用。

​                  1，表示open()方法已经调用，但是实例的send()方法还没有调用，仍然可以使用实例的setRequestHeader()方法，设定 HTTP 请求的头信息。

​                  2，表示实例的send()方法已经调用，并且服务器返回的头信息和状态码已经收到。

​                  3，表示正在接收服务器传来的数据体（body 部分）。

​                  4，表示服务器返回的数据已经完全接收，或者本次接收已经失败。



* 1-6-2, onreadystatechange

​                  XMLHttpRequest.onreadystatechange属性指向一个监听函数。

​                  通信过程中，每当实例对象发生状态变化，它的readyState属性的值就会改变。这个值每一次变化，都会触发readyStateChange事件。

​                   readystatechange事件发生时（实例的readyState属性变化），就会执行这个属性。

​                  另外，如果使用实例的abort()方法，终止 XMLHttpRequest请求，也会造成readyState属性变化，导致调用XMLHttpRequest.onreadystatechange属性。

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){

// 通信成功时，状态值为4

if (xhr.readyState === 4){

if (xhr.status === 200){

console.log(xhr.responseText);

} else {

console.error(xhr.statusText);

}

}};

xhr.open(‘GET’, ‘/endpoint’, true);

xhr.send(null);
```



* 1-6-3, responseText

​                  XMLHttpRequest.responseText属性返回从服务器接收到的字符串，该属性为只读。只有 HTTP 请求完成接收以后，该属性才会包含完整的数据

* 1-6-4, status

​                 XMLHttpRequest.status属性返回一个整数，表示服务器回应的 HTTP状态码。一般来说，如果通信成功的话，这个状态码是200；如果服务器没有返回状态码，那么这个属性默认是200。请求发出之前，该属性为0。该属性只读。

​                - 200, OK，访问正常

​                - 404, Not Found，未发现指定网址

​                - 500, Internal Server Error，服务器发生错误

​               基本上，只有2xx和304的状态码，表示服务器返回是正常状态。





> #### 1.7、常见几种ajax方法

结合任务来看三种常见的写法（不涉及框架中写法）

* a、原生写法：见demo

* b、jQuery 底层 AJAX 实现：见demo

* c、jQuery 高层 AJAX 实现：见demo





3.常见问题
    1、跨域问题

​    2、使用post提交的时候需要设置content-type为"application/x-www-form-urlencoded"





4.解决方案
    1、nginx配置跨域

​	2、使用post提交的时候需要设置content-type会出错，见demo



5.编码实战

原生写法/* 创建实例 */

```javascript
     var xhr = new XMLHttpRequest();



    /* 需要发送的数据 */

     var data = ‘name=’ + userVal + ‘&pwd=’ + pwVal;

     console.log(data)



     /* 指定请求的参数 */

     xhr.open(‘POST’, ‘/carrots-admin-ajax/a/login’, true);

     /* POST的请求头 */

     xhr.setRequestHeader(‘Content-Type’, ‘application/x-www-form-urlencoded’);

     /* 发出HTTP请求 */

     xhr.send(data);
```

# 2.学习Javascript的模块化方式：AMD,CMD,CommonJS, ES Module, UMD

> ## JavaScript 模块化方案

​		模块化这个话题在 ES6 之前是不存在的，因此这也被诟病为早期 JavaScript 开发**全局污染**和**依赖管理混乱**问题的源头。这类历史渊源和发展概述在本文将不会提及，因此感兴趣可以自行搜索 JavaScript 发展史进行了解。

直接进入正题，我们来看看常见的模块化方案都有哪些以及他们都有哪些内容。

> ## 1.CommonJS

​		CommonJS 的一个模块就是一个脚本文件，通过执行该文件来加载模块。CommonJS 规范规定，每个模块内部，`module` 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 `module.exports`）是对外的接口。加载某个模块，其实是加载该模块的 `module.exports` 属性。

​		我们见过这样的模块引用：

```
var myModule = require('module');
myModule.sayHello();
```

​		这是因为我们把模块的方法定义在了模块的属性上：

```
// module.js
module.exports.sayHello = function() {
    console.log('Hello ');
};

// 如果这样写
module.exports = sayHello;

// 调用则需要改为
var sayHello = require('module');
sayHello();
```

​		`require` 命令第一次加载该脚本时就会执行整个脚本，然后在内存中生成一个对象（模块可以多次加载，但是在第一次加载时才会运行，结果被缓存），这个结果长成这样：

```
{
  id: '...',
  exports: { ... },
  loaded: true,
  ...
}
```

​		Node.js 的模块机制实现就是参照了 CommonJS 的标准。但是 Node.js 额外做了一件事，即为每个模块提供了一个 exports 变量，以指向 module.exports，这相当于在每个模块最开始，写有这么一行代码：

```
var exports = module.exports;
```

CommonJS 模块的特点：

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 独立性是模块的重要特点就，模块内部最好不与程序的其他部分直接交互。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照其在代码中出现的顺序。

> ## 2. AMD

​		CommonJS 规范很好，但是不适用于浏览器环境，于是有了 AMD 和 CMD 两种方案。AMD 全称 Asynchronous Module Definition，即异步模块定义。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。除了和 CommonJS 同步加载方式不同之外，AMD 在模块的定义与引用上也有所不同。

```
define(id?, dependencies?, factory);
```

​	AMD 的模块引入由 define 方法来定义，在 define API 中：

- id：模块名称，或者模块加载器请求的指定脚本的名字；
- dependencies：是个定义中模块所依赖模块的数组，默认为 [“require”, “exports”, “module”]，举个例子比较好理解，当我们创建一个名为 “alpha” 的模块，使用了require，exports，和名为 “beta” 的模块，需要如下书写（示例1）；
- factory：为模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块的输出值；

```
// 示例1
define("alpha", ["require", "exports", "beta"], function (require, exports, beta) {
  exports.verb = function() {
    return beta.verb();
    // 或者
    return require("beta").verb();
  }
});
```

如果模块定义不存在依赖，那么可以直接定义对象：

```
define({
  add: function(x, y){
    return x + y;
  }
});
```

而使用时我们依旧通过 require 关键字，它包含两个参数，第一个数组为要加载的模块，第二个参数为回调函数：

```
require([module], callback);
```

举个例子：

```
require(['math'], function (math) {
  math.add(2, 3);
});
```

> ## 3.CMD

CMD 全称为 Common Module Definition，是 Sea.js 所推广的一个模块化方案的输出。在 CMD define 的入参中，虽然也支持包含 id, deps 以及 factory 三个参数的形式，但推荐的是接受 factory 一个入参，然后在入参执行时，填入三个参数 require、exports 和 module：

```
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b'); 
  b.doSomething();
  ...
})
```

通过执行该构造方法，可以得到模块向外提供的接口。在与 AMD 比较上存在两个主要的不同点（来自玉伯[回答](https://www.zhihu.com/question/20351507)）：

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
2. CMD 推崇依赖就近，AMD 推崇依赖前置。

如果说的不清楚，那么我们直接看上面的代码用 AMD 该怎么写：

```
define(['./a', './b'], function(a, b) {  
  a.doSomething();
  b.doSomething();
  ...
})
```

> ## 4.UMD

UMD，全称 Universal Module Definition，即通用模块规范。既然 CommonJs 和 AMD 风格一样流行，那么需要一个可以统一浏览器端以及非浏览器端的模块化方案的规范。

直接来看看官方给出的 jQuery 模块如何用 UMD 定义的代码：

```
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.jqueryPlugin = function () { return true; };
}));
```

UMD的实现很简单：

- 先判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块；
- 再判断是否支持 Node.js 模块格式（exports 是否存在），存在则使用 Node.js 模块格式；
- 前两个都不存在，则将模块公开到全局（window 或 global）；

> ## 5. ES Modules

当然，以上说的种种都是社区提供的方案，历史上，JavaScript 一直没有模块系统，直到 ES6 在语言标准的层面上，实现了它。其设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。而 ES Modules 不是对象，而是通过 `export` 命令显式指定输出的代码。

ES Modules 的模块化能力由 `export` 和 `import` 组成，`export` 命令用于规定模块的对外接口，`import` 命令用于输入其他模块提供的功能。我们可以这样定义一个模块：

```
// 第一种方式
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// 第二种方式
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };
```

然后再这样引入他们：

```
import { firstName, lastName, year } from 'module';
import { firstName as newName } from 'module';
import * as moduleA from 'module';
```

除以上两种命令外，还有一个 `export default` 命令用于指定模块的默认输出（一个模块只能有一个默认输出）。如果使用了 `export default` 语法，在 import 时则可以任意命名。由于 `export default` 命令的本质是将后面的值，赋给 `default` 变量，所以也可以直接将一个值写在 `export default` 之后。当然，引用方式也存在多种：

```
import { default as foo } from 'module';
import foo from 'module';
```

需要注意的是 Modules 会自动采用严格模式，且 import 命令具有提升效果，会提升到整个模块的头部，首先执行。

# 3.学习在web中单页面应用与多页面应用的区别

|                   | 单页面应用（SinglePage Web Application，SPA）                | 多页面应用（MultiPage Application，MPA）     |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------- |
| 组成              | 一个外壳页面和多个页面片段组成                               | 多个完整页面构成                             |
| 资源共用(css,js)  | 共用，只需在外壳部分加载                                     | 不共用，每个页面都需要加载                   |
| 刷新方式          | 页面局部刷新或更改                                           | 整页刷新                                     |
| url 模式          | a.com/#/pageone   a.com/#/pagetwo                            | a.com/pageone.html   a.com/pagetwo.html      |
| 用户体验          | 页面片段间的切换快，用户体验良好                             | 页面切换加载缓慢，流畅度不够，用户体验比较差 |
| 转场动画          | 容易实现                                                     | 无法实现                                     |
| 数据传递          | 容易                                                         | 依赖 url传参、或者cookie 、localStorage等    |
| 搜索引擎优化(SEO) | 需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化 | 实现方法简易                                 |
| 试用范围          | 高要求的体验度、追求界面流畅的应用                           | 适用于追求高度支持搜索引擎的应用             |
| 开发成本          | 较高，常需借助专业的框架                                     | 较低 ，但页面重复代码多                      |
| 维护成本          | 相对容易                                                     | 相对复杂                                     |

# 4.学习JSON是什么，和XML，YAML的区别

##### 三者都是序列化语言

* JSON:J"avascript Object Notation"(javascript对象表示法)  						  (.json)
* XML:"EXtensible Markup Language"(可扩展标记语言)          						(.xml)	
* YAML:"YAML Ain't a Markup Language"(YAML 不是一种标记语言)             (.yaml)

* YAML使用缩进来定义结构化数据，因此每个YAML中的数据块通过空白的数量来区分

* 三者文件的扩展名都与其名称对应， .yaml for YAML, .json for JSON, .xml for XML，比较容易记忆。

* 实际上，三者的扩展名都是比较随意的，对开发者和应用来说重要的是其文件格式，内容类型和数据结构。(译者按，重要的是内容，例如.yml和.yaml几乎无差别。.js的文件中依然可以存储json).
  

 	### 区别

1.代码书写方式不同

> **JSON: **

```json
{
    "sites": [
    { "name":"菜鸟教程" , "url":"www.runoob.com" }, 
    { "name":"google" , "url":"www.google.com" }, 
    { "name":"微博" , "url":"www.weibo.com" }
    ]
}
```



> **XML:**

```xml
<sites>
  <site>
    <name>菜鸟教程</name> <url>www.runoob.com</url>
  </site>
  <site>
    <name>google</name> <url>www.google.com</url>
  </site>
  <site>
    <name>微博</name> <url>www.weibo.com</url>
  </site>
</sites>
```



> **YAML:**

```yaml
sites:
   -
       name:菜鸟教程
       url:www.runoob.com
   -
       name:google
       url:www.google.com
   -  
       name:微博
       url:www.weibo.com
```

2.JSON 与 XML 的相同之处：

- JSON 和 XML 数据都是 "自我描述" ，都易于理解。
- JSON 和 XML 数据都是有层次的结构
- JSON 和 XML 数据可以被大多数编程语言使用
- 

JSON 与 XML 的不同之处：

- JSON 不需要结束标签
- JSON 更加简短
- JSON 读写速度更快
- JSON 可以使用数组

> **最大的不同是**：XML 需要使用 XML 解析器来解析，JSON 可以使用标准的 JavaScript 函数来解析。
>
> - [JSON.parse()](https://www.runoob.com/js/javascript-json-parse.html): 将一个 JSON 字符串转换为 JavaScript 对象。
> - [JSON.stringify()](https://www.runoob.com/js/javascript-json-stringify.html): 于将 JavaScript 值转换为 JSON 字符串。

#### 为什么 JSON 比 XML 更好？

XML 比 JSON 更难解析。

JSON 可以直接使用现有的 JavaScript 对象解析。

针对 AJAX 应用，JSON 比 XML 数据加载更快，而且更简单：

使用 XML

- 获取 XML 文档
- 使用 XML DOM 迭代循环文档
- 接数据解析出来复制给变量

使用 JSON

- 获取 JSON 字符串
- JSON.Parse 解析 JSON 字符串



### 3.YAML使用场景

对于序列化语言来说，使用场景如下：

- 与服务器之间传输数据
- 使用一个配置文件来配置应用，这些文件声明对应参数和相应取值
- 在同一个应用不同组件之间转换数据
- 中间数据存储 针对此类场景，YAML有一些明确的优势相比于其他同类语言。也是为什么现在越来越多的开发者使用其的地方。

#### YAML的优势

- YAML中没有额外的定界符，所以相比JSON或者XML更轻量级。
- 没有额外定界符，所以更易读(这里持原作者和译者都持保留观点，不少开发者认为有定界符的可读性更强。)
- YAML使数据更易于理解，因此常用于配置文件中(观点同上)
- 应用比价哦广泛，除配置文件之外，传输数据和中间存储都有实践。
- YAML是JSON 的超集，对于合法的JSON代码，同样可以被YAML解析，这样对于使用JSON和YAML的应用来说，可以使用一个解析器完成两种解析。 然而其并没有如期望中那样受欢迎，具体而言，因为不同的序列化语言都有其特定的适宜语言或者场景（下文可以提到），并且YAML有一些不足相较于其他广泛使用的序列化语言。

#### YAML的不足

- 相对年轻，早期很多应用已经使用JONS或者XML来构建，对于开发者来说迁移至YAML成本是十分高的。 举例，假如我们负责的项目是使用XML的，就算我们开发独立的插件也会倾向于XML以便更加契合。
- 流行广泛程度反向作用域生态系统，例如XML 有着比YAML极为成熟的生态。JSON从2000年开始出现，同样被高度采用。因此在YAML上可以找到对JSON的支持(译者注：既有向现实妥协的味道，也是聪明的做法)
- YAML中有很多方式来体系化数据层级，因此处理时会相对复杂些。性能上相对于XML和JSON会有差别。
- 可能一些开发人员发现很难使用其复杂的缩进格式



# 5.变量提升练习

```javascript
//下面题目输出结果
var a = 2;
function a(){
    console.log(3);
}
console.log(typeof a);
```

//number

# 6.掌握Javascript语言层面的基本错误类型

js中的控制台的报错信息主要分为两大类，第一类是语法错误，这一类错误在预解析的过程中如果遇到，就会导致整个js文件都无法执行。另一类错误统称为异常，这一类的错误会导致在错误出现的那一行之后的代码无法执行，但在那一行之前的代码不会受到影响。

> ## 1. SyntaxError：语法错误



```csharp
// 1. Syntax Error: 语法错误
// 1.1 变量名不符合规范
var 1                          // Uncaught SyntaxError: Unexpected number
var 1a                         // Uncaught SyntaxError: Invalid or unexpected token
// 1.2 给关键字赋值
function = 5                   // Uncaught SyntaxError: Unexpected token =  
```

> ## 2. Uncaught ReferenceError：引用错误

引用一个不存在的变量时发生的错误。将一个值分配给无法分配的对象，比如对函数的运行结果或者函数赋值。



```cpp
// 2.1 引用了不存在的变量
a()                            // Uncaught ReferenceError: a is not defined
console.log(b)                 // Uncaught ReferenceError: b is not defined
// 2.2 给一个无法被赋值的对象赋值
console.log("abc") = 1         // Uncaught ReferenceError: Invalid left-hand side in assignment
```

> ## 3. RangeError：范围错误

RangeError是当一个只超出有效范围时发生的错误。主要的有几种情况，第一是数组长度为负数，第二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。



```dart
// 3.1 数组长度为负数
[].length = -5                        // Uncaught RangeError: Invalid array length
// 3.2 Number对象的方法参数超出范围
var num = new Number(12.34)
console.log(num.toFixed(-1))          // Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
// 说明: toFixed方法的作用是将数字四舍五入为指定小数位数的数字,参数是小数点后的位数,范围为0-20.
```

> ##  4.TypeError类型错误

变量或参数不是预期类型时发生的错误。比如使用new字符串、布尔值等原始类型和调用对象不存在的方法就会抛出这种错误，因为new命令的参数应该是一个构造函数。



```csharp
// 4.1 调用不存在的方法
123()                                // Uncaught TypeError: 123 is not a function
var o = {}
o.run()                              // Uncaught TypeError: o.run is not a function
// 4.2 new关键字后接基本类型
var p = new 456                      // Uncaught TypeError: 456 is not a constructor
```

> ## 5. URIError，URL错误

主要是相关函数的参数不正确。



```jsx
decodeURI("%")                   // Uncaught URIError: URI malformed at decodeURI
```

URI相关参数不正确时抛出的错误，主要涉及encodeURI、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape(）六个函数。

> ## 6.EvalError eval()函数执行错误

在ES5以下的JavaScript中，当eval()函数没有被正确执行时，会抛出evalError错误。
 例如下面的情况：



```jsx
var myEval = eval;
myEval("alert('call eval')");
```

需要注意的是：ES5以上的JavaScript中已经不再抛出该错误，但依然可以通过new关键字来自定义该类型的错误提示。

以上的6种派生错误，连同原始的Error对象，都是构造函数。开发者可以使用它们，认为生成错误对象的实例。



```jsx
new Error([message[,fileName[,lineNumber]]])，
```

第一个参数表示错误提示信息，第二个是文件名，第三个是行号。

# 7.arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、super、switch、this、throw、true、try、typeof、var、void、while、with、yield关键字的意义





* ## 1.arguments 是一个类似数组的对象, 对应于传递给函数的参数。

## 语法

```
arguments
```

## 描述

arguments对象是所有函数中可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数的条目，第一个条目的索引从0开始。例如，如果一个函数传递了三个参数，你可以参考它们如下：

`arguments[0]`
`arguments[1]`
`arguments[2]`
参数也可以被设置:

```
   arguments[1] = 'new value';
```

`arguments`对象**不是**一个 `Array` 。它类似于数组，但除了 长度之外没有任何数组属性。例如，它没有 `pop` 方法。但是它可以被转换为一个真正的数组：：

```
   let args = Array.prototype.slice.call(arguments); 
let args = [].slice.call(arguments);
```

你还可以使用 `Array.from()`方法或 `spread` 运算符将 arguments 转换为真正的数组：

```
  let args = Array.from(arguments);
let args = [...arguments];
```

对参数使用slice会阻止某些JavaScript引擎中的优化 (比如 V8 引擎)。

如果你关心它们，尝试通过遍历arguments对象来构造一个新的数组。

另一种方法是使用 被忽视的/鄙视/轻视,/看不起 Array构造函数作为一个函数：

```
  let args = (
arguments.length === 1 ? 
[arguments[0]] : 
Array.apply(null, arguments)
);
```

如果 Array generics 可用的话，下面的代码可以作为替代:

```
  var args = Array.slice(arguments);
```

- arguments 对象仅在函数内部有效，在函数外部调用 arguments 对象会出现一个错误。
- arguments的typeof返回’**object**‘。
- `console.log(typeof arguments); // 'object'`
- 可以使用索引来确定各个arguments的类型。

```
 console.log(typeof arguments[0]); 
//这将返回单个参数的typeof。
```

如果你调用一个函数，当这个函数的参数数量比它显式声明的参数数量更多的时候，你就可以使用 arguments 对象。这个技术对于参数数量是一个可变量的函数来说比较有用。 你可以用 arguments.length 来得到参数的数量，然后可以用 arguments object 来对每个参数进行处理。 (想要得到函数签名的参数数量, 请使用 Function.length 属性。)

## 属性

```
  arguments.callee
// 指向当前执行的函数。
arguments.caller 
// 指向调用当前函数的函数。
arguments.length
// 指向传递给当前函数的参数数量。
```

## 例子

### 定义一个连接几个字符串的函数

这个例子定义了一个函数来连接字符串。这个函数唯一正式声明了的参数是一个字符串，该参数指定一个字符作为衔接点来连接字符串。该函数定义如下：

```
  function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

你可以传递任意数量的参数到该函数，然后该函数会将每个参数作为一个条目来创建一个列表。

```
  myConcat(", ", "red", "orange", "blue");
// returns "red, orange, blue"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// returns "elephant; giraffe; lion; cheetah"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// returns "sage. basil. oregano. pepper. parsley"
```

### 定义一个创建HTML列表的方法

这个例子定义了一个函数通过一个字符串来创建HTML列表。这个函数唯一正式声明了的参数是一个字符。当该参数为 “u” 时，创建一个无序列表 (项目列表)；当该参数为 “o” 时，则创建一个有序列表 (编号列表)。该函数定义如下：

```
  function list(type) {
  var result = "<" + type + "l>< li>";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("< /li>< li>");
  result += "< /li>"; // end list
  return result;
}
```

你可以传递任意数量的参数到该函数，然后该函数会将每个参数作为一个条目添加到第一个参数指定类型的列表当中。

```
   var listHTML = list("u", "One", "Two", "Three");
/* listHTML is:
"< ul>< li>One< /li>< li>Two< /li>< li>Three< /li>< /ul>"
*/
```

## 注意

ES6中的箭头函数没有自己的 `arguments` 对象，不过在大多数情形下，`rest`参数可以给出一个解决方案：

```javascript
   let a;
const fn = (...rest) => Array.prototype.slice.call(rest, 1);
a = fn(1, 2); // [2]
```



* ### 2.break

  - `break`语句会使运行的程序立刻退出包含在**最内层的循环**或者退出一个`switch`语句。
  - 由于它是用来退出循环或者`switch`语句的, 所以只有当它出现在这些语句的时候, 这种形式的`break`语句才是合法的。
  - 如果一个循环的**终止条件**非常复杂, 那么使用`break`语句来**实现某些条件**比用一个循环表达式所有的条件容易得多

```javascript
for(var i = 519; i < 550; i++) {
    if(i == 522) {
        break;
    }
    console.log(i);
    alert(i);
    document.write(i);
}12345678
```

​				当`i = 521`的时候，直接退出`for`这个循环。这个循环将不再被执行。





* ### 3.case

  和switch语句一起使用，是switch语句中的判断语句



* ### 4.catch

  ```javascript
  try {
     try_statements
  }
  [catch (exception_var_1 if condition_1) { // non-standard
     catch_statements_1
  }]
  ...
  [catch (exception_var_2) {
     catch_statements_2
  }]
  [finally {
     finally_statements
  }]
  ```

  - `try_statements`

    需要被执行的语句。

  - `catch_statements_1`, `catch_statements_2`

    如果在`try`块里有异常被抛出时执行的语句。

  - `exception_var_1`, `exception_var_2`

    用于保存关联`catch`子句的异常对象的标识符。

  - `condition_1`

    一个条件表达式。

  - `finally_statements`

    在`try`语句块之后执行的语句块。无论是否有异常抛出或捕获这些语句都将执行。

* ### 5.class

  通过类来创建对象，使得开发者不必写重复的代码，以达到代码复用的目的。它基于的逻辑是，两个或多个对象的结构功能类似，可以抽象出一个模板，依照模板复制出多个相似的对象。

* ### 6.const

  

* ### 7.continue

  - `continue`语句和`break`语句相似。所不同的是，它不是退出一个循环，而是开始循环的一次新迭代。
  - `continue`语句只能用在`while`语句、`do/while`语句、`for`语句、或者`for/in`语句的循环体内, 在其他地方使用都会引起错误?

  ```javascript
  for(var i = 5; i >=0; i--) {
      if(i == 4 || i == 3 || i == 1) {
          continue;
      }
      console.log(i);
      alert(i);
      document.write(i);
  }12345678
  ```

  - 当`i = 4`、`i = 3`以及`i = 1`的时候，直接跳出`for`循环。下次继续执行。

* ### 8.const

* ### 9.var

* ### 10.let

  使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象；
  使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升；
  使用const声明的是常量，在后面出现的代码中不能再修改该常量的值。

* ### 11.debugger

  **debugger** 关键字用于停止执行 JavaScript，并调用调试函数。

  这个关键字与在调试工具中设置断点的效果是一样的。

  如果没有调试可用，debugger 语句将无法工作。

  开启 debugger ，代码在第三行前停止执行。

  ```javascript
  var x = 15 * 5;
  debugger;
  document.getElementbyId("demo").innerHTML = x;
  ```

* ### 12.default

  在[`switch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) 语句中使用:

  ```javascript
  switch (expression) {
    case value1:
      //当表达式的值和value1匹配执行这里的语句
      [break;]
    default:
      //当表达式的值没有匹配，执行这里的语句
      [break;]
  }
  ```

  在[`export`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 中使用：

  ```javascript
  export default nameN 
  ```

* ### 13.delete

  **`delete` 操作符**用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。

  <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete">详情参考</a>

* ### 14.do

* ### 15.while

  **`do...while` 语句**创建一个执行指定语句的循环，直到`condition`值为 false。在执行`statement` 后检测`condition`，所以指定的`statement`至少执行一次。

  ## 语法

  ```
  do
     statement
  while (condition);
  ```

* ### 16.if，else

  用来执行循环操作

  - **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
  - **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
  - **if...else if....else 语句**- 使用该语句来选择多个代码块之一来执行

* ### 17.enum

  * 在 Javascript 同样可以做到和 Java 类似的枚举类型，不过是通过类来模拟。

  * 每个枚举值都是类的一个实例，这样所有枚举值都具有类型（这样可通过 instanceof 判断类型），且每个枚举值和普通对象一样具有自身的属性和方法。

  * 枚举值可通过枚举类型名直接引用，因此每个枚举值必须是类的静态属性。

  * 枚举值是常量，所以第一次赋值后，冻结枚举类型，之后不能再修改。

* ### 18.eval

  eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。

  #### 语法

  ```
  eval(string)
  ```

  | 参数   | 描述                                                         |
  | :----- | :----------------------------------------------------------- |
  | string | 必需。要计算的字符串，其中含有要计算的 JavaScript 表达式或要执行的语句。 |

  #### 返回值

  通过计算 string 得到的值（如果有的话）。

  #### 说明

  该方法只接受原始字符串作为参数，如果 string 参数不是原始字符串，那么该方法将不作任何改变地返回。因此请不要为 eval() 函数传递 String 对象来作为参数。

  如果试图覆盖 eval 属性或把 eval() 方法赋予另一个属性，并通过该属性调用它，则 ECMAScript 实现允许抛出一个 EvalError 异常。

  #### 抛出

  如果参数中没有合法的表达式和语句，则抛出 SyntaxError 异常。

  如果非法调用 eval()，则抛出 EvalError 异常。

  如果传递给 eval() 的 Javascript 代码生成了一个异常，eval() 将把该异常传递给调用者。

  #### 提示和注释

  **提示：**虽然 eval() 的功能非常强大，但在实际使用中用到它的情况并不多。

* ### 19.export.import

  在创建JavaScript模块时，`**export**` 语句用于从模块中导出实时绑定的函数、对象或原始值，以便其他程序可以通过 [`import`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 语句使用它们。被导出的绑定值依然可以在本地进行修改。在使用import进行导入时，这些绑定值只能被导入模块所读取，但在export导出模块中对这些绑定值进行修改，所修改的值也会实时地更新。

  无论您是否声明，导出的模块都处于[`严格模式`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)。 export语句不能用在嵌入式脚本中。

  

  存在两种 exports 导出方式：

  1. 命名导出（每个模块包含任意数量）
  2. 默认导出（每个模块包含一个）

* ### 20.extends

  

# 8.了解ESLint及其基本用法

ESLint 官网的简介：

> 代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。

> JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。

因为 JavaScript 这门神奇的语言，在带给我们灵活性的同时，也埋下了一些坑。比如 `==` 涉及到的弱类型转换，着实让人很苦恼，还有 `this` 的指向，也是一个让人迷惑的东西。而 Lint 工具就很好的解决了这个问题，干脆禁止你使用 `==` ，这种做法虽然限制了语言的灵活性，但是带来的收益也是可观的。

还有就是作为一门动态语言，因为缺少编译过程，有些本可以在编译过程中发现的错误，只能等到运行才发现，这给我们调试工作增加了一些负担，而 Lint 工具相当于为语言增加了编译过程，在代码运行前进行静态分析找到出错的地方。

所以汇总一下，Lint工具的优势：

#### 1. 避免低级bug，找出可能发生的语法错误

> 使用未声明变量、修改 const 变量……

#### 2. 提示删除多余的代码

> 声明而未使用的变量、重复的 case ……

#### 3. 确保代码遵循最佳实践

> 可参考 [airbnb style](https://github.com/airbnb/javascript)、[javascript standard](https://github.com/standard/standard)

#### 4. 统一团队的代码风格

> 加不加分号？使用 tab 还是空格？

## 使用方式

说了那么多，还是来看下有点实际意义的，ESLint 到底是如何使用的。

### 初始化

如果想在现有项目中引入 ESLint，可以直接运行下面的命令：

```bash
# 全局安装 ESLint
$ npm install -g eslint

# 进入项目
$ cd ~/Code/ESLint-demo

# 初始化 package.json
$ npm init -f

# 初始化 ESLint 配置
$ eslint --init
复制代码
```



![image](https://user-gold-cdn.xitu.io/2019/7/28/16c372c15eece991?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



在使用 `eslint --init` 后，会出现很多用户配置项，具体可以参考：[eslint cli 部分的源码](https://github.com/eslint/eslint/blob/v6.0.1/lib/init/config-initializer.js#L432)。

经过一系列一问一答的环节后，你会发现在你文件夹的根目录生成了一个 `.eslintrc.js` 文件。



![image](https://user-gold-cdn.xitu.io/2019/7/28/16c372c163e5108f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



### 配置方式

ESLint 一共有两种配置方式：

#### 1. 使用注释把 lint 规则直接嵌入到源代码中

这是最简单粗暴的方式，直接在源代码中使用 ESLint 能够识别的注释方式，进行 lint 规则的定义。

```javascript
/* eslint eqeqeq: "error" */
var num = 1
num == '1'
复制代码
```



![image](https://user-gold-cdn.xitu.io/2019/7/28/16c372c19dec3f8f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



当然我们一般使用注释是为了临时禁止某些严格的 lint 规则出现的警告：

```javascript
/* eslint-disable */
alert('该注释放在文件顶部，整个文件都不会出现 lint 警告')

/* eslint-enable */
alert('重新启用 lint 告警')

/* eslint-disable eqeqeq */
alert('只禁止某一个或多个规则')

/* eslint-disable-next-line */
alert('当前行禁止 lint 警告')

alert('当前行禁止 lint 警告') // eslint-disable-line
复制代码
```

#### 2. 使用配置文件进行 lint 规则配置

在初始化过程中，有一个选项就是使用什么文件类型进行 lint 配置（`What format do you want your config file to be in?`）：

```
{
    type: "list",
    name: "format",
    message: "What format do you want your config file to be in?",
    default: "JavaScript",
    choices: ["JavaScript", "YAML", "JSON"]
}
复制代码
```

官方一共提供了三个选项：

1. JavaScript (eslintrc.js)
2. YAML (eslintrc.yaml)
3. JSON (eslintrc.json)

另外，你也可以自己在 `package.json` 文件中添加 `eslintConfig` 字段进行配置。

翻阅 ESLint [源码](https://github.com/eslint/eslint/blob/v6.0.1/lib/cli-engine/config-array-factory.js#L52)可以看到，其配置文件的优先级如下：

```javascript
const configFilenames = [
  ".eslintrc.js",
  ".eslintrc.yaml",
  ".eslintrc.yml",
  ".eslintrc.json",
  ".eslintrc",
  "package.json"
];
复制代码
.eslintrc.js > .eslintrc.yaml  > .eslintrc.yml > .eslintrc.json > .eslintrc > package.json
复制代码
```

当然你也可以使用 cli 自己指定配置文件路径：



![image](https://user-gold-cdn.xitu.io/2019/7/28/16c372c17b7affa5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 项目级与目录级的配置

我们有如下目录结构，此时在根目录运行 ESLint，那么我们将得到两个配置文件 `.eslintrc.js`（项目级配置） 和 `src/.eslintrc.js`（目录级配置），这两个配置文件会进行合并，但是 `src/.eslintrc.js` 具有更高的优先级。



![目录结构](https://user-gold-cdn.xitu.io/2019/7/28/16c372c169ec7637?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



但是，我们只要在 `src/.eslintrc.js` 中配置 `"root": true`，那么 ESLint 就会认为 `src` 目录为根目录，不再向上查找配置。

```javascript
{
  "root": true
}
```



关于eslint,以上还能看懂，从配置文件开始就。。。。。。。



# 9.重中之重！！！！预习并尝试掌握Javascript中的原型链是什么？



![img](https://user-gold-cdn.xitu.io/2019/11/6/16e3fec6c1fb209e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

上面经典的原型链相等图

> ## 一：原型、原型链相等关系理解

```
首先要清楚明白两个概念：
```

1.js分为**函数对**象和**普通对象**，每个对象都有__proto__属性，但是只有函数对象才有prototype属性

2.Object、Function都是js内置的**函数**, 类似的还有我们常用到的Array、RegExp、Date、Boolean、Number、String

```
那么__proto__和prototype到底是什么，两个概念理解它们
```

3.属性__proto__是一个对象，它有两个属性，constructor和__proto__；

4.原型对象prototype有一个默认的constructor属性，用于记录实例是由哪个构造函数创建；



> 有以下构造函数Person，他的原型上有所属国属性motherland='china'

```javascript
 function Person(name, age){ 
    this.name = name;
    this.age = age;
 }
 
 Person.prototype.motherland = 'china'

```

> 通过new Person()创建的person01实例

```javascript
 let person01 = new Person('小明', 18);
```

js之父在设计js原型、原型链的时候遵从以下两个准则

1. Person.prototype.constructor == Person // **准则1：原型对象（即Person.prototype）的constructor指向构造函数本身**
2. person01.\__proto\__ == Person.prototype // **准则2：实例（即person01）的__proto__和原型对象指向同一个地方**
  复制代码

记住以上**四个概念两个准则**，任何原型链相等判断都能判断正确；

大家可以对照上图，看看自己概念准则是否弄清楚了，一定要对照上图哦

```javascript
// 从上方 function Foo() 开始分析这一张经典之图
function Foo()
let f1 = new Foo();
let f2 = new Foo();

f1.__proto__ = Foo.prototype; // 准则2
f2.__proto__ = Foo.prototype; // 准则2
Foo.prototype.__proto__ = Object.protitype; // 准则2 (Foo.prototype本质也是普通对象，可适用准则2)
Object.prototype.__proto__ = null; // 原型链到此停止
Foo.prototype.constructor = Foo; // 准则1
Foo.__proto__ = Function.prototype; // 准则2
Function.prototype.__proto__  = Object.protitype; //  准则2 (Function.prototype本质也是普通对象，可适用准则2)
Object.prototype.__proto__ = null; // 原型链到此停止
// **此处注意Foo 和 Function的区别， Foo是 Function的实例**

// 从中间 Function Object()开始分析这一张经典之图
Function Object()
let o1 = new  Object();
let o2 = new  Object();

o1.__proto__ = Object.prototype; // 准则2
o2.__proto__ = Object.prototype; // 准则2
Object.prototype.__proto__ = null; // 原型链到此停止
Object.prototype.constructor = Object; // 准则1
Object.__proto__ = Function.prototype // 准则2 (Object本质也是函数)；
// 此处有点绕，Object本质是函数，Function本质是对象
Function.prototype.__proto__ =  Object.prototype; // 准则2 (Function.prototype本质也是普通对象，可适用准则2)
Object.prototype.__proto__ = null; // 原型链到此停止

// 从下方 Function Function()开始分析这一张经典之图
Function Function()
Function.__proto__ = Function.prototype // 准则2
Function.prototype.constructor = Function; // 准则1

```

由此可以得出结论： 除了Object的原型对象（Object.prototype）的__proto__指向null，其他内置函数对象的原型对象（例如：Array.prototype）和自定义构造函数的 __proto__都指向Object.prototype, 因为原型对象本身是普通对象。 即：

```javascript
Object.prototype.__proto__ = null;
Array.prototype.__proto__ = Object.prototype;
Foo.prototype.__proto__  = Object.prototype;

```

> ## 二：原型、原型链的意思何在

理解了这些相等关系之后，我们思考，原型、原型链的意思何在？原型对象的作用，**是用来存放实例中共有的那部份属性、方法，可以大大减少内存消耗 **  用我们文章开始的Person构造函数和person01实例举例说：

```javascript
console.log(person01)
```

打印person01， 他有自己属性 name = '小明'，age = 18; 同时通过原型链关系，他有属性motherland = 'china'；

我们再创建person2实例

```
let person02 = new Person('小花', 20);
console.log(person02)
```

打印person02， 他有自己属性 name = '小花'，age = 20; 同时通过原型链关系，他有属性motherland = 'china'； 看出来了没有，原型对象存放了person01、person02共有的属性所属国motherland = 'china'. 我们不用在每个实例上添加motherland 属性，而是将这一属性存在他们的构造函数原型对象上，对于人类Person这样的构造函数。相同的属性、方法还有很多很多，比如我们是黑头发，我们都有吃，睡这样一个方法，当相同的属性、方法越多，原型、原型链的意义越大。 那我们可以这样操作

```
Person.prototype.hairColor = 'black';
Person.prototype.eat = function(){
    console.log('We usually eat three meals a day.')
}
console.log(person01)
console.log(person02)
```

此时我们再打印person01、person02，我们惊喜的发现，他们有了属性hairColor和eat方法；实例们动态的获得了Person构造函数之后添加的属性、方法，这是就是原型、原型链的意义所在！可以动态获取，可以节省内存。

> 另外我们还要注意：如果person01将头发染成了黄色，那么hairColor会是什么呢？

```
person01,hairColor = 'yellow'；
console.log(person01)
console.log(person02)
复制代码
```

可以看到，person01的hairColor = 'yellow'， 而person02的hairColor = 'black'； 实例对象重写原型上继承的属相、方法，相当于“属性覆盖、属性屏蔽”，这一操作不会改变原型上的属性、方法，自然也不会改变由统一构造函数创建的其他实例，只有修改原型对象上的属性、方法，才能改变其他实例通过原型链获得的属性、方法。

# 10.Unicode、utf8、ASCLL的区别是什么

###### Unicode

**Unicode**，中文又称**万国码**、**国际码**、**统一码**、**单一码**，是[计算机科学](https://zh.wikipedia.org/wiki/電腦科學)领域里的一项业界标准。它对世界上大部分的[文字系统](https://zh.wikipedia.org/wiki/文字系統)进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。

Unicode伴随着[通用字符集](https://zh.wikipedia.org/wiki/通用字符集)的标准而发展，同时也以书本的形式[[1\]](https://zh.wikipedia.org/wiki/Unicode#cite_note-1)对外发表。Unicode至今仍在不断增修，每个新版本都加入更多新的字符。目前最新的版本为2020年3月公布的13.0.0[[2\]](https://zh.wikipedia.org/wiki/Unicode#cite_note-2)，已经收录超过13万个[字符](https://zh.wikipedia.org/wiki/字符_(计算机科学))（第十万个字符在2005年获采纳）。Unicode涵盖的资料除了视觉上的字形、编码方法、标准的[字符编码](https://zh.wikipedia.org/wiki/字符编码)外，还包含了字符特性，如大小写字母。

Unicode的发展由非营利机构[统一码联盟](https://zh.wikipedia.org/wiki/統一碼聯盟)负责，该机构致力于让Unicode方案取代既有的字符编码方案。因为既有的方案往往空间非常有限，亦不适用于[多语](https://zh.wikipedia.org/wiki/多語)环境。

Unicode备受认可，并广泛地应用于电脑软件的[国际化与本地化](https://zh.wikipedia.org/wiki/國際化與本地化)过程。有很多新科技，如[可扩展置标语言](https://zh.wikipedia.org/wiki/可扩展置标语言)（Extensible Markup Language，简称：XML）、[Java编程语言](https://zh.wikipedia.org/wiki/Java)以及现代的[操作系统](https://zh.wikipedia.org/wiki/作業系統)，都采用Unicode编码。

###### UTF-8

​		UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码，也是一种前缀码。它可以用一至四个字节对Unicode字符集中的所有有效编码点进行编码，属于Unicode标准的一部分，最初由肯·汤普逊和罗布·派克提出。由于较小值的编码点一般使用频率较高，直接使用Unicode编码效率低下，大量浪费内存空间。UTF-8就是为了解决向后兼容ASCII码而设计，Unicode中前128个字符（与ASCII码一一对应），使用与ASCII码相同的二进制值的单个字节进行编码，这使得原来处理ASCII字符的软件无须或只须做少部分修改，即可继续使用。因此，它逐渐成为电子邮件、网页及其他存储或发送文字优先采用的编码方式。
​		自2009年以来，UTF-8一直是万维网的最主要的编码形式（对所有，而不仅是Unicode范围内的编码）（并由WHATWG宣布为强制性的“适用于所有事物(for all things)”，截止到2019年11月， 在所有网页中，UTF-8编码应用率高达94.3%（其中一些仅是ASCII编码，因为它是UTF-8的子集），而在排名最高的1000个网页中占96％。 第二热门的多字节编码方式Shift JIS和GB 2312分别具有0.3％和0.2％的占有率。Internet邮件联盟（ Internet Mail Consortium, IMC）建议所有电子邮件程序都能够使用UTF-8展示和创建邮件，W3C建议UTF-8作为XML文件和HTML文件的默认编码方式。互联网工程工作小组（IETF）要求所有互联网协议都必须支持UTF-8编码，互联网邮件联盟（IMC）建议所有电子邮件软件都支持UTF-8编码。

###### **ASCII码**

我们知道，在计算机内部，所有的信息最终都表示为一个二进制的字符串。每一个二进制位（bit）有0和1两种状态，因此八个二进制位就可以组合出256种状态，这被称为一个字节（byte）。也就是说，一个字节一共可以用来表示256种不同的状态，每一个状态对应一个符号，就是256个符号，从00000000到11111111。

上个世纪60年代，美国制定了一套字符编码，对英语字符与二进制位之间的关系，做了统一规定。这被称为ASCII码，一直沿用至今。

ASCII码一共规定了128个字符的编码，比如空格"SPACE"是32（二进制00100000），大写的字母A是65（二进制01000001）。这128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面7位，最前面的1位统一规定为0。

#  11.尝试了解es6的Object.defineProperty

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。



## 语法

```
Object.defineProperty(obj, prop, descriptor)
```

### 参数



- `obj`

  要定义属性的对象。

- `prop`

  要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 。

- `descriptor`

  要定义或修改的属性描述符。

### 返回值

被传递给函数的对象。

在ES6中，由于 Symbol类型的特殊性，用Symbol类型的值来做对象的key与常规的定义或修改不同，而`Object.defineProperty` 是定义key为Symbol的属性的方法之一。

## 描述

该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 或 [`Object.keys`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)[ ](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys)方法），可以改变这些属性的值，也可以[`删除`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 `Object.defineProperty()` 添加的属性值是不可修改（immutable）的。

对象里目前存在的属性描述符有两种主要形式：*数据描述符*和*存取描述符*。*数据描述符*是一个具有值的属性，该值可以是可写的，也可以是不可写的。*存取描述符*是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。

这两种描述符都是对象。它们共享以下可选键值（默认值是指在使用 `Object.defineProperty()` 定义属性时的默认值）：

- `configurable`

  当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 **默认为** **`false`**。

- `enumerable`

  当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。 **默认为 `false`**。

数据描述符还具有以下可选键值：

- `value`

  该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

- `writable`

  当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被[`赋值运算符`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)改变。 **默认为 `false`。**

存取描述符还具有以下可选键值：

- `get`

  属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

- `set`

  属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。 **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。

#### 描述符默认值汇总

- 拥有布尔值的键 `configurable`、`enumerable` 和 `writable` 的默认值都是 `false`。
- 属性值和函数的键 `value`、`get` 和 `set` 字段的默认值为 `undefined`。

#### 描述符可拥有的键值

- `configurable``enumerable``value``writable``get``set`数据描述符可以可以可以可以不可以不可以存取描述符可以可以不可以不可以可以可以

如果一个描述符不具有 `value`、`writable`、`get` 和 `set` 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 `value` 或 `writable` 和 `get` 或 `set` 键，则会产生一个异常。

记住，这些选项不一定是自身属性，也要考虑继承来的属性。为了确认保留这些默认值，在设置之前，可能要冻结 [`Object.prototype`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)，明确指定所有的选项，或者通过 [`Object.create(null)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 将 [`__proto__`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__proto__) 属性指向 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)。