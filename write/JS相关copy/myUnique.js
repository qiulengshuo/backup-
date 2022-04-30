// 1. set
function unique (arr) {
  const set = new Set(arr)
  return [...set]
}
// 2. map
function unique (arr) {
  const map = new Map()
  let res = []
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1)
      res.push(item)
    }
  })
  return arr
}

//  3. sort
function unique (arr) {
  arr.sort((a, b) => a - b)
  let res = [arr[0]]
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[i - 1]) {
      res.push(arr[i])
    }
  }
  return res
}

// 4. indexOf
function unique (arr) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if(res.indexOf(arr[i]) < 0) {
      res.push(arr[i])
    }
  }
  return res
}

// 5. includes
function unique (arr) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if(!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}