const xhr = new XMLHttpRequest()
xhr.open("GET", "/", true)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // 0 1 2 3 4
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}
xhr.timeout = 2000
xhr.ontimeout = function () {
  console.log("请求超时了！")
}
xhr.onabort = function () {

}
xhr.abort()
xhr.send()