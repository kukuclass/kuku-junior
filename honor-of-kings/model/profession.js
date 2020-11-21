var index = 0;
function getId() {
    return index++;
}

var Profession = (function () {

    function Profession({name}){
        this.id = getId();
        this.name = name;
    }
    return Profession;
}())

var ProfessionList = (function () {
    var professionlist = [];
    function ProfessionList() {
    }
    ProfessionList.prototype = {
        add({name}){
            var profession = new Profession({name});
            professionlist.push(profession);
            return profession;
        },
        query({id}) {
            if(typeof id !=="undefined"){
                return professionlist.find(profession=>{
                    return profession.id === Number(id);
                })
            }
            // if(name){
            //     return professionlist.find(profession=>{
            //         return profession.name.indexOf(name) !== -1;
            //     })
            // }
            return [].slice.call(professionlist);
        },
        remove({id,name}){
            if(typeof id !== "undefined"){
                return professionlist.filter(profession => {
                    return profession.id !== Number(id);
                })
            }
            if(name){
                return professionlist.filter(profession=>{
                    return profession.name !== name;
                })
            }
        },
        update({id,name}){
            if(typeof id!== "undefined") {
                professionlist.map(profession => {
                    if (profession.id === Number(id)) {
                        profession.name = name;
                    }
                })
            }
        },
        compare(professionA,professionB){
            return professionA.id === professionB.id
        }
    }
    return ProfessionList;
}())