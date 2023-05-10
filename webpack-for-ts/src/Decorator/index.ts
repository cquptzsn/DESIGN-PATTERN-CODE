class Circle {
    draw() {
        console.log('画一个圆')
    }
}

class Decorator {
    private circle: Circle

    constructor (circle: Circle) {
        this.circle = circle
    }

    public draw() {
        console.log('画一个圆') // 原有功能
        this.setBorder() // 装饰
    }

    private setBorder() {
        console.log('设置边框颜色')
    }
}

const circle = new Circle()
const decorator = new Decorator(circle)
decorator.draw()