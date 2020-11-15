/**
 * @type {Race}
 */
var Race = (function (){
    /**
     *
     * @param id 每个种族的唯一ID
     * @param name 每个种族的名字
     * @constructor 构造函数
     */
    function Race({id, name}) {
        this.id = id;
        this.name = name;
    }
    return Race
}())

/**
 *
 * @type {RaceList}
 */
var RaceList = (function (){
    /**
     * @description 存放所有种族的列表
     * @type {*[]}
     */
    var races = [];

    /**
     * @description 列表的空构造函数
     * @constructor
     */
    function RaceList() {}

    /**
     * @description 原型上带有四个方法，继承自Queryable Interface
     * @type {{add(), query(), update(), remove()}}
     */
    RaceList.prototype = {
        add() {},
        remove() {},
        query({id, name}) {
            if (typeof id !== 'undefined') {
                return races.find(race => race.id === id);
            }
            if (name) {
                return races.find(race => race.name.indexOf(name) !== -1);
            }
            return [].slice.call(races);
        },
        compare(raceA, raceB) {
            return raceA.id === raceB.id;
        },
        update() {},
    }
    return RaceList;
}())
