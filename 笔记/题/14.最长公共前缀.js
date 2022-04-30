/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = strs[0]
  for(let i = 1; i < strs.length ; i++) {
    let j = 0
    for(; j < strs[i].length && res.length; j++) {
      if(strs[i][j] !== res[j]) {
        break
      }
    }
    res = res.substring(0, j)
    if(res === '') {
      return ''
    }
  }
  return res
};
// @lc code=end

