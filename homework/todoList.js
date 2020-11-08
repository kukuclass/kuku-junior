var TodoList = (function () {
    var todolist = [];
    var index = 0;
    function Todo(){};

    Todo.prototype = {
        addTodo: function (title,content) {
            todolist.push({
                id:index++,
                title:title,
                content:content
            })
        },

        getTodoById: function (id) {
            return todolist.find(function (todo) {
                return todo.id === id;
            })
        },

        getTodoByName: function (title) {
            return todolist.find(function (todo) {
                return todo.title === title;
            })
        },

        removeTodoById: function (id) {
            todolist = todolist.filter(function (todo) {
                return todo.id !== id;
            })
        },

        updateTodoById: function (id, title, content) {
            return todolist.map(function (str) {
                if(str.id === id){
                    str.title = title;
                    str.content = content;
                }
            })
        },

        getTodoList: function () {
            return todolist.map(_=>_);
        },

    }
    return Todo;
}())

var list = new TodoList();
list.addTodo("first","artist");
list.addTodo("second","math");
list.addTodo("third","music");
console.log(list.getTodoByName("second"))
console.log(list.getTodoList());
list.removeTodoById(0);
console.log(list.getTodoList());
list.updateTodoById(1,"","");
console.log(list.getTodoList());
