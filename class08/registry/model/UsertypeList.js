var UsertypeList = (function (){
    var typelist = [];

    function UsertypeList(){};

    UsertypeList.prototype = {
        addType: function (name){
            typelist.push(new UserType(name))
        },
        remove: function (id){
            return typelist.filter(type => {
                return type.id !== id;
            })
        },
        query: function ({id,name} = {}){
            if(typeof id !== "undefined")
                return typelist.find(type => {
                    type.id === id;
            })
            if(name){
                return typelist.find(type=>{
                    type.name === name;
                })
            }
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
    return typelist;
}())