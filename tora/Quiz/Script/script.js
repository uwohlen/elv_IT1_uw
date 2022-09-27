
let poeng=0;
let neste=0;
let spm=0;
let riktig=0;

let riktigSvarArray = document.getElementsByClassName("riktig");
let feilSvarArray = document.getElementsByClassName("feil");
let spmArray = document.getElementsByClassName("spm");
let nesteArray = document.getElementsByClassName("neste");

let poengEl = document.getElementById("idPoeng");
let sluttpoengEl =document.getElementById("sluttpoeng");

let bId = document.getElementById("b");
bId.innerHTML = "Velkommen " + localStorage.lagretNavnForQuiz1;

let knapper = false

spmArray[spm].style.display="block";

for (ele of riktigSvarArray) {
    ele.addEventListener("click",riktigSvar);
}
for(ele of feilSvarArray) {
    ele.addEventListener("click",feilSvar);
}
for (ele of nesteArray) {
    ele.addEventListener("click",nesteFunk)
}

function riktigSvar(event) {
    if (knapper===false) {
        event.target.innerHTML="riktig";
        event.target.style.backgroundColor="rgb(87, 255, 124)";
        poeng ++;
        poengEl.innerHTML = "Poeng: " + poeng + " av 4";
        nesteArray[neste].style.display="block"
        neste ++;
        riktig ++;
        spm ++;
    }
    knapper = true
}

function feilSvar(event) {
    if (knapper===false) {
        event.target.innerHTML="feil"
        event.target.style.backgroundColor="rgb(255, 72, 72)"
        riktigSvarArray[riktig].style.backgroundColor="rgb(87,255,124)"
        nesteArray[neste].style.display="block"
        neste ++;
        riktig ++;
        spm ++;
    }
    knapper = true
}

function nesteFunk(event) {
    event.target.style.display="none"
    spmArray[spm-1].style.display="none"
    spmArray[spm].style.display="block"
    knapper = false
    sluttpoengEl.innerHTML = "Du fikk " + poeng + " av 4 poeng, bra jobba!"       
}

