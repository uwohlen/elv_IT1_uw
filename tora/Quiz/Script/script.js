
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
    }
    knapper = true
}
function feilSvar(event) {
    if (knapper===false) {
        event.target.innerHTML="feil"
        event.target.style.backgroundColor="rgb(255, 72, 72)"
        riktigSvarArray[riktig].style.backgroundColor="rgb(87,255,124)"
        nesteArray[neste].style.display="block"
        
    }
    knapper = true
}
function nesteFunk(event) {
    neste ++;
    riktig ++;
    spm ++;
    if (neste+1 === nesteArray.length ) {
        document.getElementById("hjem").style.display="block"
        nesteArray[nesteArray.length - 1].style.display="block"
        if( localStorage.lagretNavn === "false") {
            nesteArray[nesteArray.length - 1].style.display="none"
        }
        
    }  
    event.target.style.display="none"
    spmArray[spm-1].style.display="none"
    spmArray[spm].style.display="block"
    knapper = false
    sluttpoengEl.innerHTML = "Du fikk " + poeng + " av 4 poeng, bra jobba!"     
    
}


let idol = document.getElementById("idol");
let navnArray = ["Tora","Nora","Mora"];
let poengArray= [10,6,5];
let i = 0;
let htmltext = "";

let highscoreEl = document.getElementById("highscore");
highscoreEl.addEventListener("click",highscoreFunk);

function highscoreFunk() {
    navnArray.push(localStorage.lagretNavnForQuiz1);
    poengArray.push(poeng); 
}

while (i < navnArray.length) {
    htmltext += "<li>" + navnArray[i] + ": " + poengArray[i] + " poeng</li>"
    i ++;

}

idol.innerHTML += htmltext;






