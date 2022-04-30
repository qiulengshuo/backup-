// 原地 不稳定 快排
// function quickSort (arr, l, r) {
//   let len = arr.length
//   let left = l !== undefined ? l : 0
//   let right = r !== undefined ? r : len - 1
//   if (left < right) {
//     let center = partition(arr, left, right)
//     quickSort(arr, left, center - 1)
//     quickSort(arr, center + 1, right)
//   }
// }
// function partition (arr, left, right) {
//   let pivot = left
//   let sorted = left + 1
//   for (let i = sorted; i <= right; i++) {
//     if (arr[i] < arr[pivot]) {
//       swap(arr, sorted, i)
//       sorted++
//     }
//   }
//   swap(arr, pivot, sorted - 1)
//   return sorted - 1
// }
// function swap (arr, left, right) {
//   let temp = arr[left]
//   arr[left] = arr[right]
//   arr[right] = temp
// }

// let arr = [1, 5, 4, 3, 6]
// quickSort(arr)
// console.log(arr)

// 不原地 稳定 归并
// function mergeSort (arr) {
//   if(arr.length < 2) return arr
//   let mid = Math.floor(arr.length / 2)
//   let left = arr.slice(0, mid)
//   let right = arr.slice(mid)
//   return merge(mergeSort(left), mergeSort(right))
// }
// function merge (left, right) {
//   let res = []
//   let l = 0
//   let r = 0
//   while(l < left.length && r < right.length) {
//     if(left[l] <= right[r]) {
//       res.push(left[l])
//       l++
//     }else {
//       res.push(right[r])
//       r++
//     }
//   }
//   while(l < left.length) {
//     res.push(left[l])
//     l++
//   }
//   while(r < right.length) {
//     res.push(right[r])
//     r++
//   }
//   return res
// }

// let arr = [1, 5, 4, 3, 6]
// let res = mergeSort(arr)
// console.log(res)

// 原地 稳定 插排
// function insertSort (arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let temp = arr[i]
//     let j = i
//     while(j > 0 && temp < arr[j - 1]) {
//       arr[j] = arr[j - 1]
//       j--
//     }
//     arr[j] = temp
//   }
// }

// let arr = [1, 5, 4, 3, 6]
// insertSort(arr)
// console.log(arr)

// 冒泡
// function bubbleSort (arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     let mark = true
//     for(let j = 0; j < arr.length - 1 - i; j++) {
//       if(arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         mark = false
//       }
//     }
//     if(mark) return
//   }
// }

// let arr = [1, 5, 4, 3, 6]
// bubbleSort(arr)
// console.log(arr)