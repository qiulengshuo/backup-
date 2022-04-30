function jsonp ({ url, params, callName }) {
  const generateUrl = function () {
    let dataStr = ''
    for (let key in params) {
      dataStr += `${key}=${params[key]}&`
    }
    dataStr += `callName=${callName}`
    return `${url}?${dataStr}`
  }
  return new Promise((resolve, reject) => {
    callName = callName || `_${Math.random().toString().replace('.', '')}`
    let scriptElm = document.createElement('script')
    scriptElm.src = generateUrl()
    document.body.appendChild(scriptElm)
    window[callName] = function(data) {
      resolve(data)
      document.body.removeChild(scriptElm)
    }
  })
}
jsonp({
  url: 'http://localhost:3000',
  params: { 
    a: 1,
    b: 2
  }
}).then(data => {
  // 拿到数据进行处理
  console.log(data); // 数据包
})


