// 一个todo id工厂的全局变量
var idFactory = 0;

// 生成唯一todo id的方法
function getId() {
    return idFactory++;
}

/**
 * @type {Function}
 */
var Hero = (function () {
    /**
     *
     * @param name 每个英雄的名字
     * @param gender 英雄性别
     * @param race 英雄种族
     * @param profession 英雄职业
     * @param avatar 英雄的头像
     * @constructor
     */
    function Hero({name, gender, race, profession, avatar}) {
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

/**
 *
 * @type {HeroList}
 */
var HeroList = (function () {
    /**
     * @description 存放所有英雄的列表
     * @type {*[]}
     */
    var heros = [];

    /**
     * @description 列表的空构造函数
     * @constructor
     */
    function HeroList() {
    }

    /**
     * @description 原型上带有四个方法，继承自Queryable Interface
     * @type {{add(), query(), update(), remove()}}
     */
    HeroList.prototype = {
        add({name, gender, race, profession, avatar}) {
            var hero = new Hero({name, gender, race, profession, avatar});
            heros.push(hero);
            return hero;
        },
        remove() {
            /*todo*/
        },
        query({id, name, gender, race, profession, avatar}) {
            if (typeof id !== 'undefined') {
                return heros.find(function (hero) {
                    return hero.id === id
                });
            }
            if (race) {
                return heros.find(function (hero) {
                    return Race.prototype.compare(race, hero.race)
                });
            }
            if (profession) {
                return heros.find(function (hero) {
                    return Profession.prototype.compare(profession, hero.profession)
                });
            }
            return [].slice.call(heros);
        },
        update() {
            /*todo*/
        },
    }
    return HeroList;
}())
