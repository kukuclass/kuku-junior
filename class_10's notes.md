#### 1、箭头函数与普通函数的区别

##### （1）箭头函数没有原型（prototype），因此没有本身的this

```js
// 箭头函数
let a = () => {};
console.log(a.prototype); // undefined

// 普通函数
function a() {};
console.log(a.prototype); // {constructor:f}

```

##### （2）箭头函数不会创建自己的this

 箭头函数没有自己的this，箭头函数的this指向在**定义时**（不是调用时）的时候继承自外层第一个普通函数的this。所以，箭头函数中 ``this ``的指向在它被定义的时候就已经确定了，之后永远不会改变。 

```js
let obj = {
  a: 10,
  b: () => {
    console.log(this.a); // undefined
    console.log(this); 
      // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  },
  c: function() {
    console.log(this.a); // 10
    console.log(this); // {a: 10, b: ƒ, c: ƒ}
  }
}
obj.b(); 
obj.c();
```

##### （3）call、apply、bind不能改变箭头函数的指向

call/apply/bind 可以用来动态修改函数运行时，this的指向，但由于箭头函数的this在定义时就已经确定，且不会再改变，所以这些方法无法改变this的指向。

```js
var id = 10;
let fun = () => {
    console.log(this.id)
};
fun();                    // 10
fun.call({ id: 20 });     // 10
fun.apply({ id: 20 });    // 10
fun.bind({ id: 20 })();   // 10
```

**注：**箭头函数中this的指向，一般指向在定义的时候继承自外层第一个普通函数的this，如果外层没有普通函数，那么则指向全局对象。

##### （4）箭头函数不能作为构造函数使用

构造函数new都做了些什么：① JS内部首先会先生成一个对象； ② 再把函数中的this指向该对象； ③ 然后执行构造函数中的语句； ④ 最终返回该对象实例。

但是因为箭头函数没有自己的``this``，它的``this``其实是继承了**外层执行环境中**的``this``，且``this``指向永远不会随在哪里调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用new调用时会报错。

```js
let Fun = (name, age) => {
    this.name = name;
    this.age = age;
};

// 报错
let p = new Fun('dingFY', 24);
```

##### （5）箭头函数没有arguments对象

箭头函数没有arguments对象， 在箭头函数中访问``arguments``实际上获得的是外层局部（函数）执行环境中的值。 可以使用rest参数（...)

```js
// 普通函数
function A(a){
  console.log(arguments);
}
A(1,2,3,4,5,8);  //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 箭头函数
let B = (b)=>{
  console.log(arguments);
}
B(2,92,32,32);   // Uncaught ReferenceError: arguments is not defined

// rest参数...
let C = (...c) => {
  console.log(c);
}
C(3,82,32,11323);  // [3, 82, 32, 11323]
```



#### 2、 css transform / transition / animation 

##### （1）transform：

 `transform`属性允许你旋转，缩放，倾斜或平移给定元素。 这是通过修改CSS视觉格式化模型的坐标空间来实现的。

语法：

