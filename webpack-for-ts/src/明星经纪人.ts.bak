/**
 * @description 明星经纪人
 * @author 双越老师
 */

// 明星
const star = {
    name: '张三',
    age: 25,
    phone: '18611112222',
    price: 0 // 明星不谈钱
}

// 经纪人
const agent = new Proxy(star, {
    get(target, key) {
        if (key === 'phone') {
            return '13966667777' // 经纪人的电话，明星电话不能泄漏
        }
        if (key === 'price') {
            return 100 * 1000 // 报价
        }
        return Reflect.get(target, key)
    },
    set(target, key, val): boolean {
        if (key === 'price') {
            if (val < 100 * 1000) {
                throw new Error('价格太低了')
            } else {
                console.log('报价成功，合作愉快', val)
                return Reflect.set(target, key, val)
            }
        }
        // 其他属性不可设置
        return false
    } 
})

// console.log(agent.name)
// console.log(agent.age)
// console.log(agent.phone)
// console.log(agent.price)
// agent.price = 110000
