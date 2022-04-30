const http = require("http")
const server = http.server()
const { params } = require("querystring")
server.listen("9999", () => {
  console.log("监听9999端口");
})
server.on("request", (req, res) => {
  let query = req.url.splice("?")[1]
  let paramObj = params(query)
  let { a, b, callbackName } = paramObj
  res.end(`${callbackName}("传输的数据")`)
})

const express = require("express")
const app = express()
app.get("/", (req, res) => {
  const { a, b, callbackName } = req.query
  res.end(`${callbackName}("传输的数据")`)
})