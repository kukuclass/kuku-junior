/**
 * @param api 网络请求的地址
 * @param callback 网络请求结束后处理的回调函数
 * @return
 * */
// 2. 得到方法参数
function fetchWithCallback(api, callback) {
    // 假设2s后得到response(响应、结果)
    // 3. 进行异步操作
    setTimeout(function () {
        // 4. 得到异步操作结果
        var response = 'yeah!';
        // 5. 将结果提供给callback方法
        callback(response);
    }, 2000)
}

// 1. 将回调函数当作参数传递给fetchWithCallback方法
fetchWithCallback('/api/student', function (res) {
    // 6. 在方法中处理结果
    console.log(res);
})

// .exe 可执行文件
/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */
function fetchPromisify(api) {
    // 1. 返回一个promise instance处理异步逻辑
    return new Promise(function (resolve, reject) {
        // resolve可以处理异步事件成功后的数据
        // reject可以处理异步事件失败后的数据

        // 2. 在promise instance当中处理异步事件
        setTimeout(function () {
            // 4. 2000ms后，来到这里，得到response
            var response = 'yeah!';
            // 5. 将response通过resolver传递给promise
            resolve(response);
        }, 2000)
    })
}


// 3. 执行异步事件
fetchPromisify('/api/student')
    // 6. 假设需要对数据进行进一步处理
    .then(function (res) {
        // 7. 将resolver中传递的response当作参数传递给.then(回调函数)，执行后续逻辑
        console.log(res);
    })


/**
 * @param api 网络请求的地址
 * @return Promise 供后续逻辑的处理
 * */
async function fetch(api) {
    // 3. 执行异步事件 // 6. 将resolver中传递的response赋值给await前的变量
    var res = await fetchPromisify('/api/student');
    // 7. 执行后续逻辑
    console.log(res);
}

fetch('/api')