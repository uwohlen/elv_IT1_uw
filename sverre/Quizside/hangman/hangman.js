const DIV_ORD = document.getElementById("ord");
const ORDBOK = ["Elefant", "Jakke", "Datamaskin", "Elvebakken", "HTML", "Sjokolade"];
const HINT_BOK = ["Et dyr", "Et plagg", "En ting", "Et sted", "En forkortelse", "Noe godt"];

const INPUT_SVAR = document.getElementById("svar");
const BUTTON_SVAR_AVGITT = document.getElementById("svar_avgitt");

const H3_RESULTAT = document.getElementById("resultat");
const P_HINT_UT = document.getElementById("hint_ut");
const BUTTON_HINT = document.getElementById("hint");

const SPAN_LIV_IGJEN = document.getElementById("liv_igjen");
const SPAN_ANTALL_BOKSTAVER = document.getElementById("antall_bokstaver");
const SPAN_BRUKTE_BOKSTAVER = document.getElementById("brukte_bokstaver");


BUTTON_SVAR_AVGITT.addEventListener("click", svar_avgitt);
BUTTON_HINT.addEventListener("click", gi_hint);

let liv_igjen; //Teller antall liv igjen for å vite når brukeren dør
let ord; //Brukes til å lagre ordet
let hint; //Brukes til å lagre hintet
let bokstaver_igjen; //Teller antall bokstaver igjen for å vite når brukeren har vunnet

//Brukes for å ikke gi brukeren minuspoeng hvis de tar inn en bokstav de allerede har fått riktig
let riktige_bokstaver = [];

//Brukes til å ikke gi brukeren minuspoen hvis de tar inn en bokstav de allerde har fått feil.
//Brukes også til å vise hvilke bokstaver som er brukt
let brukte_bokstaver = "";


function gi_hint() {
    P_HINT_UT.innerHTML = "<b>Hint:</b> " + hint;
}

// Tar inn en array (liste på norsk?) og return-er indekset til et tilfeldig element i array-en
function tilfeldig_index(liste) {
    let hoyeste_index = liste.length - 1;
    if (hoyeste_index === -1) {
        return -1;
    }
    return Math.round(Math.random() * hoyeste_index);
}

function oppdater_info() {
    if (liv_igjen === 2) {
        SPAN_LIV_IGJEN.classList += " kritisk";
    }
    SPAN_LIV_IGJEN.innerHTML = liv_igjen;

    SPAN_ANTALL_BOKSTAVER.innerHTML = ord.length;
    SPAN_BRUKTE_BOKSTAVER.innerHTML = brukte_bokstaver;
}

// Skriver ut alle bokstavene
function oppdater_ord(vis_ord) {
    DIV_ORD.innerHTML = "";
    for (let i = 0; i < ord.length; i++) {
        DIV_ORD.innerHTML += "<input type='text' maxlength='1' disabled value='" + (vis_ord ? ord[i] : "") + "'>";
    }
}

// Denne funksjonen lar meg enkelt lage kode som fungerer uansett om brukeren har gitt navnet sitt eller ikke
// For eksempel:
// console.log("Du er kul" + hent_navn(prefix = ", du ", suffix = "! Kompisen min") + "!");
// Hvis brukeren ikke har navn skriver dette ut "Du er kul!"
// Hvis brukeren heter Ola skriver dette ut "Du er kul, du Ola! Kompisen min!"
function hent_navn(prefix = "", suffix = "") {
    let brukernavn = localStorage.getItem("navnForste");
    if (brukernavn === null) {
        return "";
    }
    return prefix + brukernavn + suffix;
}

function ferdig(r_tekst) {
    BUTTON_SVAR_AVGITT.removeEventListener("click", svar_avgitt);
    BUTTON_SVAR_AVGITT.disabled = true;
    H3_RESULTAT.innerHTML = r_tekst;
}

function svar_avgitt() {
    let valgt_bokstav = INPUT_SVAR.value;
    INPUT_SVAR.value = "";

    if (valgt_bokstav.length !== 1) {
        return;
    }

    // Sjekker om bokstaven allerede er brukt
    for (let i = 0; i < brukte_bokstaver.length; i++) {
        if (valgt_bokstav === brukte_bokstaver[i]) {
            return;
        }
    }

    for (let i = 0; i < riktige_bokstaver.length; i++) {
        if (valgt_bokstav === riktige_bokstaver[i]) {
            return;
        }
    }

    let noe_riktig = false;
    for (let i = 0; i < ord.length; i++) {
        let bokstav = DIV_ORD.children[i];

        if (ord[i].toLowerCase() === valgt_bokstav.toLowerCase()) {
            noe_riktig = true;
            bokstav.value = ord[i];
            bokstaver_igjen -= 1;

        }
    }

    if (noe_riktig) {
        riktige_bokstaver.push(valgt_bokstav);
        if (bokstaver_igjen === 0) {
            ferdig("Gratulerer" + hent_navn(prefix = ", ") + "! Du klarte det med " + liv_igjen + " liv igjen.");
        }
    } else {
        liv_igjen -= 1;
        brukte_bokstaver += valgt_bokstav;
        if (liv_igjen === 0) {
            ferdig("Du døde! Lykke til neste gang" + hent_navn(prefix = ", ") + ".");
            oppdater_ord(vis_ord = true);
        }
    }

    oppdater_info();
}

function nytt_sporsmal() {
    liv_igjen = 8;
    let temp_index = tilfeldig_index(ORDBOK);
    ord = ORDBOK[temp_index];
    hint = HINT_BOK[temp_index];
    bokstaver_igjen = ord.length;

    oppdater_info();
    oppdater_ord(vis_ord = false);

}

nytt_sporsmal();