// 获取url参数 如果有解码需求 decodeURIComponent() 如果有编码需求 encodeURIComponent()
function getURLParams (sURL, sKey) {
  let paramsArray = sURL.split('?')[1].split('#')[0].split('&')
  let obj = {}
  paramsArray.foreach((item) => {
    let param = item.split('=')
    let key = param[0]
    let value = param[1]
    if (obj[key] === undefined) {
      obj[key] = value
    } else {
      obj[key] = [].concat(value, obj[key])
    }
  })
  return sKey === undefined ? obj : (obj[sKey] || '')
}
