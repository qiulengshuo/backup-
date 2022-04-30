const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.listen(8000, () => {
  console.log('server listen');
})
// utf-8 保存文件的编码格式
server.on('request', (req, res) => {
  fs.readFile('./serverTest.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log(err);
    }
    res.end(data)
  })
})