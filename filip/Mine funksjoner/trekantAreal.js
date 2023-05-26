/**
 * Regner arealet til en trekant
 * 
 * Parameter (Number) høyde – høyden til trekanten
 * Parameter (Number) bredde - grunnflaten til trekanten
 *
 * Returnerer (Number) arealet til trekanten
 * Returnerer (String) en feil melding
 */

function arealTrekant(høyde, bredde) {
    if (typeof høyde == "string" || typeof bredde == "string") {
        return "Du skrev tekst!";
    }

    else if (høyde > 0 && bredde > 0) {
        return (høyde * bredde) / 2;
    }

    else if (høyde < 0 || bredde < 0) {
        return "Du brukte negative tall!";
    }

    return "Du skrev 0!"
}

console.log(arealTrekant(5, 3))