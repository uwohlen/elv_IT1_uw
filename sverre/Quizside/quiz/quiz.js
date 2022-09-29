const SPORSMAL = [
    ["RAM", "Hovedkort", "CPU", "ROM", "Hva er dette?", 0, "0.jpg"],
    ["Hovedkort", "SSD", "CPU", "ROM", "Hva ser vi undersiden av?", 2, "1.jpg"],
    ["Grafikkort", "CPU", "Hovedkort", "SSD", "Hvilken kritisk komponent er ikke installert?", 1, "2.jpg"],
    ["SSD", "DVD-spiller", "Skjermkort", "HDD", "Hva er dette?", 3, "3.jpg"],
];
const ANTALL_SPORSMAL = SPORSMAL.length;

const P_RESULTAT = document.getElementById("resultat");
const BUTTON_SVAR = document.getElementById("svar-avgitt");

const SPAN_NAVN_UT = document.getElementById("navn-ut");

const DIV_QUIZ = document.getElementById("quiz");

// alle <input> under <div id="quiz">
const KNAPPER = DIV_QUIZ.getElementsByTagName("input");

// alle <label> under <div id="quiz">
const MERKER = DIV_QUIZ.getElementsByTagName("label");

const BILDE = document.getElementById("bilde");


BUTTON_SVAR.addEventListener("click", svar_avgitt);

let sporsmal_index;
let spsm;
let antall_riktige = 0;

let svar_gitt = false;

function tilfeldig_index(liste) {
    let hoyeste_index = liste.length - 1;
    if (hoyeste_index === -1) {
        return -1;
    }
    return Math.round(Math.random() * hoyeste_index);
}


function nytt_sporsmal() {
    sporsmal_index = tilfeldig_index(SPORSMAL);
    spsm = SPORSMAL[sporsmal_index];
    if (sporsmal_index === -1) {
        quiz_ferdig(); // Denne funksjonen finner du i filen resultat.js
    } else {
        BILDE.src = ""; // Sørger for at det forrige bildet forsvinner mens det nye loader
        BILDE.src = "bilder/" + spsm[6];

        P_RESULTAT.innerHTML = spsm[4];

        for (let i = 0; i < MERKER.length; i++) {
            let merke = MERKER[i];
            merke.innerHTML = spsm[Number(merke.htmlFor)];
            merke.style.textDecoration = "unset";
        }

    }
}

function svar_avgitt() {
    if (svar_gitt) {
        svar_gitt = false;
        BUTTON_SVAR.innerHTML = "Svar";
        nytt_sporsmal();
        return;
    }
    svar_gitt = true;
    BUTTON_SVAR.innerHTML = "Fortsett";

    let valgt_index;
    for (let i = 0; i < KNAPPER.length; i++) {
        let knapp = KNAPPER[i];
        if (knapp.checked) {
            valgt_index = i;
            break;
        }
    }

    let riktig_index = spsm[5];
    if (valgt_index === riktig_index) {
        antall_riktige++;
        P_RESULTAT.innerHTML = "Riktig!";
    } else {
        P_RESULTAT.innerHTML = "Feil. Riktig svar var " + spsm[riktig_index] + ".";
        MERKER[valgt_index].style.textDecoration = "line-through red";
    }

    MERKER[riktig_index].style.textDecoration = "underline";

    SPORSMAL.splice(sporsmal_index, 1); //Fjerner spørsmålet fra listen over spørsmål
}

nytt_sporsmal();
if (localStorage.getItem("navnForste") !== null) {
    SPAN_NAVN_UT.innerHTML = ", " + localStorage.getItem("navnForste");
}
