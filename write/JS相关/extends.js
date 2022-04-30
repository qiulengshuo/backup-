//  1.  原型链继承 继承父类实例 相同引用
// function SuperType() {
//   this.name = "super"
// }
// SuperType.prototype.saySuper = function () {
//   console.log('saySuper')
// }
// function SubType() {
//   this.age = 18
// }
// SubType.prototype = new SuperType()
// SubType.prototype.saySub = function () {
//   console.log('saySub')
// }
// const sub = new SubType()
// console.log(sub);





//  2.  构造函数继承 继承父类的方法和属性，不能继承原型
// function SuperType() {
//   this.name = "super"
// }
// function SubType() {
//   SuperType.call(this)
//   this.age = 18
// }
// let sub = new SubType()
// console.log(sub);





//  3.  组合式继承 结合1和2 原型链继承和构造函数继承再加上constructor的修改
//  相同引入，重复属性和方法
// function SuperType() {
//   this.name = 'super'
// }
// SuperType.prototype.saySuper = function() {
//   console.log('saySuper');
// }
// function SubType() {
//   SuperType.call(this)
//   this.age = 18
// }
// SubType.prototype = new SuperType()
// SubType.prototype.constructor = SubType
// SubType.prototype.saySub = function() {
//   console.log('saySub');
// }
// const sub = new SubType()
// console.log(sub);






//  4.  原型式继承 对相同对象进行引用 单纯继承父类原型
// const obj = {
//   age: 18
// }
// function createObj(obj) {
//   function Fn() {}
//   Fn.prototype = obj
//   return new Fn()
// }
// const o = createObj(obj)
// console.log(o);






//  5.  寄生式继承 Object.create 对相同对象进行引用
// const obj = {
//   age: 18
// }
// function createObj(obj) {
//   const o = Object.create(obj)
//   o.sayHi = function() {}
//   return o
// }
// const o = createObj(obj)
// console.log(o);






//  6.  寄生组合式继承 寄生式和组合式 完美继承父类和子类的属性和方法以及父类和子类的原型对象
// function SuperType() {
//   this.name = "super"
// }
// SuperType.prototype.saySuper = function() { }
// function SubType() {
//   SuperType.call(this)
//   this.age = 18
// }
// function init() {
//   const o = Object.create(SuperType.prototype)
//   o.constructor = SubType
//   SubType.prototype = o
// }
// init()
// SubType.prototype.saySub = function() { }
// const sub = new SubType()
// console.log(sub);






//  7.  混入方式多继承 Object.assign()
// function SuperType() {

// }
// SuperType.prototype.super = 'super'
// function OtherType() {

// }
// OtherType.prototype.other = 'other'
// function SubType() {
//   this.age = 18
//   SuperType.call(this)
//   OtherType.call(this)
// }
// SubType.prototype = Object.create(SuperType.prototype)
// SubType.prototype.sub = 'sub'
// SubType.prototype.constructor = SubType
// Object.assign(SubType.prototype, OtherType.prototype)
// // Object.assign(SubType.prototype, SuperType.prototype)
// let o = new SubType()
// console.log(o);






//  8.  es6 class extends继承
//  SubType.prototype.__proto__ === SuperType.prototype
//  SubType.__proto__ === SuperType
// class SuperType {
//   constructor() {
//     this.name = 'super'
//   }
//   saySuper() { }
// }
// class SubType extends SuperType {
//   constructor() {
//     super()
//     this.age = 18
//   }
//   saySub(){ }
// }
// const sub = new SubType()
// console.log(sub);

