const MAX_NUM = 45;

const pipeEl = document.getElementById("pipe");
const holeEl = document.getElementById("hole");
const playerEl = document.getElementById("player");

const canvas = document.getElementById("canvas");

var jumping = 0;
var counter = 0;


holeEl.addEventListener("animationiteration", () => {

    var newPos = -(Math.floor((Math.random() * MAX_NUM)) + 34);
    holeEl.style.top = newPos + "%";

    console.log(newPos);

    counter++;
});


setInterval(function(){
    let playerTop = 
        parseInt(window.getComputedStyle(playerEl).getPropertyValue("top"));

    if(jumping == 0){
        playerEl.style.top = (playerTop + 4) + "px";
    }

    var pipeLeft = parseInt(window.getComputedStyle(pipeEl).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(holeEl).getPropertyValue("top"));
    var pTop = -(canvas.style.height - playerTop);

    if((playerTop>480)||((pipeLeft < 40)&&(pipeLeft>-50)&&((pTop<holeTop)||(pTop>holeTop + holeTop.height)))){
        
        alert("Game over. Score: " +(counter-1) + ". Refresh siden for å prøve på nytt.");
        playerEl.style.top = 100 + "px";
        counter=0;
    }

}, 10);



function Jump(){
    
    jumping = 1;
    let jumpCount = 0;

    var jumpInterval;
    var jumpInterval = setInterval(function(){
        let playerTop = 
            parseInt(window.getComputedStyle(playerEl).getPropertyValue("top"));
        
            if((playerTop>6)&&(jumpCount<15)){
            playerEl.style.top = (playerTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }

        jumpCount++;
    
    },7);
}
