
const P_FAKTORISER = document.getElementById("p_faktoriser");
const INPUT_FAKTORISER = document.getElementById("input_faktoriser");

INPUT_FAKTORISER.addEventListener("input", input_faktoriser);

function input_faktoriser() {
    let resultat = faktoriser(Number(INPUT_FAKTORISER.value));

    if (resultat.length === 0) {
        P_FAKTORISER.innerHTML = "Resultatet kommer her!";
    } else {
        if (resultat.length === 1) {
            P_FAKTORISER.innerHTML = resultat[0] + " er et primtall";
        } else {
            let tekst = "";
            for (let i = 0; i < resultat.length - 1; i++) {
                tekst = tekst + resultat[i] + " * ";
            }
            tekst = tekst + resultat[resultat.length - 1];
            P_FAKTORISER.innerHTML = tekst;
        }
    }
}

function faktoriser(tall) {
    if (tall <= 1) {
        return [];
    }

    let hoyeste_mulige = Math.ceil(tall ** 0.5);
    const resultat = [];

    while (tall % 2 === 0) {
        tall = tall / 2;
        resultat.push(2);
    }

    i = 3;
    while (tall != 1) {
        if (i >= hoyeste_mulige) {
            resultat.push(tall);
            return resultat;
        }
        while (tall % i === 0) {
            tall = tall / i;
            resultat.push(i);
        }
        i = i + 2;
    }
    return resultat;
}