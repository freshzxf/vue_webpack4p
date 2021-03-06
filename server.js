var http = require('http') // 引入http模块
var fs = require('fs')// 引入文件读取模块
var path = require('path') // 路径处理模块

var documentRoot = 'D:/wwwroot/vue_webpack4p/dist'
// 需要访问的文件的存放目录

http.createServer(function (req, res) {
  var url = req.url === '/' ? '/index.html' : req.url
  // 客户端输入的url，例如如果输入localhost:8888/index.html
  // 那么这里的url == /index.html

  var file = documentRoot + url

  fs.readFile(file, function (err, data) {
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
    if (err) {
      res.writeHeader(404, {
        'content-type': 'text/htmlcharset="utf-8"'
      })
      res.write('<h1>404错误</h1><p>你要找的页面不存在</p>')
      res.end()
    } else {
      var extname = path.extname(file)
      if (/\.(svg)(\?.*)?$/.test(extname)) {
        res.writeHeader(200, {
          'content-type': 'image/svg+xml'
        })
      }
      // 将index.html显示在客户端
      res.write(data)
      res.end()
    }
  })
}).listen(8888)

console.log('服务器开启成功 http://localhost:8888')
