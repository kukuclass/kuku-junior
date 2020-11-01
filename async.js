/**
 * @param api 网络请求的地址
 * @param callback 网络请求结束后处理的回调函数
 * @return
 * */

function process(){
}

function fetchWithCallback(api, callback) {
    setTimeout(
        function(){
        const response="yeah!"
            callback(response)
        },
        1000
    )
}


fetchWithCallback(api,process)




/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */

new Promise(function (resolve, reject) {

})

function fetchPromisify(api) {
    return new Promise(function (resolve,reject){
        setTimeout(
            function (){
                const response="yeah!"
                resolve(response)
            },1000
        )
    })
}

fetchPromisify("xxxx").then(function ("上一步的结果"){
    //下一步要做的事
})



/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */
async function fetch(api) {
    let res=await fetchPromisify(api)
}

