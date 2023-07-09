// 明星
const star = {
    name: '张三',
    age: 25,
    phone: '17611112222',
    price: 0
}

// 经纪人
const agent = new Proxy(star, {
    get(target, key) {
        if (key === 'phone') { // 返回的是经纪人的电话，明星的电话不能泄露
            return '13966667777'
        }
        if (key === 'price') { // 经纪人给明星的报价
            return 10000
        }
        return Reflect.get(target, key) // 明星的姓名和年龄不是保密信息，可直接返回。Reflect.get(target, key) 相当于 target[key]
    },
    set(target, key, value): boolean {
        if (key === 'price') {
            if (value < 10000) {
                throw new Error("价格太低了");
            } else {
                console.log('报价成功，合作愉快')
                return Reflect.set(target, key, value)
            }
        }
        // 其他的属性可不设置
        return false
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.price = 12000
console.log(agent.price)