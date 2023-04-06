// @ts-nocheck

function genGetInstance() {
    let instance

    class SingleTon {}

    return () => {
        if (instance == null) {
            instance = new SingleTon()
        }
        return instance    
    }
}

const getInstance = genGetInstance()
const s1 = getInstance()
const s2 = getInstance()
console.log(s1 === s2) // true

// 这段代码创建了一个名为 SingleTon 的类和一个函数 genGetInstance()。 
// genGetInstance() 返回一个函数实例，该实例在第一次调用时创建一个新的 SingleTon 实例并将其存储在闭包中，以后每次调用该函数时都返回相同的实例