let svar = 0;
regnestykke = ""
let gange = []
let dele = []
let pluss = []
let minus = []
let eksponent = []

let kalkulator_input_El = document.getElementById("id_kalkulator_input");
let kalkulator_output_El = document.getElementById("id_svar_utskrift");

kalkulator_input_El.addEventListener("keydown",regnfunk);



function regnfunk(event) {
    if (event.keyCode === 13) {
        regnestykke = kalkulator_input_El.value
        kalkulator_output_El.innerHTML= regnestykke + "=" + regnefunk2(regnestykke)
    }
}

function regnefunk2(regne) {
    if (+regne) {
        return parseInt(regne)
    }

    let i = regne.length-1

    while (i > 0) {
        if (regne[i] == "+") {
            let a = regnefunk2(regne.slice(0, i))
            let b = regnefunk2(regne.slice(i+1))
            return a + b
        }
        else if (regne[i] == "-") {
            let a = regnefunk2(regne.slice(0, i))
            let b = regnefunk2(regne.slice(i+1))
            return a - b
        }
        i--
    }
    
    i = regne.length-1
    while (i > 0) {
        if (regne[i] == "*") {
            let a = regnefunk2(regne.slice(0, i))
            let b = regnefunk2(regne.slice(i+1))
            return a * b
        }
        else if (regne[i] == "/") {
            let a = regnefunk2(regne.slice(0, i))
            let b = regnefunk2(regne.slice(i+1))
            return a / b
        }
        i--
    }
}