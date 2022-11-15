function hent_navn(prefiks = "", suffiks = "", ellers = "") {
    let navn = localStorage.getItem("minNettsideNavn");
    if (navn === null) {
        return ellers;
    }
    return prefiks + navn + suffiks;
}

function hent_lagring_greit() {
    let value = localStorage.getItem("minNettsideLagringGreit");
    if (value === "1") {
        return true;
    }
    return false;
}

function tilfeldig_indeks(liste) {
    let hoyeste_index = liste.length - 1;
    if (hoyeste_index === -1) {
        return -1;
    }
    return Math.round(Math.random() * hoyeste_index);
}

function fjern_indeks(liste, indeks) {
    if (liste[indeks] !== undefined) {
        liste.splice(indeks, 1);
    }
    return liste;
}