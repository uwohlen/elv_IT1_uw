const INPUT_R = document.getElementById("regnestykke");
const P_SVAR = document.getElementById("svar");
const OPERATORER = ["+", "-", "*", "/"];
INPUT_R.addEventListener("keydown", matte_funk);


function matte_funk(event) {
    if (event.keyCode !== 13) {
        return;
    }
    P_SVAR.innerHTML = regn_ut(INPUT_R.value);
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
        return opp_funk(regn_ut(a), regn_ut(b), oper);
    }
    return tekst;
}

function opp_funk(num1, num2, opp) {
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(num1, num2, opp);
    if (opp === "+") {
        return num1 + num2;
    }
    if (opp === "-") {
        return num1 - num2;
    }
    if (opp === "*") {
        return num1 * num2;
    }
    if (opp === "/") {
        return num1 / num2;
    }
}

P_R.innerHTML = regn_ut(INPUT_R.value);