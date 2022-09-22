const DIV_LAGRE_RESULTAT = document.getElementById("div-lagre-resultat");
const INPUT_LAGRE_RESULTAT = document.getElementById("input-lagre-resultat");
const BUTTON_LAGRE_RESULTAT = document.getElementById("button-lagre-resultat");

const TABELL = document.getElementById("tabell");

let highscorer;

function last_highscorer() {
    highscorer = JSON.parse(localStorage.getItem("dataquiz_highscorer"));
    if (highscorer === null) {
        highscorer = [];
    } else {
        //Highscorene sorteres i synkende rekkefølge
        highscorer.sort(function (a, b) { return b["antall_riktige"] - a["antall_riktige"]; });

        //Skriver ut highscorene til tabellen
        TABELL.innerHTML = "<tr><th>Navn</th><th>Antall riktige</th></tr>";
        for (let i = 0; i < highscorer.length; i++) {
            let score = highscorer[i];
            var rad = TABELL.insertRow();
            var cell1 = rad.insertCell(0);
            var cell2 = rad.insertCell(1);
            cell1.innerHTML = score["navn"];
            cell2.innerHTML = score["antall_riktige"];
        }
    }
}

function quiz_ferdig() {
    BUTTON_SVAR.style.display = "none";
    P_RESULTAT.innerHTML = "Du fikk " + antall_riktige + " av " + ANTALL_SPORSMAL + " riktige. Det er " + Math.round(antall_riktige / ANTALL_SPORSMAL * 100) + "%.";
    DIV_LAGRE_RESULTAT.style.display = "unset";
    BUTTON_LAGRE_RESULTAT.addEventListener("click", lagre_resultat);
}

function lagre_resultat() {
    let navn = INPUT_LAGRE_RESULTAT.value;
    BUTTON_LAGRE_RESULTAT.removeEventListener("click", lagre_resultat);
    BUTTON_LAGRE_RESULTAT.disabled = true;

    let legg_til_score = true;
    for (let i = 0; i < highscorer.length; i++) {
        let score = highscorer[i];
        if (score["navn"] === navn) {
            if (score["antall_riktige"] < antall_riktige) {
                highscorer.splice(i, 1);
            } else {
                legg_til_score = false;
            }
            break;
        }
    }

    if (legg_til_score) {
        highscorer.push({
            "navn": navn,
            "antall_riktige": antall_riktige
        });
    }

    localStorage.setItem("dataquiz_highscorer", JSON.stringify(highscorer));
    last_highscorer();
}

last_highscorer();