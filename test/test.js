var TodoList = (function () {
    var index = 0;
    var todoList = [];

    function Todo() {}

    Todo.prototype = {
        addTodo: function (title, content) {
            todoList.push({
                id: index++,
                content: content,
                title: title
            })
        },

        getTodoById: function (id) {
            return todoList.find(function (todo){
                return todo.id === id;
            })
        },

        getTodoByName: function (title) {
            return todoList.find(function (todo){
                return todo.title === title;
            })
        },

        removeTodoById: function (id) {
            return todoList = todoList.filter(function (todo) {
                return toto.id = id;
            })
        },

        updateTodoById: function (id, title, content) {
            todoList = todoList.map(function (todo) {
                    return todo.id = id ? ({id, title, content}): todo;
                }

            )
            return true;
        }


    }
    return Todo;
}())

var todo = new TodoList;

todo.addTodo('asdfasdf', 'teijtii');

console.log(todo.updateTodoById(0, 'fdd', 'qqq'));

