const INPUT_A_INN = document.getElementById("a_inn");
const INPUT_B_INN = document.getElementById("b_inn");
const INPUT_C_INN = document.getElementById("c_inn");

const SPAN_A_UT = document.getElementById("a_ut");
const SPAN_B_UT = document.getElementById("b_ut");
const SPAN_C_UT = document.getElementById("c_ut");

const P_ABC = document.getElementById("p_abc");

INPUT_A_INN.addEventListener("input", oppdater_abc);
INPUT_B_INN.addEventListener("input", oppdater_abc);
INPUT_C_INN.addEventListener("input", oppdater_abc);

function avrund(n, d) {
    return Math.round(n * (10 ** d)) / (10 ** d);
}

function abc(a, b, c) {
    let d = (b ** 2 - 4 * a * c) ** 0.5;
    if (isNaN(d)) {
        return [];
    }
    if (d === 0) {
        return [(-b + d) / (2 * a)];
    }
    return [(-b - d) / (2 * a), (-b + d) / (2 * a)];
}

function oppdater_abc() {
    if (INPUT_A_INN.value.length === 0 || INPUT_B_INN.value.length === 0 || INPUT_C_INN.value.length === 0) {
        P_ABC.innerHTML = "Resultatet kommer her!";
        return;
    }

    if (INPUT_A_INN.valueAsNumber === 0) {
        return;
    } else if (INPUT_A_INN.valueAsNumber === 1) {
        SPAN_A_UT.innerHTML = "x^2 + ";
    } else {
        SPAN_A_UT.innerHTML = INPUT_A_INN.value + "x^2 + ";
    }

    if (INPUT_B_INN.valueAsNumber === 0) {
        SPAN_B_UT.innerHTML = "";
    } else if (INPUT_B_INN.valueAsNumber === 1) {
        SPAN_B_UT.innerHTML = "x + ";
    } else {
        SPAN_B_UT.innerHTML = INPUT_B_INN.value + "x + ";
    }

    if (INPUT_C_INN.valueAsNumber === 0) {
        SPAN_C_UT.innerHTML = "";
    } else {
        SPAN_C_UT.innerHTML = INPUT_C_INN.value;
    }

    let losninger = abc(INPUT_A_INN.valueAsNumber, INPUT_B_INN.valueAsNumber, INPUT_C_INN.valueAsNumber);
    if (losninger.length === 0) {
        P_ABC.innerHTML = "Ingen løsninger";
    } else if (losninger.length === 1) {
        P_ABC.innerHTML = "x = " + avrund(losninger[0], 2);
    } else {
        P_ABC.innerHTML = "x = " + avrund(losninger[0], 2) + " &ensp;v&ensp; x = " + avrund(losninger[1], 2);
    }
}

oppdater_abc();