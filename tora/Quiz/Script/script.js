let poeng=0;
let poengEl = document.getElementById("idPoeng");

let spm1el = document.getElementById("spm1")
let spm2el = document.getElementById("spm2")
let spm3el = document.getElementById("spm3")
let spm4el = document.getElementById("spm4")
let spm5el =document.getElementById("spm5")

let neste1el = document.getElementById("neste1")
let neste2el = document.getElementById("neste2")
let neste3el = document.getElementById("neste3")
let fullførEl =document.getElementById("fullfør")

let sluttpoengEl =document.getElementById("sluttpoeng")


let bId = document.getElementById("b")
bId.innerHTML = "Velkommen " + localStorage.lagretNavnForQuiz1

spm1el.style.display="block"

let knapp1aEl =document.getElementById("1a");
knapp1aEl.addEventListener("click",feil1a)
function feil1a() {
    knapp1aEl.innerHTML="feil"
    knapp1aEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp1bEl.style.backgroundColor="rgb(87, 255, 124)"
    neste1el.style.display = "inline-block";
    knapp1aEl.removeEventListener("click",feil1a)
    knapp1bEl.removeEventListener("click",riktig1b)
    knapp1cEl.removeEventListener("click",feil1c)
    knapp1dEl.removeEventListener("click",feil1d)
}

let knapp1bEl =document.getElementById("1b");
knapp1bEl.addEventListener("click",riktig1b)
function riktig1b() {
    knapp1bEl.innerHTML="riktig"
    knapp1bEl.style.backgroundColor="rgb(87, 255, 124)"
    poeng ++;
    poengEl.innerHTML = "Poeng: " + poeng + "av 4";
    neste1el.style.display = "inline-block";
    knapp1aEl.removeEventListener("click",feil1a)
    knapp1bEl.removeEventListener("click",riktig1b)
    knapp1cEl.removeEventListener("click",feil1c)
    knapp1dEl.removeEventListener("click",feil1d)
}

let knapp1cEl =document.getElementById("1c");
knapp1cEl.addEventListener("click",feil1c)
function feil1c() {
    knapp1cEl.innerHTML="feil"
    knapp1cEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp1bEl.style.backgroundColor="rgb(87, 255, 124)"
    neste1el.style.display = "inline-block";
    knapp1aEl.removeEventListener("click",feil1a)
    knapp1bEl.removeEventListener("click",riktig1b)
    knapp1cEl.removeEventListener("click",feil1c)
    knapp1dEl.removeEventListener("click",feil1d)
}

let knapp1dEl =document.getElementById("1d");
knapp1dEl.addEventListener("click",feil1d)
function feil1d() {
    knapp1dEl.innerHTML="feil"
    knapp1dEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp1bEl.style.backgroundColor="rgb(87, 255, 124)"
    neste1el.style.display = "inline-block";
    knapp1aEl.removeEventListener("click",feil1a)
    knapp1bEl.removeEventListener("click",riktig1b)
    knapp1cEl.removeEventListener("click",feil1c)
    knapp1dEl.removeEventListener("click",feil1d)
}


let knapp2aEl =document.getElementById("2a");
knapp2aEl.addEventListener("click",feil2a)
function feil2a() {
    knapp2aEl.innerHTML="feil"
    knapp2aEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp2dEl.style.backgroundColor="rgb(87, 255, 124)" 
    neste2el.style.display = "inline-block";
    knapp2aEl.removeEventListener("click",feil2a)
    knapp2bEl.removeEventListener("click",feil2b)
    knapp2cEl.removeEventListener("click",feil2c)
    knapp2dEl.removeEventListener("click",riktig2d)                  
}

let knapp2bEl =document.getElementById("2b");
knapp2bEl.addEventListener("click",feil2b)
function feil2b() {
    knapp2bEl.innerHTML="feil"
    knapp2bEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp2dEl.style.backgroundColor="rgb(87, 255, 124)"
    neste2el.style.display = "inline-block";
    knapp2aEl.removeEventListener("click",feil2a)
    knapp2bEl.removeEventListener("click",feil2b)
    knapp2cEl.removeEventListener("click",feil2c)
    knapp2dEl.removeEventListener("click",riktig2d)
}

