//category model

// id 全局变量
var categoryTypeId= 0;

// 自增：生成唯一 id的方法
function getCategoryTypeId() {
    return categoryTypeId++;
}

var CategoryType = (function () {
    function CategoryType({name}) {
        this.id = getCategoryTypeId(); // 类id
        this.name = name; // 类名
    }

    return CategoryType
}())


// todo 文件名全部修改为驼峰命名或下划线命名
var CategoryTypeList = ( function() {
    //声明一个能装book的bookList
    var categoryTypes = []
    function CategoryTypelist(){}
    CategoryTypelist.prototype = {
        //add
        addByCategory({name}){
            var category = new CategoryType({name})
            categoryTypes.push( category)
            return category
        },
        //delete
        delete(id){
            return categoryTypes.filter(item => item.id !== id)
        },
        //find todo find by name
        find({id}){
            if (typeof id !== "undefined") {
                return categoryTypes.find(function (category) {
                    return category.id === Number(id)
                })
            }
            // if(name !== undefined ){
            //     //模糊匹配
            //     return categoryTypes.filter(item =>{
            //         return item.name.indexOf(name) !== -1
            //     })
            // }
        },

        //update
        update(id, name){
            //先根据id找到这条记录在bookList中对应的index
            var index = categoryTypes.findIndex(item => item.id === id)
            //如果index为-1，不存在，直接return
            if(index !== -1){
                return
            }
            // 否则根据index修改对应的内容
            if(name){
                categoryTypes[index].name = name
            }

        },
    }
    return CategoryTypelist
})
