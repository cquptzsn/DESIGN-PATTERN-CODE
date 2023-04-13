import EventEmitter from 'event-emitter'

const emitter = EventEmitter()

emitter.on('change', () => {
    console.log('change1')
})
emitter.on('change', () => {
    console.log('change2')
})
emitter.once('change', () => {
    console.log('change3')
})


// 这里的触发逻辑可以写在任何地方，但需要保证使用的是同一个 emitter 实例（单例）
emitter.emit('change')
emitter.emit('change')