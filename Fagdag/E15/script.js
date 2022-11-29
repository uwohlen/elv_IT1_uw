points = 0;
document.getElementById("poeng").innerHTML = points;
resapwn = false;
localStorage.levelIT1fagdag = "E15";
let navnEl = document.getElementById("idNavn");
navnEl.addEventListener("keydown",navnLagre);
function navnLagre(event) {
    if (event.keyCode === 13) {
        console.log(event.keyCode)
        localStorage.setItem("navnIT1fagdag",navnEl.value);
    }
}

var karakter = document.getElementById("karakter");
var block = document.getElementById("block");
function jump(){
    if(karakter.classList != "animate"){
       karakter.classList.add("animate");
    }
    setTimeout(function(){
       karakter.classList.remove("animate");
    },500);
} 

var checkDead = setInterval(function spill(){
    var karakterTop = parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    var blockLeft=
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (points > 4) {
        document.getElementById("tap").innerHTML = "Du har vunnet! Du kan spille neste spill.";
    }
    if(blockLeft<40 && blockLeft>0 &&
    karakterTop>=260){
            block.style.animation ="none";
            block.style.display ="none";
            document.getElementById("tap").innerHTML = "Du taper";

            if (points > 5) {
                localStorage.setItem("navnIT1fagdag",navnEl.value);
                localStorage.poengIT1fagdag += 5;
            }
            else {
                localStorage.poengIT1fagdag += points;

            }

        }
    else {
        if (blockLeft < 40 && !respawn) {
            points+=1;
            document.getElementById("poeng").innerHTML = points;
            respawn = true;
            console.log(points)

        }
        else if (blockLeft > 100) {
            respawn = false;
        }
    }
},20);


function startfunk() {

    block.style.animation = "block 1s infinite linear";
    block.style.top = "260px";
    block.style.left = "960px"; 
    block.style.display = "block";
    points = 0;
    document.getElementById("poeng").innerHTML = points;
    document.getElementById("tap").innerHTML = "";
    
}


/*
let start = document.getElementById("start");
    start.addEventListener("click", startfunk); //navnet til denne funksjonen
    function startfunk(){

             
        var checkDead = setInterval(function(){
            var karakterTop =
            parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
            var blockLeft=
            parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft<40 && blockLeft>0 &&
            karakterTop>=260){
                    block.style.animation ="none";
                    block.style.display ="none";
                    alert("du taper.");
                }

        },20);
    }

 
//addEventListener("kewdown", jump)*/




