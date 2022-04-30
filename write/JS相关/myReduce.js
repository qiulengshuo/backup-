//  1.  this判断 2. 函数判断  3.  化对象  4.  找初始值  5. 循环计算 6.  返回计算值
Array.prototype.myReduce = function (fn, initVal) {
  if (this == null) {
    throw 'this can not null or undefined'
  }
  if (typeof fn !== 'function') {
    throw 'fn must be a function'
  }
  const o = Object(this)
  const len = o.length >>> 0 // 保证是正整数或0
  let k = 0
  let sum = initVal
  if (sum === undefined) {
    for (; k < len; k++) {
      if (k in o) {
        sum = o[k]
        k++
        break
      }
    }
  }
  if (k === len && sum === undefined) {
    throw 'The array is empty'
  }
  for (; k < len; k++) {
    if (k in o) {
      sum = fn(sum, o[k], k, o)
    }
  }
  return sum
}