<template>
    <p>name: {{name}}</p>
    <p>city: {{info.city}}</p>
    <div>
        <button @click="changeName">change name</button>
        <button @click="changeCity">change city</button>
    </div>
</template>

<script>
export default {
    name: 'WatchDemo1',
    data() {
        return {
            name: '双越',
            info: {
                city: '北京'
            }
        }
    },
    methods: {
        changeName() {
            this.name = `双越 ${Date.now()}`
        },
        changeCity() {
            this.info.city = '上海'
        }
    },
    watch: {
        // name(newVal, val) {
        //     console.log('name', newVal, val)
        // },
        name: {
            handler(newVal, val) {
                console.log('name', newVal, val)
            },
            immediate: true // 初始化时，立刻触发
        },
        // info(newVal, val) {
        //     console.log('info', newVal, val)
        // }
        info: {
            handler(newVal, val) {
                console.log('info', newVal, val)
            },
            deep: true // 深度监听
        }
    }
}
</script>