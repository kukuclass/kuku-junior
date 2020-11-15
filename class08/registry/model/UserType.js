var index = 0;
function getId(){
    return index++;
}
// todo 完成缺少的UserTypeList
var UserType = (function (){
    function UserType(name){
        this.name = name;
        this.id = getId();
    }
    return UserType;
}())