var CategoryTypelist = ( function() {
    //声明一个能装book的bookList
    var categoryTypeList = []
    function CategoryTypelist(){}
    CategoryTypelist.prototype = {
        //add
        add(name){
            categoryTypeList.push( new CategoryType(name))
        },
        //delete
        delete(id){
            return categoryTypeList.filter(item => item.id !== id)
        },
        //find
        find(id){
            return categoryTypeList.find(item => item.id === id);
        },
        //update
        update(id, name){
            //先根据id找到这条记录在bookList中对应的index
            var index = categoryTypeList.findIndex(item => item.id === id)
            //如果index为-1，不存在，直接return
            if(index !== -1){
                return
            }
            // 否则根据index修改对应的内容
            if(name){
                categoryTypeList[index].name = name
            }

        },
    }
    return CategoryTypelist
})
