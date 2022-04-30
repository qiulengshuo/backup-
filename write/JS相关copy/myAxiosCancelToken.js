let CancelToken = axios.CancelToken
let cancel = null
axios.get("/", {
  cancelToken: new CancelToken((c) => {
    cancel = c
  })
})
cancel()