let poeng =0 ;
let antsvar = 0;
let i =0

let knappokEl = document.getElementById("ok");
let skrivnavn = document.getElementById("navnditt");
let navnwrite = document.getElementById("navnskriv");
let navn0 = document.getElementById("idNavn0");
let navn1 = document.getElementById("idNavn1");
let knappslett = document.getElementById("btnslett");
let cookies = document.getElementById("cookies");
let poengEl = document.getElementById("idPoeng");
let poeng1El = document.getElementById("poeng1")
let finalscore= document.getElementById("score");
let scoreboard = document.getElementById("idol")
let frage = document.getElementById("nscore");
let ol = document.getElementById("idol");
let done =document.getElementById("ferdig1")
let htmltekst = "";
let navnli = ["trine","ole"]
let poengli = [1,3]


let knappw1El = document.getElementById("idw1");
let knappw2El = document.getElementById("idw2");
let knappw3El = document.getElementById("idw3");
let knappw4El = document.getElementById("idw4");
let knappw5El = document.getElementById("idw5");
let knappw6El = document.getElementById("idw6");
let knappw7El = document.getElementById("idw7");
let knappw8El = document.getElementById("idw8");
let knappw9El = document.getElementById("idw9");
let knappw10El = document.getElementById("idw10");
let knappw11El = document.getElementById("idw11");
let knappw12El = document.getElementById("idw12");

let knappr1El = document.getElementById("idr1");
let knappr2El = document.getElementById("idr2");
let knappr3El = document.getElementById("idr3");
let knappr4El = document.getElementById("idr4");


navnwrite.addEventListener("keydown",lagrefunk)
knappokEl.addEventListener("click", cookies_ok)
knappslett.addEventListener("click",slett)
done.addEventListener("click",ferdig)

while (i < navnli.length){
    ol.innerHTML = htmltekst;
    htmltekst += "<li>"+navnli[i]+ ":"+ poengli[i] + "poeng</li>";
    i++;
}

if (localStorage.getItem("lagretNavnForQuiz1") !== null) {
    navn0.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
}
else{
    navn.innerHTML="Navn ikke kjent"
}

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    knappslett.style.display = "inline-block";
    cookies.style.display ="none";
    knappw1El.addEventListener("click",feil)
    knappw2El.addEventListener("click",feil1)
    knappw3El.addEventListener("click",feil2)
    knappw4El.addEventListener("click",feil3)
    knappw5El.addEventListener("click",feil4)
    knappw6El.addEventListener("click",feil5)
    knappw7El.addEventListener("click",feil6)
    knappw8El.addEventListener("click",feil7)
    knappw9El.addEventListener("click",feil8)
    knappw10El.addEventListener("click",feil9)
    knappw11El.addEventListener("click",feil10)
    knappw12El.addEventListener("click",feil11)

    knappr1El.addEventListener("click",riktig)
    knappr2El.addEventListener("click",riktig1)
    knappr3El.addEventListener("click",riktig2)
    knappr4El.addEventListener("click",riktig3)
}
else {
    knappslett.style.display = "none";
    cookies.style.display ="block";
}

function cookies_ok(){
    cookies.style.display = "none";
    skrivnavn.style.display ="block";
    knappslett.style.display ="inline-block";
    localStorage.setItem("cookiesGodkjentForIndex1","Ja");
    knappw1El.addEventListener("click",feil)
    knappw2El.addEventListener("click",feil1)
    knappw3El.addEventListener("click",feil2)
    knappw4El.addEventListener("click",feil3)
    knappw5El.addEventListener("click",feil4)
    knappw6El.addEventListener("click",feil5)
    knappw7El.addEventListener("click",feil6)
    knappw8El.addEventListener("click",feil7)
    knappw9El.addEventListener("click",feil8)
    knappw10El.addEventListener("click",feil9)
    knappw11El.addEventListener("click",feil10)
    knappw12El.addEventListener("click",feil11)

    knappr1El.addEventListener("click",riktig)
    knappr2El.addEventListener("click",riktig1)
    knappr3El.addEventListener("click",riktig2)
    knappr4El.addEventListener("click",riktig3)
}

function ferdig(){
    done.style.display="none";
    frage.style.display="none";
    finalscore.style.display="block";
    scoreboard.style.display="block";
    navn1.innerHTML=" "+localStorage.getItem("lagretNavnForQuiz1");
    poeng1El.innerHTML=" "+poeng;
}

function lagrefunk(event) {
    if (event.keyCode === 13) {
        localStorage.setItem("lagretNavnForQuiz1",navnwrite.value);
        navn0.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
        skrivnavn.style.display ="none";
    }
}

