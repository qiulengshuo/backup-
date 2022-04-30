// 1. es6 flat 不会修改原数组
// let arr = [1,2,[3,[4,5,[6]]]]
// console.log(arr.flat(Infinity));

// 2. 扩展运算符
// while(arr.some(Array.isArray)) {
//   arr = [].concat(...arr)
// }
// console.log(arr);

// 3. 递归
// function flatten (arr, k) {
//   if(!k--) return arr
//   let res = []
//   arr.forEach((item) => {
//     if(Array.isArray(item)) {
//       res = res.concat(flatten(item, k))
//     }else {
//       res.push(item)
//     }
//   })
//   return res
// }
// console.log(flatten(arr, 1));