```css
/* Keyword values */
transform: none;

/* Function values */

/*CSS函数 matrix() 指定了一个由指定的 6 个值组成的 2D 变换矩阵。这种矩阵的常量值是隐含的，而不是由参数传递的*/
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
/*translate() 这个 CSS 函数在水平和/或垂直方向上重新定位元素。*/
transform: translate(12px, 50%);
/*translateX()函数表示在二维平面上水平方向移动元素。*/
transform: translateX(2em);
/*translateY() 在页面垂直移动元素*/
transform: translateY(3in);
/*scale() 用于修改元素的大小。可以通过向量形式定义的缩放值来放大或缩小元素，同时可以在不同的方向设置不同的缩放值。*/
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
/*rotate()函数定义了一种将元素围绕一个定点（由transform-origin属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。*/
transform: rotate(0.5turn);
/*skew() 函数定义了一个元素在二维平面上的倾斜转换。skew() 函数指定一个或两个参数，它们表示在每个方向上应用的倾斜量。skew(ax), skew(ax, ay)*/
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
/*CSS 函数 matrix3d() 以4x4齐次矩阵的形式定义一个3D转换。*/
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
/*translate3d() CSS 函数在3D空间内移动一个元素的位置。这个移动由一个三维向量来表达，分别表示他在三个方向上移动的距离。*/
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
/*scale3d()用三个值指定该函数，这三个值表示要在每个方向上应用的缩放比例。*/
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
/*rotate3d() CSS函数定义一个变换，它将元素围绕固定轴移动而不使其变形。运动量由指定的角度定义; 如果为正，运动将为顺时针，如果为负，则为逆时针*/
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
/*CSS 属性 perspective指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。*/
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

##### （2）transition：

transition提供了一种在更改CSS属性时，控制动画速度的方法。可以让属性变化成为一个持续一段时间的过程，而不是立即生效的。

通过transition的属性来定义过渡：

`transition-property`

指定哪个或哪些 CSS 属性用于过渡。只有指定的属性才会在过渡中发生动画，其它属性仍如通常那样瞬间变化。

`transition-duration`

指定过渡的时长。或者为所有属性指定一个值，或者指定多个值，为每个属性指定不同的时长。

`transition-delay`

指定延迟，即属性开始变化时与过渡开始发生时之间的时长。

`transition-timing-function`

指定切换效果的速度。此属性允许一个过渡效果，以改变其持续时间的速度。

语法：

 `transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);`

| 属性                  | 功能                                                         |
| --------------------- | ------------------------------------------------------------ |
| linear                | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
| ease                  | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 |
| ease-in               | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  |
| ease-out              | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  |
| ease-in-out           | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 |
| cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 |

（3）animation

 **animation** 属性是 `animation-name`，`animation-duration`, `animation-timing-function`，`animation-delay`，`animation-iteration-count`，`animation-direction`，`animation-fill-mode` 和 `animation-play-state` 属性的一个简写属性形式。 

 通过使用`@keyframes`建立两个或两个以上关键帧来实现。每一个关键帧都描述了动画元素在给定的时间点上应该如何渲染。 

示例：

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

这里只使用了两个关键帧，第一个在0%处也就是`from`处，第二个在100%处也就是`to`处。

可以添加关键帧，如在动画进行至75%处

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
```

属性的具体作用：

**`animation-delay`**

设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。

**`animation-direction`**

设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。

**`animation-duration`**

设置动画一个周期的时长。

**`animation-iteration-count`**

设置动画重复次数， 可以指定infinite无限次重复动画

**`animation-name`**

指定由`@keyframes`描述的关键帧名称。

**`animation-play-state`**

允许暂停和恢复动画。

**`animation-timing-function`**

设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化。

**`animation-fill-mode`**

指定动画执行前后如何为目标元素应用样式。



#### 3、 rem布局 

rem/em都是相对单位.

 em作为font-size的单位时，其代表父元素的字体大小，em作为其他属性单位时，代表自身字体大小 。

示例：

```html
<div class="p1">
    <div class="s1">1</div>
    <div class="s2">1</div>
</div>
<div class="p2">
    <div class="s5">1</div>
    <div class="s6">1</div>
</div>

.p1 {font-size: 16px; line-height: 32px;}
.s1 {font-size: 2em;}
.s2 {font-size: 2em; line-height: 2em;}

.p2 {font-size: 16px; line-height: 2;}
.s5 {font-size: 2em;}
.s6 {font-size: 2em; line-height: 2em;}
```

```css
p1：font-size: 16px; line-height: 32px
s1：font-size: 32px; line-height: 32px
s2：font-size: 32px; line-height: 64px
```

- p1 无需解释
- s1 em作为字体单位，相对于父元素字体大小；line-height继承父元素计算值
- s2 em作为行高单位时，相对于自身字体大小

```css
p2：font-size: 16px; line-height: 32px
s5：font-size: 32px; line-height: 64px
s6：font-size: 32px; line-height: 64px
```

- p2 `line-height: 2`自身字体大小的两倍
- s5 数字无单位行高，继承原始值，s5的line-height继承的2，自身字体大小的两倍
- s6 无需解释



 rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小 。

