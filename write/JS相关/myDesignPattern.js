//  1. 工厂模式 根据参数的不同设置不同的实例
// class Instance {
//   constructor(name) {
//     this.name = name
//   }
// }
// function factory (name) {
//   return new Instance(name)
// }
// let instance = factory("jack")

//  2. 单例模式 只创建出一个单例
// class Instance {
//   constructor () {}
// }
// Instance.getInstance = (function () {
//   let instance = null
//   return function createInstance() {
//     if(!instance) {
//       instance = new Instance()
//     }
//     return instance
//   }
// })()
// let instance1 = Instance.getInstance()
// let instance2 = Instance.getInstance()
// console.log(instance1 === instance2);

//  3. 观察者模式 主题 和 观察者
// class Subject {
//   constructor() {
//     this.state = 0
//     this.subs = []
//   }
//   add(sub) {
//     this.subs.push(sub)
//   }
//   setState(state) {
//     this.state = state
//     for(let i of this.subs) {
//       i.update(state)
//     }
//   }
// }
// class Observer {
//   constructor(project) {
//     project.add(this)
//   }
//   update(state) { console.log(state); }
// }
// let p = new Subject()
// let o = new Observer(p)
// p.setState(1)

//  4. 发布订阅模式 主题 观察者 中转站
// class Event {
//   constructor () {
//     this.event = {}
//     this.onceEvent = {}
//   }
//   on(type, fn) {
//     if(this.event[type] == null) {
//       this.event[type] = []
//     }
//     this.event[type].push(fn)
//   }
//   once(type, fn) {
//     if(this.onceEvent[type] == null) {
//       this.onceEvent[type] = []
//     }
//     this.onceEvent[type].push(fn)
//   }
//   off(type, fn) {
//     if(!fn) {
//       this.event[type] = []
//       this.onceEvent[type] = []
//     }else {
//       this.event[type].filter((item) => item !== fn)
//       this.onceEvent[type].filter((item) => item !== fn)
//     }
//   }
//   emit(type, ...args) {
//     if(this.event[type]) {
//       this.event[type].forEach((item) => item(...args))
//     }
//     if(this.onceEvent[type]) {
//       this.onceEvent[type].forEach((item) => item !== fn)
//       this.onceEvent[type] = []
//     }
//   }
// }