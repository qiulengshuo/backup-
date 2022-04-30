/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const l1 = num1.length
  const l2 = num2.length
  const res = (new Array(l1 + l2)).fill(0)
  for(let i = l1 - 1; i >= 0; i--) {
    const n1 = +num1[i]
    for(let j = l2 - 1; j >= 0; j--) {
      const n2 = +num2[j]
      const sum = n1 * n2 + res[i + j + 1]
      res[i + j + 1] = sum % 10
      res[i + j] += Math.floor(sum / 10)
    }
  }
  while(res[0] === 0) {
    res.shift()
  }
  return res.length ? res.join('') : '0' 
};
// @lc code=end

