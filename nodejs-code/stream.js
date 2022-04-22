/**
 * @description stream demo
 * @author 双越老师
 */

const fs = require('fs')
const readStream = fs.createReadStream('./data/yarn.lock.txt')

// 读取文件字符的 length
let length = 0

readStream.on('data', function (chunk) {
    const curLength = chunk.toString().length
    console.log('current length', curLength)
    length += curLength
})
readStream.on('end', function () {
    console.log(length)
})
