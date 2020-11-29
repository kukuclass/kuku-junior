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



var BookList = ( function() {
    //声明一个能装book的bookList
    var books = []
    function BookList(){}
    BookList.prototype = {
        //add
        addByBook({name, category, author, price}) {
            console.log('11111')
            var book = new Book({name, category, author, price})
            books.push(book)
            return book
        },
        //delete
        delete(id){
            return books.filter(item => item.id !== id)
        },
        //find
        find(id){
            return books.find(item => item.id === id);
        },
        //update
        update(id, name, author, price, category){
            //先根据id找到这条记录在bookList中对应的index
            var index = books.findIndex(item => item.id === id)
            //如果index为-1，不存在，直接return
            if(index !== -1){
                return
            }
            // 否则根据index修改对应的内容
            if(name){
                books[index].name = name
            }
            if(author){
                books[index].author = author
            }
            if(price){
                books[index].price = price
            }
            if(category){
                books[index].category = category
            }

        },
    }
    return BookList
})
