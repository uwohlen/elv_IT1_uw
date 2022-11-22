const DIV_SPILLET = document.getElementById("spillet");
const DIV_FERDIG = document.getElementById("ferdig");
const SPAN_POENG_VUNNET = document.getElementById("poeng_vunnet");
const EMOJIER = ["&#127826", "&#127827", "&#127817"];
const ANTALL_SLOTS = 5;
const START_FART_SLOTS = 10;
const STOPP_FART_SLOTS = 350;

let antall_spinnere_ferdig;

for (let i = 0; i < ANTALL_SLOTS; i++) {
    DIV_SPILLET.innerHTML += "<span class='slots'>" + EMOJIER[tilfeldig_tall(0, EMOJIER.length - 1)] + "</span>";
}
const SLOTS = document.getElementsByClassName("slots");

const BUTTON_START_SPILL = document.getElementById("start_spill");
BUTTON_START_SPILL.addEventListener("click", start_spill);

function start_spill() {
    BUTTON_START_SPILL.removeEventListener("click", start_spill);
    BUTTON_START_SPILL.disabled = true;

    for (let i = 0; i < SLOTS.length; i++) {
        let slot = SLOTS[i];
        slot.emoji_indeks = tilfeldig_tall(0, EMOJIER.length - 1);
        slot.fart = START_FART_SLOTS;
        //Farten er ikke egentlig en fart, det er antall millisekunder mellom hvert "spinn"
        antall_spinnere_ferdig = 0;
        spinn_slot(slot);
    }
}

function spinn_slot(slot) {
    if (slot.fart < STOPP_FART_SLOTS) {
        slot.emoji_indeks = (slot.emoji_indeks + 1) % EMOJIER.length;
        slot.innerHTML = EMOJIER[slot.emoji_indeks];
        slot.fart += tilfeldig_tall(5, 10);
        setTimeout(() => { spinn_slot(slot); }, slot.fart);
    } else {
        antall_spinnere_ferdig += 1;
        if (antall_spinnere_ferdig === ANTALL_SLOTS) {
            ferdig();
        }
    }
}

function hoyeste(liste) {
    let resultat_i = -1;
    for (let i = 0; i < liste.length; i++) {
        if (liste[i] > resultat_i) {
            resultat_i = liste[i];
        }
    }
    return resultat_i;
}

function ferdig() {
    let mulige_poeng_liste = [];
    for (let i = 0; i < EMOJIER.length; i++) {
        mulige_poeng_liste.push(0);
    }
    for (let i = 0; i < SLOTS.length; i++) {
        let emoji_indeks = SLOTS[i].emoji_indeks;
        mulige_poeng_liste[emoji_indeks] += 1;
    }
    let poeng_vunnet = hoyeste(mulige_poeng_liste);
    SPAN_POENG_VUNNET.innerHTML = poeng_vunnet;
    DIV_FERDIG.style.display = "unset";
    poeng += poeng_vunnet;
    localStorage.setItem("poengIT1fagdag", poeng);
    last_poeng();
}