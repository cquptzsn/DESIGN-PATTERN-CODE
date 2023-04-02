// class Product {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     fn1() {
//         console.log('fin1')
//     }
//     fn2() {
//         console.log('fin2')
//     }
// }

// // 工厂
// class Creator {
//     create(name: string): Product {
//         return new Product(name)
//     }
// }

// const creator = new Creator()
// const p1 = creator.create('p1')
// const p2 = creator.create('p2')
// const p3 = creator.create('p3')

// ------------------------------------------------
interface IProduct {
    name: string
    fn1: () => void
    fn2: () => void
}

class Product1 implements IProduct {
    name: string
    constructor(name: string) {
        this.name = name
    }
    fn1 () {
        console.log("product1 fn1")
    }
    fn2 () {
        console.log('product1 fn2')
    }
}

class Product2 implements IProduct {
    name: string
    constructor(name: string) {
        this.name = name
    }
    fn1 () {
        console.log("product2 fn1")
    }
    fn2 () {
        console.log('product2 fn2')
    }
}

class Creator {
    // 依赖倒置原则
    create(type: string, name: string): IProduct {
        // new 时候的逻辑由工厂控制
        if(type === 'p1') {
            return new Product1(name)
        }
        if (type === 'p2') {
            return new Product2(name)
        }
        throw new Error('invalid type')
    }
}

const creator = new Creator()
const p1 = creator.create('p1', 'name1')
const p11 = creator.create('p1', 'name11')
const p2 = creator.create('p2', 'name2')