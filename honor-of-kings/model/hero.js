var index = 0;

//生成唯一标识
function getId() {
    return index++;
}

var Hero = (function () {
    /**
     *
     * @param name 名称
     * @param gender 性别
     * @param race 种族
     * @param profession 职业
     * @param avatar 头像
     * @constructor
     */
    function Hero({name,gender,race,profession,avatar}) {
        this.id = getId();
        this.name = name;
        this.gender = gender;
        this.race = race;
        this.profession = profession;
        this.avatar = avatar;
    }

    Hero.prototype = {};
    return Hero;
}())

var HeroList = (function () {
    /**
     * 存放所有的英雄
     * @type {Array}
     */
    var herolist = [];

    function HeroList() {
    }

    HeroList.prototype = {
        add({name,gender,race,profession,avatar}){
            var hero = new Hero({name,gender,race,profession,avatar});
            herolist.push(hero);
            return hero;
        },
        remove({id,name,gender,race,profession,avatar}){
            if(typeof id!=="undefined"){
                return herolist.filter(hero=>{
                    return hero.id !== id;
                })
            }
            if(name){
                herolist.filter(hero=>{
                    return hero.name !== name;
                })
            }
            if(gender){
                herolist.filter(hero=>{
                    return hero.gender !== gender;
                })
            }
            if(race){
                herolist.filter(hero=>{
                    return hero.race !== race;
                })
            }
            if(profession){
                herolist.filter(hero=>{
                    return hero.profession !== profession;
                })
            }
            return [].slice.call(herolist);
        },
        query({id,name,gender,race,profession,avatar}){
            if(typeof id !== "undefined"){
                return herolist.find(hero => {
                    return hero.id === id;
                })
            }
            if(name){
                return herolist.find(hero => {
                    return hero.name === name;
                })
            }
            if(gender){
                return herolist.find(hero => {
                    return hero.gender === gender;
                })
            }
            if(race){
                return herolist.find(hero =>{
                    return Race.prototype.compare(race,hero.race)
                })
            }
            if(profession){
                return herolist.find(hero =>{
                    return Race.prototype.compare(profession,hero.profession)
                })
            }
            return [].slice.call(herolist);
        },
        update({id,name,gender,race,profession,avatar}){
            if(typeof id !== "undefined"){
                herolist.map(hero => {
                    if(hero.id === id){
                        if(name){
                            hero.name = name;
                        }
                        if(gender){
                            hero.gender = gender;
                        }
                        if(race){
                            hero.race = race;
                        }
                        if(profession){
                            hero.profession = profession;
                        }
                        if(avatar){
                            hero.avatar = avatar;
                        }
                    }
                })
            }
        }
    }
    return HeroList;
}())