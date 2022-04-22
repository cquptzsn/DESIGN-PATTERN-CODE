<template>
    <p>Computed demo</p>
    <ul>
        <li v-for="name in userNameList" :key="name">{{name}}</li>
    </ul>
</template>

<script>
export default {
    name: 'ComputedDemo',
    data() {
        return {
            userList: [
                { id: 1, name: '张三' },
                { id: 2, name: '李四' },
                { id: 3, name: '双越' },
            ]
        }
    },
    computed: {
        userNameList() {
            return this.userList.map(user => user.name) // ['张三', '李四', '双越']
        }
    }
}
</script>
