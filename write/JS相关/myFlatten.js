//  1.  普通递归版 递归 + forEach
// function flat (arr, k) {
//   if(!k--) return arr
//   let res = []
//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       res = res.concat(flat(item, k))
//     } else {
//       res.push(item)
//     }
//   })
//   return res
// }
// console.log(flat([1,[2,[3]]], 1));


//  2.  ES6方法 flat
// const arr = [1,[2,[3,[4,[5,[6]]]]]]
// console.log(arr.flat(Infinity));


//  3.  扩展运算符配合concat，解开一层
// while (arr.some(Array.isArray)) {
//   arr = [].concat(...arr)
// }


