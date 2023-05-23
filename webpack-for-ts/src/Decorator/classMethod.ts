function readOnly(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false
}

function configurable(val: boolean) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        descriptor.configurable = false
    } 
}

class Foo2  {
    private name = '周圣楠'
    private age = 24

    @readOnly
    getName() {
        return this.name
    }

    @configurable(false)
    getAge() {
        return this.age
    }
}

const f = new Foo2()

//@ts-ignore
// f.getName = () => console.log("修改了")

console.log(Object.getOwnPropertyDescriptor(f.__proto__, 'getAge').configurable)

