const INPUT_REGNESTYKKE = document.getElementById("regnestykke");
const INPUT_ENKEL = document.getElementById("enkel");

const SPAN_RESULTAT = document.getElementById("resultat");
const SPAN_OPERATORER = document.getElementById("operatorer");

// Regnerekkefølgen baklengs
const OPERATORER = ["+", "-", "*", "/", "^"];

INPUT_REGNESTYKKE.addEventListener("keydown", regnestykke_funk);
INPUT_ENKEL.addEventListener("keydown", regnestykke_funk);

function regnestykke_funk(event) {
    if (event.keyCode !== 13) {
        return;
    }

    let resultat;
    let id = event.target.id;
    try {
        if (id === "regnestykke") {
            resultat = regn_ut_rekursiv(komma_til_punktum(INPUT_REGNESTYKKE.value));
        } else if (id === "enkel") {
            resultat = regn_ut_enkel(komma_til_punktum(INPUT_ENKEL.value));
        }
    } catch (error) {
        if (error === "delepaa0") {
            resultat = "Du kan ikke dele på 0";
        }
    }
    SPAN_RESULTAT.innerHTML = resultat;
}

function regn_ut_enkel(tekst) {
    for (let i = OPERATORER.length; i > 0; i--) {
        let oper = OPERATORER[i];
        let indeks = tekst.indexOf(oper);
        if (indeks !== -1) {
            let a = tekst.substring(0, indeks);
            let b = tekst.substring(indeks + 1);
            return operasjon_funk(a, b, oper);
        }
    }
}

function regn_ut_rekursiv(tekst) {
    console.log("");
    console.log(tekst);
    for (let i = 0; i < OPERATORER.length; i++) {
        let oper = OPERATORER[i];
        let indeks = tekst.lastIndexOf(oper);
        if (indeks === -1) {
            continue;
        }
        let a = tekst.substring(0, indeks);
        let b = tekst.substring(indeks + 1);
        return operasjon_funk(regn_ut_rekursiv(a), regn_ut_rekursiv(b), oper);
    }
    return tekst;
}

function operasjon_funk(a, b, operasjon) {
    console.log(a, b, operasjon);
    a = Number(a);
    b = Number(b);
    console.warn(a, b, operasjon);

    if (operasjon === "+") {
        return a + b;
    }
    if (operasjon === "-") {
        return a - b;
    }
    if (operasjon === "*") {
        return a * b;
    }
    if (operasjon === "/") {
        if (b === 0) {
            throw "delepaa0";
        }
        return a / b;
    }
    if (operasjon === "^") {
        return a ** b;
    }
}

function opplisting_funk(liste) {
    let stopp = liste.length - 2;
    let resultat = "";
    let i = 0;
    for (; i < stopp; i++) {
        resultat += liste[i] + ", ";
    }
    resultat += liste[i] + " og " + liste[i + 1];
    return resultat;
}

function komma_til_punktum(tekst) {
    return tekst.replace(",", ".");
}

SPAN_OPERATORER.innerHTML = opplisting_funk(OPERATORER);