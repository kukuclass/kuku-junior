//category model

// id 全局变量
var CategoryTypeId= 0;

// 自增：生成唯一 id的方法
function getCategoryTypeId() {
    return CategoryTypeId++;
}

var CategoryType = (function () {
    function CategoryType({name}) {
        this.id = CategoryTypeId(); // 类id
        this.name = name; // 类名
    }
    return CategoryType
}())
