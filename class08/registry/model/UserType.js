var index = 0;
function getId(){
    return index++;
}

var UserType = (function (){
    function UserType({name}){
        this.name = name;
        this.id = getId();
    }
    return UserType;
}())

var UsertypeList = (function (){
    var typelist = [];

    function UsertypeList(){};

    UsertypeList.prototype = {
        add({name}){
            var user = new UserType({name});
            typelist.push(user);
            return user;
        },
        remove: function (id){
            return typelist.filter(type => {
                return type.id !== Number(id);
            })
        },
        query: function ({id} = {}){
            if(typeof id !== "undefined"){
                return typelist.find(type => {
                    return type.id === Number(id);
                })
            }
            return [].slice.call(typelist);
        },
        update: function (id,name){
            const index = typelist.findIndex(type => type.id === id);
            if(index === -1){
                return;
            }
            if(name){
                typelist[index].name = name;
            }
        }
    }
    return UsertypeList;
}())