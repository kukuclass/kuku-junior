## 1.es6的箭头函数及其和es5 function定义方法的区别

>  es6箭头函数内部没有this,使用时会上朔寻找最近的this
>  不可以做构造函数,不能使用new命令,因为没有this
>  函数体内没有arguments,可以使用rest参数代替
>  不能用yield,不能使用generator函数

## 2.了解类数组对象（DOM相关），了解什么是DOM

* **类数组对象**

  > 拥有一个 length 属性和若干索引属性的对象
  >
  > 举个例子：
  >
  > ```javascript
  > var array = ['name', 'age', 'sex'];
  > 
  > var arrayLike = {
  >  0: 'name',
  >  1: 'age',
  >  2: 'sex',
  >  length: 3
  > }
  > ```
  >
  > 

* **DOM**

  > HTML DOM 定义了所有 HTML 元素的*对象*和*属性*，以及访问它们的*方法*。
  >
  > 换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。

## 3.熟练掌握Function.prototype. call / apply / bind 的区别   

https://juejin.im/post/6844903496253177863#heading-0

* **this 的指向**

  > 在 ES5 中，其实 this 的指向，始终坚持一个原理：**this 永远指向最后调用它的那个对象**，来，跟着我朗读三遍：**this 永远指向最后调用它的那个对象，this 永远指向最后调用它的那个对象，this 永远指向最后调用它的那个对象**。记住这句话，this 你已经了解一半了。
  >
  > 下面我们来看一个最简单的例子：
  > 例 1：
  >
  > ```javascript
  >  var name = "windowsName";
  >  function a() {
  >      var name = "Cherry";
  > 
  >      console.log(this.name);          // windowsName
  > 
  >      console.log("inner:" + this);    // inner: Window
  >  }
  >  a();
  >  console.log("outer:" + this)         // outer: Window
  > ```
  >
  > 这个相信大家都知道为什么 log 的是 windowsName，因为根据刚刚的那句话“**this 永远指向最后调用它的那个对象**”，我们看最后调用 `a` 的地方 `a();`，前面没有调用的对象那么就是全局对象 window，这就相当于是 `window.a()`；注意，这里我们没有使用严格模式，如果使用严格模式的话，全局对象就是 `undefined`，那么就会报错 `Uncaught TypeError: Cannot read property 'name' of undefined`。
  >
  > 再看下这个例子：
  > 例 2：
  >
  > ```javascript
  >  var name = "windowsName";
  >  var a = {
  >      name: "Cherry",
  >      fn : function () {
  >          console.log(this.name);      // Cherry
  >      }
  >  }
  >  a.fn();
  > ```
  >
  > 在这个例子中，函数 fn 是对象 a 调用的，所以打印的值就是 a 中的 name 的值。是不是有一点清晰了呢~
  >
  > 我们做一个小小的改动：
  > 例 3：
  >
  > ```javascript
  > var name = "windowsName";
  >  var a = {
  >      name: "Cherry",
  >      fn : function () {
  >          console.log(this.name);      // Cherry
  >      }
  >  }
  >  window.a.fn();
  > ```
  >
  > 这里打印 Cherry 的原因也是因为刚刚那句话“**this 永远指向最后调用它的那个对象**”，最后调用它的对象仍然是对象 a。
  >
  > 我们再来看一下这个例子：
  > 例 4：
  >
  > ```
  >  var name = "windowsName";
  >  var a = {
  >      // name: "Cherry",
  >      fn : function () {
  >          console.log(this.name);      // undefined
  >      }
  >  }
  >  window.a.fn();
  > ```
  >
  > 这里为什么会打印 `undefined` 呢？这是因为正如刚刚所描述的那样，调用 fn 的是 a 对象，也就是说 fn 的内部的 this 是对象 a，而对象 a 中并没有对 name 进行定义，所以 log 的 `this.name` 的值是 `undefined`。
  >
  > 这个例子还是说明了：**this 永远指向最后调用它的那个对象**，因为最后调用 fn 的对象是 a，所以就算 a 中没有 name 这个属性，也不会继续向上一个对象寻找 `this.name`，而是直接输出 `undefined`。
  >
  > 再来看一个比较坑的例子：
  > 例 5：
  >
  > ```javascript
  >  var name = "windowsName";
  >  var a = {
  >      name : null,
  >      // name: "Cherry",
  >      fn : function () {
  >          console.log(this.name);      // windowsName
  >      }
  >  }
  > 
  >  var f = a.fn;
  >  f();
  > ```
  >
  > 这里你可能会有疑问，为什么不是 `Cherry`，这是因为虽然将 a 对象的 fn 方法赋值给变量 f 了，但是没有调用，再接着跟我念这一句话：“**this 永远指向最后调用它的那个对象**”，由于刚刚的 f 并没有调用，所以 `fn()` 最后仍然是被 window 调用的。所以 this 指向的也就是 window。
  >
  > 由以上五个例子我们可以看出，this 的指向并不是在创建的时候就可以确定的，在 es5 中，永远是**this 永远指向最后调用它的那个对象**。
  >
  > 再来看一个例子：
  > 例 6：
  >
  > ```javascript
  >  var name = "windowsName";
  > 
  >  function fn() {
  >      var name = 'Cherry';
  >      innerFunction();
  >      function innerFunction() {
  >          console.log(this.name);      // windowsName
  >      }
  >  }
  > 
  >  fn()
  > ```
  >
  > 

