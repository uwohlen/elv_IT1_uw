const INPUT_TEKST = document.getElementById("tekst");
const INPUT_FORSKYVNING = document.getElementById("forskyvning");
const BUTTON_KRYPTER = document.getElementById("krypter");
const BUTTON_DEKRYPTER = document.getElementById("dekrypter");
const SPAN_RESULTAT = document.getElementById("resultat");

BUTTON_KRYPTER.addEventListener("click", krypter);
BUTTON_DEKRYPTER.addEventListener("click", dekrypter);

function hent_forskyvninger() {
    let forskyvning = INPUT_FORSKYVNING.value;
    // Går ut i fra at det er et tall hvis den første karakteren ikke er en bokstav.
    if (alfabet.indexOf(forskyvning[0]) === -1) {
        return [Number(forskyvning)];
    }
    let resultat = [];
    let i = 0;
    while (i < forskyvning.length) {
        resultat.push(alfabet.indexOf(forskyvning[i]));
        i++;
    }
    return resultat;
}

function krypter() {
    kryptering(false);
}

function dekrypter() {
    kryptering(true);
}

function bokstav_forskjovet(bokstav, skyv) {
    return alfabet[mod(alfabet.indexOf(bokstav) + skyv, alfabet.length)];
}

function mod(a, b) {
    // https://stackoverflow.com/questions/41239190/result-of-17-is-different-in-javascript-1-and-python6
    return ((a % b) + b) % b;
}

function kryptering(dekrypter) {
    let forskyvninger = hent_forskyvninger();
    let tekst = INPUT_TEKST.value.toLowerCase();
    let resultat = "";
    let i = 0;
    while (i < tekst.length) {
        skyv = forskyvninger[i % forskyvninger.length];
        if (dekrypter) {
            // Hvis vi skal dekryptere: Forskyv mot venstre, ellers mot høyre.
            skyv *= -1;
        }
        if (tekst[i] === " ") {
            resultat += " ";
        } else {
            resultat += bokstav_forskjovet(tekst[i], skyv);
        }
        i++;
    }
    SPAN_RESULTAT.innerHTML = resultat;
}

let alfabet = "";

for (let i = 97; i <= 122; i++) {
    alfabet += String.fromCharCode(i);
}

alfabet += "æøå";