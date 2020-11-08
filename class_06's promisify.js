
// 1、setTimeout

//上节课的代码有一点小疑问，封装这个函数的时候，并没有对api这个参数进行操作，是不是可以去掉这个形参。是的，上节课是做一个mock
/*
function setTimeoutPromisify(api){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve("done!")
        },1000)
    })
}

setTimeoutPromisify(api).then(
    function (){
        alert(res)
    }
)
*/

//下面是用两种方法封装的setTimeout，没有参数。
//封装成Promise
new Promise(function (resolve, reject){
    setTimeout(function (){
        var num=Math.random();
        if(num>0.5){
            resolve(num);
        }
        else {
            reject(num);
        }
    },1000)
})
    .then(function (res){
        console.log("reslove=",res);
    })
    .catch(function (err){
        console.log("reject=",err);
    })

//封装成一个函数的返回值，需要时再调用并进行then和catch操作
function setTimeoutPromisify(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            var num=Math.random();
            if (num>0.5){
                resolve(num);
            }else {
                reject(num);
            }
        },1000)
    })
}

setTimeoutPromisify()
    .then(function (res){
    console.log("resolve=".res);
}).catch(function (err){
     console.log("reject=",err);
    })


// 2、HTML Image onLoad
function onloadPromisify(url){
    return new Promise(function (resolve, reject){
        var img=new Image();
        //当图片加载完成后调用的事件句柄img.onload
        img.onload=function (){
            console.log("图片加载完成");
            resolve(img);
        }
        //当图片加载过程中发生错误时调用的事件句柄img.onerror
        img.onerror=function (){
            reject(new Error("找不到加载图片"+url));
        }
        //img.src必须写在onload之后，否则在IE中会报错
        img.src=url;
    })
}

onloadPromisify(url)
    .then(function (res){
        console.log("reslove=",res);
}).catch(function (err){
    console.log("error=",err)
})


// 3、AJAX
let ajaxRequest=new Promise(function (){
    //这里$.后面没有ajax的自动补全，是因为没有安装jQuery库？
    // 是的～，$是jquery那会儿的算是语法糖的存在，$.ajax是jquery库提供的封装了XMLHttpRequest方法的语法糖
    $.ajax({
        type: "get",
        url: "url地址",
        dataType: "json",
        success: res => {
            resolve(res);
        },
        error: res => {
            reject(res);
        }
    });
})

ajaxRequest.then(res => {
    listArr = res.data.banner.list;
    console.log(listArr);
});

ajaxRequest.catch(res => {
    console.log(res.returnCode);
});

// 4、XMLHttpRequest
function xhrPromisify({url=null,method='GET',dataType='JSON',async=true}){
    return new Promise(function (resolve, reject){
        var xhr=new XMLHttpRequest();
        xhr.open(method,url,async);
        xhr.responseType=dataType;
        xhr.onreadystatechange=function (){
            if (xhr.readyState===4){
                if (xhr.status===200){
                    var res=xhr.responseText;
                    resolve(res);
                }else {
                    reject(new Error(xhr.statusText));
                    reject( { status: xhr.status, statusText: xhr.statusText } );
                    // or
                    rejcet(xhr);
                    //小问题，如果这里要用xhr.onerror写一个回调包含xhr.status应该怎么写
                }
            }xhr.send();
        }
    }
})
}



