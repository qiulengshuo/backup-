// 测试数据
let promise1 = new Promise(function (resolve) {
  resolve(1)
})
let promise2 = new Promise(function (resolve) {
  resolve(2)
})
let promise3 = new Promise(function (resolve, reject) {
  reject(3)
})

// 同步promises的len和index 不断加data等到全部resolve
// 返回一个promise 成功数据是数组 失败数据是失败promise的reason
// 一错则错，全对才对，默认是对
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let res = []
    let len = promises.length
    let index = 0
    if (len === 0) {
      resolve(res)
      return res
    }
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(data => {
        index++
        res[i] = data
        if (index === len) {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}
let promiseAll = Promise.all([promise1, promise2, promise3])

promiseAll.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})


// 返回一个promise 成功状态数据是成功promise的数据 失败状态是失败promise的数据
// 一错则错 一对则对 默认pending return
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length
    if (len === 0) {
      return
    }
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    }
  })
}
let promiseAll1 = Promise.race([])
promiseAll1.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})


// 看参数 promise实例直接返回 then对象调用then状态取决于它 默认返回新promise
Promise.resolve = function (val) {
  if (val instanceof Promise) return val
  return new Promise((resolve, reject) => {
    if (val && val.then && typeof val.then === 'function') {
      val.then(resolve, reject)
    } else {
      resolve(val)
    }
  })
}

// 返回新promise reason直接往下传
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

// 返回promise.then 无论成功或失败都会执行fn，并且上一次的数据往下传 return x(promise.then).then把值传下去
Promise.prototype.finally = function (fn) {
  return this.then(data => {
    return Promise.resolve(fn()).then(() => {
      return data
    })
  }, err => {
    return Promise.resolve(fn()).then(() => {
      throw err
    })
  })
}


// 注意初始状态 promise传入fn里面的成功和失败
// then的状态取决于回调函数的成功与否
// then的值取决于回调函数的返回值
class MyPromise {
  state = "pending" // resolve reject
  value = undefined
  reason = undefined
  resolveCallbackFn = []
  rejectCallbackFn = []
  constructor(fn) {
    const resolve = (val) => {
      if (this.state !== 'pending') return
      setTimeout(() => {
        this.state = "fulfilled"
        this.value = val
        this.resolveCallbackFn.forEach(fn => fn(this.value))
      })
    }
    const reject = (err) => {
      if (this.state !== 'pending') return
      setTimeout(() => {
        this.state = 'reject'
        this.reason = err
        this.rejectCallbackFn.forEach(fn => fn(this.reason))
      })
    }
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then (fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (data) => data
    fn2 = typeof fn2 === 'function' ? fn2 : (err) => { throw err }
    if (this.state === 'pending') {
      let p1 = new MyPromise((resolve, reject) => {
        this.resolveCallbackFn.push((value) => {
          try {
            let val = fn1(value)
            resolve(val)
          } catch (e) {
            reject(e)
          }
        })
        this.rejectCallbackFn.push((err) => {
          try {
            let val = fn2(err)
            resolve(val)
          } catch (e) {
            reject(e)
          }
        })
      })
      return p1
    }

    if (this.state === 'fulfilled') {
      let p1 = new MyPromise((resolve, reject) => {
        this.resolveCallbackFn.push((value) => {
          try {
            let val = fn1(value)
            resolve(val)
          } catch (e) {
            reject(e)
          }
        })
      })
      return p1
    }

    if (this.state === 'rejected') {
      let p1 = new MyPromise((resolve, reject) => {
        this.rejectCallbackFn.push((err) => {
          try {
            let val = fn2(err)
            resolve(val)
          } catch (e) {
            reject(e)
          }
        })
      })
      return p1
    }
  }
  // 承前启后
  catch (fn) {
    return this.then(null, fn)
  }
}
