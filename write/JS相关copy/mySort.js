// function quickSort (arr, left, right) {
//   let l = left === undefined ? 0 : left
//   let r = right === undefined ? arr.length - 1 : right
//   if(l < r) {
//     let mid = partition(arr, l, r)
//     quickSort(arr, l, mid - 1)
//     quickSort(arr, mid + 1, r)
//   }
// }
// function partition (arr, l, r) {
//   let pivot = l
//   let sorted = l + 1
//   for(let i = sorted; i <= r; i++) {
//     if(arr[i] < arr[pivot]) {
//       swap(arr, sorted, i)
//       sorted++
//     }
//   }
//   swap(arr, pivot, sorted - 1)
//   return sorted - 1
// }
// function swap (arr, i, j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// let arr = [1, 5, 4, 3, 6]
// quickSort(arr)
// console.log(arr)

// function mergeSort (arr) {
//   if(arr.length < 2) return arr
//   let left = 0
//   let right = arr.length
//   let mid = left + ((right - left) >>> 1)
//   let leftArr = arr.slice(left, mid)
//   let rightArr = arr.slice(mid, right)
//   return merge(mergeSort(leftArr), mergeSort(rightArr))
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

function insertSort (arr) {
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let j = i
    while(j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
}

// let arr = [1, 5, 4, 3, 6]
// insertSort(arr)
// console.log(arr)

// function bubbleSort (arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let mark = false
//     for(let j = 0; j < arr.length - i - 2; j++) {
//       if(arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         mark = true
//       }
//     }
//     if(!mark) return
//   }
// }
