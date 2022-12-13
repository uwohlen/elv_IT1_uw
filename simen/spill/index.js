const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

let TouchGround = false
let wPressed = false
//hopp

let hopp = 0

let fartX = 0
let fartY = 0
let y = 100
let x = 100
const height = 100
const width = 100
const gravitasjon = 0.8

let aPressed;
let dPressed;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            if (TouchGround) fartY = -20//hopp
            break
        case "a":
            aPressed = true
            break
        case "d":
            dPressed = true
            break
    }
})
document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "a":
            aPressed = false
            break
        case "d":
            dPressed = false
            break
    }
})

function animate() {
    window.requestAnimationFrame(animate)
    //oppdaterer posisjon
    y += fartY
    x += fartX
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "red"
    c.fillRect(x, y, width, height)


    //bevegelse x
    fartX = 0
    if (aPressed) fartX = -5
    else if (dPressed) fartX = 5

    //ikke nær bakken og nær bakken
    if (y + fartY < canvas.height - height) {
        TouchGround = false
        fartY += gravitasjon
    } else {
        TouchGround = true
        fartY = 0
    }

}

animate()