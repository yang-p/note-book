//兩個數字或字符串交換
//第一种，将a的值赋给新变量c，将b赋给a，再将c赋给a
//第二种，将a和b相加赋给c，将c-b赋给a,c-a赋给b
//两种方法比较，第一种可用于字符串和数字的交换，第二种只能用于数字交换，
//但是当实参为数字时，第二种更好。
	function exchange(a,b){
				var numa = a,
				  	numb = b,
				  	numc = null;
				  	numc = numa;
				  	numa = numb;
				  	numb = numc;				
				return [numa,numb];
		}
		exchange(10,20);

//计算2的n次幂,灵活使用for循环
  function power(n){
 	var num = 1, 
 	      i = n;
   for (; i;) {
   	 	num *= 2;
   	 	i --;
   }
   return num;
 }	
 //计算n的阶乘，灵活运用阶乘
 function Factorial(n){
 		if (n >= 0) {
 			if (n <= 1) {
 				return 1;
 			}
 			return n * Factorial(n - 1);
 		}else{
 			return '请输入一个正数';
 		}
 }
 //斐波拉契数列
 function fbncSequence(n){
	if (n >= 1) {
		if (n - 1 <= 1) {
			return 1;
		}
		return (n-1) + fbncSequence(n - 2);
	}else{
			return '不能为负';
	 }
}
//