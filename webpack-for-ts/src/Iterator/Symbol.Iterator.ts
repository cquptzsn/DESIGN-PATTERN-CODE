// 模拟 Symbol.Iterator
interface IteratorRes {
    value: number | undefined
    done: boolean
}

class CustomIterator {
    private length = 3
    private index = 0

    next() {
        this.index++
        if (this.index <= this.length) {
            return { value: this.index, done: false }
        }
        return { value: undefined, done: true }
    }

    [Symbol.iterator]() {
        return this
    }
}

const iterator = new CustomIterator()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

for (let n of iterator) {
    console.log(n)
}