interface Animal{
    name:string,
    kind: Kind,
    gender:string,
    from:string,
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

interface AnimalList extends Queryable{
    animals: [Animal]
}

interface KindList extends Queryable{
    kinds: [Kind]
}