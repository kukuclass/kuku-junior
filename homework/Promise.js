/**
 * @param api 网络请求的地址
 * @param callback 网络请求结束后处理的回调函数
 * @return
 * */
function fetchWithCallback(api, callback) {
    setTimeout(function () {
        const response = 'yeah!'
        callback(response);
    }, 1000)
}
fetchWithCallback('',function (result) {
    console.log(result);
})
/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */
function fetchPromisify(api) {
    return new Promise(((resolve, reject) => {
        setTimeout(function () {
            const response = 'yeah!';
            resolve(response);
        },5000)

    }))
}

/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */
async function fetch(api) {
    let a = await fetchPromisify(api);
    console.log(a);
}

fetch('');