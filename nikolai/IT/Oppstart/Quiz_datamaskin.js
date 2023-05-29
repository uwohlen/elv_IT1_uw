
let fasit = ["Feil :(", "Feil :(", "Riktig, nice", "Bra gjettet, men feil"]
let riktige = "id3"

const poengEl = document.getElementById("idPoeng");
const sporsmol = document.getElementById("sporsmol");
const knapp1 = document.getElementById("id1");
const knapp2 = document.getElementById("id2");
const knapp3 = document.getElementById("id3");
const knapp4 = document.getElementById("id4"); 
const HovedkortImg = document.getElementById("prosessorImg");
const sporsmol1av4 = document.getElementById("sporsmol1av4");
const heinavn = document.getElementById("HeiNavn")
const forrige1 = document.getElementById("forrige1")

let spr_nummer = 1;

let poeng = 0;
let sjekket = [false, false, false, false];

function riktig(e) { // eulers nummer reference
    riktig_knapp = document.getElementById(e);
    element = parseInt(e.slice(-1))-1;
    console.log(e)
    if (e == riktige && !sjekket[element]){
        poeng++;
        poengEl.innerHTML = "Poeng: " + poeng;
        riktig_knapp.style.backgroundColor = "green";
    }
    if (e != riktige && !sjekket[element]) {
        riktig_knapp.style.backgroundColor = "red";
    }
    sjekket[element] = true;
    riktig_knapp.innerHTML = fasit[element];
}



function neste_spr() {
    sjekket = false;
    knapp1.style.backgroundColor = "lightskyblue";
    knapp2.style.backgroundColor= "lightskyblue";
    knapp3.style.backgroundColor= "lightskyblue";
    knapp4.style.backgroundColor= "lightskyblue";
    if (spr_nummer == 1) {
        riktige = "id1"
        HovedkortImg.src ="Moderbrett2.0.jpg"
        sporsmol.innerHTML = "Hva er denne grønne platen?"
        knapp1.innerHTML = "Hovedkortet";
        knapp2.innerHTML= "Basepaten";
        knapp3.innerHTML= "Random plate";
        knapp4.innerHTML= "Solcellepanel";
        fasit[0] = "Riktig, good job";
        fasit[1] = "Feil :p"
        fasit[2]= "Nesten, du klarer det neste gang<3"
        fasit[3]= "Feil:("

    }

    if (spr_nummer==2) {
        riktige = "id4"
        HovedkortImg.src="Skjermkort.jpg"
        sporsmol.innerHTML= "Hva står GPU for?"
        knapp1.innerHTML= "Graph picture utility"
        knapp2.innerHTML="Gaming pass ultra"
        knapp3.innerHTML="Gross paint unit"
        knapp4.innerHTML= "Graphics processing unit"
        fasit[0]= "Nope"
        fasit[1]= "Hell nah"
        fasit[2]= "Feil :T"
        fasit[3]= "Riktig nicu"

    }

    if (spr_nummer==3) {
        riktige = "id2"
        HovedkortImg.src="Lagring.jpg"
        sporsmol.innerHTML= "Hvorfor er det to av RAM?"
        knapp1.innerHTML= "Det gjør ikke noe spess"
        knapp2.innerHTML= "Dobbelt så mye minne"
        knapp3.innerHTML= "Begge er nødvendige"
        knapp4.innerHTML= "idk"
        neste1.innerHTML="Ferdig med quizzy"
        fasit[0]= "Feil"
        fasit[1]= "bra jobba g"
        fasit[2]= "Feil :l"
        fasit[3]= "Nope"
    // neste_spr

    }
    if (spr_nummer==4) {
        HovedkortImg.src="doggo2.jp"
        knapp1.style.display="none"
        knapp2.style.display="none"
        knapp3.style.display="none"
        knapp4.style.display="none"
        neste1.style.display="none"
        poengEl.style.display="none"
        sporsmol.innerHTML="Grattis du fikk "+poeng+" av 4 poeng"
        heinavn.style.display="none"
        forrige1.innerHTML="Scoreboard"
        sporsmol1av4.style.display="none"

    }

    spr_nummer++;
    sporsmol1av4.innerHTML= "Spørsmål "+spr_nummer+" av 4"
    for (let i = 0; i < 4; i++) {
    sjekket[i] = false;
    }
}
/*
function forrige_spr(){
    spr_nummer--;

}
*/
// Cookies
let navnEl = document.getElementById("idNavn");
if (localStorage.getItem("navn") !== null) {
navnEl.innerHTML = " " + localStorage.getItem("navn");
}