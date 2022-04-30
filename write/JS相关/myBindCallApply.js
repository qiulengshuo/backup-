// 返回函数  传个参   
// 普通函数绑定this 
// 构造函数原型继承，this为实例 
Function.prototype.myBind = function (context, ...args) {
  if(typeof this !== 'function') {
    throw 'this must be a function'
  }
  const self = this
  const fn = function () {
    self.apply(this instanceof self ?
      this : context,
      args.concat(Array.prototype.slice.call(arguments)))
  }
  fn.prototype = Object.create(self.prototype)
  return fn
}

// symbol避免冲突 使用完就删
// context为null undefined 值类型的处理方式
Function.prototype.myCall = function (context, ...args) {
  if (context == null) {
    context = window
  }
  if (typeof context !== 'object') {
    context = new Object(context)
  }
  const fn = Symbol('fn')
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// symbol避免冲突 使用完就删
// context为null undefined 值类型的处理方式
Function.prototype.myApply = function (context, args) {
  if (context == null) {
    context = window
  }
  if (typeof context !== 'object') {
    context = new Object(context)
  }
  const fn = Symbol('fn')
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
