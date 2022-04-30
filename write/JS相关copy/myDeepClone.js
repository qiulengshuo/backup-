function myDeepClone (obj, weakMap = new WeakMap()) {
  if(typeof obj !== "object" || obj == null) {
    return obj
  }
  if(weakMap.has(obj)) {
    return weakMap.get(obj)
  }
  let cloneObj = {}
  weakMap.set(obj, cloneObj)  
  if(obj instanceof Map) {
    cloneObj = new Map()
    obj.forEach((item, index) => {
      cloneObj.set(myDeepClone(index, weakMap), myDeepClone(item, weakMap))
    })
  }
  if(obj instanceof Set) {
    cloneObj = new Set()
    obj.forEach((item) => {
      cloneObj.add(myDeepClone(item, weakMap))
    })
  }
  if(obj instanceof Array) {
    cloneObj = []
  }
  for(let i in obj) {
    if(obj.hasOwnProperty(i)) {
      cloneObj[i] = myDeepClone(obj[i], weakMap)
    }
  }
  return cloneObj
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // if (typeof obj !== "object" || obj == null) {
  //   return obj
  // }
  // if (weakMap.has(obj)) {
  //   return weakMap.get(obj)
  // }
  // let cloneObj = {}
  // weakMap.set(obj, cloneObj)

  // if (obj instanceof Map) {
  //   cloneObj = new Map()
  //   obj.forEach((item, i) => {
  //     cloneObj.set(myDeepClone(i, weakMap), myDeepClone(item, weakMap))
  //   })
  // }

  // if (obj instanceof Set) {
  //   cloneObj = new Set()
  //   obj.forEach((item) => {
  //     cloneObj.add(myDeepClone(item, weakMap))
  //   })
  // }

  // if (obj instanceof Array) {
  //   cloneObj = []
  // }
  // for (let i in obj) {
  //   if (obj.hasOwnProperty(i)) {
  //     cloneObj[i] = myDeepClone(obj[i], weakMap)
  //   }
  // }
  // return cloneObj
}

const a = {
  set: new Set([10, 20, 30]),
  map: new Map([['x', 10], ['y', 20]]),
  info: {
    city: '北京'
  },
  fn: () => { console.info(100) },
  arr: [1, 2]
}
a.self = a
console.log(myDeepClone(a))