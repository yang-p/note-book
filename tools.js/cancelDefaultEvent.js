//若处理函数的参数为e，则在处理函数里面写上 e.cancelDefaultEvent();
function cancelDefaultEvent(event) {
    if (event.preventDefault){
        event.preventDefault();
    }else {
        event.returnValue = false;
    }
}