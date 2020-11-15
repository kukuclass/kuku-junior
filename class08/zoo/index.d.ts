interface Todo{
    name:string,
    kind:Kind,
    gender:string,
    From:string,
    age:number
}

interface Kind{
    name:string,
    id:number
}

interface Queryable{
    add:any,
    query:any,
    remove:any,
    update:any
}

interface Todolist extends Queryable{
    todolist:[Todo]
}