##### 1、什么是AJAX，怎么实现？

###### Ajax=Asynchronous JavaScript and XML，即异步的JavaScript和XML，是web 2.0的核心。

客户端与服务器，可以在不必刷新整个浏览器的情况下，与服务器进行异步通讯的技术。使用Ajax技术只需要对页面的局部进行更新，可以提高页面的加载速度，从而缩短用户等待时间，改善用户体验。

​	同步：就是一件事一件事的执行，只有前一个任务执行完毕，才能执行后一个任务。

​	异步：如果是异步任务，则把这个任务挂起，继续执行后面的代码。

​	JS是单线程的，只能在js引擎的主线程上运行，不能在同一时间执行多个js代码任务，如果没有异步的存在，就会出现用户长时间等待，并且由于当前任务还未完成，所以这时候其他所有操作都会无响应。

###### 	常见的异步模式

回调函数

事件监听

发布/订阅模式（观察者模式）

promise

js通过事件循环机制（Event Loop）来实现异步操作：当js解析执行时，会被引擎分为两类任务，同步任务（synchronous）和异步任务（asynchronous）；同步任务会被推到执行栈按顺序去执行，而异步任务当其可以被执行时，会被放到一个任务队列（task quene）里等待js引擎去执行。

​	当执行栈里所有同步任务完成后，js引擎才会去任务队列里看是否有任务存在，并将其放到执行栈里去执行，执行完了又会去任务队列里看是否有可以执行的任务。

在任务队列中又可以分为：微任务（microtask）队列&宏任务（macrotask）队列。

Event Loop的执行顺序为：

1. 首先执行执行栈里的任务。
2. 执行栈清空后，检查微任务队列，将可执行的微任务全部执行。
3. 取宏任务队列中的第一项执行。
4. 回到第二步。



###### XMLHttpRequest是Ajax的基础。

> XML是可扩展标记语言（EXtensible Markup Language），是一种很像HTML的语言，它是为了传输数据而不是显示数据

XMLHttpRequest对象用于在后台与服务器交换数据。

创建XMLHttpRequest对象：variable=new XMLHttpRequest();

向服务器发送请求，使用XMLHttpRequest对象的open()和send()方法：

```
xmlhttp.open("GET","test1.txt",ture);
xmlhttp.send();
```

| 方法                         | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| **open(*method,url,async*)** | 规定请求的类型、URL以及是否异步处理请求。<br />***method***：请求的类型；GET或POST<br />***url***：文件在服务器上的位置<br />***async***：true（异步）false（同步） |
| **send(*string*)**           | 将请求发送到服务器。<br />***string***：仅用于**POST**请求   |

**GET与POST**

与POST相比，GET更简单也更快，并在大部分情况下都能用

但在以下情况下，应使用POST请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST没有数据限制）
- 发送包含未知字符的用户输入时，POST比GET更稳定也更可靠

如果需要像HTML表单那样POST数据，则需要使用setRequestHeader()来添加HTTP头，然后再send方法中规定希望发送的数据：

```
xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");
```



**服务器响应**

如果需要获得来自服务器的响应，使用XMLHttpRequest对象的responseText或responseXML属性。

| 属性         | 描述                     |
| ------------ | ------------------------ |
| responseText | 获得字符串形式的响应数据 |
| responseXML  | 获得XML形式的响应数据    |

如果来自服务器的响应并非XML，则使用responseText属性

如果来自服务器的响应是XML，而且需要作为XML对象进行解析，则使用responseXML属性



**onreadystatechange事件**

当请求被发送到服务器时，我们需要执行一些基于响应的任务

每当readyState改变时，就会触发onreadystatechange事件。

readyState属性存有XMLHttpRequest的状态信息

| 属性                   | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| **onreadystatechange** | 存储函数（或函数名），每当readyState属性改变时，就会调用该函数 |
| **readyState**         | 存有XMLHttpRequest的状态。从0到4发生变化。<br />0：请求未初始化<br />1：服务器连接已建立<br />2：请求已接收<br />3：请求处理中<br />4：请求已完成，且响应已就绪 |
| **status**             | 200：“OK”<br />404：未找到页面                               |

readyState等于4且状态为200时，表示响应已就绪。

##### 2、学习Javascript的模块化方式：AMD , CMD, CommonJS，ES Module，UMD

