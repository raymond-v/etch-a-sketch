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

const button = document.querySelector('button')

button.addEventListener('click', () => {
    let answer = prompt('Number of squares')
    if (answer > 0 && answer <= 100) {
        div.innerHTML = ''
        div.style.width = `${50 * answer}px`
        for (let i = 0; i < answer * answer; i++) {
            let newDiv = document.createElement('div')
            div.appendChild(newDiv)
        }
        const allDiv = document.querySelectorAll('.container div')
        allDiv.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = 'black'
            })
        })
    }
})