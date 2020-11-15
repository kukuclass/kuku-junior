var UserList = (function (){
    var userlist = [];

    function UserList(){};

    UserList.prototype = {
        add({name,password,type}){
            userlist.push(new User({name,password,type}));
        },
        move({id}){
            return userlist.filter(user => {
                return user.id !== id;
            })
        },
        query({id,name} = {}){
            if(id !== undefined){
                return userlist.find(user =>{
                    user.id === id;
                })
            }
            if(name){
                return  userlist.filter(user =>{
                    user.name.indexOf(name) !== -1;
                })
            }
            return [].slice.call(userlist);
        },
        update(id, {name, password, type}) {
            const index = userlist.findIndex(user=>user.id === id);
            if(index == -1){
                return
            }
            if(name){
                userlist[index].name = name;
            }
            if(password){
                userlist[index].password = password;
            }
            if(type){
                userlist[index].type = type;
            }
        }
    }

    return userlist;

}())