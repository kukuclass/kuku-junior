var index = 0;
function getId() {
    return index++;
}

var Race = (function () {

    function Race({name}){
        this.id = getId();
        this.name = name;
    }
    return Race;
}())

var RaceList = (function () {
    var racelist = [];
    function RaceList() {
    }
    RaceList.prototype = {
        add({name}){
            var race = new Race({name});
            racelist.push(race);
            return race;
        },
        query({id, name}) {
            if(typeof id!=="undefined"){
                return racelist.find(race=>{
                    return race.id === Number(id);
                })
            }
            if(name){
                return racelist.find(race=>{
                    return race.name.indexOf(name) !== -1;
                })
            }
            return [].slice.call(racelist);
        },
        remove({id,name}){
            if(typeof id !== "undefined"){
                return racelist.filter(race => {
                    return race.id !== Number(id);
                })
            }
            if(name){
                return racelist.filter(race=>{
                    return race.name !== name;
                })
            }
        },
        update({id,name}){
            if(typeof id!== "undefined") {
                racelist.map(race => {
                    if (race.id === Number(id)) {
                        race.name = name;
                    }
                })
            }
        },
        compare(raceA,raceB){
            return raceA.id ===raceB.id
        }
    }
    return RaceList;
}())