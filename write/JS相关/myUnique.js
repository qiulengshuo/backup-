//  1.  Set数据结构
// function unique (arr) {
//   const set = new Set(arr)
//   return [...set]
// }


//  2.  Map数据结构
// function unique (arr, map = new Map()) {
//   let res = []
//   arr.forEach(item => {
//     if(!map.get(item)) {
//       map.set(item, true)
//       res.push(item)
//     }
//   });
//   return res
// }


//  3.  遍历 arr + res indexOf
// function unique (arr) {
//   let res = []
//   arr.forEach(item => {
//     if (res.indexOf(item) < 0) {
//       res.push(item)
//     }
//   })
//   return res
// }


//  4.  遍历 arr + res includes
// function unique (arr) {
//   let res = []
//   arr.forEach(item => {
//     if (!res.includes(item)) {
//       res.push(item)
//     }
//   })
//   return res
// }


//  5.  sort方法排序 跟前一个数组元素对比
// function unique (arr) {
//   arr.sort((a, b) => a - b)
//   let res = [arr[0]]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }
