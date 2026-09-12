const div = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div')
    div.appendChild(newDiv)
}

const allDiv = document.querySelectorAll('.container div')

allDiv.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = 'black'
    })
})