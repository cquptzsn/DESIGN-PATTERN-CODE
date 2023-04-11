/**
 * @description server demo
 * @author 周圣楠
 */


const http = require('http')

function serverCallback(req, res) {
    console.log('url => ', req.url)
    res.end('hello world')
}

http.createServer(serverCallback).listen(8083)
console.log('监听8083端口')
