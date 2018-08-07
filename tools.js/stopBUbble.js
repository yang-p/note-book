//假设处理函数的参数为e，那么在处理函数中写上stopBubble(e);即可完成冒泡的取消。
function stopBubble(event){
    if (event.stopPropagation){
        event.stopPropagation();
    }else {
        event.cancelBubble;
    }
}