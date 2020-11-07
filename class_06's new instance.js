
/*
使用new命令时，它后面的函数依次执行下面的步骤。

    1、创建一个空对象，作为将要返回的对象实例。
    2、将这个空对象的原型，指向构造函数的prototype属性。
    3、将这个空对象赋值给函数内部的this关键字。
    4、开始执行构造函数内部的代码。
*/

//方法1
function myNew(){
    var obj=new Object();
    var Constructor=[].shift.call(arguments);
    if (Constructor.prototype!=null){
        obj.__proto__=Constructor.prototype;
    }
    var result=Constructor.apply(obj,arguments);
    return typeof result==='object' ? result : obj;
}



//方法2
function myNew(Obj,...args){
    var obj = Object.create(Obj.prototype);//使用指定的原型对象及其属性去创建一个新的对象
    Obj.apply(obj,args); // 绑定 this 到obj, 设置 obj 的属性
    return obj; // 返回实例
}
