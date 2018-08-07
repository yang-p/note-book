function getViewPortOffset() {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    else{
        if (document.compatMode == "BackCompat") {
            return{
                width: document.body.clientWidth,
                height: document.body.clientHeight,
            }
        }
        else{
                return{
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                }
            }

        }
}