// 一个todo id工厂的全局变量
var todoIdFactory = 0;

// 生成唯一todo id的方法
function getTodoId() {
    return todoIdFactory++;
}

var Todo = (function () {
    function Todo({title, content}) {
        this.title = title; // 给todo instance赋值title
        this.content = content; // 给todo instance赋值content
        this.done = false; // 是否已完成
        this.id = getTodoId(); // 唯一ID
    }

    return Todo
}())