var musicIdFactory = 0;

function getMusicId (){
    return musicIdFactory++;
}

var Music = (function(){
    function Music({name, singer}){
        this.name = name;
        this.singer = singer;
        this.id = getMusicId();
        this.done = false;
    }

    return Music;
}());