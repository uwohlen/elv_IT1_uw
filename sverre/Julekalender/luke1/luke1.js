let ORDBOK;
let BREV;
fetch("dictionary.txt")
    .then((response) => response.text())
    .then((data) => { ORDBOK = data.split("\n"); ORDBOK.pop(); start(); });

fetch("letter.txt")
    .then((response) => response.text())
    .then((data) => { BREV = data; start(); });

const ORD_SHONA = [];
const ORD_ENG = [];
function start() {
    if (ORDBOK === undefined | BREV === undefined) {
        // Venter på den andre filen
        return;
    }

    //Sorterer ordboken i synkende rekkefølge etter lengden på det zimbawiske ordet
    ORDBOK.sort((a, b) => { return b.split(",")[0].length - a.split(",")[0].length; });

    //Deler ordboken inn i en liste for hvert språk
    for (let i = 0; i < ORDBOK.length; i++) {
        let temp_ord = ORDBOK[i].split(",");
        ORD_SHONA.push(temp_ord[0]);
        ORD_ENG.push(temp_ord[1]);
    }

    let resultat = "";
    let i = 0;
    while (i < BREV.length) {
        for (let j = 0; j < ORDBOK.length; j++) {
            if (ORD_SHONA[j] === BREV.substring(i, i + ORD_SHONA[j].length)) {
                resultat += ORD_ENG[j] + " ";
                i += ORD_SHONA[j].length;
                break;
            }
        }
    }
    console.log(resultat);
    console.log("Lengde: " + (resultat.length - 1));
}