```css
/* 作用于根元素，相对于原始大小（16px），所以html的font-size为32px*/
html {font-size: 2rem}

/* 作用于非根元素，相对于根元素字体大小，所以为64px */
p {font-size: 2rem}
```

 rem布局的本质是等比缩放，一般是基于宽度 .

假设我们将屏幕宽度平均分成100份，每一份的宽度用x表示，`x = 屏幕宽度 / 100`，如果将x作为单位，x前面的数值就代表屏幕宽度的百分比

```css
p {width: 50x} /* 屏幕宽度的50% */
```

如果让html元素字体的大小，恒等于屏幕宽度的1/100，那1rem和1x就等价了

```css
html {fons-size: width / 100}
p {width: 50rem} /* 50rem = 50x = 屏幕宽度的50% */
```

css3带来了rem的同时，也带来了vw和vh.

vw —— 视口宽度的 1/100；vh —— 视口高度的 1/100.

```css
/* rem方案 */
html {fons-size: width / 100}
p {width: 15.625rem}

/* vw方案 */
p {width: 15.625vw}
```

vw还可以和rem方案结合

```css
html {fons-size: 1vw} /* 1vw = width / 100 */
p {width: 15.625rem}
```

#### 4、 css @media 媒体查询 

媒体查询（Media queries）的作用主要在于想要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时。

 `@media`  可用于基于一个或多个 媒体查询 的结果来应用样式表的一部分。 使用它，您可以指定一个媒体查询和一个CSS块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该CSS块才能应用于该文档。 

基础语法：

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

它由以下部分组成：

- 一个媒体类型，告诉浏览器这段代码是用在什么类型的媒体上的（例如印刷品或者屏幕）；
- 一个媒体表达式，是一个被包含的CSS生效所需的规则或者测试；
- 一组CSS规则，会在测试通过且媒体类型正确的时候应用。

你可以指定的媒体类型为：

- `all` ：适用于所有设备
- `print`  ： 适用于在打印预览模式下在屏幕上查看的分页材料和文档。  
- `screen`  ：屏幕
- `speech`  ：语音合成器

**媒体特征规则**---在指定了类型以后，你可以用一条规则指向一种媒体特征。

**宽和高**

一般最常探测的特征是视口宽度，而且我们可以使用`min-width`、`max-width`和`width`媒体特征，在视口宽度大于或者小于某个大小——或者是恰好处于某个大小——的时候，应用CSS。

这些特征是用来创建响应不同屏幕大小的布局的。

```css
@media screen and (width: 600px) {
    body {
        color: red;
    }
}
```

`width`（和`height`）媒体特征可以以数值范围使用，于是就有了`min-`或者`max-`的前缀，指示所给的值是最小值还是最大值。例如，要让颜色在视口窄于400像素的时候变成蓝色的话，可以用`max-width`：

```css
@media screen and (max-width: 400px) {
    body {
        color: blue;
    }
}
```

**朝向**

`orientation`，可以用它测得竖放（portrait mode）和横放（landscape mode）模式。要在设备处于横向的时候改变body文本颜色的话，可使用下面的媒体查询。

```css
@media (orientation: landscape) {
    body {
        color: rebeccapurple;
    }
}
```

标准的桌面视图是横放朝向的，在这种朝向上能够表现良好的设计，在处于竖放模式的手机或平板电脑上可能不会表现得这么好。对朝向的测试可以帮你建立一个为竖放设备优化的布局。

**使用指点设备**

`hover`特征意味着你可以测试用户是否能在一个元素上悬浮，这也基本就是说他们正在使用某种指点设备，因为触摸屏和键盘导航是没法实现悬浮的。

```css
@media (hover: hover) {
    body {
        color: rebeccapurple;
    }
}
```

如果我们知道用户不能悬浮的话，我们可以默认显示一些交互功能。对于能够悬浮的用户，我们可以选择在悬浮在链接上的时候，让这些功能可用。

**组合查询**

有了所有不同的可用的媒体查询，你可能想要把它们混合起来，或者建立查询列表——其中的任何一个都可以匹配生效。

