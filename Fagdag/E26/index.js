let steinK = document.getElementById("0")
let saksK = document.getElementById("1")
let papirK = document.getElementById("2")
let tapOWin = document.getElementById("TAPoWIN")
let MonsterV = Math.floor(Math.random() * 3);
let ScoreEL = document.getElementById("score")
const MaxScore = 3
let score = 0
let mScore = 0
let kJa = document.getElementById("k1")
let kNei = document.getElementById("k2")
let harProvd = false

let poengEl = document.getElementById("poeng")

let restartEl = document.getElementById("restart")

let poeng = 0;

if (localStorage.poengIT1fagdag !== undefined) {
    poeng = Number(localStorage.poengIT1fagdag);
}


poengEl.innerHTML = poeng;

start()
function start() {
    let ValgEL = document.getElementsByClassName("hidden")
    localStorage.levelIT1fagdag = "E26"
    let text = document.getElementById("text")
    let next = document.getElementById("next")

    restartEl.style.display = "none"
    poengEl.innerHTML = poeng

    for (let i = 0; i < ValgEL.length; i++) {
        ValgEL[i].style.display = "none";
    }
    text.innerHTML = "Tur i skogen"
    reset_animation2()
    let lever = true;

    const fruits = ["Du går en tur i skogen", "Du ser noe i øyekroken", "Noe hopper ut foran deg", "Det er et troll!!!!!!", "Du får ikke gå på min sti", "nå må jeg drepe deg", "du ber for livet ditt", "Nei, spar meg", "Jeg skal la deg leve", "På en betingelse!!!", "Du må slå meg i stein, saks, papir"];

    next.addEventListener("click", reset_animation)
    setTimeout(ButtonAppear, 4000)
    function ButtonAppear() {
        next.style.display = "inline-block"
    }
    //endre så i endrer seg når klikker på knapp
    let animasjons_i = 0;
    function reset_animation() {
        next.style.display = "none"
        text.innerHTML = fruits[animasjons_i];
        animasjons_i++;

        text.style.animation = 'none';
        text.offsetHeight; /* trigger reflow */
        text.style.animation = null;
        if (animasjons_i < fruits.length) {
            setTimeout(reset_animation, 3700)
        }
        else {
            setTimeout(valg, 4200)
        }
    }
    function valg() {
        for (let i = 0; i < ValgEL.length; i++) {
            ValgEL[i].style.display = "inline-block";
        }
        kNei.addEventListener("click", død);
        kJa.addEventListener("click", JaTilStein);
    }
}

function død() {
    let ValgEL = document.getElementsByClassName("hidden")
    console.log("hei")
    poeng -= 5;
    poengEl.innerHTML = poeng;

    for (let i = 0; i < ValgEL.length; i++) {
        ValgEL[i].style.display = "none";
    }

    console.log("død")
    text.innerHTML = "du døde............."
    reset_animation2()
    kNei.removeEventListener("click", død)
    kJa.removeEventListener("click", JaTilStein)
    if (poeng >= 0) {
        restart()
    }
    else if (poeng < 0 && harProvd === false) {
        restart()
        harProvd = true;
        console.log("hello")
    }
    else {
        console.log("har provd");
        console.log(poeng)
    }
}
function restart() {
    console.log("hello")
    restartEl.style.display = "inline-block"
    restartEl.addEventListener("click", start)
}
function reset_animation2() {
    text.style.animation = 'none';
    text.offsetHeight; /* trigger reflow */
    text.style.animation = null;
}

function JaTilStein() {
    poengEl.innerHTML = poeng
    tapOWin.style.display = "none"
    let restart = document.getElementById("restart")
    restart.style.display = "none"
    restart.removeEventListener("click", JaTilStein)
    let ikkeStein = document.getElementsByClassName("hidden3")
    for (let i = 0; i < ikkeStein.length; i++) {
        ikkeStein[i].style.display = "none";
    }
    MonsterV = Math.floor(Math.random() * 3);
    score = 0
    mScore = 0
    SteinEL = document.getElementsByClassName("hidden2")
    ScoreEL.innerHTML = "Din score: " + score + "  Monster: " + mScore
    for (let i = 0; i < SteinEL.length; i++) {
        SteinEL[i].style.display = "inline-block";
    }
    kNei.removeEventListener("click", død)
    kJa.removeEventListener("click", JaTilStein)

    steinK.addEventListener("click", stein)
    saksK.addEventListener("click", saks)
    papirK.addEventListener("click", papir)
}
//kondisjoner
function stein() {
    if (MonsterV === 0) {
        draw()

    }
    else if (MonsterV === 1) {
        win()
    }
    else {
        tap()
    }
    ny()

}
function saks() {
    if (MonsterV === 1) {
        draw()
    }
    else if (MonsterV === 2) {
        win()
    }
    else {
        tap()
    }
    ny()
}
function papir() {
    if (MonsterV === 2) {
        draw()
    }
    else if (MonsterV === 0) {
        win()
    }
    else {
        tap()
    }
    ny()
}


//tap, vinn, likt
function win() {
    console.log("Du vant")
    score++
    document.body.style.backgroundColor = "green";
    setTimeout(scoreF, 500)
}
function draw() {
    console.log("likt")
    document.body.style.backgroundColor = "#ceb531";
    setTimeout(scoreF, 500)
}
function tap() {
    console.log("Du tapte")
    mScore++
    document.body.style.backgroundColor = "red";
    setTimeout(scoreF, 500)
}
function scoreF() {
    document.body.style.backgroundColor = "#333"
    ScoreEL.innerHTML = "Din score: " + score + "  Monster: " + mScore
}

//oppdaterer
function ny() {
    if (localStorage.navnIt1fagdag !== undefined) {
        let navn = localStorage.navnIt1fagdag;
    }
    else {
        navn = "Mr. Anonymous"
    }

    if (score < MaxScore && mScore < MaxScore) {
        MonsterV = Math.floor(Math.random() * 3);
    }
    else {
        if (score - mScore < 0) {
            poeng -= 5
            poengEl.innerHTML = poeng
            console.log("tap")
            tapOWin.style.display = "inline-block"
            tapOWin.innerHTML = "Du tapte " + navn
            if (poeng >= 0) {
                restart2()
            }
            else if (poeng < 0 && harProvd === false) {
                harProvd = true;
                restart2()
            }
            else {
                console.log("har provd");
                console.log(poeng)
            }
        }
        else {
            console.log("du vant")
            tapOWin.innerHTML = "DU VANT " + navn + "!!!!"
            tapOWin.style.display = "inline-block"
            let link = document.getElementById("link")
            link.style.display = "inline-block"
        }
        steinK.removeEventListener("click", stein)
        saksK.removeEventListener("click", saks)
        papirK.removeEventListener("click", papir)
    }
}
function restart2() {
    let restartEl = document.getElementById("restart")
    restartEl.style.display = "inline-block"
    restartEl.addEventListener("click", JaTilStein)
}
localStorage.poengIT1fagdag = String(poeng);
localStorage.navnIt1fagdag = String(navn);
localStorage.levelIT1fagdag = (26);