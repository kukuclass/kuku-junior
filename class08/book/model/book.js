//book model
// id 全局变量
var BookId= 0;

// 自增：生成唯一 id的方法
function getBookId() {
    return BookId++;
}

var Book = (function () {
    function Book({name, author, price, category}) {
        this.id = getBookId(),
        this.name = name,
        this.author = author,
        this.price = price,
        this.category = category
    }
    return Book
}())