function slett() {
    localStorage.removeItem("cookiesGodkjentForIndex1");
    localStorage.removeItem("lagretNavnForQuiz1");
    cookies.style.display = "block"
    knappslett.style.display ="none"
    skrivnavn.style.display ="none";
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappw10El.removeEventListener("click",feil9)
    knappw11El.removeEventListener("click",feil10)
    knappw12El.removeEventListener("click",feil11)

    knappr1El.removeEventListener("click",riktig)
    knappr2El.removeEventListener("click",riktig1)
    knappr3El.removeEventListener("click",riktig2)
    knappr4El.removeEventListener("click",riktig3)
}

function feil() {
    antsvar+=1;
    knappw1El.innerHTML = "Feil";
    knappw1El.style.backgroundColor="red"
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappr1El.removeEventListener("click",riktig)
}

function feil1() {
    antsvar+=1;
    knappw2El.innerHTML = "Feil";
    knappw2El.style.backgroundColor="red"
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappwr1El.removeEventListener("click",riktig)
}


function feil2() {
    antsvar+=1;
    knappw3El.innerHTML = "Feil";
    knappw3El.style.backgroundColor="red"
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappr1El.removeEventListener("click",riktig)
}


function feil3() {
    antsvar+=1;
    knappw4El.innerHTML = "Feil";
    knappw4El.style.backgroundColor="red"
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappr2El.removeEventListener("click",riktig1)
}


function feil4() {
    antsvar+=1;
    knappw5El.innerHTML = "Feil";
    knappw5El.style.backgroundColor="red"
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappr2El.removeEventListener("click",riktig1)
}


function feil5() {
    antsvar+=1;
    knappw6El.innerHTML = "Feil";
    knappw6El.style.backgroundColor="red"
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappr2El.removeEventListener("click",riktig1)
}


function feil6() {
    antsvar+=1;
    knappw7El.innerHTML = "Feil";
    knappw7El.style.backgroundColor="red"
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappr3El.removeEventListener("click",riktig2)
}


function feil7() {
    antsvar+=1;
    knappw8El.innerHTML = "Feil";
    knappw8El.style.backgroundColor="red"
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappr3El.removeEventListener("click",riktig2)
}


function feil8() {
    antsvar+=1;
    knappw9El.innerHTML = "Feil";
    knappw9El.style.backgroundColor="red"
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappr3El.removeEventListener("click",riktig2)
}


function feil9() {
    antsvar+=1;
    knappw10El.innerHTML = "Feil";
    knappw10El.style.backgroundColor="red"
    knappw10El.removeEventListener("click",feil9)
    knappw11El.removeEventListener("click",feil10)
    knappw12El.removeEventListener("click",feil11)
    knappr4El.removeEventListener("click",riktig3)
}


function feil10() {
    antsvar+=1;
    knappw11El.innerHTML = "Feil";
    knappw11El.style.backgroundColor="red"
    knappw10El.removeEventListener("click",feil9)
    knappw11El.removeEventListener("click",feil10)
    knappw12El.removeEventListener("click",feil11)
    knappr4El.removeEventListener("click",riktig3)
}


function feil11() {
    antsvar+=1;
    knappw12El.innerHTML = "Feil"; 
    knappw12El.style.backgroundColor="red"
    knappw10El.removeEventListener("click",feil9)
    knappw11El.removeEventListener("click",feil10)
    knappw12El.removeEventListener("click",feil11)
    knappr4El.removeEventListener("click",riktig3)
}           


function riktig() {
    knappr1El.innerHTML = "Riktig"; 
    knappr1El.style.backgroundColor="green"
    poeng +=1;
    antsvar+=1;
    poengEl.innerHTML = "Poeng: " + poeng;
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappr1El.removeEventListener("click",riktig)
}           


function riktig1() {
    knappr2El.innerHTML = "Riktig";
    knappr2El.style.backgroundColor="green"
    poeng +=1;
    antsvar+=1;
    poengEl.innerHTML = "Poeng: " + poeng;
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappr2El.removeEventListener("click",riktig1)
}            


function riktig2() {
    knappr3El.innerHTML = "Riktig";
    knappr3El.style.backgroundColor="green"
    poeng +=1;
    antsvar+=1;
    poengEl.innerHTML = "Poeng: " + poeng;
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappr3El.removeEventListener("click",riktig2)
} 


function riktig3() {
    knappr4El.innerHTML = "Riktig";
    knappr4El.style.backgroundColor="green"
    poeng +=1; 
    antsvar +=1;
    poengEl.innerHTML = "Poeng: " + poeng;
    knappw10El.removeEventListener("click",feil9)
    knappw11El.removeEventListener("click",feil10)
    knappw12El.removeEventListener("click",feil11)
    knappr4El.removeEventListener("click",riktig3)
    }