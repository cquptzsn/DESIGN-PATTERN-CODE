// class DataContainer {
//     data = [10, 20, 30, 40, 50]
//     getIterator(): DataIterator {
//         // 获取迭代器
//         return new DataIterator(this)
//     }
// }

// class DataIterator {
//     private data: number[]
//     private index = 0

//     constructor(container: DataContainer) {
//         this.data = container.data
//     }

//     hasNext(): boolean {
//         if(this.index >= this.data.length) {
//             return false
//         }
//         return true
//     }

//     next(): number | null {
//         if(this.hasNext()) {
//             return this.data[this.index++]
//         }
//         return null
//     }
// }

// const container = new DataContainer()
// const iterator = container.getIterator()
// while(iterator.hasNext()) {
//     console.log(iterator.next())
// }