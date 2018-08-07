//在新script标签中加载js代码并执行

// function loadScript (url,callback){
// var script = document.createElement('script');
// script.type = "text/script";
// if (script.onload) {
//     script.onload = function () {
//         callback();
//     }
// }else{
//         script.onreadystatechange = function () {
//             if (script.readyState == "complete" || script.readyState =="loaded"){
//                 callback();
//             }
//         }
//     }
// //将url放在这里，是为了避免文件下载太快，导致状态码已经变成了complete，而无法触发onreadstatechange事件
//     script.src = url;
//     document.head.appendChild(script);
// }
/*
* 升级版~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* */
//上面那个函数在调用时会报错，比如 loadScript('demo.js',test);
// test本来是demo.js文件的一个函数引用名，系统执行顺序是，先解析声明函数loadScript，在执行调用函数loadScript,
// 系统会认为test是一个变量，而这个变量没有来源，所以会认为test是一个非法的引用值。

/*
* 解决办法一：loadScript('demo.js',function () {test()}) 匿名函数时是函数声明，将整个函数体保存进去。
* */
/*
* 解决办法二：loadScript ('demo.js',"test") 将test以字符串形式传出去，然后利用eval("test"),执行函数，不推荐。
* */
/*
* 解决办法三：仍然是loadScript ('demo.js',"test")，在demo.js中写一个对象tools，test就是该对象中的一个方法，
* 将该对象的属性写成json对象格式。
* */
function loadScript (url,callback){
    var script = document.createElement('script');
    script.type = "text/script";
    if (script.onload) {
        script.onload = function () {
           tools[callback]();
        }
    }else{
        script.onreadystatechange = function () {
            if (script.readyState == "complete" || script.readyState =="loaded"){
               tools[callback]();
            }
        }
    }
//将url放在这里，是为了避免文件下载太快，导致状态码已经变成了complete，而无法触发onreadstatechange事件
    script.src = url;
    document.head.appendChild(script);
}