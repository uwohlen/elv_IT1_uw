function listelengde(liste) {
    let i = 0;
    while (liste[i]!==undefined) {
        i++
    }
    return i;
}

function arraylengde(liste) {
    let i = 0;
    let antall = 0;

    while (i < liste.length) {
        antall++;
        i++;
    }
    return antall;
}

function minst (a,b) {
    return a - b;   
}

function storst (a,b) {
    return b - a;
}

function sum(liste) {
    let i = 0;
    let sum = 0;
    while (listelengde(liste) > i) {
        sum = sum + (liste[i]);
        i++;
    }
    return sum;
}

function antall(liste, verdi) {
    let antall = 0;
    let i = 0;

    while (i < liste.length) {
        if (liste[i] === verdi) {
            antall++;
        }
        i++;
    }
    return antall;
}

function gjennomsnitt(liste) {
    let gjennomsnitt = 0;
    let i = 0;
    let sum = 0;
    while (listelengde(liste) > i) {
        sum = sum + (liste[i]);
        i++;
    }
    gjennomsnitt = Number(sum/listelengde(liste));
    return gjennomsnitt;
}

function stokkeom(liste) {
    let ny = [];
    let i = liste.length;
    
    while (i > 0) {
        let index = Math.floor(Math.random () * liste.length);
        ny.push(liste[index]); //dytter ny verdi inn for index verdi i lista
        liste.splice(index,1);
        i = liste.length;
    }
    return ny;
}

let liste2 = kopi(liste1); //huske disse to linjene før de andre funksjonene og kommandoene 
console.log(liste2);

function kopi(liste) {
    let liste2 = [];
    let i = 0;

    while (i < liste.length) {
        liste2.push(liste[i]);
        i++;
    }
    
    return liste2;
}