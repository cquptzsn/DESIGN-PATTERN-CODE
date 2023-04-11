/**
 * @description stream demo
 * @author 周圣楠
 */

const fs = require('fs')
const readStream = fs.createReadStream('./data/yarn.lock.txt')

// 文件字符的长度
let length = 0

readStream.on('data', (chunk) => {
    const curLength = chunk.toString().length
    console.log('curLength => ', curLength)
    length += curLength
})

readStream.on('end', () => {
    console.log('读取完毕，文件长度为 => ', length)
})