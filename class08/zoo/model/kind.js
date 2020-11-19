

var kindId=0;

function getId(){
    return kindId++;
}


var Kind=(function (){
    function Kind(name,id){
        this.name=name;
        this.id=getId();
    }
    return Kind;
}())

