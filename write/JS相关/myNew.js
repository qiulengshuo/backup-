// 1.prototype拿到 2.返回实例对象 3.返回对象或函数要直接返回
function myNew(ctor, ...args) {
  if(typeof ctor !== 'function') {
    throw 'The first params must be a function'
  }
  const obj = Object.create(ctor.prototype)
  const res = ctor.apply(obj, args)
  const isObject = typeof res === 'object' && res !== null
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}
