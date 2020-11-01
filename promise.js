/**
 * @param api 网络请求的地址
 * @param callback 网络请求结束后处理的回调函数
 * @return
 * */
function fetchWithCallback(api, callback) {
    setTimeout(function () {
        const response = 'yeah!'
            callback(response)
        },
        1000)
}

/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */
function fetchPromisify(api) {
    return new Promise(function (resolve, reject){
        const response = 'yeah!'
        resolve(response)
    }
}

fetchPromisify('xxxx')
    .then(function (v) {

    })

/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */
async function fetch(api) {
    let res = await fetchPromisify(api);
}