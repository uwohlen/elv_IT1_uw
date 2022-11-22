const SPAN_NAVN = document.getElementById("navn");
const SPAN_POENG = document.getElementById("poeng");

SPAN_NAVN.innerHTML = localStorage.getItem("navnIT1fagdag");
SPAN_POENG.innerHTML = localStorage.getItem("poengIT1fagdag") + " poeng";

const CANVAS = document.getElementById("canvas");
CANVAS.height = CANVAS.clientHeight;
CANVAS.width = CANVAS.clientWidth;

const ctx = CANVAS.getContext("2d");
ctx.strokeStyle = "white";

const SNOFLAK = [];
const ANTALL_SNOEFLAK = 10;
const SNOEFLAK_STORRELSE = 20;
const DIAGONALE_ARMER_LENGDE = 15;
const FPS = 30;

let sist_tid = performance.now();

function tilfeldig_tall(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

function tegn() {

    //dt = sekunder siden sist gang funksjonen kjørte. Brukes til å sørge for at snøflakene 
    // går like raskt uavhengig av hvor lang tid det går mellom hver gang funksjonen kalles
    let dt = performance.now() - sist_tid;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < SNOFLAK.length; i++) {
        let objekt = SNOFLAK[i];
        tegn_linje(objekt, SNOEFLAK_STORRELSE, 0);
        tegn_linje(objekt, DIAGONALE_ARMER_LENGDE, DIAGONALE_ARMER_LENGDE);
        tegn_linje(objekt, 0, SNOEFLAK_STORRELSE);
        tegn_linje(objekt, -DIAGONALE_ARMER_LENGDE, DIAGONALE_ARMER_LENGDE);
        tegn_linje(objekt, -SNOEFLAK_STORRELSE, 0);
        tegn_linje(objekt, -DIAGONALE_ARMER_LENGDE, -DIAGONALE_ARMER_LENGDE);
        tegn_linje(objekt, DIAGONALE_ARMER_LENGDE, -DIAGONALE_ARMER_LENGDE);
        tegn_linje(objekt, 0, -SNOEFLAK_STORRELSE);
        objekt.y += 0.05 * dt;

        // Flytter snøflakene til toppen når de har nådd bunnen
        if (objekt.y > CANVAS.height + SNOEFLAK_STORRELSE) {
            objekt.y = -SNOEFLAK_STORRELSE - tilfeldig_tall(0, SNOEFLAK_STORRELSE);
            objekt.x = tilfeldig_tall(0, CANVAS.width);
        }
    }
    sist_tid = performance.now();
}

function tegn_linje(objekt, x, y) {
    ctx.beginPath();
    ctx.moveTo(objekt.x, objekt.y);
    ctx.lineTo(objekt.x + x, objekt.y + y);
    ctx.stroke();
}

for (let i = 0; i < ANTALL_SNOEFLAK; i++) {
    let objekt = {
        x: tilfeldig_tall(0, CANVAS.width),
        y: tilfeldig_tall(0, CANVAS.height)
    };
    SNOFLAK.push(objekt);
}

setInterval(tegn, 1000 / FPS);