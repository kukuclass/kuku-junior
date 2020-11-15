var Todolist = (function (){
    var todolist = [];

    function Todolist() {}

    Todolist.prototype = {
        add({title, content}) {
            var todo = new Todo({title, content});
            todolist.push(todo);
            return todo;
        },
        query({id, title, content, done} = {}) {
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
            if (done)
                return todolist.filter(todo => todo.done === done);
            return [].slice.call(todolist);
        },
        update(id, {title, content, done}) {
            console.log(id);
            console.log(todolist);
            const index = todolist.findIndex(todo => todo.id === id);
            if (index === -1) {
                return;
            }
            if (title) {
                todolist[index].title = title;
            }
            if (content) {
                todolist[index].content = content;
            }
            if (done !== undefined) {
                todolist[index].done = done;
            }
        }
    }

    return Todolist;
}())
