const DIV_BINAER = document.getElementById("binaer");
const SPAN_TALL = document.getElementById("tall");
const BUTTON_SVAR = document.getElementById("svar");

const SPAN_SVAR_TALL = document.getElementById("svar_tall");
const DIV_FERDIG = document.getElementById("ferdig");

const ANTALL_BITS = 4;

BUTTON_SVAR.addEventListener("click", svar);

const tall = tilfeldig_tall(1, (2 ** ANTALL_BITS) - 1);

SPAN_TALL.innerHTML = tall;

for (let i = 0; i < ANTALL_BITS; i++) {
    DIV_BINAER.innerHTML += "<button class='knapper'>0</button>";
}

const KNAPPER = document.getElementsByClassName("knapper");

for (let i = 0; i < KNAPPER.length; i++) {
    KNAPPER[i].addEventListener("click", knapp_klikk);
}

function knapp_klikk(event) {
    event.target.innerHTML = event.target.innerHTML === "0" ? 1 : 0;
}

function svar() {
    let svar_tall = 0;
    for (let i = 0; i < KNAPPER.length; i++) {
        if (KNAPPER[i].innerHTML === "1") {
            svar_tall += 2 ** (KNAPPER.length - i - 1);
        }
    }
    if (svar_tall === tall) {
        window.open("fikset.html", "_self");
    } else {
        DIV_FERDIG.style.display = "unset";
        SPAN_SVAR_TALL.innerHTML = svar_tall;
        poeng -= 2;
        localStorage.setItem("poengIT1fagdag", poeng);
        last_poeng();
    }
}