const DIV_LAGRING_SPORSMAL = document.getElementById("lagring-sporsmal");
const BUTTON_LAGRING_GREIT = document.getElementById("lagring-greit");

const DIV_OM_DEG = document.getElementById("om-deg");
const INPUT_NAVN_INN = document.getElementById("navn-inn");

const DIV_VELKOMMEN = document.getElementById("velkommen");
const SPAN_NAVN_UT = document.getElementById("navn-ut");

const BUTTON_SLETT_COOKIES = document.getElementById("slett-cookies");

BUTTON_LAGRING_GREIT.addEventListener("click", lagring_greit);
INPUT_NAVN_INN.addEventListener("keypress", navn_inn);
BUTTON_SLETT_COOKIES.addEventListener("click", slett_cookies);

function slett_cookies() {
    localStorage.clear();
    oppdater_navn();
}

function lagring_greit() {
    DIV_LAGRING_SPORSMAL.style.display = "none";
    DIV_OM_DEG.style.display = "unset";
    localStorage.setItem("minNettsideLagringGreit", "1");
}

function navn_inn(event) {
    if (event.keyCode === 13 && INPUT_NAVN_INN.value.length > 1) {
        localStorage.setItem("minNettsideNavn", INPUT_NAVN_INN.value);
        oppdater_navn();
    }
}

function skjul() {
    DIV_LAGRING_SPORSMAL.style.display = "none";
    DIV_OM_DEG.style.display = "none";
    DIV_VELKOMMEN.style.display = "none";
}

function oppdater_navn() {
    let lagring = hent_lagring_greit();
    let navn = hent_navn(", ", "!");
    skjul();
    if (!lagring) {
        DIV_LAGRING_SPORSMAL.style.display = "unset";
        DIV_BILDE.innerHTML = ""; //Fjerner bildet
        return;
    }
    if (navn === "") {
        DIV_OM_DEG.style.display = "unset";
    } else {
        DIV_VELKOMMEN.style.display = "unset";
        SPAN_NAVN_UT.innerHTML = navn;
    }
}

generer_bilde();
oppdater_navn();
