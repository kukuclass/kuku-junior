var Todolist = (function (){
    var todolist = [];

    function Todolist() {}

    Todolist.prototype = {
        add({title, content}) {
            var todo = new Todo({title, content});
            todolist.push(todo);
            return todo;
        },
        query({id, title, content} = {}) {
            if (id)
                return todolist.find(todo => todo.id === id);
            if (title && content)
                return todolist
                    .filter(todo => todo.title.indexOf(title) !== -1)
                    .filter(todo => todo.content.indexOf(title) !== -1)
            if (title)
                return todolist.filter(todo => todo.title.indexOf(content) !== -1)
            if (content)
                return todolist.filter(todo => todo.content.indexOf(content) !== -1)
            return [].slice.call(todolist);
        },
    }

    return Todolist;
}())
