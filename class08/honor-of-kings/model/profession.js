// 一个todo id工厂的全局变量
var idFactory = 0;

// 生成唯一todo id的方法
function getId() {
    return idFactory++;
}

/**
 * @type {Profession}
 */
var Profession = (function () {
    /**
     *
     * @param id 每个职业的唯一ID
     * @param name 每个职业的名字
     * @constructor 构造函数
     */
    function Profession({name}) {
        this.id = getId();
        this.name = name;
    }

    return Profession
}())

/**
 *
 * @type {ProfessionList}
 */
var ProfessionList = (function () {
    /**
     * @description 存放所有英雄职业的列表
     * @type {*[]}
     */
    var professions = [];

    /**
     * @description 列表的空构造函数
     * @constructor
     */
    function ProfessionList() {
    }

    /**
     * @description 原型上带有四个方法，继承自Queryable Interface
     * @type {{add(), query(), update(), remove()}}
     */
    ProfessionList.prototype = {
        add({name}) {
            var profession = new Profession({name});
            professions.push(profession);
            return profession;
        },
        remove() {
        },
        query({id}) {
            if (typeof id !== "undefined") {
                return professions.find(function (profession) {
                    return profession.id === Number(id)
                })
            }
            return [].slice.call(professions);
        },
        update() {
        },
        compare(professionA, professionB) {
            return professionA.id === professionB.id;
        },
    }
    return ProfessionList;
}())
