declare interface Window {
    $: (selector: string) => void
}

class JQuery {
    selector: string
    length: number
    constructor(selector: string) {
        this.selector = selector
        const domList = Array.prototype.slice.call(document.querySelectorAll(selector))
        this.length = domList.length
        // @ts-ignore
        domList.map((dom, index) => this[index] = domList[index])
    }
    append(elem: HTMLElement): JQuery  {
        // append 的操作
        return this
    }
    addClass(elem: HTMLElement): JQuery {
        // addclass 的操作
        return this
    }
    // ... methods
}

const $ = (selector: string) => {
    // 一大段逻辑...
    return new JQuery(selector)
}
window.$ = $

console.log($('p'))

// 不用工厂模式
// const $div = new JQuery('div')
// const $p = new JQuery('p')