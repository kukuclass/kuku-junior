
var animalId=0;

function getId(){
    return animalId++;
}

var Animal=(function (){
    function Animal({name, age, gender, from, id, kind}){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.from=from;
        this.id=getId();
        this.kind=kind;
    }
    return Animal;
}())