const text = document.querySelector(".text")
const bg = document.querySelector(".bg")

let num = 0
let blur = setInterval(blurring, 30)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function blurring() {
    num++

    if(num > 99){ 
        clearInterval(blur)
    }

    text.innerText = `${num}%`
    text.style.opacity = scale(num, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`
}