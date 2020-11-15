var UserList = (function (){
    var userlist = [];

    function UserList(){};

    UserList.prototype = {
        add({name,password,type}){
            userlist.push(new User({name,password,type}));
        },
        remove({id}){
            return userlist.filter(user => {
                return user.id !== id;
            })
        },
        // todo 按type、按authorized查询
        query({id,name,type,authorized} = {}){
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
            if(type){
                return userlist.filter(user =>{
                    user.type.id.indexOf(type.id) !== -1;
                })
            }
            if(authorized!== undefined){
                return userlist.filter(user => {
                    user.authorized.indexOf(authorized) !== -1;
                })
            }
            return [].slice.call(userlist);
        },
        // todo 同上 按authorized查询
        update(id, {name, password, type, authorized}) {
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
            if(!authorized){
                userlist[index].authorized = authorized;
            }
        }
    }

    return userlist;

}())