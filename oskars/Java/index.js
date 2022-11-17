const INPUT_ELEMENT = document.getElementById("regnestykke");
const RESULTAT_ELEMENT = document.getElementById("resultat");

const OPERATORER = ["+", "-", "*", "/"];

INPUT_ELEMENT.addEventListener("keydown", observer);


function observer(event) {
    if (event.keyCode !== 13) {
        return;
    }
    RESULTAT_ELEMENT.innerHTML = regn_ut(INPUT_ELEMENT.value);
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
        return operation(regn_ut(a), regn_ut(b), oper);
    }
    return tekst;
}

function operation(a, b, operasjon) {
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

P_RESULTAT.innerHTML = regn_ut(INPUT_ELEMENT.value);