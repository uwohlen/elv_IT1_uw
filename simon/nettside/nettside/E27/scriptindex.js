var character = document.getElementById("character");
var block = document.getElementById("block");
var nextknapp = document.getElementById("neste");
var dead = false;

function jump(){
    if(character.classLisst !="animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        dead = true;
        block.style.animation ="none";
        block.style.display ="none";
        alert("get rekt, last inn siden på nytt for å prøve igjen.");
    }
},10);
setTimeout(function(){
    if(!dead) {
        nextknapp.classList.remove("hide");
    }   
},5000);


//nextknapp.classList.remove("hide");

nextknapp.onclick = function() {
    window.location.href = './E28/index.html'
}

 