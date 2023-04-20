// function* genNums () {
//   yield 10
//   yield 20
//   yield 30
// }

// function* genNums () {
//   yield* [10, 20, 30] // 有序结构，内置迭代器 [Symbol.Iterator]
// }

// const iterator2 = genNums()
// // console.log(iterator2.next())
// // console.log(iterator2.next())
// // console.log(iterator2.next())
// // console.log(iterator2.next())

// for(let n of iterator2) {
//   console.log(n)
// }


class CustomIterator2 {
  private data: number[]
  constructor() {
    this.data = [10, 20, 30]
  }
  *[Symbol.iterator]() {
    yield* this.data
  }
}

const iterator3 = new CustomIterator2()
for(let n of iterator3) {
  console.log(n)
}