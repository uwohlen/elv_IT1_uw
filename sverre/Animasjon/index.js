const CANVAS = document.getElementById("canvas");

const CANVAS_STORRELSE = 2;

CANVAS.width = CANVAS.clientWidth * CANVAS_STORRELSE;
CANVAS.height = CANVAS.clientHeight * CANVAS_STORRELSE;

const G = 1;
const FPS = 60;

//Dette er for at vscode skal gi tekstanbefalinger på ctx:
/** @type {CanvasRenderingContext2D} */
let ctx = CANVAS.getContext("2d");

ctx.font = "30px Arial";

let x_offset = 0;
let y_offset = 0;
let zoom = 0.1;
let objekt_storrelse = 40;

let sirkler = [];

let trykkede_knapper = {};

class Sirkel {
    constructor(x, y, fart_x, fart_y, masse) {
        this.x = x;
        this.y = y;
        this.fart_x = fart_x;
        this.fart_y = fart_y;
        this.masse = masse;
        this.radius = (3 / 4 / Math.PI * masse) ** (1 / 3);
    }
    tegn() {
        tegn_sirkel((this.x - x_offset) * zoom + CANVAS.width / 2, (this.y - y_offset) * zoom + CANVAS.height / 2, this.radius * zoom * objekt_storrelse);
    }
    fysikk() {
        this.x += this.fart_x;
        this.y += this.fart_y;
        for (let sirkel of sirkler) {
            if (this === sirkel) {
                continue;
            }
            //Dette er ikke riktig fysisk, men det fungerer på et vis:
            //(Blant annet er G = 1)
            let tiltrekning = G * sirkel.masse / ((this.x - sirkel.x) ** 2 + (this.y - sirkel.y) ** 2);
            this.fart_x += (sirkel.x - this.x) * tiltrekning;
            this.fart_y += (sirkel.y - this.y) * tiltrekning;
        }
    }
}

for (let i = 0; i < 5; i++) {
    sirkler.push(
        new Sirkel(
            i % 2 ? 2000 * (i + 1) ** 2 : -2000 * (i + 1) ** 2,
            0,
            0,
            90,
            100
        )
    );
}

sirkler.push(
    new Sirkel(
        0,
        0,
        0,
        0,
        8100
    )
);

function tilfeldig_tall(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

function tegn_sirkel(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function tegn_linje(punkter) {
    ctx.beginPath();
    ctx.moveTo(punkter[0][0], punkter[0][1]);
    for (let i = 1; i < punkter.length; i++) {
        x = punkter[i][0];
        y = punkter[i][1];
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
}

function avrund(tall, desimaler) {
    n = 10 ** desimaler;
    return Math.round(tall * n) / n;
}

function hoved_lokke() {
    if (trykkede_knapper["s"]) {
        y_offset += 10 / zoom;
    }
    if (trykkede_knapper["w"]) {
        y_offset -= 10 / zoom;
    }
    if (trykkede_knapper["d"]) {
        x_offset += 10 / zoom;
    }
    if (trykkede_knapper["a"]) {
        x_offset -= 10 / zoom;
    }
    if (trykkede_knapper["x"]) {
        zoom *= 1.05;
    } else if (trykkede_knapper["z"]) {
        zoom *= 0.95;
    }
    if (trykkede_knapper["v"]) {
        objekt_storrelse *= 1.05;
    } else if (trykkede_knapper["c"]) {
        objekt_storrelse *= 0.95;
    }
    if (objekt_storrelse < 1) {
        objekt_storrelse = 1;
    }
    tegn();
}

function tegn() {
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
    ctx.fillText("WASD for å bevege deg. X og Z for å zoome inn og ut. V og C for å øke og senke skalering av objekter. Klikk for å lage et nytt objekt", 10, 35);
    ctx.fillText(Math.round(x_offset) + ", " + Math.round(y_offset) + ". Zoom: " + avrund(zoom, 2), 10, 70);
    ctx.fillText("Skala objekter: " + avrund(objekt_storrelse, 0) + "x", 10, 105);

    for (let sirkel of sirkler) {
        sirkel.tegn();
        sirkel.fysikk();
    }
}


setInterval(hoved_lokke, 1000 / FPS);

document.addEventListener("click", (event) => {
    for (let i = 0; i < 1; i++) {
        sirkler.push(
            new Sirkel(
                (event.clientX * CANVAS_STORRELSE - CANVAS.width / 2) / zoom + x_offset,
                (event.clientY * CANVAS_STORRELSE - CANVAS.height / 2) / zoom + y_offset,
                0,
                100,
                100
            )
        );
    }

});
document.addEventListener("keydown", (event) => {
    trykkede_knapper[event.key] = true;
});
document.addEventListener("keyup", (event) => {
    trykkede_knapper[event.key] = false;
});