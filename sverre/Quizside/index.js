const DIV_LAGRE_SPORSMAL = document.getElementById("lagre_sporsmal");
const BUTTON_LAGRE_GREIT = document.getElementById("lagre_greit");

const DIV_NAVN_SPORSMAL = document.getElementById("navn_sporsmal");
const INPUT_NAVN = document.getElementById("navn");

const DIV_VELKOMMEN_TILBAKE = document.getElementById("velkommen_tilbake");
const SPAN_NAVN_UT = document.getElementById("navn_ut");

const BUTTON_SLETT_COOKIES = document.getElementById("button_slett_cookies");
BUTTON_SLETT_COOKIES.addEventListener("click", slett_cookies);

function slett_cookies() {
    localStorage.clear();
    oppdater_navn();
}

function lagring_greit() {
    BUTTON_LAGRE_GREIT.removeEventListener("click", lagring_greit);
    DIV_LAGRE_SPORSMAL.style.display = "none";
    DIV_NAVN_SPORSMAL.style.display = "block";
    INPUT_NAVN.addEventListener("keyup", lagre_navn);

}

function lagre_navn(event) {
    if (event.keyCode === 13 && INPUT_NAVN.value.length !== 0) {
        localStorage.setItem("navnForste", INPUT_NAVN.value);
        oppdater_navn();
    }
}

function oppdater_navn() {
    if (localStorage.getItem("navnForste") === null) {
        DIV_LAGRE_SPORSMAL.style.display = "block";
        DIV_NAVN_SPORSMAL.style.display = "none";
        DIV_VELKOMMEN_TILBAKE.style.display = "none";
        BUTTON_LAGRE_GREIT.addEventListener("click", lagring_greit);
    } else {
        DIV_LAGRE_SPORSMAL.style.display = "none";
        DIV_NAVN_SPORSMAL.style.display = "none";
        DIV_VELKOMMEN_TILBAKE.style.display = "block";
        SPAN_NAVN_UT.innerHTML = ", " + localStorage.getItem("navnForste");
    }
}

oppdater_navn();
