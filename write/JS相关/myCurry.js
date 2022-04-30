//  1.  传入的参数必须是函数,返回柯里化的函数 2. 参数够了调用执行，不够继续返回 3. 注意this
function curry(fn) {
  if(typeof fn !== 'function') {
    throw 'The first params must be a function'
  }
  let len = fn.length
  let allArgs = []
  function c(...newArgs) {
    allArgs = [...allArgs, ...newArgs]
    if(allArgs.length < len) {
      return c
    }else {
      return fn.apply(this, allArgs.slice(0, len))
    }
  }
  return c
}
