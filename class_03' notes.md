1. ##### 了解es6的箭头函数及其和es5 function定义方法的区别

   ```js
   (param1, param2, …, paramN) =>{ return expression; }
   /*函数参数=>返回值；
   只有一个参数时，圆括号可有可无；
   没有参数时，括号不能省略
   () => { statements }
   只有一个return语句时可以省略{}*/
   
   params => ({foo: bar})
   //对于返回对象类型，需要在{}外加圆括号
   ```

   具名函数可以这样写

   `let func=(param1,param2,...,paramN)=>{return experssion}`

   实例：

   `let sum=(a,b)=>a+b`

   ----

   箭头函数没有自己的`this`， 如果访问 `this`，则会从外部获取。 

   实例：

   ```js
   let group={
     title: "Our Group",
     students: ["John", "Pete", "Alice"],
     showList(){
         this.students.forEach(
         student => alert(this.title + ': ' + student)
       );
     }
   }
   group.showList();
   ```

    这里 `forEach` 中使用了箭头函数，所以其中的 `this.title` 其实和外部方法 `showList` 的完全一样。那就是：`group.title`。 

   <!--foreach对数组内的每个元素运行一个函数-->

   不能对箭头函数进行new操作

   `.bind(this)` 创建了一个该函数的“绑定版本”。

   箭头函数 `=>` 没有创建任何绑定。箭头函数只是没有 `this`。`this` 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。

   箭头函数也没有 arguments变量。

2. ##### 了解类数组对象（DOM相关），了解什么是DOM

   文档对象模型 (DOM) 是web页面的接口。本质上是页面的API，允许程序读取和操作页面的内容、结构和样式。HTML的主干是标签，每个HTML标签都是一个对象。嵌套的标签是闭合标签的子标签。标签内的文本也是一个对象，这些所有的对象都可以用js来访问，我们可以用它们来修改页面。

    **HTML 中的所有内容，甚至注释，都会成为 DOM 的一部分。** 

   表示整个文档的 `document` 对象，在形式上也是一个 DOM 节点。

   一共有 十二种节点类型。实际上，我们通常用到的是其中的 4 种：

   1. `document` — DOM 的“入口点”。
   2. 元素节点 — HTML 标签，树构建块。
   3. 文本节点 — 包含文本。
   4. 注释 — 有时我们可以将一些信息放入其中，它不会显示，但 JS 可以从 DOM 中读取它。

   访问DOM：通过 使用 `document`或 `window` 元素的API来操作文档本身或获取web页面中的各种元素。 

   数据类型：

   **Element**

   Element提供了对元素标签名，子节点和特性的访问，我们常用HTML元素比如`div`，`span`，`a`等标签就是`element`中的一种。

   **Text**

   Text表示文本节点，它包含的是纯文本内容，不能包含html代码，但可以包含转义后的html代码。

   **Comment**

   Comment表示HTML文档中的注释，它没有子节点。

   **Document**

   Document表示文档，在浏览器中，`document`对象是HTMLDocument的一个实例，表示整个页面，它同时也是window对象的一个属性。




