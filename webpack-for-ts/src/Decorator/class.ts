function testable(value: boolean) {
    return (target: any) => {
        target.isTestable = value
    }
}

@testable(true)
class Foo {
    static isTestable: boolean
}

console.log(Foo.isTestable)