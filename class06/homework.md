- 作业1：手动封装5个promisify的异步方法，诸如setTimeout、HTML Image onLoad、AJAX等
- 作业2：review new Instance的过程，拓展丰富以下方法（增加prototype、__proto__）
```
function generateNew(constructor, arguments) {
    var object = Object.assign({},constructor.prototype); // var object = constructor.prototype;
    constructor.apply(object, [...arguments]);
    return object;
}
```
- 作业3：写一个TodoList的构造函数，完成对todos的增删改查
- 作业4：继续预习class02/preview下的内容
- 作业5：精通array库、object库、string库、number库、boolean库、date库、json库，下节课上课考试～