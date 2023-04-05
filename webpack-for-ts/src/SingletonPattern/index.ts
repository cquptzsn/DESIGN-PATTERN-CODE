// class Foo {
//     // 实例、对象属性
//     name: string
//     constructor(name: string) {
//         // 这里的 this 指的是 Foo 的实例
//         this.name = name
//     }
//     getName() {
//         // 这里的 this 指的是 Foo 的实例
//         return this.name
//     }

//     // 静态属性
//     static flag: string = 'abc'
//     static getFlag() {
//         // 这里的 this 指的是 Foo
//         return this.flag
//     }
// }

// const f1 = new Foo('张三')
// console.log(f1.name)
// console.log(f1.getName())

// console.log(Foo.flag)
// console.log(Foo.getFlag())

class SingleTon {
    private static instance: SingleTon | null

    // 把构造函数私有化，避免在类外部调用 new 生成实例
    private constructor() {}

    static getInstance(): SingleTon {
        if (SingleTon.instance === null) {
            SingleTon.instance = new SingleTon()
            
        } 
        return SingleTon.instance
    }
}

// SingleTon.instance  // 会报错 instance 为私有属性，只能在类内部获取
// const a = new SingleTon() // 会报错，不能用 new，因为构造函数是一个私有方法

const instance1 = SingleTon.getInstance()
const instance2 = SingleTon.getInstance()
console.log(instance1 === instance2) // true，表示 instance1 与 instance2 确实是同一个实例，即单例