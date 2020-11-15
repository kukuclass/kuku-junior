var Todolist = (function () {
    var todolist = [];

    function Todolist() {}

    Todolist.prototype = {
        add({title, content}) {
            todolist.push(new Todo({title, content}));
        },
        query({id, title, content} = {}) {
            if (typeof id !== "undefined")
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
        update(id, {title, content, done}) {
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
                todolist[index].done = Boolean(done);
            }
        }
    }

    return Todolist;
}())
