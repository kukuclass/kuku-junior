var index = 0;
function getId(){
    return index++;
}
var UserType = (function (){
    function UserType(name){
        this.name = name;
        this.id = getId();
    }
    return UserType;
}())