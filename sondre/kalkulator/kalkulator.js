let svar = 0;
let desimaler = 6;/* antall desimaler i svar */
regnestykke = "";

let kalkulator_input_El = document.getElementById("id_kalkulator_input");
let kalkulator_output_El = document.getElementById("id_svar_utskrift");

kalkulator_input_El.addEventListener("keydown", regnfunk);



function regnfunk(event) {
    if (event.keyCode === 13) {
        regnestykke = kalkulator_input_El.value;/* definerer regnestykket som regnestykket */
        kalkulator_output_El.innerHTML = regnestykke + "=" + Math.round(regnefunk2(regnestykke) * 10 ** desimaler) / 10 ** desimaler;/* skriver regnestykket og svaret avrundet med 6 desimaler */
    }
}

function regnefunk2(regne) {
    if (+regne || regne === "0") {/* sjekker om det er et nummer */
        return parseFloat(regne);/* gjør tekst om til nummer(f.eks 34.3 35.4, utskrift=34.3) */
    }

    let paranteser = 0;
    let parantes = true;
    for (let i = 0; i < regne.length; i++) {
        if (paranteser === 0 && i !== 0) {
            parantes = false;
            break;
        }
        if (regne[i] === "(") {
            paranteser++;
        }
        else if (regne[i] === ")") {
            paranteser--;
        }
    }
    if (parantes) {
        return regnefunk2(regne.slice(1, regne.length - 1));
    }

    let i = regne.length - 1;

    /* koden leser regnestykker fra høyre til venstre */

    paranteser = 0;
    while (i > 0) {
        if (regne[i] === "(") {/* sjekker for paranteser */
            paranteser++;
        }
        else if (regne[i] === ")") {/* sjekker for paranteser */
            paranteser--;
        }
        else if (regne[i] === "+" && paranteser === 0) {
            /* finner tallen på hver side av + og retunerer svaret */
            let a = regnefunk2(regne.slice(0, i));
            let b = regnefunk2(regne.slice(i + 1));
            return a + b;
        }
        else if (regne[i] === "-" && paranteser === 0) {
            /* finner tallen på hver side av - og retunerer svaret */
            let a = regnefunk2(regne.slice(0, i));
            let b = regnefunk2(regne.slice(i + 1));
            return a - b;
        }
        i--
    }

    i = regne.length - 1;

    paranteser = 0;
    while (i > 0) {
        if (regne[i] === "(") {/* sjekker for paranteser */
            paranteser++;
        }
        else if (regne[i] === ")") {/* sjekker for paranteser */
            paranteser--;
        }
        else if (regne[i] === "*" && paranteser === 0) {
            /* finner tallen på hver side av * og retunerer svaret */
            let a = regnefunk2(regne.slice(0, i));
            let b = regnefunk2(regne.slice(i + 1));
            return a * b;
        }
        else if (regne[i] === "/" && paranteser === 0) {
            /* finner tallen på hver side av / og retunerer svaret */
            let a = regnefunk2(regne.slice(0, i));
            let b = regnefunk2(regne.slice(i + 1));
            return a / b;
        }
        i--;
    }
}