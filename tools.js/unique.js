//数组去重,原理：对象没有重复的属性值，因此将数组的每一位放在对象中比对
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = 'abc';//此处不能写为this[i]，因为i=0时，!0为ture
            arr.push(this[i]);
        }
    }
    return arr;
}
//字符串去重
String.prototype.unique = function () {
    var str = '',
        strLen = this.length,
        obj = {};
    for (var i = 0; i < strLen; i++) {
        if (!obj[this.charAt(i)]) {
            obj[this.charAt(i)] = 'abc';
            str += this.charAt(i);
        }
    }
    return str;
}
//找字母[a-z]的字符串中第一个不重复的字符。
String.prototype.FirUnique = function () {
    var strLen = this.length,
        str = '',
        count = 0;
    for (var i = 0; i < strLen; i++) {
        for (var j = i + 1; j < strLen; j++) {
            if (this.charCodeAt(i) == this.charCodeAt(j)) {
                count++;
            }
        }
        if (count == 1) {
            str += this.charAt(i);
            count = 0;
        }
    }
    return str.charAt(0);
}