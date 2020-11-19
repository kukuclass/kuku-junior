var TodoList = (function () {

    var todolist = []; // 定义私有变量，todo的清单
    var listeners = []; // 订阅者们
    var index = 0; // 定义当前的清单创建了几个todo

    function Todo() {
    }

    Todo.prototype = {
        addTodo: function (title, content) {

            todolist.push({
                id: index++,
                title: title,
                content: content
            })

            listeners.forEach(function (listener) {
                if (typeof listener === "function") {
                    listener.call(null, {title, content, index})
                }
            });
        },
        getTodoById: function (id) {
            return todolist.find(function (todo) {
                return todo.id === id
            });
        },
        getTodoByName: function (name) {
            // 我找到的元素可能是多个
            return todolist.filter(function (todo) {
                // 只要模糊匹配到了这个字段，便可以返回对应的内容
                return todo.title.indexOf(name) !== -1
                    || todo.content.indexOf(name) !== -1;
            });
        },
        removeTodoById: function (id) {
            // 方法1
            let idToRemove = todolist.findIndex(todo => todo.id === id);
            delete todolist[idToRemove];
            // 方法2
            return todolist = todolist.filter(todo => todo.id !== id);
        },
        updateTodoById: function (id, title, content) {
            // 方法1
            let idToUpdate = todolist.findIndex(todo => todo.id === id);
            todolist[idToUpdate] = {id, title, content};
            if (title) todolist[idToUpdate] = {...todolist[idToUpdate], title}
            if (content) todolist[idToUpdate] = {...todolist[idToUpdate], content}
            // 方法2
            return todolist = todolist.map(todo => {
                if (todo.id === id) {
                    let todoToReturn = {...todo};
                    if (title) todoToReturn.title = title;
                    if (content) todoToReturn.content = content;
                    return todoToReturn;
                }
                return todo;
            })
        },
        getTodoList: function () {
            // 方法1
            return todolist.map(function (todo) {
                return todo;
            });
            // 方法2
            return Array.prototype.slice.call(todolist);
            // 方法3
            return [...todolist];
        },
        addListener(listener) {
            listeners.push(listener);
        }
    }

    return Todo;
}());

const todolist = new TodoList();

todolist.addListener(function (newTodo) {
    let p = document.createElement('p');
    p.innerText = newTodo.title + " " + newTodo.content;
    document.body.append(p);
})