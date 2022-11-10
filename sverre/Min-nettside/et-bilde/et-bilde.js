const DIV_INGEN_LAGRING = document.getElementById("ingen-lagring");

const DIV_SPORSMAL_BOKS = document.getElementById("sporsmal-boks");
const H3_SPORSMAL_TEKST = document.getElementById("sporsmal-tekst");
const DIV_SVAR_ALTERNATIVER = document.getElementById("svar-alternativer");

const SPORSMAL = [
    ["dyr", "Hvilket dyr liker du best?", ["Hund &#128054;", "Katt &#128049;"]],
    ["hatt", "Velg en hatt:", ["&#127913;", "&#128082;"]],
];

const SVAR = {};

let spsm;
let spsm_indeks = -1;

function neste_sporsmal() {
    spsm_indeks++;
    DIV_SVAR_ALTERNATIVER.innerHTML = "";

    if (SPORSMAL.length <= spsm_indeks) {
        ferdig();
        return;
    }

    spsm = SPORSMAL[spsm_indeks];
    H3_SPORSMAL_TEKST.innerHTML = spsm[1];

    let alternativer = spsm[2];

    for (let i = 0; i < alternativer.length; i++) {
        DIV_SVAR_ALTERNATIVER.innerHTML += "<button id='alt" + i + "'>" + alternativer[i]; + "</button>";
    }

    let children = DIV_SVAR_ALTERNATIVER.children;
    for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", svar);
    }
}

function svar(event) {
    // id-ene er på formen alt0, alt1, osv.
    let id = Number(event.target.id.substring(3)); //Fjerner alt og henter tallet
    SVAR[spsm[0]] = id;

    neste_sporsmal();
}

function ferdig() {
    DIV_SPORSMAL_BOKS.style.display = "none";
    localStorage.setItem("minNettsideBilde", JSON.stringify(SVAR));
    generer_bilde();
}

if (hent_lagring_greit() === true) {
    DIV_SPORSMAL_BOKS.style.display = "unset";
    neste_sporsmal();
} else {
    DIV_INGEN_LAGRING.style.display = "unset";
}
