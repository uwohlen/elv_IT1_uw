let knapp_ok_btnEl = document.getElementById("id_ok_btn");
let skrivnavn = document.getElementById("id_navnditt");
let navnwrite = document.getElementById("navnskriv");
let navn = document.getElementById("idNavn");
let slett_cookies_btnEl =document.getElementById("id_slett_cookies_btn");
let cookies_pop_upEl =document.getElementById("id_cookies");

navnwrite.addEventListener("keydown",lagrefunk)
knapp_ok_btnEl.addEventListener("click", cookies_ok_funk)
slett_cookies_btnEl.addEventListener("click",slett_funk)

function cookies_ok_funk(){
    cookies_pop_upEl.style.display = "none";
    skrivnavn.style.display ="block";
    navnwrite.focus
    slett_cookies_btnEl.style.display ="inline-block";
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
    slett_cookies_btnEl.style.display = "inline-block";
    cookies_pop_upEl.style.display ="none";
}
else {
    slett_cookies_btnEl.style.display = "none";
    cookies_pop_upEl.style.display ="block";
}


function slett_funk() {
    localStorage.removeItem("cookiesGodkjentForIndex1");
    localStorage.removeItem("lagretNavnForQuiz1");
    cookies_pop_upEl.style.display = "block"
    slett_cookies_btnEl.style.display ="none"
    skrivnavn.style.display ="none";
}