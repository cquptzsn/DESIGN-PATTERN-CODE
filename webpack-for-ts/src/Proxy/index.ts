class RealImg {
    fileName: string
    constructor(fileName: string) {
        this.fileName = fileName
    }
    display() {
        this.loadFromDisk()
        console.log('display... ', this.fileName)
    }
    private loadFromDisk() {
        console.log('loading... ', this.fileName)
    }
}

class ProxyImg {
    realImg: RealImg
    constructor(fileName: string) {
        this.realImg = new RealImg(fileName)
    }
    display() {
        this.realImg.display()
    }
}

const proxyImg = new ProxyImg('xxx.png')
proxyImg.display()