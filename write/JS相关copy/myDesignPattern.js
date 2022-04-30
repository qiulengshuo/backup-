// 1. 工厂模式 根据参数做不同调整的实例
class Instance { }
function factory () {
  return new Instance()
}

// 2. 单例模式
class Instance { }
Instance.getInstance = (function () {
  let instance = null
  return function () {
    if(instance) return instance
    instance = new Instance()
    return instance
  }
})()

// 3. 观察者模式  主题和观察者
class Subject {
  constructor () {
    this.subs = []
    this.state = 0
  }
  setState (num) {
    this.state = num
    this.notify()
  }
  notify () {
    this.subs.forEach((o) => {
      o.update(this.state)
    })
  }
}
class Observer {
  constructor (subject) {
    subject.subs.push(this)
  }
  update (state) {}
}
let sub = new Subject()
let o = new Observer(o)
sub.setState(1)

// 4. 发布订阅模式 主题 事件中心 观察者
class Event {
  constructor () {
    this.event = {}
    this.onceEvent = {}
  }
  on(type, fn) {
    if(this.event[type]) {
      this.event[type].push(fn)
    }else {
      this.event[type] = []
      this.event[type].push(fn)
    }
  }
  once(type, fn) {
    if(this.onceEvent[type]) {
      this.onceEvent[type].push(fn)
    }else {
      this.onceEvent[type] = []
      this.onceEvent[type].push(fn)
    }
  }
  off(type, fn) {
    if(fn === undefined) {
      this.event[type] = []
      this.onceEvent[type] = []
    }else {
      this.event[type] = this.event[type].filter((item) => item !== fn)
      this.onceEvent[type] = this.onceEvent[type].filter((item) => item !== fn)
    }
  }
  emit(type, ...args) {
    if(this.event[type]) {
      this.event[type].forEach((fn) => {
        fn(...args)
      })
    }
    if(this.onceEvent[type]) {
      this.onceEvent[type].forEach((fn) => {
        fn(...args)
      })
      this.onceEvent[type] = []
    }
  }
}
