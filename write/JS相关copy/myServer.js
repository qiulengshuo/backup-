const http = require("http")
const server = http.createServer()
const fs = require("fs")
server.listen(9999, () => {
  console.log('监听端口啦');
})
server.on("request", (req, res) => {
  fs.readFile("../JS相关/serverTest.txt", "utf-8", (err, data) => {
    if(err) {
      console.log(err);
    }
    res.end(data)
  })
})