**媒体查询中的“与”逻辑**

为了混合媒体特征，可以用`and`来混合媒体类型和特征。例如，我们可能会想要测得`min-width`和`orientation`，而body的文字只会在视口至少为400像素宽，且设备横放时变为蓝色。

```css
@media screen and (min-width: 400px) and (orientation: landscape) {
    body {
        color: blue;
    }
}
```

**媒体查询中的“或”逻辑**

如果你有一组查询，且要其中的任何一个都可以匹配的话，那么你可以使用逗号分开这些查询。如果其中的任何一项成立，那么查询就匹配上了。如文本在视口至少为400像素宽的时候**或者**设备处于横放状态的时候变为蓝色。

```css
@media screen and (min-width: 400px), screen and (orientation: landscape) {
    body {
        color: blue;
    }
}
```

**媒体查询中的“非”逻辑**

你可以用`not`操作符让整个媒体查询失效。这就直接反转了整个媒体查询的含义。因而在下面的例子中，文本只会在朝向为竖着的时候变成蓝色。

```css
@media not all and (orientation: landscape) {
    body {
        color: blue;
    }
}
```



#### 5、html5 history API

（1）history API： 

 DOM `window`对象通过 `history`对象提供了对浏览器的会话历史的访问 。它暴露了很多有用的方法和属性，允许你在用户浏览历史中向前和向后跳转，同时——从HTML5开始——提供了对history栈中内容的操作。 

在history中向后跳转：

```js
window.history.back();
```

这和用户点击浏览器回退按钮的效果相同。

类似地，你可以向前跳转（如同用户点击了前进按钮）：

```js
window.history.forward();
```

可以用 `go()` 方法载入到会话历史中的某一特定页面， 通过与当前页面相对位置来标志 (当前页面的相对位置标志为0).

向后移动一个页面 (等同于调用 `back()`):

```js
window.history.go(-1);
```

向前移动一个页面, 等同于调用了 `forward()`:

```js
window.history.go(1);
```

类似地，你可以传递参数值2并向前移动2个页面，等等。

可以通过查看长度属性的值来确定的历史堆栈中页面的数量:

```js
 let numberOfEntries = window.history.length;
```

HTML5新增了两个方法

 **History.pushState(state, title [, url])** 方法：往历史堆栈的顶部添加一个状态。 

浏览器历史记录可以看作一个「栈」。栈是一种后进先出的结构，可以把它想象成一摞盘子，用户每点开一个新网页，都会在上面加一个新盘子，叫「入栈」。用户每次点击「后退」按钮都会取走最上面的那个盘子，叫做「出栈」。而每次浏览器显示的自然是最顶端的盘子的内容。

执行`pushState`函数之后，会往浏览器的历史记录中添加一条新记录，同时改变地址栏的地址内容。它可以接收三个参数，按顺序分别为：

1. 一个对象或者字符串，用于描述新记录的一些特性。这个参数会被一并添加到历史记录中，以供以后使用。这个参数是开发者根据自己的需要自由给出的。
2. 一个字符串，代表新页面的标题。当前基本上所有浏览器都会忽略这个参数。
3. 一个字符串，代表新页面的相对地址。

例子：

```javascript
var state = {
    id: 2,
    name: "profile"
};
window.history.pushState(state, "My Profile", "/profile/");
```

**popstate事件**

当用户点击浏览器的「前进」、「后退」按钮时，就会触发`popstate`事件。你可以监听这一事件，从而作出反应。

```javascript
window.addEventListener("popstate", function(e) {
    var state = e.state;
    // do something...
});
```

这里`e.state`就是当初`pushState`时传入的第一个参数。例如，在我们的例子中，有：

```javascript
e.state.id == 2;
e.state.name == "profile";
```

**replaceState方法**

有时，你希望不添加一个新记录，而是替换当前的记录（比如对网站的 landing page），则可以使用`replaceState`方法。这个方法和`pushState`的参数完全一样。

 注：是修改了当前的历史记录项而不是新建一个。 注意这并不会阻止其在全局浏览器历史记录中创建一个新的历史记录项。 