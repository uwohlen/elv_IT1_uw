const SPAN_NAVN_TODO = document.getElementById("navn-todo");
const SPAN_NAVN_TABELL_OVERSKRIFT = document.getElementById("navn-tabell-overskift");

const DIV_TABLE_INNHOLD = document.getElementById("table-innhold");

const INPUT_TEKST = document.getElementById("tekst_0");
const INPUT_SJEKKBOKS = document.getElementById("sjekkboks_0");
INPUT_TEKST.addEventListener("keydown", oppdater_todo_tekst);
INPUT_TEKST.addEventListener("focusout", flytt_inn_todo);
INPUT_SJEKKBOKS.addEventListener("click", oppdater_todo_sjekkboks);

const TEKST = "<td><input type='text'></td><td><input type='checkbox'></td>";

SPAN_NAVN_TODO.innerHTML = hent_navn("", ", dette er din Todo-liste:", "Dette er din Todo-liste:");
SPAN_NAVN_TABELL_OVERSKRIFT.innerHTML = hent_navn("", "s ");

let antall_rader = 1;
let gjoremal = [];

// Denne funksjonen kopierer det som står i den nederste raden til en ny rad over og 
// sletter det gamle innhold slik at man får et nytt sted å skrive inn
function flytt_inn_todo() {
    if (INPUT_TEKST.value === "") {
        return;
    }
    legg_til_gjoremal(INPUT_TEKST.value, INPUT_SJEKKBOKS.checked);
    INPUT_TEKST.value = "";
    INPUT_SJEKKBOKS.checked = false;
    antall_rader++;
}

// Denne funksjonen mottar tastetrykk fra alle tekstboksene.
function oppdater_todo_tekst(event) {
    // Hvis man trykker på enter inni den nederste tekstboksen får man en ny boks
    if (event.target === INPUT_TEKST) {
        lagre_gjoremal(antall_rader - 1, INPUT_TEKST.value, INPUT_SJEKKBOKS.checked);
        if (event.keyCode === 13) {
            flytt_inn_todo();
        }
    } else {
        lagre_fra_event(event, "tekst_");
    }
}

// Denne funksjonen mottar klikk på sjekkboksene
function oppdater_todo_sjekkboks(event) {
    if (event.target === INPUT_SJEKKBOKS) {
        lagre_gjoremal(antall_rader - 1, INPUT_TEKST.value, INPUT_SJEKKBOKS.checked);
    } else {
        lagre_fra_event(event, "sjekkboks_");
    }
}

function lagre_fra_event(event, id_prefiks) {
    let nr = Number(event.target.id.substring(id_prefiks.length));
    let tekstboks = document.getElementById("tekst_" + nr);
    let sjekkboks = document.getElementById("sjekkboks_" + nr);
    lagre_gjoremal(nr - 1, tekstboks.value, sjekkboks.checked);
}

function lagre_gjoremal(nr, tekst, checked) {
    if (!hent_lagring_greit()) {
        return;
    }
    if (tekst === "") {
        gjoremal = fjern_indeks(gjoremal, nr);
    } else {
        gjoremal[nr] = [tekst, checked];
    }
    localStorage.setItem("minNettsideGjoremal", JSON.stringify(gjoremal));
}

function last_inn() {
    let gjoremal_json = localStorage.getItem("minNettsideGjoremal");
    if (gjoremal_json === null) {
        return;
    }
    gjoremal = JSON.parse(gjoremal_json);
    antall_rader = 1;
    DIV_TABLE_INNHOLD.innerHTML = "";
    for (let i = 0; i < gjoremal.length; i++) {
        x = gjoremal[i];
        if (x === undefined) {
            continue;
        }
        legg_til_gjoremal(x[0], x[1]);
        antall_rader++;
    }
}

function legg_til_gjoremal(tekst, checked) {
    const element = document.createElement("tr");
    element.innerHTML = TEKST;

    const input_er = element.getElementsByTagName("input");
    input_er[0].addEventListener("keydown", oppdater_todo_tekst);
    input_er[0].value = tekst;
    input_er[0].id = "tekst_" + antall_rader;

    input_er[1].addEventListener("click", oppdater_todo_sjekkboks);
    input_er[1].checked = checked;
    input_er[1].id = "sjekkboks_" + antall_rader;

    DIV_TABLE_INNHOLD.appendChild(element);
}

last_inn();