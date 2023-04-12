<template>
    <div>
        <p>name: {{nameRef}}</p>
        <button @click="changeName">change name</button>
        <p>city: {{state.info.city}}</p>
        <button @click="changeCity">change name</button>
    </div>
</template>

<script setup>
// 升级 Vue3.2
// Composition API
import { 
    ref, 
    watch,
    watchEffect,
    reactive
} from 'vue'

const nameRef = ref('周圣楠')
const state = reactive({
    info: {
        city: '北京'
    }
})

function changeName() {
    nameRef.value = `周圣楠-${Date.now()}`
}

function changeCity() {
    state.info.city = '上海'
}

// watch(
//     [nameRef], // ref采用数组形式
//     (newVal, val) => {
//         console.log(`新名字: ${newVal}  旧名字: ${val}`)
//     }
// )

watch(
    () => state, // reactive 采用函数形式监听
    () => {
        console.log(`city: ${state.info.city}`)
    },
    {deep: true} // 引用类型的值，深度监听
)

// 监听-即刻触发
watchEffect(() => {
    console.log(`名字：${nameRef.value}`)
})
</script>
