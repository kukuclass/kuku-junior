interface  CategoryType extends QueryAble{
    id: number;
    name: string
}

interface Book{
    id:number,
    name: string,
    author: string,
    price: number,
    category: CategoryType
}

interface BookList extends QueryAble{
    bookList: [Book]
}

interface QueryAble {
    //add
    add: any,
    //delete
    delete: any,
    //find
    find:any,
    //update
    update: any
}
