interface Todo {
    title: string,
    content: string,
    done: boolean,
    id: number
}

interface Todolist {
    todolist: [Todo]
}