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
        for (let i = 0; i < answer * answer; i++) {
            let newDiv = document.createElement('div')
            newDiv.style.width = `${800 / answer}px`
            newDiv.style.height = `${800 / answer}px`
            newDiv.dataset.opacity = 0
            div.appendChild(newDiv)
        }
        const allDiv = document.querySelectorAll('.container div')
        allDiv.forEach(element => {
            element.addEventListener('mouseenter', () => {
                const red = Math.floor(Math.random() * 256)
                const green = Math.floor(Math.random() * 256)
                const blue = Math.floor(Math.random() * 256)
                
                let opacity = Math.min(1, Number(element.dataset.opacity) + 0.1)
                element.dataset.opacity = opacity

                element.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`
            })
        })
    }
})