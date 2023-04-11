/**
 * @description readline demo 按行读取文件
 * @author 周圣楠
 */

const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: fs.createReadStream('./data/yarn.lock.txt')
})

let lineNum = 0
rl.on('line', () => {
    lineNum ++
})
rl.on('close', () => {
    console.log('文件读取完毕，行数为 => ', lineNum)
    
})