function sorterToArrays(liste1,liste2) {
    //liste 1 skal sorteres, liste 2 skal følge sorteringen til liste 1
    //denne funksjonen er ikke effektiv, men den virker og er lettere å forstå
    //De to listene må være like lange
    let temp1 = []; //midlertidig lagring av info
    let temp2 = [];

    antall = liste1.length //hvor mange runder må vi ta

    let i = 0;

    while (i < antall) {
        let j = 0;
        let storst = liste1[j]; //tar vare på den første verdien
        let indeks = j;
        j++;
        while (j < liste1.length) {
            if (liste1[j] > storst) { //sjekker nye verdier mot gamle
                storst = liste1[j]; //tar vare på ny verdi hvis den er større
                indeks = j; //tar vare på plasseringen av størst verdi
            }
            j++;
        } // når vi har gått gjennom hele lista...
        temp1.push(storst);  //lagrer største poengverdi
        temp2.push(liste2[indeks]); //lagrer navnet som hører til

        liste1.splice(indeks,1); //fjerner største verdi
        liste2.splice(indeks,1); //fjerner navnet som hører til

        i++; //tar en runde til for å finne nest største verdi... osv.
    }
    return [temp1, temp2] //gi tilbake de sorterte listene
}