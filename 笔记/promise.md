# JS的error处理

## 1. 错误的类型

```javascript
Error: 所有错误的父类型

ReferenceError: 引用的变量不存在
如：未定义变量	Uncaught ReferenceError: a is not defined
TypeError: 数据类型不正确的错误
如：对象类型用数组类型取下标值 Uncaught TypeError: Cannot read property 'xxx' of null
RangeError: 数据值不在其所允许的范围内
如：无限递归调用	Maxium call stack size exceeded   
SyntaxError: 语法错误
如：‘’‘’ 单引号连续使用 	Unexpected string

let num = 3 
num.xxx//本质上是new Number(d).xxx
```
## 2.错误的处理

捕获error

```javascript
try{
    // 写可能出错的代码
}catch(error){
    // error里面有 error.message(错误的类型提示)  error.stack(错误的位置)
    // 如果错误会执行里面的代码
}
// 捕获错误后可以执行后面的语句
```

抛出error

```javascript
throw new Error('当前错误') // 抛出错误 字符串是error.message
// 只要有throw就是抛出异常 不管后面什么值 都是rejected状态
```

# Promise 构造函数 promise对象

## promise基本流程

<img src="C:\Users\12263\AppData\Roaming\Typora\typora-user-images\image-20200903105618839.png" alt="image-20200903105618839" style="zoom:200%;" />

##  为什么要用Promise?

### 指定回调函数的方式更加灵活	同步回调(阻塞后面的执行)，先同步执行Promise里的回调，then要放回调队列

	旧的: 必须在启动异步任务前指定
	
	promise: 启动异步任务 => 返回promie对象 => 给promise对象绑定回调函数(甚至可以在异步任务结束后指定/多个)

### 支持链式调用, 可以解决回调地狱问题

```javascript
	什么是回调地狱? 

回调函数嵌套调用, 外部回调函数异步执行成功的结果是嵌套的回调执行的条件

	回调地狱的缺点? 

不便于阅读

不便于异常处理

	解决方案?

promise链式调用

	终极解决方案?

async/await
```
## Promise的基本使用

```javascript
// 1) 创建promise对象(pending状态), 指定执行器函数
 const p = new Promise((resolve, reject) => {
  // 2) 在执行器函数中启动异步任务
  setTimeout(() => {
   const time = Date.now()
   // 3) 根据结果做不同处理
   // 3.1) 如果成功了, 调用resolve(), 指定成功的value, 变为resolved状态

   if (time%2===1) {
	   resolve('成功的值 '+ time)
   } else { // 3.2) 如果失败了, 调用reject(), 指定失败的reason, 变为rejected状态
    	reject('失败的值' + time)
   }
  }, 2000)
 })
 // 4) 能promise指定成功或失败的回调函数来获取成功的vlaue或失败的reason
 p.then(
  value => { // 成功的回调函数onResolved, 得到成功的vlaue
   console.log('成功的value: ', value)
  },
  reason => { // 失败的回调函数onRejected, 得到失败的reason
   console.log('失败的reason: ', reason)
  }
 )
```

## API

	Promise构造函数: Promise (excutor) {}

(1)   excutor函数: 执行器 (resolve, reject) => {} 

(2)   resolve函数: 内部定义成功时我们调用的函数 value => {}

(3)   reject函数: 内部定义失败时我们调用的函数 reason => {}

说明: excutor会在Promise内部立即同步回调,异步操作在执行器中执行

 

	Promise.prototype.then方法: (onResolved, onRejected) => {}

(1)   onResolved函数: 成功的回调函数 (value) => {}

(2)   onRejected函数: 失败的回调函数 (reason) => {}

说明: 指定用于得到成功value的成功回调和用于得到失败reason的失败回调

返回一个新的promise对象

 

	Promise.prototype.catch方法: (onRejected) => {}

(1)   onRejected函数: 失败的回调函数 (reason) => {}

说明: then()的语法糖, 相当于: then(undefined, onRejected)

 

	Promise.resolve方法: (value) => {}

(1)   value: 成功的数据或promise对象

说明: 返回一个成功/失败的promise对象

 

	Promise.reject方法: (reason) => {}

(1)   reason: 失败的原因

说明: 返回一个失败的promise对象

 

	Promise.all方法: (promises) => {}

(1)   promises: 包含n个promise的数组

说明: 返回一个新的promise, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败	values reason 	[p1,p2]	数据的顺序与p的顺序一样

 

	Promise.race方法: (promises) => {}

(1)   promises: 包含n个promise的数组

说明: 返回一个新的promise, 第一个完成的promise的结果状态就是最终的结果状态	value reason

## 如何改变promise的状态

如何改变promise的状态?

(1)   resolve(value): 如果当前是pendding就会变为resolved

(2)   reject(reason): 如果当前是pendding就会变为rejected

(3)   抛出异常(含throw): 如果当前是pendding就会变为rejected

## 一个promise指定多个成功/失败的回调函数

1. 变化的起始点必须是pending 	已经变了再想变是不可能的

2. 多个同级的then会同时调用，可以存在多个回调函数

## promise.then()返回的新promise的结果状态由什么决定?         catch也一样

(1)   简单表达: 由then()指定的回调函数执行的结果决定	成功的函数就成功函数来决定，失败的就失败来决定

(2)   详细表达:

①   如果抛出异常, 新promise变为rejected, reason为抛出的异常值

②   如果返回的是非promise的任意值, 新promise变为resolved, value为返回的值

③   如果返回的是另一个新promise, 此promise的结果就会成为新promise的结果 

## promise异常传透?

(1)   当使用promise的then链式调用时, 可以在最后指定失败的回调 catch,其他不能指定失败回调

没指定的失败的回调函数 默认是 reason=>{throw reason}

(2)   前面任何操作出了异常, 都会传到最后失败的回调中处理

## 中断promise链?

(1)   当使用promise的then链式调用时, 在中间中断, 不再调用后面的回调函数

(2)   办法: 在回调函数中返回一个pendding状态的promise对象 return new Promise((	)=>{	})

## async和await

async函数的返回值为promise对象，状态由函数返回值决定  立即执行并返回一个promise对象，状态为pending

await返回promise对象的处理结果，如果不是promise对象，则返回其本身

## 微队列与宏队列

微队列先 宏队列后

## TIP

没有指定也能向下传递。

箭头右边加大括号就没有return的作用，除非自己指定。