* **怎么改变 this 的指向**

  > 改变 this 的指向我总结有以下几种方法：
  >
  > - 使用 ES6 的箭头函数
  > - 在函数内部使用 `_this = this`
  > - 使用 `apply`、`call`、`bind`
  > - new 实例化一个对象
  >
  > 例 7：
  >
  > ```javascript
  >     var name = "windowsName";
  > 
  >     var a = {
  >         name : "Cherry",
  > 
  >         func1: function () {
  >             console.log(this.name)     
  >         },
  > 
  >         func2: function () {
  >             setTimeout(  function () {
  >                 this.func1()
  >             },100);
  >         }
  > 
  >     };
  > 
  >     a.func2()     // this.func1 is not a function
  > ```
  >
  > 在不使用箭头函数的情况下，是会报错的，因为最后调用 `setTimeout` 的对象是 window，但是在 window 中并没有 func1 函数。
  >
  > 我们在改变 this 指向这一节将把这个例子作为 demo 进行改造。

* **箭头函数**

  > 众所周知，ES6 的箭头函数是可以避免 ES5 中使用 this 的坑的。**箭头函数的 this 始终指向函数定义时的 this，而非执行时。**，箭头函数需要记着这句话：<u>“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”</u>。
  >
  > 例 8 ：
  >
  > ```javascript
  >  var name = "windowsName";
  > 
  >  var a = {
  >      name : "Cherry",
  > 
  >      func1: function () {
  >          console.log(this.name)     
  >      },
  > 
  >      func2: function () {
  >          setTimeout( () => {
  >              this.func1()
  >          },100);
  >      }
  > 
  >  };
  > 
  >  a.func2()     // Cherry
  > ```
  >
  > ## 

* **在函数内部使用 `_this = this`**

  > 如果不使用 ES6，那么这种方式应该是最简单的不会出错的方式了，我们是先将调用这个函数的对象保存在变量 `_this` 中，然后在函数中都使用这个 `_this`，这样 `_this` 就不会改变了。
  > 例 9：
  >
  > ```javascript
  >  var name = "windowsName";
  > 
  >  var a = {
  > 
  >      name : "Cherry",
  > 
  >      func1: function () {
  >          console.log(this.name)     
  >      },
  > 
  >      func2: function () {
  >          var _this = this;
  >          setTimeout( function() {
  >              _this.func1()
  >          },100);
  >      }
  > 
  >  };
  > 
  >  a.func2()       // Cherry
  > ```
  >
  > 这个例子中，在 func2 中，首先设置 `var _this = this;`，这里的 `this` 是调用 `func2` 的对象 a，为了防止在 `func2` 中的 setTimeout 被 window 调用而导致的在 setTimeout 中的 this 为 window。我们将 `this(指向变量 a)` 赋值给一个变量 `_this`，这样，在 `func2` 中我们使用 `_this` 就是指向对象 a 了。

* **使用 apply**

  > 例 10：
  >
  > ```javascript
  >  var a = {
  >      name : "Cherry",
  > 
  >      func1: function () {
  >          console.log(this.name)
  >      },
  > 
  >      func2: function () {
  >          setTimeout(  function () {
  >              this.func1()
  >          }.apply(a),100);
  >      }
  > 
  >  };
  > 
  >  a.func2()            // Cherry
  > ```
  >
  > ### 

