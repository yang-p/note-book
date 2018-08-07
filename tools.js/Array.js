//push方法的封装
Array.prototype.myPush = function () {
    var len = arguments.length,
        i = 0;
    for (i = 0; i < len; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}
//pop方法的封装
Array.prototype.myPop = function () {
    this.splice(this.length - 1, 1, );
    return this.length;
}
//forEach方法的封装
Array.prototype.myForEach = function (func){
        for(var i = 0; i < this.length; i ++){
        	func(this[i],i);
        }
}
//filter方法的封装
		Array.prototype.myFilter = function (func){
			var newArr = [];
			for(var i = 0; i < this.length; i ++){
				if (func(this[i],i)) {
					newArr.push(this[i]);					
				}
			}
			return newArr;
		}

//map方法的封装
		Array.prototype.myMap = function(func){
			var newArr = [];
			for (var i = 0; i < this.length; i++) {
				newArr.push(func(this[i],i));
			}
			return newArr;
		}	


//实现数组的深度克隆
Array.prototype.myDeepMap = function(func){
	var newArr = [];
	function deepClone(origin,target){}//此处为对象的深度克隆函数
 for (var i = 0; i < this.length; i++){
	var newEle = [];//声明一个空数组
 if (this[i] != null && typeof(this[i]) == 'object') {//提前判断数组的键类型            				
	         			deepClone(this[i],newEle);
	         			newArr.push(func(newEle,i));
	         }else{
			   newArr.push(func(this[i],i));
		}		
	}
	return newArr;
}		