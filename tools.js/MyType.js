//解决typeof不能细分数据类型的方法
function type(varb) {
    var temple = {
        '[object Array]': 'array',
        '[object Number]': 'number-object',
        '[object Boolean]': 'boolean-object',
        '[object String]': 'string-object',
        '[object Object]': 'object'
    },
        ret = typeof (varb);
    if (varb === null) {
        return "null";
    }
    if (ret == 'object') {
        var tostr = Object.prototype.toString.call(varb);
        return temple[tostr];
    } else {
        return ret;
    }
}