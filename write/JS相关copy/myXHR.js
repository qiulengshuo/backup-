// promise版 XHR
function ajax (url) {
  let xhr = new XMLHttpRequest()
  return new Promise ((resolve, reject) => {
    xhr.open("GET", url)
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4) { // 0 1 2 3 4
        if(xhr.status === 200) {
          resolve(xhr.responseText)
        }else {
          reject(xhr.statusText)
        }
      }
    }
    xhr.timeout = 2000
    xhr.ontimeout = function () {
      console.log("超时了!");
    }
    xhr.onabort = function () {
      console.log("中断了!");
    }
    xhr.send()
    xhr.abort()
  })
}
