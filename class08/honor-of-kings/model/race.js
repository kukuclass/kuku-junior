// 一个todo id工厂的全局变量
var idFactory = 0;

// 生成唯一todo id的方法
function getId() {
    return idFactory++;
}

/**
 * @type {Race}
 */
var Race = (function () {
    /**
     *
     * @param id 每个种族的唯一ID
     * @param name 每个种族的名字
     * @constructor 构造函数
     */
    function Race({name}) {
        this.id = getId();
        this.name = name;
    }

    return Race
}())

/**
 *
 * @type {RaceList}
 */
var RaceList = (function () {
    /**
     * @description 存放所有种族的列表
     * @type {*[]}
     */
    var races = [];

    /**
     * @description 列表的空构造函数
     * @constructor
     */
    function RaceList() {
    }

    /**
     * @description 原型上带有四个方法，继承自Queryable Interface
     * @type {{add(), query(), update(), remove()}}
     */
    RaceList.prototype = {
        add({name}) {
            var race = new Race({name});
            races.push(race);
            return race;
        },
        remove() {
        },
        query({id, name}) {
            if (typeof id !== 'undefined') {
                return races.find(function (race) {
                    return race.id === Number(id)
                });
            }
            if (name) {
                return races.find(function (race) {
                    return race.name.indexOf(name) !== -1
                });
            }
            return [].slice.call(races);
        },
        compare(raceA, raceB) {
            return raceA.id === raceB.id;
        },
        update() {
        },
    }
    return RaceList;
}())
