// 30min 内 取缓存
function getCache () {
  let now = +(new Date())
  let data = localStorage.getItem("data1")
  let result = ""
  if(!data || now - data.last > 1000 * 60 * 30) {
    request.get("").then((res) => {
      result = res
      localStorage.setItem("data1", {
        responseData: res,
        last: +(new Date())
      })
    })
  }else {
    return data.responseData
  }
  return result
}