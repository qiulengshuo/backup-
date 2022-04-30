class Scheduler {
  constructor() {
    this.max = 2
    this.queue = []
  }
  // 补全代码
  // add(promise) {
  //   return new Promise((resolve,reject) => {
  //     this.queue.push(async () => {
  //       await promise()
  //       resolve()
  //     })
  //   })
  // }
  // start() {
  //   while(this.max-- > 0) {
  //     this.next()
  //   }
  // }
  // async next() {
  //   if(this.queue.length) {
  //     await this.queue.shift()()
  //     this.next()
  //   }
  // }
}

const timeout = (time) => new Promise((resolve) => {
  setTimeout(resolve, time)
})

var scheduler = new Scheduler()

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, "1")
addTask(500, "2")
addTask(300, "3")
addTask(400, "4")

scheduler.start()