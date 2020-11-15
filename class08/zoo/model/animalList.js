
var AnimalList=(function (){
    var animalList=[];
    function AnimalList(){}

    AnimalList.prototype={
        add({name, age, gender, from, id, kind}){
            animalList.push(new Animal({name, age, gender, from, id, kind}))
        },
        query({name,id}={}) {
            if(typeof id !==undefined){
                return animalList.find(function (animal){
                    return animal.id===id;
                })
            }
            if(name){
                return animalList.filter(function (animal){
                    return animal.name.indexOf(name) !== -1
                })
            }
            return animalList;
        },

        update({name,id}) {
            const index = animalList.findIndex(function (animal){
                return animal.id===id;
            });

            if (index === -1) {
                return;
            }
            if (name) {
                animalList[index].name = name;
            }
        }
    }
    return AnimalList;
}())