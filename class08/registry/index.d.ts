interface UserType extends Queryable{
    id: number,
    name: string,
}

interface User{
    name: string,
    password: string,
    authorized: boolean,
    type: UserType,
    id: number
}

interface Queryable{
    add: any,
    remove: any,
    query: any,
    update: any
}

interface UserList extends Queryable{
    userList: [user]
}