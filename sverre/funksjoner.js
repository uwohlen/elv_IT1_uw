
/*
Henter et navn fra localstorage

Parameter (String) prefiks - legges til før navnet
Parameter (String) suffiks - legges til etter navnet
Parameter (String) ellers  - retuneres hvis navnet ikke er lagret i localstorage
Parameter (String) localstorage_id - hva navnet er lagret som

Retunerer (String):
    <prefiks> + navnet fra localstorage + <suffiks>, hvis localstorage_id eksisterer
    <ellers>, hvis ikke
*/
function hent_navn(prefiks = "", suffiks = "", ellers = "", localstorage_id = "minNettsideNavn") {
    let navn = localStorage.getItem(localstorage_id);
    if (navn === null) {
        return ellers;
    }
    return prefiks + navn + suffiks;
}

/*
Sjekker om brukeren har godtatt lagring av cookies

Parameter (String) localstorage_id - hva det er lagret som

Retunerer (Bool): 
    true, hvis localstorage_id eksisterer og har verdien "1"
    false, hvis ikke
*/
function hent_lagring_greit(localstorage_id = "minNettsideLagringGreit") {
    let value = localStorage.getItem(localstorage_id);
    if (value === "1") {
        return true;
    }
    return false;
}

/*
Skriver en liste med vanlig tekst. Eksempel: ["tomat", "agurk", "egg"] => "tomat, agurk og egg"

Parameter (Array) liste - liste med tall eller strings

Retunerer (String) den opplistede teksten
*/
function opplisting_funk(liste) {
    let stopp = liste.length - 2;
    let resultat = "";
    let i = 0;
    for (; i < stopp; i++) {
        resultat += liste[i] + ", ";
    }
    resultat += liste[i] + " og " + liste[i + 1];
    return resultat;
}

/*
Gir et tilfeldig tall i intervallet [fra, til]

Parameter (Number) fra - det minste mulige tallet
Parameter (Number) til - det største mulige tallet

Retunerer (Number) det tilfeldige tallet
*/
function tilfeldig_tall(fra, til) {
    return fra + Math.round(Math.random() * (til - fra));
}


/*
Summerer tall i en liste

Parameter (Array) liste - en array som kun inneholder tall

Retunerer (Number) - summen av alle tallene i listen
*/
function summer_liste(liste) {
    let resultat = 0;

    for (x of liste) {
        resultat += x;
    }
    return resultat;
}

/*
Fjerner et element fra en liste

Parameter (Array) liste - en array
Parameter (Number) indeks - indeksen til elementet som skal fjernes

Retunerer (Array) listen der elementet er fjernet
*/
function fjern_indeks(liste, indeks) {
    if (liste[indeks] !== undefined) {
        liste.splice(indeks, 1);
    }
    return liste;
}

/*
Finner indeksen til det elementet i en liste med lavest verdi

Parameter (Array) liste - array som kun inneholder tall

Retunerer (Number) indeks til elementet med lavest verdi
*/
function minste_indeks(liste) {
    let indeks = 0;
    let minste = liste[0];
    for (i = 1; i < liste.length; i++) {
        if (liste[i] < minste) {
            minste = liste[i];
            indeks = i;
        }
    }
    return indeks;
}

/*
Sorterer en liste i stigende rekkefølge

Parameter (Array) liste - array som kun inneholder tall

Retunerer (Array) den sorterte listen
*/
function sorter(liste) {
    let resultat = [];
    let lengde = liste.length;
    while (resultat.length < lengde) {
        let min_i = minste_indeks(liste);
        resultat.push(liste[min_i]);
        liste.splice(min_i, 1);
    }
    return resultat;
}

/*
Prøver ut mange av funksjonene. Ment for å brukes fra konsollen
Ingen parametere eller returverdier
*/
function testing() {
    //Testing av tilfeldig_tall()
    let verdier = [];
    for (let i = 0; i < 1000; i++) {
        verdier.push(tilfeldig_tall(0, 100));
    }
    let gjennomsnitt = Math.round(summer_liste(verdier) / verdier.length);
    console.log("Burde skrive ut omtrent 50:");
    console.log("Gjennomsnitt:", gjennomsnitt);
    console.log("");

    //Testing av sorter()
    console.log("Tallene burde sorteres i stigende rekkefølge:");
    let tall = [5, 4, 9, 2, 2, 10, -55, 22];
    console.log("Usortert:", tall);
    tall = sorter(tall);
    console.log("Sortert:", tall);
}