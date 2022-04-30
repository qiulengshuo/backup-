let str = {
  'a-b-c-d': 1,
  'a-b-c-e': 2,
  'a-b-f': 3,
  'a-j': 4
}
// let obj = {
//   a: {
//     b: {
//       c: {
//         d: 1,
//         e: 2
//       },
//       f: 3
//     },
//     j: 4
//   }
// }
let obj = {}
for (let key in str) {
  let arr = key.split("-")
  let res = obj
  let val = str[key]
  for (let i = 0; i < arr.length - 1; i++) {
    if (res[arr[i]]) {
      res = res[arr[i]]
    } else {
      res[arr[i]] = {}
      res = res[arr[i]]
    }
  }
  res[arr[arr.length - 1]] = val
}
console.log(obj)
