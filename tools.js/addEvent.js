// 三个参数：elem 指元素，type为事件类型，handle为处理函数
function addEvent(elem, type, handle) {
    if (elem.addEventListener){
        elem.addEventListener(type, handle, false);
    }else if (elem.attachEvent){
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    }else {
        elem['on' + type] = handle;
    }
}