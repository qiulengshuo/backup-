function myInstanceof (left, right) {
  if (typeof left !== "object" || left == null) return
  let proto = left.__proto__
  while (proto) {
    if (proto === right.prototype) {
      return true
    } else {
      proto = Object.getPrototypeOf(proto)
    }
  }
  return false
}