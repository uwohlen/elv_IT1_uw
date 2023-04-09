
const høyde=420
const racket_bredde=40
const racket_høyde=10
const maks_bredde=310

let bredde = 100
let x=100
let y=10
let radius=10

let xfart=0.5
let yfart=0.6
let racketfart=0.5

let left=false
let right=false

let poeng=0

let canvas = document.getElementById("mittCanvas");
let ctx = canvas.getContext("2d");

addEventListener("keydown",startfunk)
addEventListener("keyup",stoppfunk)
racket();
function startfunk(event) {
    if (event.keyCode === 37)
        left = true
    else if (event.keyCode === 39)
        right = true
    if (left || right)
        racket()
}

function stoppfunk(event) {
    if (event.keyCode === 37)
        left = false
    else if (event.keyCode === 39)
        right = false
}

function racket(){
    ctx.clearRect(bredde,høyde,racket_bredde+0.1,racket_høyde)


    if (left && bredde>0)
        bredde-=5
        
    if (right && bredde<maks_bredde)
        bredde+=5

    bredde+=racketfart
    ctx.fillStyle="red";
    ctx.fillRect(bredde,høyde,racket_bredde,racket_høyde);
    
}
function ball(){
    let ball_gradient = ctx.createLinearGradient(x-radius, y, x+radius, y);

    ball_gradient.addColorStop(0,"black")
    ball_gradient.addColorStop(0.4,"red")
    ball_gradient.addColorStop(1, "white");

    ctx.beginPath();
    ctx.fillStyle="white"
    ctx.strokeStyle="#ffffff"
    ctx.lineWidth=0;
    ctx.arc(x,y,radius+0.8,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    x+=xfart
    y+=yfart
   
    ctx.beginPath();
    ctx.strokeStyle="black"
    ctx.fillStyle=ball_gradient
    ctx.lineWidth=0.1;
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if( x===350-radius || x===radius){
        xfart*=-1
        x+=xfart

    }
    if(y>=450-radius|| y<=radius){
        yfart*=-1
        y+=yfart

    }

}

setInterval(ball,10)
