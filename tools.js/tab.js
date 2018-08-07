//选项卡功能的封装，css
function getTables(){
    var btn = document.getElementsByTagName('Button'),
        con = document.getElementsByClassName('content'),
        bLen = btn.length;
    for (var i = 0;i < bLen; i ++){
        btn[i].index = i;
        btn[i].onclick = function () {
            for ( var j = 0; j < bLen; j ++){
                btn[j].className = "";
                con[j].display = 'none';
            }
            this.className = "content";
            con[this.index].display = 'block';
        }
    }
}