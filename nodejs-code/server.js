/**
 * @description server demo
 * @author 双越老师
 */

const http = require('http')

function serverCallback(req, res) {
    console.log('url', req.url)
    res.end('hello')
}

http.createServer(serverCallback).listen(8081)
console.log('监听 8081 端口')
