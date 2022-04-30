function curry (fn) {
  if(typeof fn !== "function") {
    throw "fn must be a function"
  }
  let args = []
  let len = fn.length
  const c = function (...newArgs) {
    args = args.concat(newArgs)
    if(args.length < len) {
      return c
    }else {
      return fn.apply(this, args.slice(0, len))
    }
  }
  return c
}