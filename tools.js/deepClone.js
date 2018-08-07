//形参target传入的实参，为对象类型的。如 var obj = {};
function deepClone(origin, target) {
    var target = target || {},
      type = "[object Object]",
      toStr = Object.prototype.toString,
      prop;
    for (prop in origin) {
      if (origin.hasOwnProperty(prop)) {
        if (origin[prop] != null && typeof (origin[prop]) == "object") {
          target[prop] = toStr.call(origin[prop]) == type ? {} : [];
          return deepClone(origin[prop], target[prop]);
        } else {
          target[prop] = origin[prop];
        }
      }
    }
    return target;
  }