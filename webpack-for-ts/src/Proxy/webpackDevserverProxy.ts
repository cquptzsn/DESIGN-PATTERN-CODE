import axios from "axios"

const btn = document.getElementById('btn1')
btn?.addEventListener('click', () => {
    axios.get('/api/getInfo').then(res => {
        console.log(res)
    })
})