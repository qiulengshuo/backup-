const http = require('http')
const { parse } = require('querystring')
const server = http.createServer()
server.listen(3000, (err) => {
  console.log('listen 3000')
})
server.on('request', (req, res) => {
  let params = req.url.split('?')[1]
  console.log(params)
  let paramObj = parse(params)
  let { callName } = paramObj
  res.end(`${callName}('数据')`)
})

// const express = require('express')
// const app = express()
// app.listen(3000)
// app.get('/', (req, res) => {
//   const { a, b, callName } = req.query
//   res.end(`${callName}('后台传过来的数据')`)
// })