// 节流，标志false才能开启定时器
function throttle (fn, interval) {
  let flag = false
  return function (...args) {
    if (flag) return
    flag = true
    setTimeout(() => {
      fn.apply(this, args)
      flag = false
    }, interval)
  }
}
// 防抖，每次进来都消除上个定时器，并且重新开启定时器
function debounce (fn, interval) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, interval)
  }
}