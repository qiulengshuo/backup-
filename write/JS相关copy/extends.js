// 1.  原型链继承 相同引用
// let SuperType = function () { }
// let SubType = function () { }
// SubType.prototype = new SuperType()
// let sub = new SubType()

// 2.  构造函数继承 只能继承实例上的属性或方法，不能继承原型
// let SuperType = function () { }
// let SubType = function () {
//   SuperType.call(this)
// }
// let sub = new SubType()

// 3.  组合式继承 相同引用  1 + 2 + constructor
// let SuperType = function () { }
// let SubType = function () {
//   SuperType.call(this)
// }
// SubType.prototype = new SuperType()
// SubType.prototype.constructor = SubType

// 4.  原型式继承  单纯继承对象，相同引用
// let obj = {
//   age: 18
// }
// function createObj (obj) {
//   let Fn = function () { }
//   Fn.prototype = obj
//   return new Fn()
// }
// let sub = createObj(obj)

// 5.  寄生式继承 Object.create() 单纯继承对象，相同引用
// let obj = {
//   age: 18
// }
// function createObj (obj) {
//   let o = Object.create(obj)
//   o.sayHi = function () { }
//   return o
// }
// let sub = createObj(obj)

// 6.  寄生组合式继承 寄生式 + 组合式 完美方案
// let SuperType = function () { }
// let SubType = function () {
//   SuperType.call(this)
// }
// function init () {
//   SubType.prototype = Object.create(SuperType.prototype)
//   SubType.prototype.constructor = SubType
// }
// init()
// let sub = new SubType()

// 7.  混入多种继承方式 Object.assign()
// let SuperType1 = function () { }
// SuperType1.prototype.a = 1
// let SuperType2 = function () { }
// SuperType2.prototype.b = 2
// let SubType = function () { }
// Object.assign(SubType.prototype, SuperType1.prototype)
// Object.assign(SubType.prototype, SuperType2.prototype)
// let sub = new SubType()
// console.log(sub)

// 8.  es6继承
// class SuperType { }
// class SubType extends SuperType { super() }
// let sub = new SubType()