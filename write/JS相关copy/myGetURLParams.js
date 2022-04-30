// location.search (无hash)
function getURLParams (sURL, sKey) {
  let url = sURL.decodeURIComponent()
  const strArr = url.split("?")[1].split("#")[0].split("&")
  let obj = {}
  strArr.forEach(element => {
    const str = element.split("=")
    let key = str[0]
    if (obj[key]) {
      obj[key] = [].concat(obj[key], str[1])
    } else {
      obj[key] = str[1]
    }
  })
  return sKey === undefined ? obj : (obj[sKey] || "")
}
