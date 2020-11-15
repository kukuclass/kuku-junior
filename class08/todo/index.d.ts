interface Todo {
    title: string,
    content: string,
    done: boolean,
    id: number
}

interface Queryable {
    add: any,
    query: any,
    remove: any,
    update: any,
}

interface Todolist extends Queryable{
    todolist: [Todo]
}