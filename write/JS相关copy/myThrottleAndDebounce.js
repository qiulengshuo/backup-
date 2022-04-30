function throttle (fn, delay) {
  let flag = false
  return function (...newArgs) {
    if(flag) return
    flag = true
    setTimeout(() => {
      fn.apply(this, newArgs)
      flag = false
    }, delay)
  }
}
function debounce (fn, delay) {
  let timer = null
  return function (...newArgs) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, newArgs)
    }, delay)
  }
}