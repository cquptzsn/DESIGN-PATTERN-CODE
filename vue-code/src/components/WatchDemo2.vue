<script setup>
// 升级 Vue3.2
// Composition API

import { ref, watchEffect, watch, reactive } from 'vue'

const nameRef = ref('双越')
// watch(
//     [nameRef], // ref 数组形式
//     (newValues, values) => {
//         console.log('name', newValues, values)
//     }
// )
// 初始化即刻触发
watchEffect(() => {
    console.log('name', nameRef.value)
})
function changeName() {
    nameRef.value = `双越 ${Date.now()}`
}

const state = reactive({
    info: {
        city: '北京'
    }
})
watch(
    () => state, // reactive 函数形式
    () => {
        console.log('city', state.info.city)
    },
    { deep: true } // 深度监听
)
function changeCity() {
    state.info.city = '上海'
}

</script>

<template>
    <p>name: {{nameRef}}</p>
    <p>city: {{state.info.city}}</p>
    <div>
        <button @click="changeName">change name</button>
        <button @click="changeCity">change city</button>
    </div>
</template>
