function finnstorst(liste){
    let storst=liste[0];                    //vi starter den største verdien på det første leddet i arrayen.

    for (let i=1; i<liste.length; i++){     //løkken gjelder fra start til slutt i arrayen, men vi kan starte på index lik 1 her for vi allerede har gjort rede for det første leddet i arrayen i linja over.
        if(liste[i]>storst){                //hvis verdien til et av leddene i arrayen er større enn den tidligere verdien til størst, bytter vi ut med den nye verdien og sier at den er størst
            storst= liste[i];
        }
    }
    return storst;
}

function finnminste(liste){
    let minst=linja[0];                     //vi starter den minste verdien på det første leddet i arrayen
    for (let i=1; i<linja.length; i++){     //løkken gjelder fra start til slutt i arrayen, men vi kan starte på index lik 1 her for vi allerede har gjort rede for det første leddet i arrayen i linja over.
        if (linja[i]<minst){                //hvis verdien til et av leddene i arrayen er mindre enn den tidligere verdien endres minst til den nye verdien
            minst=linja[i];
        }
    }
    return minst;
}

function arraylengde(liste){
    let i=0;
    let antall=0;

    while (i<liste.length){                 //løkke som går gjennom arrayen frem til siste "ledd" i array. For hvert ledd den går gjennom plusses det på 1 til antall.
        antall ++
        i++
    }
    return antall;                          //sender ut lengden på arrayen
}

function hvormange(liste){
    let antall=0;
    for (let i=0; i<gjenstand.length; i++){         //løkke som går gjennom hele arrayen fra start til slutt
        if (liste[i]==="a"){                        //hvis indexen i lista er a, plusses det på 1 på antall. På denne måten kan vi telle hvor mange det er av a.
            antall ++
        }
    }
    return antall;                                  //sender ut hvor mange a
}

function summen(liste){
                
    let sum=0;

    for (let i=0; i<liste.length; i++){
        sum+=liste[i];
    }
    return sum;
}

function summenetter(liste,posisjon){
                
    let sum=0;

    for (let i=posisjon; i<liste.length; i++){
        sum+=liste[i];
    }
    return sum;
}