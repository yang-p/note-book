//获取横纵方向的滚动条的位置，返回一个对象
function getScrollOffset() {
    if (window.pageYOffset){
        return {
            X : window.pageXOffset,
            Y : window.pageYOffset
        }
    }else {
        return{
            X : document.body.scrollLeft + document.documentElement.scrollLeft,
            Y : document.body.scrollTop + document.documentElement.scrollTop,
        }
    }
}
