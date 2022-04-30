function cloneDeep (obj, map = new WeakMap()) {
  if (typeof obj !== 'object' || obj == null) return obj

  let target = map.get(obj)
  if (target) return target

  target = {}
  map.set(obj, target)

  if (obj instanceof Map) {
    target = new Map()
    obj.forEach((v, i) => {
      target.set(cloneDeep(i, map), cloneDeep(v, map))
    })
  }

  if (obj instanceof Set) {
    target = new Set()
    obj.forEach(v => {
      target.add(cloneDeep(v, map))
    })
  }

  if (obj instanceof Array) {
    target = []
  }
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      target[prop] = cloneDeep(obj[prop], map)
    }
  }

  return target
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
console.log(cloneDeep(a))