模块化：将一个复杂的程序依据一定的规则封装成几个块（文件），并进行组合在一起；块的内部数据与实现是私有的，只是向外部暴露一些接口（方法）与外部其他模块通信

**优点：**

- 模块化开发中，通常一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数，并且可以按需加载。
- 依赖自动加载，按需加载。
- 提高代码复用率，方便进行代码的管理，使得代码管理更加清晰、规范。
- 减少了命名冲突，消除全局变量。

###### **CommonJS**

CommonJS主要运行于服务器端，该规范指出，一个单独的文件就是一个模块。Node.js为主要实践者，它有四个重要的环境变量为模块化的实现提供支持：module、exports、require、global。require主要用于输入其他模块提供的功能， module.exports 导出当前模块的方法或变量。

```
 // sum.js
 module.exports = {sum: function(){...做加操作..}; } //或者 exports.sum = function(){...做加操作..};
  
 // calculate.js
  var math = require('sum');
  exports.add = function(n){
      return math.sum(val,n);
  };
```

 `CommonJS`  采用同步加载模块，而加载的文件资源大多数在本地服务器，所以执行速度或时间没问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。 

###### **AMD**

AMD=Asynchronous Module Definition,即异步模块定义。采用异步的方式加载模块，模块的加载不影响它后面语句的运行。 [RequireJS](http://requirejs.org/)和[curl.js](https://github.com/cujojs/curl)就是实现了AMD规范 

在AMD中，使用define来定义一个模块，然后使用require来加载一个模块。

```
1.require([module], callback)
2. define(id, [depends], callback)
```

```
定义一个模块
define(function () {
    var alertName = function (str) {
      alert("I am " + str);
    }
    var alertAge = function (num) {
      alert("I am " + num + " years old");
    }
    return {
      alertName: alertName,
      alertAge: alertAge
    };
  });
```

```
引入模块
require(['alert'], function (alert) {
  alert.alertName('JohnZhu');
  alert.alertAge(21);
});
```

###### **CMD**

CMD=Common Module Definition， CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。 

CMD与AMD较为相近，区别如下：

- 对于依赖的模块 CMD 是延迟执行，而 AMD 是提前执行（不过 RequireJS 从 2.0 开始，也改成可以延迟执行。 ）

- CMD 推崇 as lazy as possible（依赖就近），AMD 推崇依赖前置。

- AMD 的 api 默认是一个当多个用，CMD 严格的区分推崇职责单一，其每个 API 都简单纯粹。例如：AMD 

  ```
  // AMD
  define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好  
     a.doSomething()    
     // 此处略去 100 行    
     b.doSomething()    
     ...
  });
  // CMD
  define(function(require, exports, module) {
     var a = require('./a')   
     a.doSomething()   
     // 此处略去 100 行   
     var b = require('./b') 
     // 依赖可以就近书写   
     b.doSomething()
     // ... 
  });
  ```

###### ES Module

ES modules（ESM）是 JavaScript 官方的标准化模块系统。 在ES6中，我们可以使用 `import` 关键字`引入`模块，通过 `export` 关键字`导出`模块。

```
//定义模块 math.js
var basicNum=0;
var add=function(a,b){
    return a+b;
};
export{basicNum,add};

//引用模块
import{basicNum,add} from './math';
function test(ele){
         ele.textContent=add(99+basicNum);
}
```

 es6在导出的时候有一个默认导出，`export default`,使用它导出后，在import的时候，不需要加上{}，模块名字可以随意起。该名字实际上就是个对象，包含导出模块里面的函数或者变量。 

```
//定义输出
export default{basicNum,add};
//引入
import math from './math';
function test(ele){
        ele.textContent=math.add(99+math.basicNum);
}
```

但一个模块只有一个export default。

**Common JS和ES 6的区别**

（1） CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

- CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
- ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令`import`，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的`import`有点像 Unix 系统的“符号连接”，原始值变了，`import`加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

（2） CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

- 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
- 编译时加载: ES6 模块不是对象，而是通过 `export` 命令显式指定输出的代码，`import`时采用静态命令的形式。即在`import`时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。

CommonJS 加载的是一个对象（即`module.exports`属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。




###### UMD

UMD=Universal Module Definition， 通用模块定义模式，该模式主要用来解决CommonJS模式和AMD模式代码不能通用的问题，并同时还支持老式的全局变量规范。 

UMD的实现：

1. 先判断是否支持Node.js模块格式（exports是否存在），存在则使用Node.js模块格式。
2. 再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。
3. 前两个都不存在，则将模块公开到全局（window或global）。

```javascript
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));
```

##### 3、学习在web中单页应用与多页应用的区别

###### **单页应用（SinglePage Application，SPA）**

> 指只有一个主页面的应用，一开始只需加载一次 `js,css` 等相关资源。所有的内容都包含在主页面，对每一个功能模块组件化。单页应用跳转，就是切换相关组件，仅刷新局部资源。

###### **多页应用（MultiPage Application，MPA）**

> 指有多个独立的页面的应用，每个页面必须重复加载 `js,css` 等相关资源。多页应用跳转，需要整页资源刷新。

|          | SPA                                                          | MPA                                                          |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 结构     | 一个主页面 + 许多模块的组件                                  | 许多完整的页面                                               |
| 体验     | 页面切换快，体验佳；当初次加载文件过多时，需要做相关的调优。 | 页面切换慢，网速慢的时候，体验尤其不好                       |
| 资源文件 | 组件公用的资源只需要加载一次                                 | 每个页面都要自己加载公用的资源                               |
| 适用场景 | 对体验度和流畅度有较高要求的应用，不利于 SEO（可借助 SSR 优化 SEO） | 适用于对 SEO 要求较高的应用                                  |
| 过渡动画 | Vue 提供了 transition 的封装组件，容易实现                   | 很难实现                                                     |
| 内容更新 | 相关组件的切换，即局部更新                                   | 整体 HTML 的切换，费钱（重复 HTTP 请求）                     |
| 路由模式 | 可以使用 hash ，也可以使用 history                           | 普通链接跳转                                                 |
| 数据传递 | 因为单页面，使用全局变量就好（Vuex）                         | cookie 、localStorage 等缓存方案，URL 参数，调用接口保存等   |
| 相关成本 | 前期开发成本较高，后期维护较为容易                           | 前期开发成本低，后期维护就比较麻烦，因为可能一个功能需要改很多地方 |

##### 4、学习JSON是什么？和XML、YAML的区别

###### JSON：JavaScript Object Notation（JavaScript 对象表示法）

- JSON 是轻量级的文本数据交换格式
- JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
- JSON 具有自我描述性，更易理解

JSON中有两种数据结构：Object（键值对、字典、对象）和Array（数组）。

Object中的数据为键值对，其基本形式是`{"key": "value"}`，key需要有双引号（这样key中就可以有特殊字符了）。键值对之间用逗号分割。

Array为集合，其基本形式是`[element1, element2]`，element可以是数值、字符串等基本类型，也可以是Array和Object。

Object和Array可以嵌套，Object可以作为Array的元素（mailList中的mail），Array也可以是Object中的某个value（mailList）。

###### XML：可扩展标记语言

(1)可作为一种简单的数据库，存储并检索数据；

(2)传输约定格式的文件；

(3)做软件的配置文件。【配置文件：保存软件设置的文件】

###### YMAL: YAML Ain't Markup Language

 YAML 是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便。 

YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲（例如：许多电子邮件标题格式和YAML非常接近）。

YAML 的配置文件后缀为 .yml，如：**runoob.yml** 。

基本语法

- 大小写敏感
- 使用缩进表示层级关系
- 缩进不允许使用tab，只允许空格
- 缩进的空格数不重要，只要相同层级的元素左对齐即可
- '#'表示注释

------

数据类型

YAML 支持以下几种数据类型：

- 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
- 数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）
- 纯量（scalars）：单个的、不可再分的值



##### 5、变量提升练习

​			var a=2;

​			function a() {

   		 console.log(3);

​			}

​			console.log(typeof a);

结果应为number

##### 6、掌握Javascript语言层面的基本错误类型

**Error**

`Error`是最基本的错误类型，其他的错误类型都继承自该类型。因此，`所有错误的类型共享了一组相同的属性。` 这个类型的错误很少见。一般使用开发人员自定义抛出的错误。

**EvalError**

这个错误会在使用`eval()`函数发生异常时候抛出。两种情况会出错：

1. new eval();
2. eval = foo; 上面两个的意思结合就是没有直接调用`eval`函数，而是new或者是重新赋值 这个错误基本上不会遇到，因为`eval`函数本来用的就不多。不过需要注意的是，`eval`是一个关键字。

##### **RangeError**

这个错误会在`数值超出相应范围时触发`。比如使用`new Array()`的时候传递一个负数或者是超过数组最大长度（4,294,967,295）的数，比如Number.MAX_VALUE，Number.MIN_VALUE。注意递归爆炸也有这个错误。

**ReferenceError**

这个错误一般就是出现在`变量找不到的情况`，比如：

```
var a = b;
Uncaught ReferenceError: b is not defined
```

这时候就需要检查一下一个变量了

**SyntaxError**

当Javascript语言解析代码时,Javascript引擎发现了不符合语法规范的代码，会出现此错误 。

**TypeError**

在变量中保存着以外的类型时，或者在访问不存在的方法时。都会导致这种错误。但是归根结底还是`由于在执行特定于类型的操作时，变量的类型并不符合要求所致`

##### 7、arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield 关键字的意义

argument： 是一个类似数组的对象, 对应于传递给函数的参数。 

break： `break`语句会使运行的程序立刻退出包含在**最内层的循环**或者退出一个`switch`语句。 

case：

```
switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 
```

- 计算一次 switch 表达式
- 把表达式的值与每个 case 的值进行对比
- 如果存在匹配，则执行关联代码

catch：try...catch语法

```cpp
try {
    //在此运行代码
}
catch(err){
    //在此处理错误
}

运行流程：
try{...}包含块中的代码有错误，则运行catch(err){...}内的代码，
否则不运行catch(err){...}内的代码。
```

 class：定义一个类的一种方法是使用一个**类声明**。要声明一个类，你可以使用带有`class`关键字的类名 

const： const 用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改。

continue： `continue`语句和`break`语句相似。所不同的是，它不是退出一个循环，而是开始循环的一次新迭代。 

debugger：用于停止执行 JavaScript，并调用调试函数。这个关键字与在调试工具中设置断点的效果是一样的。

default：**default 关键字**可以在 JavaScript 的两种情况下使用：在 [`switch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) ，或 [`export`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 中。

在[`switch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch) 语句中使用:

```
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

```
export default nameN 
```

delete： **`delete` 操作符**用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。 

```
delete expression
```

 *expression* 的计算结果应该是某个属性的引用，例如：

```
delete object.property 
delete object['property']
```

do：**`do...while` 语句**创建一个执行指定语句的循环，直到`condition`值为 false。在执行`statement` 后检测`condition`，所以指定的`statement`至少执行一次。

```
do
   statement
while (condition);
```

- `statement`

  执行至少一次的语句，并在每次 `condition` 值为真时重新执行。想执行多行语句，可使用[`block`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/block)语句（`{ ... }`）包裹这些语句。

- `condition`

  循环中每次都会计算的表达式。如果 `condition` 值为真， `statement` 会再次执行。当 `condition` 值为假，则跳到`do...while`之后的语句。

else：当指定条件为真，**if 语句**会执行一段语句。如果条件为假，则执行另一段语句。

```
if (condition)
   statement1
[else
   statement2]
```

- `condition`

  值为真或假的[表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)

- `statement1`

  当`condition`为真时执行的语句。可为任意语句，包括更深层的内部`if`语句。要执行多条语句，使用[块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/block)语句（{ ... }）将这些语句分组；若不想执行语句，则使用[空](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)语句。 

- `statement2`

  如果`condition`为假且 `else`从句存在时执行的语句。可为任意语句，包括块语句和嵌套的`if`语句。

多层 `if...else` 语句可使用 `else if` 从句。

enum：在 Javascript 同样可以做到和 Java 类似的枚举类型，不过是通过类来模拟。

每个枚举值都是类的一个实例，这样所有枚举值都具有类型（这样可通过 instanceof 判断类型），且每个枚举值和普通对象一样具有自身的属性和方法。

枚举值可通过枚举类型名直接引用，因此每个枚举值必须是类的静态属性。

枚举值是常量，所以第一次赋值后，冻结枚举类型，之后不能再修改。

eval： `eval()` 的参数是一个字符串。如果字符串表示的是表达式，`eval()` 会对表达式进行求值。  如果 `eval()` 的参数不是字符串， `eval()` 会将参数原封不动地返回。 

export：存在两种 export 导出方式：

1. 命名导出（每个模块包含任意数量）
2. 默认导出（每个模块包含一个）

extends： **`extends`**关键字用于[类声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class)或者[类表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/class)中，以创建一个类，该类是另一个类的子类。 

false：与true对应，布尔值

finally： `finally`块包含的语句在`try`块和`catch`之后，`try..catch..finally`块后的语句之前执行。请注意，无论是否抛出异常`finally`子句都会执行。此外，如果抛出异常，即使没有`catch`子句处理异常，`finally`子句中的语句也会执行。 

for：一个 [`for`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/statements/for) 循环会一直重复执行，直到指定的循环条件为 false。 JavaScript 的 for 循环，和 Java、C 的 for 循环，是很相似的。一个 for 语句是这个样子的：

```
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

当一个 `for` 循环执行的时候，会发生以下过程：

1. 如果有初始化表达式 `initialExpression`，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。
2. 计算 `condition` 表达式的值。如果 `condition` 的值是 true，循环中的语句会被执行。如果 `condition` 的值是 false，`for` 循环终止。如果 `condition` 表达式整个都被省略掉了，condition的值会被认为是true。
3. 循环中的 `statement` 被执行。如果需要执行多条语句，可以使用块（`{ ... }`）来包裹这些语句。
4. 如果有更新表达式 `incrementExpression`，执行更新表达式。
5. 回到步骤 2。

function：一个**函数定义**（也称为**函数声明**，或**函数语句**）由一系列的[`function`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Statements/function)关键字组成，依次为：

- 函数的名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号`{}`括起来。

例如，以下的代码定义了一个简单的`square`函数：

```
function square(number) {
  return number * number;
}
```

函数`square`使用了一个参数，叫作`number`。这个函数只有一个语句，它说明该函数将函数的参数（即`number`）自乘后返回。函数的[`return`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/return)语句确定了函数的返回值。

if：基本的if…else语法看起来像下面的 [伪代码](https://developer.mozilla.org/en-US/docs/Glossary/伪代码):

```html
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

implements：是实现一个接口，就是实现一个定义好的接口中的方法。

import： 静态的`import` 语句用于导入由另一个模块导出的绑定。 

```
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`

  导入模块的默认导出接口的引用名。

- `module-name`

  要导入的模块。通常是包含目标模块的`.js`文件的相对或绝对路径名，可以不包括`.js`扩展名。某些特定的打包工具可能允许或需要使用扩展或依赖文件，它会检查比对你的运行环境。只允许单引号和双引号的字符串。

- `name`

  导入模块对象整体的别名，在引用导入模块时，它将作为一个命名空间来使用。

- `export, exportN`

  被导入模块的导出接口的名称。

- `alias, aliasN`

  将引用指定的导入的名称。

in： 如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回`true`。 

```
prop in object
```

- `prop`

  一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）。

- `objectName`

  检查它（或其原型链）是否包含具有指定名称的属性的对象。

instanceof： **`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。 

```
object instanceof constructor
```

- `object`

  某个实例对象

- `constructor`

  某个构造函数

interface：接口

let： **let** 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。  `let`声明的变量只在其声明的块或子块中可用，这一点，与`var`相似。二者之间最主要的区别在于`var`声明的变量的作用域是整个封闭函数。 

new： **`new` 运算符**创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。 

```
new constructor[([arguments])]
```

- `constructor`

  一个指定对象实例的类型的类或函数。

- `arguments`

  一个用于被 `constructor` 调用的参数列表。

null： 值 `null` 特指对象的值未设置。它是 JavaScript [基本类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 之一，在布尔运算中被认为是[falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) 

 值 `null` 是一个字面量，不像 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，它不是全局对象的一个属性。`null` 是表示缺少的标识，指示变量未指向任何对象。

package： 每个项目的根目录下面，一般都有一个`package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。 

private：私有的，  装载私有属性，里面定义的成员外部不可使用且不能继承给子类 。 

protected： 装载保护属性，里面定义的成员外部不可使用但能够继承给子类 

public： 装载公有属性 

return：

```
return [[expression]]; 
```

- `expression`

  表达式的值会被返回。如果忽略，则返回 `undefined`。

static： 装载静态方法和属性 

super： **super**关键字用于访问和调用一个对象的父对象上的函数。 

```
super([arguments]); 
// 调用 父对象/父类 的构造函数

super.functionOnParent([arguments]); 
// 调用 父对象/父类 上的方法
```

switch： **`switch` 语句**评估一个[表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)，将表达式的值与`case`子句匹配，并执行与该情况相关联的[语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements)。 

```js
switch (expression) {
  case value1:
    // 当 expression 的结果与 value1 匹配时，执行此处语句
    [break;]
  case value2:
    // 当 expression 的结果与 value2 匹配时，执行此处语句
    [break;]
  ...
  case valueN:
    // 当 expression 的结果与 valueN 匹配时，执行此处语句
    [break;]
  [default:
    // 如果 expression 与上面的 value 值都不匹配，执行此处语句
    [break;]]
}
```

this：this永远指向一个对象；this的指向完全取决于函数调用的位置；

throw： **`throw`语句**用来抛出一个用户自定义的异常。当前函数的执行将被停止（`throw`之后的语句将不会执行），并且控制将被传递到调用堆栈中的第一个[`catch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)块。如果调用者函数中没有`catch`块，程序将会终止。 

```
throw expression; 
```

- `expression`

  要抛出的表达式。

true：布尔值---真

try： **`try...catch`**语句标记要尝试的语句块，并指定一个出现异常时抛出的响应。 

typeof： **`typeof`** 操作符返回一个字符串，表示未经计算的操作数的类型。 

var： **`var` 声明语句**声明一个变量，并可选地将其初始化为一个值。 

void： **`void` 运算符** 对给定的表达式进行求值，然后返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。 

while： **while 语句**可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。 

```
while (condition)
  statement
```

- `condition`

  条件表达式，在每次循环前被求值。如果求值为真，`statement`就会被执行。如果求值为假，则跳出`while`循环执行后面的语句。

- `statement`

  只要条件表达式求值为真，该语句就会一直被执行。要在循环中执行多条语句，可以使用块语句（`{ ... }`）包住多条语句。

  注意：使用`break`语句在`condition`计算结果为真之前停止循环。

with： **with语句** 扩展一个语句的作用域链。 

```
with (expression) {
    statement
}
```

- `expression`

  将给定的表达式添加到在评估语句时使用的作用域链上。表达式周围的括号是必需的。

- `statement`

  任何语句。要执行多个语句，请使用一个[块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/block)语句 ({ ... })对这些语句进行分组。

yield： `yield` 关键字用来暂停和恢复一个生成器函数（([`function*`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*) 或[遗留的生成器函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)）。 

```
[rv] = yield [expression];
```

- `expression`

  定义通过[迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)从生成器函数返回的值。如果省略，则返回`undefined`。

- `rv`

   返回传递给生成器的`next()`方法的可选值，以恢复其执行。 

##### 8、了解ESLint及其基本用法

ESLint属于一种QA工具，是一个ECMAScript/JavaScript语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

ESLint旨在完全可配置，它的目标是提供一个插件化的javascript代码检测工具。这意味着您可以关闭每个规则，只能使用基本语法验证，或者混合并匹配捆绑的规则和自定义规则，使ESLint完美的适用于您的项目。

在根目录下创建 src/index.js 文件，内容如下，接下来就使用 Eslint 来检验这个 .js 文件是否符合编码规范。

```js
const lint = 'eslint'
```

此时的目录结构应该为：

```css
- test-eslint
    + .eslintrc.js
    + package.json
    - src
        + index.js
```

校验代码

```bash
$ npm run lint
```

##### 9、Javascript中的原型链

 JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。 

###### Constructor 构造函数

首先我们先写一个`构造函数` Person，构造函数一般为了区别普通函数要求首字母大写:

```
function Person(){}
```

###### prototype 原型

原型指的就是一个对象，实例“继承”那个对象的属性。在原型上定义的属性，通过“继承”，实例也拥有了这个属性。“继承”这个行为是在 new 操作符内部实现的。

原型与构造函数的关系就是，构造函数内部有一个名为 prototype 的属性，通过这个属性就能访问到原型：

 Person 就是构造函数，Person.prototype 就是原型。

###### instance 实例

有个构造函数，我们就可以在原型上创建可以“继承”的属性，并通过 new 操作符创建实例

比方说 Person，我们要创建一个 person 实例，那么使用 new 操作符就可以实现，我们在原型上定义一个属性，那么实例上也就可以“继承”这个属性。

###### proto 隐式原型

实例通过 `__proto__` 访问到原型，所以如果是实例，那么就可以通过这个属性直接访问到原型。

###### constructor 构造函数

既然构造函数通过 prototype 来访问到原型，那么原型也应该能够通过某种途径访问到构造函数，这就是 constructor。

这里我们可以看到如果实例想要访问构造函数，实例与原型则是通过 `__proto__` 去访问到。

在读取一个实例的属性的过程中，如果属性在该实例中没有找到，那么就会循着 `__proto__` 指定的原型上去寻找，如果还找不到，则尝试寻找原型的原型.

###### 原型链

原型同样也可以通过 `__proto__` 访问到原型的原型，比方说这里有个构造函数 Person 然后“继承”前者的有一个构造函数 People，然后 new People 得到实例 p

当访问 p 中的一个非自有属性的时候，就会通过 `__proto__` 作为桥梁连接起来的一系列原型、原型的原型、原型的原型的原型直到 Object 构造函数为止。

这个搜索的过程形成的链状关系就是原型链

 ![preview](https://segmentfault.com/img/remote/1460000018511043/view) 



##### 10、Unicode、utf8、utf16、ASCII的区别是什么

###### Unicode

如果有一种编码，将世界上所有的符号都纳入其中。每一个符号都给予一个独一无二的编码，那么乱码问题就会消失。这就是 Unicode，就像它的名字都表示的，这是一种所有符号的编码。

Unicode 当然是一个很大的集合，现在的规模可以容纳100多万个符号。每个符号的编码都不一样，比如，`U+0639`表示阿拉伯字母`Ain`，`U+0041`表示英语的大写字母`A`，`U+4E25`表示汉字`严`。

###### UTF-8

互联网的普及，强烈要求出现一种统一的编码方式。UTF-8就是在互联网上使用最广的一种Unicode的实现方式。其他实现方式还包括UTF-16（字符用两个字节或四个字节表示）和UTF-32（字符用四个字节表示），不过在互联网上基本不用。**UTF-8是Unicode的实现方式之一。**

UTF-8最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。

UTF-8的编码规则很简单，只有二条：

1）对于单字节的符号，字节的第一位设为0，后面7位为这个符号的unicode码。因此对于英语字母，UTF-8编码和ASCII码是相同的。

2）对于n字节的符号（n>1），第一个字节的前n位都设为1，第n+1位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，全部为这个符号的unicode码。

###### UTF-16

> UTF-16是[Unicode](https://baike.baidu.com/item/Unicode)字符编码五层次模型的第三层：字符编码表（Character Encoding Form，也称为 "storage format"）的一种实现方式。即把Unicode字符集的抽象码位映射为16位长的整数（即码元， 长度为2 Byte）的序列，用于数据存储或传递。Unicode字符的码位，需要1个或者2个16位长的码元来表示，因此这是一个变长表示。

UTF-16最少也会用2 Byte来表示一个字符，因此没有办法兼容ASCII编码（ASCII编码使用1 Byte来进行存储）。

###### **ASCII码**

我们知道，在计算机内部，所有的信息最终都表示为一个二进制的字符串。每一个二进制位（bit）有0和1两种状态，因此八个二进制位就可以组合出256种状态，这被称为一个字节（byte）。也就是说，一个字节一共可以用来表示256种不同的状态，每一个状态对应一个符号，就是256个符号，从00000000到11111111。

上个世纪60年代，美国制定了一套字符编码，对英语字符与二进制位之间的关系，做了统一规定。这被称为ASCII码，一直沿用至今。

ASCII码一共规定了128个字符的编码，比如空格"SPACE"是32（二进制00100000），大写的字母A是65（二进制01000001）。这128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面7位，最前面的1位统一规定为0。



##### 11、尝试了解 es6 的 Object.defineProperty

 `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。  应当直接在 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 构造器对象上调用此方法，而不是在任意一个 `Object` 类型的实例上调用。 

```
Object.defineProperty(obj, prop, descriptor)
```

参数

- `obj`

  要定义属性的对象。

- `prop`

  要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 。

- `descriptor`

  要定义或修改的属性描述符。