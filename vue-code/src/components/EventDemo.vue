<template>
    <p>EventBus Demo</p>
</template>
<script>
import emitter from '../utils/event.js'

export default {
    name: 'EventBusDemo',
    created() {
        // 绑定事件 on
        emitter.on('change', this.changeHandler)

        // setInterval
    },
    methods: {
        changeHandler() {
            console.log('change1')
        }
    },
    beforeUnmount() {
        // 解绑事件 off
        emitter.off('change', this.changeHandler)

        // clearInterval
        // clearTimeout
    },
}
</script>
