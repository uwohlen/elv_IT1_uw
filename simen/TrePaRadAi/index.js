let BrettEl = document.getElementById("BrettId")
let TekstEl = document.getElementById("TekstId")
let RestartEl = document.getElementById("RestartId")

RestartEl.addEventListener("click", restart)


let brett = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]
let ai = true //kan skru av ai

let tur = ["Sirkel", "Cross"]
let turB = ["o", "x"]

//definerer scores for minmax
let scores = {
    "x": 1,
    "o": -1,
    "tie": 0
}

let t = 0
const lengde = 3


let winner = null;
let quizTekst = ""
draw()

function restart() {
    brett = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    RestartEl.style.visibility = "hidden"
    winner = null;
    quizTekst = ""
    TekstEl.innerHTML = ""
    draw()
}
function draw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            quizTekst += "<div class='Rute' id='" + i + j + "'></div>"
        }
    }
    BrettEl.innerHTML = quizTekst
    addEventListeners()
}


function addEventListeners() {
    let ruter = document.getElementsByClassName("Rute");
    for (let i = 0; i < ruter.length; i++) {
        ruter[i].addEventListener('click', test);
    }
}

function test(event) {
    brett[event.target.id.charAt(0)][event.target.id.charAt(1)] = turB[t]
    if (!event.target.parentElement.classList.contains('Rute')) {
        event.target.innerHTML = "<div class='" + tur[t] + "' id='" + event.target.id + "'></div>"
        event.target.removeEventListener('click', test)
    }

    if (!ai) {
        t += 1 - 2 * t
    }
    else {
        let openSpots = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (brett[i][j] == '') {
                    openSpots++;
                }
            }
        }
        if (openSpots > 0) {
            setTimeout(bestMove, 1);
        }
        else TekstEl.innerHTML = "Uavgjort"
    }
    skrivUtVinner()

}

//finner ut hvem som vinner/om noen har vunnet
function checkWinner(brett) {
    let plasseringO = {
        x: [],
        y: []
    };
    let plasseringX = {
        x: [],
        y: []
    };

    //legger til x og y kordinater i til x og o
    for (let i = 0; i < lengde; i++) {
        for (let j = 0; j < lengde; j++) {
            if (brett[i][j] == "o") {
                plasseringO.x.push([i])
                plasseringO.y.push([j])
            }
            else if (brett[i][j] == "x") {
                plasseringX.y.push([i])
                plasseringX.x.push([j])
            }
        }
    }
    if (Status(plasseringO, "o") !== undefined) {
        winner = Status(plasseringO, "o")
    }
    else if (Status(plasseringX, "x") !== undefined) {
        winner = Status(plasseringX, "x")
    }
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (brett[i][j] == '') {
                openSpots++;
            }
        }
    }
    if (winner === null && openSpots === 0) {
        winner = "tie"
    }
    return winner
}

function Status(plassering, spiller) {
    let teller = 0;
    let teller2 = 0;
    winner = null;
    for (let i = 0; i < plassering.x.length; i++) {
        //sjekker win på x akse
        if (ArrayContains(plassering.x, plassering.x[i]) >= 3) {
            winner = spiller
            return winner
        }

        //sjekker win på y akse
        if (ArrayContains(plassering.y, plassering.y[i]) >= 3) {
            winner = spiller
            return winner
        }

        //horizontalt fra venstre
        if (Number(plassering.y[i]) === Number(plassering.x[i])) {
            teller++
            if (teller >= 3) {
                winner = spiller
                return winner
            }
        }

        //horizontalt fra høyre
        if (Number(plassering.y[i]) + Number(plassering.x[i]) === 2) {
            teller2++
            if (teller2 >= 3) {
                winner = spiller
                return winner
            }
        }

    }
}


function ArrayContains(array, verdi) {
    let teller = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) === Number(verdi)) teller++;
    }
    return teller
}


function bestMove() {
    let bestScore = -Infinity
    let move;
    for (let i = 0; i < 3; i++) {
        //console.warn(i)
        for (let j = 0; j < 3; j++) {
            //sjekker om ruten er ledig
            if (brett[i][j] == '') {
                brett[i][j] = "x"
                let score = minimax(brett, 0, false)
                brett[i][j] = ''
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    brett[move.i][move.j] = "x"

    skrivUtVinner()
    let id = move.i.toString() + move.j.toString();
    let ruteX = document.getElementById(id);
    ruteX.innerHTML = "<div class='Cross' id='" + id + "'></div>"
}

function minimax(brett, depth, isMaximizing) {
    let result = checkWinner(brett)
    if (result !== null) {
        return scores[result];
    }
    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (brett[i][j] == '') {
                    brett[i][j] = "x";
                    let score = minimax(brett, depth + 1, false)
                    brett[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (brett[i][j] == '') {
                    brett[i][j] = "o";
                    let score = minimax(brett, depth + 1, true)
                    brett[i][j] = '';
                    if (score < bestScore) {
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore
    }
}
function skrivUtVinner() {
    if (checkWinner(brett) != null) {
        let ruter = document.getElementsByClassName("Rute");
        for (let i = 0; i < ruter.length; i++) {
            ruter[i].removeEventListener('click', test);
        }

        if (checkWinner(brett) === "tie") {
            TekstEl.innerHTML = "Det ble likt"
        }
        else TekstEl.innerHTML = checkWinner(brett).toUpperCase() + " vant"
        RestartEl.style.visibility = "visible"
    }
}