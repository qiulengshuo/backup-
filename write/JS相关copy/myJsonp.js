function myJsonp ({url, params, callbackName}) {
  function createUrl () {
    let dataStr = "?"
    for(let i in params) {
      dataStr += `${i}=${params[i]}&`
    }
    dataStr += `callbackName=${callbackName}`
    return url + dataStr
  }
  return new Promise ((resolve, reject) => {
    callbackName = callbackName || `_${Math.random().toString().replace(".", "")}`
    let URL = createUrl()
    let script = document.createElement("script")
    script.src = URL
    document.documentElement.appendChild(script)
    window[callbackName] = function (data) {
      resolve(data)
      document.documentElement.removeChild(script)
    }
  })
}
myJsonp({
  url: "http://localhost:3000",
  params: {
    a: 1,
    b: 2
  }
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
})