let knapp2cEl =document.getElementById("2c");
knapp2cEl.addEventListener("click",feil2c)
function feil2c() {
    knapp2cEl.innerHTML="feil"
    knapp2cEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp2dEl.style.backgroundColor="rgb(87, 255, 124)"
    neste2el.style.display = "inline-block";
    knapp2aEl.removeEventListener("click",feil2a)
    knapp2bEl.removeEventListener("click",feil2b)
    knapp2cEl.removeEventListener("click",feil2c)
    knapp2dEl.removeEventListener("click",riktig2d)
}

let knapp2dEl =document.getElementById("2d");
knapp2dEl.addEventListener("click",riktig2d)
function riktig2d() {
    knapp2dEl.innerHTML="riktig"
    knapp2dEl.style.backgroundColor="rgb(87, 255, 124)"
    poeng ++;
    poengEl.innerHTML="poeng: "+poeng+" av 4"
    neste2el.style.display = "inline-block";
    knapp2aEl.removeEventListener("click",feil2a)
    knapp2bEl.removeEventListener("click",feil2b)
    knapp2cEl.removeEventListener("click",feil2c)
    knapp2dEl.removeEventListener("click",riktig2d)
}


let knapp3aEl =document.getElementById("3a");
knapp3aEl.addEventListener("click",feil3a)
function feil3a() {
    knapp3aEl.innerHTML="feil"
    knapp3aEl.style.backgroundColor="rgb(255, 72, 72)"  
    knapp3bEl.style.backgroundColor="rgb(87, 255, 124)"
    neste3el.style.display = "inline-block";
    knapp3aEl.removeEventListener("click",feil3a)
    knapp3bEl.removeEventListener("click",riktig3b)
    knapp3cEl.removeEventListener("click",feil3c)
    knapp3dEl.removeEventListener("click",feil3d)        
}

let knapp3bEl =document.getElementById("3b");
knapp3bEl.addEventListener("click",riktig3b)
function riktig3b() {
   knapp3bEl.innerHTML="riktig"
   knapp3bEl.style.backgroundColor="rgb(87, 255, 124)"
   poeng ++;
   poengEl.innerHTML="poeng: "+poeng+" av 4"
   neste3el.style.display = "inline-block";
   knapp3aEl.removeEventListener("click",feil3a)
    knapp3bEl.removeEventListener("click",riktig3b)
    knapp3cEl.removeEventListener("click",feil3c)
    knapp3dEl.removeEventListener("click",feil3d)
}

let knapp3cEl =document.getElementById("3c");
knapp3cEl.addEventListener("click",feil3c)
function feil3c() {
    knapp3cEl.innerHTML="feil"
    knapp3cEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp3bEl.style.backgroundColor="rgb(87, 255, 124)"
    neste3el.style.display = "inline-block";
    knapp3aEl.removeEventListener("click",feil3a)
    knapp3bEl.removeEventListener("click",riktig3b)
    knapp3cEl.removeEventListener("click",feil3c)
    knapp3dEl.removeEventListener("click",feil3d)
}

let knapp3dEl =document.getElementById("3d");
knapp3dEl.addEventListener("click",feil3d)
function feil3d() {
    knapp3dEl.innerHTML="feil"
    knapp3dEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp3bEl.style.backgroundColor="rgb(87, 255, 124)"
    neste3el.style.display = "inline-block";
    knapp3aEl.removeEventListener("click",feil3a)
    knapp3bEl.removeEventListener("click",riktig3b)
    knapp3cEl.removeEventListener("click",feil3c)
    knapp3dEl.removeEventListener("click",feil3d)
}

