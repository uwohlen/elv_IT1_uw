let knappokEl = document.getElementById("ok");
let skrivnavn = document.getElementById("navnditt");
let navnwrite = document.getElementById("navnskriv");
let navn = document.getElementById("idNavn");
let knappslett =document.getElementById("btnslett");
let cookiesup =document.getElementById("cookies");

navnwrite.addEventListener("keydown",lagrefunk)
knappokEl.addEventListener("click", cookies_ok)
knappslett.addEventListener("click",slett)

function cookies_ok(){
    cookiesup.style.display = "none";
    skrivnavn.style.display ="block";
    knappslett.style.display ="inline-block";
}

function lagrefunk(event) {
    if (event.keyCode === 13) {
        localStorage.setItem("lagretNavnForQuiz1",navnwrite.value);
        navn.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
        skrivnavn.style.display ="none";
    }
}

if (localStorage.getItem("lagretNavnForQuiz1") !== null) {
    navn.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
}
else{
    navn.innerHTML="Navn ikke kjent"
}

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    knappslett.style.display = "inline-block";
    cookiesup.style.display ="none";
}
else {
    knappslett.style.display = "none";
    cookiesup.style.display ="block";
}


function slett() {
    localStorage.removeItem("cookiesGodkjentForIndex1");
    localStorage.removeItem("lagretNavnForQuiz1");
    cookiesup.style.display = "block"
    knappslett.style.display ="none"
    skrivnavn.style.display ="none";
}