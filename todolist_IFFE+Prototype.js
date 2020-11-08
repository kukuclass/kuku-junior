/*
写一个构造函数包含todolist的方法属性，
通过new可以实例化一个todolist，new()里面的参数应该是todolist的内容
并可以用.function来调用其中的方法实现增删改查
*/
// todolist 待办事项清单





var Todolist=(function (){
        var todolist=[];
        var index=0;
        function Todolist(){}
        Todolist.prototype={
            addTodolist:function (title,content){
                todolist.push({
                    id:index++,
                    title:title,
                    content:content
                })
        },
        getTodoById:function (id){
             return   todolist.find(function(todo){
                    return todo.id===id;
                })
        },
            getTodoByName:function (name){
                return todolist.find(function(todo){
                    return todo.title===name;
                })
            },

        removeTodoById:function (id){
                return todolist.filter(function (todo){
                    return todo.id!==id;
                })
        },
            updateTodoById: function (id, title, content) {
               todolist = todolist.map(function (todo){
                 return todo.id === id ? ({ id, title, content }) : todo
                })
            },

            getTodoList: function () {
                return todolist;
            },

        }
        return Todolist;
}()
)



