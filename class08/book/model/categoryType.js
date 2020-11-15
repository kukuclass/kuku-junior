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
