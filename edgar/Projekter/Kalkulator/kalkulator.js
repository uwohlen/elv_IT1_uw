const regnestykke_r = document.getElementById("regnestykke");
const p_svar = document.getElementById("svar");
const operator = ["+", "-", "*", "/"];

//Denne kodelinjen legger til en hendelseslytter til elementet "regnestykke_r" for "keydown"-hendelsen, og kaller funksjonen "matte_funk" når hendelsen inntreffer.
regnestykke_r.addEventListener("keydown", matte_funk);

//Denne kodelinjen definerer en funksjon kalt "matte_funk" som lytter etter en nøkkelhendelse og utfører "regn_ut"-funksjonen når enter-tasten trykkes
function matte_funk(event) {
    if (event.keyCode !== 13) {
        return;
    }
    p_svar.innerHTML = regn_ut(regnestykke_r.value);
}

//Denne kodelinjen er en rekursiv funksjon som behandler en strenginndata og returnerer et resultat basert på tilstedeværelsen av visse operatørtegn i den.
function regn_ut(tekst) {
    for (let i = 0; i < operator.length; i++) {
        let oper = operator[i];
        //Denne kodelinjen erklærer en variabel kalt 'indeks' og tildeler den verdien til den siste indeksen av 'oper'-tegnet i 'tekst'-strengen.
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

//Denne funksjonen er en kalkulator som tar to tall og en operasjon og returnerer resultatet av operasjonen brukt på tallene
function opp_funk(num1, num2, opp) {
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(num1, num2, opp);
    if (opp === "+") {
        return num1 + num2;
    }
    else if (opp === "-") {
        return num1 - num2;
    }
    else if (opp === "*") {
        return num1 * num2;
    }
    else if (opp === "/") {
        return num1 / num2;
    }
}

p_r.innerHTML = regn_ut(regnestykke_r.value);