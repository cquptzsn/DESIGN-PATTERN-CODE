/**
 * 加载图片
 * @param src src
 */
function loadImg(src: string) {
    // TS 泛型
    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

const src = 'http://news-bos.cdn.bcebos.com/mvideo/log-news.png'
const res = loadImg(src)

res.then((img: HTMLImageElement) => {
    console.log(img.width)
    return img
}).then((img: HTMLImageElement) => {
    console.log(img.height)
}).catch(err => {
    console.error(err)
})