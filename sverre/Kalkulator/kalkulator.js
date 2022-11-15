const INPUT_REGNESTYKKE = document.getElementById("regnestykke");
const P_RESULTAT = document.getElementById("resultat");

// Regnerekkefølgen baklengs
const OPERATORER = ["+", "-", "*", "/"];

INPUT_REGNESTYKKE.addEventListener("keydown", matte_funk);


function matte_funk(event) {
    if (event.keyCode !== 13) {
        return;
    }
    P_RESULTAT.innerHTML = regn_ut(INPUT_REGNESTYKKE.value);
}

function regn_ut(tekst) {
    for (let i = 0; i < OPERATORER.length; i++) {
        let oper = OPERATORER[i];
        let indeks = tekst.lastIndexOf(oper);
        if (indeks === -1) {
            continue;
        }
        let a = tekst.substring(0, indeks);
        let b = tekst.substring(indeks + 1);
        return operasjon_funk(regn_ut(a), regn_ut(b), oper);
    }
    return tekst;
}

function operasjon_funk(a, b, operasjon) {
    a = Number(a);
    b = Number(b);
    console.log(a, b, operasjon);
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
        return a / b;
    }
}

P_RESULTAT.innerHTML = regn_ut(INPUT_REGNESTYKKE.value);