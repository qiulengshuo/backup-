function myNew (ctor, ...args) {
  if (typeof ctor !== "function") {
    throw "ctor must be a function"
  }
  let obj = Object.create(ctor.prototype)
  let res = ctor.apply(obj, args)
  const isFunction = typeof res === "function" ? true : false
  const isObject = typeof res === "object" && res !== null ? true : false
  return isFunction || isObject ? res : obj
}
