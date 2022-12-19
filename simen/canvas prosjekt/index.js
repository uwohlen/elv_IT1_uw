const canvas = document.querySelector("canvas")
const knappEl = document.getElementById("buttonId")
const tekstEl = document.getElementById("tekstId")
c = canvas.getContext("2d")

canvas.width = 700
canvas.height = 200

const farger = ["cyan", "CornflowerBlue", "blueviolet"]
const meldinger = ["Kanskje vinner du neste gang", "prøv igjen", "dette får du til", "en gang til", "90% av gamblere gir seg før de vinner stort", "ikke gi opp", "du vant nesten"]

let tid = 100
let tid2 = 100
let tid3 = 100

KanSpille = false;


let interval = setInterval(function () { test1() }, tid)
let interval2 = setInterval(function () { test2() }, tid2)
let interval3 = setInterval(function () { test3() }, tid3)

let max = (Math.floor(Math.random() * (300)) + 400)
let max2 = (Math.floor(Math.random() * (300)) + 400)
let max3 = (Math.floor(Math.random() * (300)) + 400)


let i = 0
function test1() {
  if(KanSpille){
    knappEl.style.backgroundColor = "green"
  }
  else knappEl.style.backgroundColor = "red"
  if (tid < max) {
    c.fillStyle = farger[i]
    c.fillRect(100, 50, 100, 100)
    tid *= 1.3
    i++
    if (i === 3) i = 0
    clearInterval(interval)
    interval = setInterval(function () { test1() }, tid)
  }
}

let x = 0
function test2() {
  if (tid2 < max2) {
    c.fillStyle = farger[x]
    c.fillRect(300, 50, 100, 100)
    tid2 *= 1.15
    x++
    if (x === 3) x = 0
    clearInterval(interval2)
    interval2 = setInterval(function () { test2() }, tid2)
  }
}

let i2= 0
let y = 0
function test3() {
  if (tid3 < max3) {
    c.fillStyle = farger[y]
    c.fillRect(500, 50, 100, 100)
    tid3 *= 1.08
    y++
    if (y === 3) y = 0
    clearInterval(interval3)
    interval3 = setInterval(function () { test3() }, tid3)
  }
  else {
    KanSpille = true;
    knappEl.style.backgroundColor = "green"
    if (farger[i] === farger[x] && farger[x] === farger[y]) tekstEl.innerHTML = "Du vant!!"
    else{
      tekstEl.innerHTML = meldinger[i2]
      i2++
      if(i2===meldinger.length) i2 = 0
    }
    clearInterval(interval3)
  }
}

knappEl.addEventListener("click", function () {
  // put the code that you want to run when the button is clicked here
  if(KanSpille){
    tid = 100
    tid2 = 100
    tid3 = 100
  
    max = (Math.floor(Math.random() * (300)) + 400)
    max2 = (Math.floor(Math.random() * (300)) + 400)
    max3 = (Math.floor(Math.random() * (300)) + 400)
  
    test1()
    test2()
    test3()
    KanSpille = false
    knappEl.style.backgroundColor = "red"
  }
});
