/**
 * Gjør om NOK til enten USD, GBP eller IDR.
 * 
 * Parameter (Number) andel – Hvor mye NOK som skal gjøres om
 * Parameter (String) type - Typen valuta som skal returneres
 *
 * Returnerer (Number + String) Viser andelen NOK og hvor mye det var i en annen valuta 
 * Returnerer (String) Returnerer feilmelding
 */

function gjorom(andel, type) {

    if (isNaN(andel)) {
        return "Du må skrive tall.";
    }

    else if (type == "USD") {
        return andel + "NOK er" + (andel / 9.93) + " " + type; // Det tomme skriftfeltet er bare et mellomrom
    }

    else if (type == "GBP") {
        return andel + "NOK er" + (andel / 12.26) + " " + type;
    }

    else if (type == "IDR") {
        return andel + " NOK er " + (andel * 1523.25) + " " + type;
    }

    return "Skriv enten USD, GBP eller IDR."
}

console.log(gjorom(25, "IDR"))