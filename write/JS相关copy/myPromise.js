Promise.all = function (promises) {
  // return new Promise ((resolve, reject) => {
  //   let len = promises.length
  //   let res = []
  //   let index = 0
  //   if(len === 0) {
  //     resolve(res)
  //     return
  //   }
  //   for(let i = 0; i < promises.length; i++) {
  //     Promise.resolve(promises[i]).then((data) => {
  //       res[i] = data
  //       index++
  //       if(len === index) {
  //         resolve(res)
  //       }
  //     }).catch((err) => {
  //       reject(err)
  //     })
  //   }
  // })
}
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length
    if(len === 0) {
      return
    }
    for(let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    }
  })
}
Promise.resolve = function (val) {
  if(val instanceof Promise) return val
  return new Promise((resolve, reject) => {
    if(val && val.then && typeof val.then === "function") {
      val.then(resolve, reject)
    }else {
      resolve(val)
    }
  })
}
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}
Promise.prototype.finally = function (fn) {
  return this.then((data) => {
    return Promise.resolve(fn()).then(() => {
      return data
    })
  }, (err) => {
    return Promise.resolve(fn()).then(() => {
      return err
    })
  })
}

class myPromise {
  constructor (fn) {
    this.status = "pending"
    this.value = undefined
    this.reason = undefined
    this.resolveCallbackFn = []
    this.rejectCallbackFn = []
    const resolve = (data) => {
      if(this.status !== "pending") return
      setTimeout(() => {
        this.status = "fulfilled" 
        this.value = data
        this.resolveCallbackFn.forEach((item) => {
          item(this.value)
        })
      });
    }
    const reject = (reason) => {
      if(this.status !== "pending") return
      setTimeout(() => {
        this.status = "rejected" 
        this.reason = reason
        this.rejectCallbackFn.forEach((item) => {
          item(this.reason)
        })
      });
    }
    try {
      fn(resolve, reject)
    }catch(err) {
      reject(err)
    }
  }
  then(fn1, fn2) {
    fn1 = typeof fn1 === "function" ? fn1 : (data) => data
    fn2 = typeof fn2 === "function" ? fn2 : (err) => { throw err }
    if(this.status === "pending") {
      let p1 = new Promise((resolve, reject) => {
        this.resolveCallbackFn.push((data) => {
          try {
            let result = fn1(data)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
        this.rejectCallbackFn.push((err) => {
          try {
            let result = fn2(err)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      })  
      return p1
    }
    if(this.status === "fulfilled") {
      let p1 = new Promise((resolve, reject) => {
        this.resolveCallbackFn.push((data) => {
          try {
            let result = fn1(data)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      })
      return p1
    }
    if(this.status === "rejected") {
      let p1 = new Promise((resolve, reject) => {
        this.rejectCallbackFn.push((err) => {
          try {
            let result = fn2(err)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
      })
      return p1
    }
  }
  catch(fn) {
    return this.then(null, fn)
  }
}
