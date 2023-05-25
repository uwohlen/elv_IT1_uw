// Funksjon for å tømme inntastingsfelt og svar
function clearInput(inputId, outputId) {
    // Tømmer inntastingsfelt ved å sette verdien til en tom streng
    document.getElementById(inputId).value = '';
    // Fjerner det tidligere svaret ved å sette innholdet til en tom streng
    document.getElementById(outputId).innerHTML = '';
}

// Funksjon for dekryptering av den krypterte teksten
function dekrypterTekst() {
    // Henter den krypterte teksten fra inntastingsfeltet
    let kryptertTekst = document.getElementById("KryptertTekst").value;
    // Finner elementet for å vise det dekrypterte svaret
    let outputEl = document.getElementById("tekstTilbake");
    // Variabel for å lagre det dekrypterte svaret
    let deKryptert = "";

    // Går gjennom hver bokstav i den krypterte teksten
    for (let i = 0; i < kryptertTekst.length; i++) {
        // Henter den nåværende bokstaven
        let char = kryptertTekst.charAt(i);
        // Henter ASCII-koden til bokstaven
        let kode = char.charCodeAt(0);

        // Sjekker om bokstaven er 'z'
        if (char === 'z') {
            // Hvis den er 'z', sett koden til 'a's ASCII-verdi
            kode = 'a'.charCodeAt(0);
        } else {
            // Hvis ikke, reduser koden med 1 for å dekryptere til forrige bokstav
            kode -= 1;
        }

        // Konverterer den dekrypterte ASCII-koden til en bokstav
        let dekryptertChar = String.fromCharCode(kode);
        // Legger den dekrypterte bokstaven til svaret
        deKryptert += dekryptertChar;
    }

    // Skriver ut det dekrypterte svaret
    console.log(deKryptert);
    // Viser det dekrypterte svaret i HTML-dokumentet
    outputEl.innerHTML = deKryptert;
}

// Funksjon for kryptering av den vanlige teksten
function krypterTekst() {
    // Henter den vanlige teksten fra inntastingsfeltet
    let deKryptertTekst = document.getElementById("DeKryptertTekst").value;
    // Finner elementet for å vise det krypterte svaret
    let outputEl = document.getElementById("tekstTilbake2");
    // Variabel for å lagre det krypterte svaret
    let kryptert = "";

    // Går gjennom hver bokstav i den vanlige teksten
    for (let i = 0; i < deKryptertTekst.length; i++) {
        // Henter den nåværende bokstaven
        let char = deKryptertTekst.charAt(i);
        // Henter ASCII-koden til bokstaven
        let kode = char.charCodeAt(0);

        // Sjekker om bokstaven er 'a'
        if (char === 'a') {
            // Hvis den er 'a', sett koden til 'z's ASCII-verdi
            kode = 'z'.charCodeAt(0);
        } else {
            // Hvis ikke, øk koden med 1 for å kryptere til neste bokstav
            kode += 1;
        }

        // Konverterer den krypterte ASCII-koden til en bokstav
        let kryptertChar = String.fromCharCode(kode);
        // Legger den krypterte bokstaven til svaret
        kryptert += kryptertChar;
    }

    // Skriver ut det krypterte svaret
    console.log(kryptert);
    // Viser det krypterte svaret i HTML-dokumentet
    outputEl.innerHTML = kryptert;
}
