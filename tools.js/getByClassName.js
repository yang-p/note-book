//获取元素className的兼容性写法
Document.prototype.getByClassName = function(){
	var allDomArr = Array.prototype.slice.call(document.getElementsByTagName('*'),0);
	var filterDomArr = [];
	function dealClass(dom){
       var reg = /\s+/g;
       var arrClassName = dom.className.replace(reg,' ').trim().split(' ');
       //trim方法是消除字符串前后的空格
       return arrClassName;
	}
		allDomArr.forEach(function(ele,index){
		   var classStrArr = dealClass(ele);
		   var len = classStrArr.length;
		   for (var i = 0; i < len ; i ++) {
		   if (classStrArr[i] == className) {
		        filterDomArr.push(ele);
		        break;
		   		}
		   }
		})
	return filterDomArr;
}

typeof Array();==>"object"
function test(){}
typeof test();==>"undefined"
//console下为什么执行Array函数和自定义函数test返回的结果也不一样，
//而且又为什么是"object"、"undefined"呢？