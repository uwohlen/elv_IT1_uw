const SPAN_POENG = document.getElementById("poeng");
const SPAN_NAVN_LISTE = document.getElementsByClassName("navn");

let poeng = 0;

function last_poeng() {
    let temp_poeng = localStorage.getItem("poengIT1fagdag");
    if (temp_poeng !== undefined) {
        poeng = Number(temp_poeng);
    }
    if (poeng < 0) {
        localStorage.setItem("poengIT1fagdag", 0);
        localStorage.removeItem("levelIT1fagdag");
        window.open("../index.html", "_self");
    }
    SPAN_POENG.innerHTML = poeng;
}
last_poeng();

let navn = localStorage.getItem("navnIT1fagdag");
for (let i = 0; i < SPAN_NAVN_LISTE.length; i++) {
    SPAN_NAVN_LISTE[i].innerHTML = navn;
}

function tilfeldig_tall(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

localStorage.setItem("levelIT1fagdag", "E31");