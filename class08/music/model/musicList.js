var MusicList = (function () {
    var musiclist = [];

    function MusicList(){}
    MusicList.prototype = {
        add: function ({name, singer}){
            return musiclist.push(new Music(name, singer));
        },
        query: function (id, singer, name) {
            if(typeof id !== 'undefined'){
                return musielist.find(function(music){
                    return music.id === id;
                });
            };
            if(songName){}
        }
    }
}())