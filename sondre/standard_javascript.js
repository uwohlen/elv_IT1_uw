let knapp_ok_btnEl = document.getElementById("id_ok_btn");
let slett_cookies_btnEl =document.getElementById("id_slett_cookies_btn");
let cookies_pop_upEl =document.getElementById("id_cookies");
let skrivnavn = document.getElementById("id_navn_skriv")
let navnskriv_inputEl = document.getElementById("id_navnskriv_input")
let navnEl = document.getElementById("idNavn")

navnskriv_inputEl.addEventListener("keydown",lagrefunk)


knapp_ok_btnEl.addEventListener("click", cookies_ok_funk)
slett_cookies_btnEl.addEventListener("click",slett_funk)

window.onload = function() {
    setTimeout(() => {navnskriv_inputEl.focus();}, 250);
}


if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    slett_cookies_btnEl.style.display = "inline-block";
    cookies_pop_upEl.style.display ="none";
    if (localStorage.getItem("lagretNavnForQuiz1") !== null) {
        navnEl.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
    }
    else{
        navnEl.innerHTML="Navn ikke kjent"
        skrivnavn.style.display ="block";
    }
}
else {
    slett_cookies_btnEl.style.display = "none";
    cookies_pop_upEl.style.display ="block";
}

function slett_funk() {
    localStorage.clear();
    cookies_pop_upEl.style.display = "block"
    slett_cookies_btnEl.style.display ="none"
    skrivnavn.style.display ="block";
    location.reload();
}

function cookies_ok_funk(){
    console.log("ja")
    cookies_pop_upEl.style.display = "none";
    slett_cookies_btnEl.style.display ="inline-block";
    localStorage.setItem("cookiesGodkjentForIndex1", "Ja")
    location.reload();
}

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    console.log("ok")
}

function lagrefunk(event) {
    if (event.keyCode === 13) {
        localStorage.setItem("lagretNavnForQuiz1",navnskriv_inputEl.value);
        navnEl.innerHTML=" "+ localStorage.getItem("lagretNavnForQuiz1");
        skrivnavn.style.display ="none";
    }
}