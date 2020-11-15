var BookList = ( function() {
    //声明一个能装book的bookList
    var bookList = []
    function BookList(){}
    BookList.prototype = {
        //add
        add(name, author, price, category){
            bookList.push( new Book(name, author, price, category))
        },
        //delete
        delete(id){
            return bookList.filter(item => item.id !== id)
        },
        //find
        find(id){
            return bookList.find(item => item.id === id);
        },
        //update
        update(id, name, author, price, category){
            //先根据id找到这条记录在bookList中对应的index
            var index = bookList.findIndex(item => item.id === id)
            //如果index为-1，不存在，直接return
            if(index !== -1){
                return
            }
            // 否则根据index修改对应的内容
            if(name){
                bookList[index].name = name
            }
            if(author){
                bookList[index].author = author
            }
            if(price){
                bookList[index].price = price
            }
            if(category){
                bookList[index].category = category
            }

        },
    }
    return BookList
})
