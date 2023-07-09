const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const srcPath = path.join(__dirname, 'src')
const srcPath = path.resolve(__dirname, 'src/Proxy') // 这里要根据不同的文件，改成绝对路径
const tplPath = path.join(__dirname, 'tpl')

module.exports = {
    mode: 'development',
    entry: path.resolve(srcPath, 'proxy-agent'),
    // entry: path.resolve(srcPath, 'classMethod.ts'), // 这里也要根据不同的文件进行更改
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(tplPath, 'index.html'),
            filename: 'index.html'
        })
    ],
    // devServer: {
    //     port: 3000,
    //     proxy: {
    //         '/api': 'http://localhost:8081'
    //     }
    // },
}