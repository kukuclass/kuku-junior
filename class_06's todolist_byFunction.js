/*
写一个构造函数包含todolist的方法属性，
通过new可以实例化一个todolist，new()里面的参数应该是todolist的内容
并可以用.function来调用其中的方法实现增删改查
*/
// todolist 待办事项清单




function TodoList(){
    var list=[];
    var index=0;
    this.setTodo=function (todoName){
        list.push(
            {
                id: index++,
                todoName
            }
            )
        return list
    }

    this.removeTodo=function (index){
         list=list.filter(function (todo){
            return todo.id !==index;
        })
        return list;
    }

    this.fixTodoList=function (index,newVal1){
        return list.splice(index,1,newVal1);
    }

    this.findTodoList=function (){
        return list;
    }
}

var mylist=new TodoList();
mylist.setTodo('1111');
mylist.setTodo('2222');
mylist.setTodo('3333')
mylist.fixTodoList(2,'4')
console.log(mylist.findTodoList());


/*this.fixTodoList=function (index,newVal){
    list=list.splice(function (todo){
        return todo.id==index,1,todo.todoName==newVal;
    })
    return list;
}


this.fixTodoList=function (index,newVal1){
        return list.splice(index,1,newVal1);
    }

这里实现改的功能没有想出来
*/





