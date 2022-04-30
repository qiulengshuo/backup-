// 1. 对象才能instanceof 2. 根据Object.getPrototypeOf 找到 隐式原型
function myInstanceof (left, right) {
  if (typeof left !== 'object' && left == null) return false
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}