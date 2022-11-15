let poeng = 0
let ScoreEL = document.getElementById("Poeng")
let CookieDiv = document.getElementById("fixed")
let cookies = document.getElementById("KnappTopp")
let navnEl = document.getElementById("idNavn");
let NavnOsk = document.getElementById("NavnValue")

var cookiesEl = document.getElementsByClassName("Borte2")
var Navn = document.getElementsByClassName("Borte")

cookies.addEventListener("click", cookiesF)
navnEl.addEventListener("keydown", lagrefunk);


//Skjuler Cookies
function cookiesF() {
    console.log("hello")
    for (var i = 0; i < Navn.length; i++) {
        Navn[i].style.display = "inline-block";
    }
    for (var i = 0; i < cookiesEl.length; i++) {
        cookiesEl[i].style.display = "none";
    }
}

//Lagre Navn + fjerne Div
function lagrefunk(event) {
    console.log(navnEl.value);
    if (event.keyCode === 13) {
        if (navnEl.value !== null) {
            NavnOsk.innerHTML = " " + navnEl.value
        }
        navnEl.value = "";
        CookieDiv.style.display = "none"

    }
}


//Spørsmål 1
let knapp1 = document.getElementById("0");
let knapp2 = document.getElementById("1");
let knapp3 = document.getElementById("2");

knapp1.addEventListener("click", svarRett)
knapp2.addEventListener("click", svarFeil)
knapp3.addEventListener("click", svarFeil2)

function svarFeil() {
    knapp2.style.backgroundColor = "#FF5252"
    knapp1.style.backgroundColor = "#33FF6E"
    knapp2.removeEventListener("click", svarFeil)
    knapp3.removeEventListener("click", svarFeil2)
    knapp1.removeEventListener("click", svarRett)
} svarRett
function svarFeil2() {
    knapp3.style.backgroundColor = "#FF5252"
    knapp1.style.backgroundColor = "#33FF6E"
    knapp2.removeEventListener("click", svarFeil)
    knapp3.removeEventListener("click", svarFeil2)
    knapp1.removeEventListener("click", svarRett)
}
function svarRett() {
    poeng += 1;
    knapp1.style.backgroundColor = "#33FF6E"
    knapp2.removeEventListener("click", svarFeil)
    knapp3.removeEventListener("click", svarFeil2)
    knapp1.removeEventListener("click", svarRett)
    ScoreEL.innerHTML = "Poeng: " + poeng;

}

//spørsmål 2
let knapp12 = document.getElementById("02");
let knapp22 = document.getElementById("12");
let knapp32 = document.getElementById("22");

knapp12.addEventListener("click", svarFeil12)
knapp22.addEventListener("click", svarFeil22)
knapp32.addEventListener("click", svarRett2)

function svarFeil12() {
    knapp12.style.backgroundColor = "#FF5252"
    knapp32.style.backgroundColor = "#33FF6E"
    knapp12.removeEventListener("click", svarFeil12)
    knapp22.removeEventListener("click", svarFeil22)
    knapp32.removeEventListener("click", svarRett2)
}
function svarFeil22() {
    knapp22.style.backgroundColor = "#FF5252"
    knapp32.style.backgroundColor = "#33FF6E"
    knapp12.removeEventListener("click", svarFeil12)
    knapp22.removeEventListener("click", svarFeil22)
    knapp32.removeEventListener("click", svarRett2)
}
function svarRett2() {
    poeng += 1;
    knapp32.style.backgroundColor = "#33FF6E"
    knapp12.removeEventListener("click", svarFeil12)
    knapp22.removeEventListener("click", svarFeil22)
    knapp32.removeEventListener("click", svarRett2)
    ScoreEL.innerHTML = "Poeng: " + poeng;

}

//spørsmål 3
let knapp13 = document.getElementById("03");
let knapp23 = document.getElementById("13");
let knapp33 = document.getElementById("23");

knapp13.addEventListener("click", svarFeil3)
knapp23.addEventListener("click", svarFeil23)
knapp33.addEventListener("click", svarRett3)

function svarFeil3() {
    knapp13.style.backgroundColor = "#FF5252"
    knapp33.style.backgroundColor = "#33FF6E"
    knapp13.removeEventListener("click", svarFeil3)
    knapp23.removeEventListener("click", svarFeil23)
    knapp33.removeEventListener("click", svarRett3)
}
function svarFeil23() {
    knapp23.style.backgroundColor = "#FF5252"
    knapp33.style.backgroundColor = "#33FF6E"
    knapp13.removeEventListener("click", svarFeil3)
    knapp23.removeEventListener("click", svarFeil23)
    knapp33.removeEventListener("click", svarRett3)
}
function svarRett3() {
    poeng += 1;
    knapp33.style.backgroundColor = "#33FF6E"
    knapp13.removeEventListener("click", svarFeil3)
    knapp23.removeEventListener("click", svarFeil23)
    knapp33.removeEventListener("click", svarRett3)
    ScoreEL.innerHTML = "Poeng: " + poeng;
}


//spørsmål 4
let knapp14 = document.getElementById("04");
let knapp24 = document.getElementById("14");
let knapp34 = document.getElementById("24");

knapp14.addEventListener("click", svarFeil4)
knapp24.addEventListener("click", svarRett4)
knapp34.addEventListener("click", svarFeil24)

function svarFeil4() {
    knapp14.style.backgroundColor = "#FF5252"
    knapp24.style.backgroundColor = "#33FF6E"
    knapp14.removeEventListener("click", svarFeil4)
    knapp34.removeEventListener("click", svarFeil24)
    knapp24.removeEventListener("click", svarRett4)
}
function svarFeil24() {
    knapp24.style.backgroundColor = "#33FF6E"
    knapp34.style.backgroundColor = "#FF5252"
    knapp14.removeEventListener("click", svarFeil4)
    knapp34.removeEventListener("click", svarFeil24)
    knapp24.removeEventListener("click", svarRett4)
}
function svarRett4() {
    poeng += 1;
    console.log(poeng)
    knapp24.style.backgroundColor = "#33FF6E"
    knapp14.removeEventListener("click", svarFeil4)
    knapp34.removeEventListener("click", svarFeil24)
    knapp24.removeEventListener("click", svarRett4)
    ScoreEL.innerHTML = "Poeng: " + poeng;
}