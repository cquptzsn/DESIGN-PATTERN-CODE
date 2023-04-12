<template>
    <div>
        <p>name: {{name}}</p>
        <p>city: {{info.city}}</p>
        <div>
            <button @click="changeName">change name</button>
            <button @click="changeCity">change city</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WatchDemo1',
    data() {
        return {
            name: '周圣楠',
            info: {
                city: '成都'
            }
        }
    },
    methods: {
        changeName() {
            this.name = `周圣楠 ${Date.now()}`
        },
        changeCity() {
            this.info.city = '上海'
        }
    },
    watch: {
        // name (newVal, val) {
        //     console.log(newVal, val)
        // }
        name: {
            handler(newVal, val) {
                console.log(`新名字：${newVal} 旧名字： ${val}`)
            },
            immediate: true // 初始化时，就触发
        },
        info: { // 引用值只能采用这种方式监听，不能直接用函数的方式监听
            handler(newVal, val) {
                console.log(`新城市：${newVal} 旧城市： ${val}`)
            },
            deep: true // 深度监听
        }
    }
}
</script>