let knapp4aEl =document.getElementById("4a");
knapp4aEl.addEventListener("click",feil4a)
function feil4a() {
    knapp4aEl.innerHTML="feil"
    knapp4aEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp4cEl.style.backgroundColor="rgb(87, 255, 124)"
    fullførEl.style.display = "inline-block";
    knapp4aEl.removeEventListener("click",feil4a)
    knapp4bEl.removeEventListener("click",feil4b)
    knapp4cEl.removeEventListener("click",riktig4c)
    knapp4dEl.removeEventListener("click",feil4d)
}

let knapp4bEl =document.getElementById("4b");
knapp4bEl.addEventListener("click",feil4b)
function feil4b() {
    knapp4bEl.innerHTML="feil"
    knapp4bEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp4cEl.style.backgroundColor="rgb(87, 255, 124)"
    fullførEl.style.display = "inline-block";
    knapp4aEl.removeEventListener("click",feil4a)
    knapp4bEl.removeEventListener("click",feil4b)
    knapp4cEl.removeEventListener("click",riktig4c)
    knapp4dEl.removeEventListener("click",feil4d)
}

let knapp4cEl =document.getElementById("4c");
knapp4cEl.addEventListener("click",riktig4c)
function riktig4c() {
    knapp4cEl.innerHTML="riktig"
    knapp4cEl.style.backgroundColor="rgb(87, 255, 124)"
    poeng ++;
    poengEl.innerHTML="poeng: "+poeng+" av 4"
    fullførEl.style.display = "inline-block";
    knapp4aEl.removeEventListener("click",feil4a)
    knapp4bEl.removeEventListener("click",feil4b)
    knapp4cEl.removeEventListener("click",riktig4c)
    knapp4dEl.removeEventListener("click",feil4d)
}

let knapp4dEl =document.getElementById("4d");
knapp4dEl.addEventListener("click",feil4d)
function feil4d() {
    knapp4dEl.innerHTML="feil"
    knapp4dEl.style.backgroundColor="rgb(255, 72, 72)"
    knapp4cEl.style.backgroundColor="rgb(87, 255, 124)"
    fullførEl.style.display = "inline-block";
    knapp4aEl.removeEventListener("click",feil4a)
    knapp4bEl.removeEventListener("click",feil4b)
    knapp4cEl.removeEventListener("click",riktig4c)
    knapp4dEl.removeEventListener("click",feil4d)
}



neste1el.addEventListener("click",neste1)
function neste1() {
    neste1el.style.display = "none"
    spm1el.style.display = "none"
    spm2el.style.display = "block"
}
neste2el.addEventListener("click",neste2)
function neste2() {
    neste2el.style.display = "none"
    spm2el.style.display = "none"
    spm3el.style.display = "block"
}
neste3el.addEventListener("click",neste3)
function neste3() {
    neste3el.style.display = "none"
    spm3el.style.display = "none"
    spm4el.style.display = "block"
}
fullførEl.addEventListener("click",fullfør)
function fullfør() {
    spm4el.style.display ="none"
    fullførEl.style.display = "none"
    sluttpoengEl.innerHTML = "Du fikk " + poeng + " av 4 poeng, bra jobba!" 
    spm5el.style.display = "block"
}


/*
let scoreyesEl = document.getElementById("scoreyes")
let scoreEl = document.getElementById("score")
let noscoreEl = document.getElementById("noscore")
let scorenoEl = document.getElementById("scoreno")
sluttpoeng3El.style.display="none"
sluttpoeng2El.style.display="none"


scoreyesEl.addEventListener("click",scoreyes)
function scoreyes() {
    console.log("hei",poeng,sluttpoeng2El)
    spm5el.style.display = "none"
    sluttpoeng2El.innerHTML = "Du fikk " + poeng + " av 4 poeng, bra jobba!"  
    sluttpoeng2El,style.display="block"
    scoreEl.style.display = "block"
}


scorenoEl.addEventListener("click",scoreno)
function scoreno() {
    spm5el.style.display = "none"
    sluttpoeng3El.style.display="block"
    sluttpoeng3El.innerHTML = "Du fikk " + poeng + " av 4 poeng, bra jobba!" 
    noscoreEl.style.display = "block"
}
*/

