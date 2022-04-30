Array.prototype.myReduce = function (fn, initVal) {
  if (this == null) {
    throw "this cannot be a null or undefined"
  }
  if (typeof fn !== "function") {
    throw "fn must be a function"
  }
  let obj = Object(this)
  let len = obj.length >>> 0
  let sum = initVal
  let k = 0
  if (sum === undefined) {
    for (; k < len; k++) {
      if (k in obj) {
        sum = obj[k]
        k++
        break
      }
    }
  }
  if (sum === undefined && k === len) {
    throw "The array is empty"
  }
  for (; k < len; k++) {
    if (k in obj) {
      sum = fn(sum, obj[k], k, obj)
    }
  }
  return sum
}