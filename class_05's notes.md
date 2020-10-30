

1、JavaScript原型链

构造函数创建对象

```js
function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin
```

这里Person是一个构造函数，使用new创建了一个实例对象person，并赋予它name属性，值为’Kevin‘

**prototype**

每个函数都有一个prototype属性------**构造函数指向原型**

```js
function Person() {

}
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
```

函数的prototype属性指向了一个对象，这个对象是调用构造函数而创建的实例对象的原型。在上面代码中，则是person1和person2的原型。

原型：每个对象在创建的时候就会关联另一个对象，这个对象就是所谓的原型，每个对象都会从原型”继承“属性。

![1603976525282](C:\Users\Meng\AppData\Roaming\Typora\typora-user-images\1603976525282.png)

上图可以表示构造函数和实例原型之间的关系。

那么实例和实例原型之间通过什么表示？

**`_proto_`**   -------**实例指向实例原型**

 这是每一个JavaScript对象(除了 null )都具有的一个属性，叫`_proto_`，这个属性会指向该对象的原型。 

```JS
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

![1603976913027](C:\Users\Meng\AppData\Roaming\Typora\typora-user-images\1603976913027.png)

 既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？ 

**constructor** -------**原型指向构造函数**

指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，每个原型都有一个 constructor 属性指向关联的构造函数。

```JS
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```

![1603977171244](C:\Users\Meng\AppData\Roaming\Typora\typora-user-images\1603977171244.png)

则有：

```js
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
```

**实例与原型**

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

```js
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```

在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。

但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.`__proto__` ，也就是 Person.prototype中查找，最终我们找到了 name 属性，结果为 Kevin。



**原型的原型**

原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

```
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
```

其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 \__proto__ 指向构造函数的 prototype ，所以我们可以得到如下的关系图：

![1603977397283](C:\Users\Meng\AppData\Roaming\Typora\typora-user-images\1603977397283.png)

那 Object.prototype 的原型呢？

null，我们可以打印：

```js
console.log(Object.prototype.__proto__ === null) // true
```

> null 表示“没有对象”，即该处不应该有值。

所以 Object.prototype.`__proto__ `的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。

所以查找属性的时候查到 Object.prototype 就可以停止查找了。

最后一张关系图也可以更新为：

![1603977462186](C:\Users\Meng\AppData\Roaming\Typora\typora-user-images\1603977462186.png)

**instanceof运算符**

`instanceof`运算符返回一个布尔值，表示对象是否为某个构造函数的实例。

```js
var v = new Vehicle();
v instanceof Vehicle // true
```

`instanceof`运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上。因此，下面两种写法是等价的。

```js
v instanceof Vehicle
// 等同于
Vehicle.prototype.isPrototypeOf(v)
```



**Object对象的相关方法**

1、Object.getPrototypeOf()

 `Object.getPrototypeOf`方法返回参数对象的原型。这是获取原型对象的标准方法。 

2、Object.setPrototypeOf()

`Object.setPrototypeOf`方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。

3、Object.create

通常使用new命令让构造函数返回一个实例。但有时，只能拿到一个实例对象，可能根本不是由构造函数生成的，那怎么能从一个实例对象，生成另一个实例对象呢

则我们可以通过Object.create用来满足这个需求。该方法接受一个对象作为参数，然后以它为原型返回一个实例对象。该实例完全继承原型对象的属性。

```js
var obj1 = { p: 1 };
var obj2 = Object.create(obj1);
```

使用`Object.create()`方法的时候，必须提供对象原型，即参数不能为空，或者不是对象，否则会报错。

```js
Object.create()
// TypeError: Object prototype may only be an Object or null
Object.create(123)
// TypeError: Object prototype may only be an Object or null
```

4、 Object.prototype.isPrototypeOf()

实例对象的`isPrototypeOf`方法，用来判断该对象是否为参数对象的原型。

```js
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3) // true
o1.isPrototypeOf(o3) // true
```

由于`Object.prototype`处于原型链的最顶端，所以对各种实例都返回`true`，只有直接继承自`null`的对象除外。

5、`Object.prototype.__proto__`

**实例对象**的`__proto__`属性（前后各两个下划线），返回该对象的原型。

6、Object.getOwnPropertyNames()   

`Object.getOwnPropertyNames`方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。

对象本身的属性之中，有的是可以遍历的（enumerable），有的是不可以遍历的。`Object.getOwnPropertyNames`方法返回所有键名，不管是否可以遍历。只获取那些可以遍历的属性，使用`Object.keys`方法。

7、Object.prototype.hasOwnProperty()   

对象实例的`hasOwnProperty`方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。

```js
Date.hasOwnProperty('length') // true
Date.hasOwnProperty('toString') // false
```

8、in 运算符和 for...in 循环   

`in`运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。

```js
'length' in Date // true
'toString' in Date // true
```

`in`运算符常用于检查一个属性是否存在。



2、 把之前的作业分类成多篇文章同步在hexo中；为hexo更改一个好看的主题

hexo server遇到问题  用npm install hexo-server --save安装失败

hexo new “testname”创建不了新文章

3、已预习

有一些困惑的问题：

①getter/setter②回调函数③对象的拷贝④异步操作流程中的：串行、并行、串并