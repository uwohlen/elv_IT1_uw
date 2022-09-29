const BILDER = document.getElementById("bilder");
const SRC = "Quizside/quiz/bilder/";
const ANTALL_BILDER = 8;

const BUTTON_STOPP = document.getElementById("stopp");
BUTTON_STOPP.addEventListener("click", stopp_animasjon);

let offset = 0;
let bilder_left = 0;
let stopp = false;

function stopp_animasjon() {
    stopp = !stopp;
    BUTTON_STOPP.innerHTML = (stopp ? "Start" : "Stopp") + " animasjonen";
    if (stopp === false) {
        bytt_bilder();
    }
}

function mod(a, b) {
    if (b === 0) {
        return a;
    }
    return a % b;
}

function tegn_bilder() {
    BILDER.innerHTML = "";
    for (let i = 0; i < ANTALL_BILDER + 1; i++) {
        BILDER.innerHTML += "<div style='flex:1;'><img src='" + SRC + mod((i + offset), ANTALL_BILDER) + ".jpg' width='720' height='720'></img></div>";
    }
    offset++;
}

function bytt_bilder() {
    if (stopp === true) {
        return;
    }
    let bredde = document.documentElement.clientWidth;
    BILDER.style.width = bredde * (ANTALL_BILDER + 1) / (ANTALL_BILDER) + "px";
    bilder_left -= 2;
    BILDER.style.left = bilder_left + "px";

    if (-bilder_left >= bredde / ANTALL_BILDER) {
        tegn_bilder();
        bilder_left = 0;
        bytt_bilder();
        return;
    }

    setTimeout(bytt_bilder, 40); //40 ms == 25 fps
}

tegn_bilder();
bytt_bilder();