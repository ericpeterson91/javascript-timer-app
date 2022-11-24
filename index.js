const btn = document.querySelector('button')
const h1 = document.querySelector('h1')
let counter = 10
h1.innerHTML = counter

const beep = () => {
    const audio = new Audio('./beep.mp3')
    audio.volume = 0.2
    audio.play()
}

const timer = () => {
    counter--
    h1.innerHTML = counter;
    if (counter === 0) {
        beep()
        clearInterval(interval)
    }
}

btn.addEventListener('click', () => {
   interval = setInterval(timer, 1000)
})



