var IdFactory = 0;

function getId(){
    return IdFactory++;
}

var User = (function (){
    function User({name,password,type}){
        this.name = name;
        this.password = password;
        this.id = getId();
        this.authorized = false;
        this.type = type;
    }

    return User;
}())