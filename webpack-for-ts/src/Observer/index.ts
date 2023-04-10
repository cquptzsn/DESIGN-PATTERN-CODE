// 主体
class Subject {
    private state: number = 0
    private observers: Observer[] = []

    getState(): number {
        return this.state
    }

    setState(newState: number): void {
        this.state = newState
        this.notify()
    }

    // 添加观察者
    attach(observer: Observer): void {
        this.observers.push(observer)
    }

    // 通知
    private notify() {
        this.observers.forEach(observer => observer.update(this.state))
    }
}

// 观察者
class Observer {
    name: string
    constructor(name: string) {
        this.name = name
    }
    update(state: number) {
        console.log(`${this.name} is update and state is ${state}`)
    }
}

const sub = new Subject()
const observer1 = new Observer('observer1')
const observer2 = new Observer('observer2')
sub.attach(observer1)
sub.attach(observer2)
sub.setState(2)