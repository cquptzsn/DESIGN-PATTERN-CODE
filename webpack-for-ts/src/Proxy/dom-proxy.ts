const container1 = document.getElementById('container')
if (container1) {
    document.addEventListener('click', event => {
        const target = event.target as Element
        if(target.nodeName === 'A') {
            alert(target.innerHTML)
        }
    })
}