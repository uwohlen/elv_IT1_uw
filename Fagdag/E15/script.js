
var karakter = 
document.getElementById("karakter");
var block = document.getElementById("block");
function jump(){
    if(karakter.classList != "animate"){
       karakter.classList.add("animate");
    }
    setTimeout(function(){
       karakter.classList.remove("animate");
    },500);
} 

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


 
//addEventListener("kewdown", jump)



