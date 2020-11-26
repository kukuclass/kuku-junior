//book model
// id 全局变量
var bookId= 0;

// 自增：生成唯一 id的方法
function getBookId() {
    return bookId++;
}

var Book = (function () {
    function Book({name, category, author, price}) {
        this.id = getBookId(),
        this.name = name,
        this.author = author,
        this.price = price,
        this.category = category
    }
    Book.prototype = {};
    return Book
}())