3. ##### 熟练掌握Function.prototype. call / apply / bind 的区别

   由于this的动态切换，在给js创造灵活性的同时也使编程变得困难，有时需要将this进行绑定，使得this固定的指向某个对象，减少不确定性，也是call /apply /bind这三个方法的作用。

   **Function.prototype.call()**

    函数实例的`call`方法，可以指定函数内部`this`的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。 

    `call`方法的参数，应该是一个对象。如果参数为空、`null`和`undefined`，则默认传入全局对象。 

   ```js
   var n = 123;
   var obj = { n: 456 };
   
   function a() {
     console.log(this.n);
   }
   
   a.call() // 123
   a.call(null) // 123
   a.call(undefined) // 123
   a.call(window) // 123
   a.call(obj) // 456
   ```

   如果`call`方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入`call`方法。

   ```js
   var f = function () {
     return this;
   };
   
   f.call(5)
   // Number {[[PrimitiveValue]]: 5}
   ```

   上面代码中，`call`的参数为`5`，不是对象，会被自动转成包装对象（`Number`的实例），绑定`f`内部的`this`。

   call方法可以接受多个参数

   `func.call(thisValue, arg1, arg2,....)`

   ```js
   function add(a, b) {
     return a + b;
   }
   
   add.call(this, 1, 2) // 3
   ```

   `call`方法指定函数`add`内部的`this`绑定当前环境（对象），并且参数为`1`和`2`，因此函数`add`运行后得到`3`。

   **Function.Prototype.apply()**

    `apply`方法的作用与`call`方法类似，也是改变`this`指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。

   `apply`方法的作用与`call`方法类似，也是改变`this`指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。

   ```js
   func.apply(thisValue, [arg1, arg2, ...])
   ```

   `apply`方法的第一个参数也是`this`所要指向的那个对象，如果设为`null`或`undefined`，则等同于指定全局对象。第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。原函数的参数，在`call`方法中必须一个个添加，但是在`apply`方法中，必须以数组形式添加。 

   ```js
   function f(x, y){
     console.log(x + y);
   }
   
   f.call(null, 1, 1) // 2
   f.apply(null, [1, 1]) // 2
   ```

   问题：

   ```js
   Array.apply(null, ['a', ,'b'])
   // [ 'a', undefined, 'b' ]
   ```

   这里没有懂为什么可以将空字符串变成undefined

   **Function.prototype.bind()**

   `bind`方法用于将函数体内的`this`绑定到某个对象，然后返回一个新函数。

    `bind`方法的参数就是所要绑定`this`的对象.

   ```js
   var counter = {
     count: 0,
     inc: function () {
       this.count++;
     }
   };
   
   var func = counter.inc.bind(counter);
   //函数体内的this绑定到counter这个对象上，返回func这个新函数
   func();
   counter.count // 1
   ```

    `counter.inc`方法被赋值给变量`func`。这时必须用`bind`方法将`inc`内部的`this`，绑定到`counter` 

   `this`绑定到其他对象也是可以的。

   ```js
   var counter = {
     count: 0,
     inc: function () {
       this.count++;
     }
   };
   
   var obj = {
     count: 100
   };
   var func = counter.inc.bind(obj);
   //bind将inc方法内部的this绑定至obj对象，则调用func时，改变obj内部的count属性
   func();
   obj.count // 101
   ```

    `bind`还可以接受更多的参数，将这些参数绑定原函数的参数。 

   ```js
   var add = function (x, y) {
     return x * this.m + y * this.n;
   }
   
   var obj = {
     m: 2,
     n: 2
   };
   
   var newAdd = add.bind(obj, 5);
   /*除了绑定了add中的this到obj上，还将add函数的第一个参数x绑定为5，返回一个新函数newAdd
   则调用newAdd时只需要再传入一个参数y*/
   
   newAdd(5) // 20
   ```

   

4. ##### 使用闭包写一个自己的TODO，支持增删查改

   ```js
   function todolist() {
     var index = 0;
     var list = [];
   
     function setTodo(todoName) {
       try {
         list.push(
           {
             id: index++,
             todoName
           }
         );
         return true;
       } catch (e) {
         return false;
       }
     }
   
     function findTodo(index) {
       return list.find(todo => todo.id === index);
     }
   //find返回一个对象
     function removeTodo(index) {
       return list = list.filter(todo => todo.id !== index)
     }
   //filter返回一个新的数组
     function findAllTodo() {
       return list;
     }
      function fixTodo(index,){
         return list=list.splice(todo=>todo.id===index,) 
      }
   //有一点小问题
     return {
       setTodo,
       findAllTodo,
       findTodo,
       removeTodo
     }
   }
   
   let myTodoList = todolist();
   
   ```

   

5. ##### 尝试了解javascript中的发布订阅模型

   ​         观察者模式：定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。 观察者模式有一个别名叫“发布-订阅模式”，或者说是“订阅-发布模式”，订阅者和订阅目标是联系在一起的，当订阅目标发生改变时，逐个通知订阅者。 

   ​        但随着时间的沉淀，它已经独立于观察者模式，成为一种不同的设计模式。在现在的发布订阅模式中，发布者的消息不会直接发给订阅者，这意味着发布者和订阅者不知道彼此的存在。在发布者和订阅者之间存在第三个组件，成为消息代理或调度中心或中间件， 它维持着发布者和订阅者之间的联系，过滤所有发布者传入的消息并相应地分发它们给订阅者。 

   观察者模式：观察者（`Observer`）直接订阅（`Subscribe`）主题（`Subject`），而当主题被激活的时候，会触发（`Fire Event`）观察者里的事件。

   发布订阅模式：订阅者（`Subscriber`）把自己想订阅的事件注册（`Subscribe`）到调度中心（`Topic`），当发布者（`Publisher`）发布该事件（`Publish topic`）到调度中心，也就是该事件触发时，由调度中心统一调度（`Fire Event`）订阅者注册到调度中心的处理代码。

   观察者模式和发布订阅模式最大的区别就是发布订阅模式有个事件调度中心。

   观察者模式由具体目标调度，每个被订阅的目标里面都需要有对观察者的处理，这种处理方式比较直接粗暴，但是会造成代码的冗余。

   而发布订阅模式中统一由调度中心进行处理，订阅者和发布者互不干扰，消除了发布者和订阅者之间的依赖。这样一方面实现了解耦，还有就是可以实现更细粒度的一些控制。比如发布者发布了很多消息，但是不想所有的订阅者都接收到，就可以在调度中心做一些处理，类似于权限控制之类的。还可以做一些节流操作。