* **使用 call**

  > 例 11：
  >
  > ```javascript
  >  var a = {
  >      name : "Cherry",
  > 
  >      func1: function () {
  >          console.log(this.name)
  >      },
  > 
  >      func2: function () {
  >          setTimeout(  function () {
  >              this.func1()
  >          }.call(a),100);
  >      }
  > 
  >  };
  > 
  >  a.func2()            // Cherry
  > ```

* **使用 bind**

  > 例 12：
  >
  > ```javascript
  >  var a = {
  >      name : "Cherry",
  > 
  >      func1: function () {
  >          console.log(this.name)
  >      },
  > 
  >      func2: function () {
  >          setTimeout(  function () {
  >              this.func1()
  >          }.bind(a)(),100);
  >      }
  > 
  >  };
  > 
  >  a.func2()            // Cherry
  > ```

### apply、call、bind 区别

刚刚我们已经介绍了 apply、call、bind 都是可以改变 this 的指向的，但是这三个函数稍有不同。

在 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 中定义 apply 如下；

> apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数

语法：

> fun.apply(thisArg, [argsArray])

- thisArg：在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。
- argsArray：一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。浏览器兼容性请参阅本文底部内容。

### apply 和 call 的区别

其实 apply 和 call 基本类似，他们的区别只是传入的参数不同。

call 的语法为：

```javascript
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

所以 apply 和 call 的区别是 call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。

例 13：

```javascript
    var a ={
        name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
        }
    }

    var b = a.fn;
    b.apply(a,[1,2])     // 3
```

例 14：

```javascript
    var a ={
        name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
        }
    }

    var b = a.fn;
    b.call(a,1,2)       // 3
```

### bind 和 apply、call 区别

我们先来将刚刚的例子使用 bind 试一下

```javascript
    var a ={
        name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
        }
    }

    var b = a.fn;
    b.bind(a,1,2)
```

我们会发现并没有输出，这是为什么呢，我们来看一下 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 上的文档说明：

> bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

所以我们可以看出，bind 是创建一个新的函数，我们必须要手动去调用：

```javascript
    var a ={
        name : "Cherry",
        fn : function (a,b) {
            console.log( a + b)
        }
    }

    var b = a.fn;
    b.bind(a,1,2)()           // 3
```

## 4.使用闭包写一个自己的TODO，支持增删查改

```javascript
function todoList(todoName) {
    var index = 0;
    var list = [];       //list数组用来存放计划

    function setTodo(todoName) {
        list.push(
            {
                id: index++,
                todoName
            }
        );            //给数组添加属性
    }

    function removeTodo(index) {
        return list = list.filter(todo => todo.id !== index);  //filter并不会改变原数组，只是返回数组中符合filter()条件的部分元素
    }

    function findTodo(index) {
        return list.find(todo => todo.id ===index);    // find不会改变原数组，只会返回数组中符合find()条件的第一个元素
    }



    function findAllTodo() {
        return list;
    }

    function fixTodo(index) {
        list[index] = {id: index,todoName};
        list = list;
     	return '修改成功！';
    }

    return {
        setTodo,
        removeTodo,
        findTodo,
        findAllTodo,
        fixTodo
    };
}

let myTodoList = todoList();

myTodoList.setTodo('今天写作业');
myTodoList.setTodo('明天体测，做实验');
myTodoList.setTodo('后天早上买桌子，下午上课');

console.log(myTodoList.findAllTodo());
console.log(myTodoList.removeTodo(2));
console.log(myTodoList.findTodo(2));
```





## 5.尝试了解javascript中的发布订阅模型

> #### 1. 定义
>
> 发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。
>
> 订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Event Channel），当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。
>
> #### 2. 例子
>
> 比如我们很喜欢看某个公众号号的文章，但是我们不知道什么时候发布新文章，要不定时的去翻阅；这时候，我们可以关注该公众号，当有文章推送时，会有消息及时通知我们文章更新了。
>
> 上面一个看似简单的操作，其实是一个典型的发布订阅模式，公众号属于发布者，用户属于订阅者；用户将订阅公众号的事件注册到调度中心，公众号作为发布者，当有新文章发布时，公众号发布该事件到调度中心，调度中心会及时发消息告知用户
>
>
> 作者：xiaoxiaobaibai
> 链接：https://juejin.im/post/6844903850105634824



