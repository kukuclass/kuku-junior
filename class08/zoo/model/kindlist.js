
var Kindlist=(function (){
    var kindList=[];
    function Kindlist(){}
   
    Kindlist.prototype={
        add({name,id}){
            kindList.push(new Kind({name,id}));
        },
        query({name,id}={}) {
            if(typeof id !==undefined){
                return kindList.find(function (kind){
                    return kind.id===id;
                })
            }
            if(name){
                return kindList.filter(function (kind){
                    return kind.name.indexOf(name) !== -1
                })
            }
        },

        update({name,id}) {
            const index = kindlList.findIndex(function (kind){
                return kind.id===id;
            });

            if (index === -1) {
                return;
            }
            if (name) {
                kindList[index].name = name;
            }
        }
    }
    return Kindlist;
}())