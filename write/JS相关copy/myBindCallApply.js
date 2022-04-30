Function.prototype.myBind = function (context, ...args) {
  if(typeof this !== "function") {
    throw "this must be a function"
  }
  let self = this
  let fn = function (...newArgs) {
    return self.apply(this instanceof self ? this : context, [...args, ...newArgs])
  }
  fn.prototype = Object.create(self.prototype)
  return fn
}
Function.prototype.myCall = function (context, ...args) {
  if(typeof this !== "function") {
    throw "this must be a function"
  }
  if(context == null) {
    context = window
  }
  if(typeof context !== "object") {
    context = new Object(context)
  }
  let fn = Symbol("fn")
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}
Function.prototype.myApply = function (context, args) {
  if(typeof this !== "function") {
    throw "this must be a function"
  }
  if(context == null) {
    context = window
  }
  if(typeof context !== "object") {
    context = new Object(context)
  }
  let fn = Symbol("fn")
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}
