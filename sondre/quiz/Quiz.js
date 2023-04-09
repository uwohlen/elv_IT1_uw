let poeng =0 ;
let antsvar = 0;
let i =0

let navn0 = document.getElementById("idNavn0");
let navn1 = document.getElementById("idNavn1");
let cookies = document.getElementById("id_cookies");
let poengEl = document.getElementById("idPoeng");
let poeng1El = document.getElementById("poeng1")
let finalscore= document.getElementById("score");
let scoreboard = document.getElementById("idol")
let frage = document.getElementById("nscore");
let ol = document.getElementById("idol");
let done =document.getElementById("ferdig1")



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

navnskriv_inputEl.addEventListener("keydown",lagrefunk)
knapp_ok_btnEl.addEventListener("click", cookies_ok_funk)
slett_cookies_btnEl.addEventListener("click",slett_funk)

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
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

    done.addEventListener("click",ferdig)

    if (localStorage.getItem("lagretNavnForQuiz1") !== null) {
        navn0.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
    }
    else{
        navn0.innerHTML="Navn ikke kjent"
        skrivnavn.style.display ="block";
        
    }
}
else {
    slett_cookies_btnEl.style.display = "none";
    cookies.style.display ="block";
}

function cookies_ok_funk(){
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

    done.addEventListener("click",ferdig)

    skrivnavn.style.display="block";
}

function lagrefunk(event) {
    if (event.keyCode === 13) {
        localStorage.setItem("lagretNavnForQuiz1",navnskriv_inputEl.value);
        navn0.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
        skrivnavn.style.display ="none";
    }
}

function slett_funk() {
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
    
    knappw1El.innerHTML = "Feil";
    knappw1El.style.backgroundColor="red"
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappr1El.removeEventListener("click",riktig)
}

function feil1() {
    
    knappw2El.innerHTML = "Feil";
    knappw2El.style.backgroundColor="red"
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappr1El.removeEventListener("click",riktig)
}


function feil2() {
    
    knappw3El.innerHTML = "Feil";
    knappw3El.style.backgroundColor="red"
    knappw1El.removeEventListener("click",feil)
    knappw2El.removeEventListener("click",feil1)
    knappw3El.removeEventListener("click",feil2)
    knappr1El.removeEventListener("click",riktig)
}


function feil3() {
    
    knappw4El.innerHTML = "Feil";
    knappw4El.style.backgroundColor="red"
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappr2El.removeEventListener("click",riktig1)
}


function feil4() {
    
    knappw5El.innerHTML = "Feil";
    knappw5El.style.backgroundColor="red"
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappr2El.removeEventListener("click",riktig1)
}


function feil5() {
    
    knappw6El.innerHTML = "Feil";
    knappw6El.style.backgroundColor="red"
    knappw4El.removeEventListener("click",feil3)
    knappw5El.removeEventListener("click",feil4)
    knappw6El.removeEventListener("click",feil5)
    knappr2El.removeEventListener("click",riktig1)
}


function feil6() {
    
    knappw7El.innerHTML = "Feil";
    knappw7El.style.backgroundColor="red"
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappr3El.removeEventListener("click",riktig2)
}


function feil7() {
    
    knappw8El.innerHTML = "Feil";
    knappw8El.style.backgroundColor="red"
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappr3El.removeEventListener("click",riktig2)
}


function feil8() {
    
    knappw9El.innerHTML = "Feil";
    knappw9El.style.backgroundColor="red"
    knappw7El.removeEventListener("click",feil6)
    knappw8El.removeEventListener("click",feil7)
    knappw9El.removeEventListener("click",feil8)
    knappr3El.removeEventListener("click",riktig2)
}


function feil9() {
    
    knappw10El.innerHTML = "Feil";
    knappw10El.style.backgroundColor="red"
    knappw10El.removeEventListener("click",feil9)
    knappw11El.removeEventListener("click",feil10)
    knappw12El.removeEventListener("click",feil11)
    knappr4El.removeEventListener("click",riktig3)
}


function feil10() {
    
    knappw11El.innerHTML = "Feil";
    knappw11El.style.backgroundColor="red"
    knappw10El.removeEventListener("click",feil9)
    knappw11El.removeEventListener("click",feil10)
    knappw12El.removeEventListener("click",feil11)
    knappr4El.removeEventListener("click",riktig3)
}


function feil11() {
    
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

function sorterToArrays(poengli,navnli) {
    let temp1 = []; 
    let temp2 = [];

    antall = poengli.length

    let i = 0;

    while (i < antall) {
        let j = 0;
        let storst = poengli[j];
        let indeks = j;
        j++;
        while (j < poengli.length) {
            if (poengli[j] > storst) {
                storst = poengli[j];
                indeks = j;
            }
            j++;
        }
        temp1.push(storst); 
        temp2.push(navnli[indeks]);

        poengli.splice(indeks,1);
        navnli.splice(indeks,1);

        i++;
    }
    /* Bli kvitt dobble navn */
    return [temp1, temp2]
}

function ferdig(){
    let navn = "";
    let navneliste = [];
    let poengliste = [];
    let htmltekst = "";

    if (localStorage.getItem("lagretNavnForQuiz1") !== null) {
        navn = localStorage.getItem("lagretNavnForQuiz1");
    }
    
    if (localStorage.getItem("lagretHighScoreForQuiz1") === null) {
        navneliste.push(navn);
        poengliste.push(poeng);
        let resultat = [poengliste,navneliste];
        localStorage.setItem("lagretHighScoreForQuiz1",JSON.stringify(resultat)); 
    }
    else {
        let resultat = JSON.parse(localStorage.getItem("lagretHighScoreForQuiz1"));
        poengliste = resultat[0];
        navneliste = resultat[1];
        poengliste.push(poeng);
        navneliste.push(navn);
        resultat = sorterToArrays(poengliste,navneliste);
        poengliste = resultat[0];
        navneliste = resultat[1];
        localStorage.setItem("lagretHighScoreForQuiz1",JSON.stringify(resultat)); 
    }

    let i = 0;

    while (i < navneliste.length && i < 5) {
        htmltekst += "<li><span class='high'>" + navneliste[i] + "</span>:<span class='high'>" + poengliste[i] + "</span></li>";

        i++;
    }

    idol.innerHTML = htmltekst;

    done.style.display="none";
    frage.style.display="none";
    finalscore.style.display="block";
    scoreboard.style.display="block";
    navn1.innerHTML=" "+localStorage.getItem("lagretNavnForQuiz1");
    poeng1El.innerHTML=" "+poeng;
}

