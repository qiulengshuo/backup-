let CancelToken = axios.CancelToken
let cancel
axios.get("", {
  cancelToken: new CancelToken(function executor (c) {
    cancel = c
  })
})
cancel()