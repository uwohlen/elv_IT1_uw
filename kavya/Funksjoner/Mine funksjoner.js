
/* lengde av en Array */
    console.log(arraylengde(tall)); //referer til verdien i lista

    function arraylengde(liste) {
        let i=0
        let antall =0
        while (i<liste.length){ 
            antall++
            i++
        }
        return antall;
}

/* Største verdien i en Array */
    
    function høyesteTall(a,b) {
        return b-a 
    }  
    tall.sort(høyesteTall);
    document.getElementById("høyest tall").innerHTML = tall[0];

/* Minste verdien i en Array */

    function lavesteTall(a,b) {
            return a-b
        }
    tall.sort(lavesteTall);
    document.getElementById("lavest tall").innerHTML = tall[0];


/* Summen av alle tall i en Array */
//tall - inneholder tallverdier

    function sumArray(tall) {
        let sum = 0;

        for (let i = 0; i < tall.length; i++) {
            sum += tall[i];
        }
        return sum;
        }
    console.log(sumArray(tall));


/* Hvor mange av noe i en Array */

    function antallElementer(arrayInn,verdi) { 
        let antall = 0;

        for (let i=0; i< arrayInn.length; i++) {
        if (arrayInn[i] === verdi) {
            antall ++;
        }
    }
    return antall;
    }
    console.log(antallElementer(navn,"k"))

/* Gjennomsnittet av en Array */
    function gjennomsnittArray(tall) {
        let sum = 0;

        for (let i = 0; i < tall.length; i += 1) {
            sum += tall[i]/tall.length;
        }
        return sum;
        }
    console.log(gjennomsnittArray(tall));

/*  Summerer de siste verdiene i en array, fra og med angitt indeks i
    Returnerer summen
    arrayen - en array med tallverdier
    i - en indeks i den arrayen
*/

    function sumArray(tall,i) {
    let sum = 0;

    for (let j = i; j < tall.length; j++) {
        sum += tall[j];
    }
    return sum;
    }
    console.log(sumArray(tall));


    
/*  Tilfeldig tall mellom (og inkudert) fraOgMed og tilOgMed
    fraOgMed er et heltall
    tilOgMed er et heltall
    Gir et tilfeldig heltall tilbake
*/
function tilfeldigMellom(fraOgMed,tilOgMed) {
    let antallVerdier = tilOgMed - fraOgMed + 1
    let tilfeldig = Math.floor(Math.random()*antallVerdier+fraOgMed)
    return tilfeldig
}


