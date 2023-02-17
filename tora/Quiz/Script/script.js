
let poeng=0;
const makspoeng=5;
let neste=0;
let spm=0;
let riktig=0;

let riktigSvarArray = document.getElementsByClassName("riktig");
let feilSvarArray = document.getElementsByClassName("feil");
let spmArray = document.getElementsByClassName("spm");
let nesteArray = document.getElementsByClassName("neste");

let poengEl = document.getElementById("idPoeng");
let sluttpoengEl =document.getElementById("sluttpoeng");

let bId = document.getElementById("b");
bId.innerHTML = "Velkommen " + localStorage.lagretNavnForQuiz1;

let knapper = false

let spørsmål=[
    {"spørsmål":"Hva står RAM for?",
    "riktig":"random access memory",
    "feil":["Random access management","Rapid eye movement","rapid access management"]
    },
    {"spørsmål":"Hva kobler alle komponentene i en datamaskin?",
    "riktig":"hovedkort",
    "feil":["skjermkort","RAM","prosessor"]
    },
    {"spørsmål":"Hva foretar beregninger i en datamaskin?",
    "riktig":"prosessor",
    "feil":["skjermkort","RAM","Hovedkort"]
    },
    {"spørsmål":"Hvor kan det lagres midlertidig informasjon?",
    "riktig":"RAM",
    "feil":["skjermkort","Prosessor","Hovedkort"]
    }
]

spmArray[spm].style.display="block";

for (ele of riktigSvarArray) { //når et svar med class=riktig trykkes kjøres riktig svar funksjonen
    ele.addEventListener("click",riktigSvar);
}
for(ele of feilSvarArray) { //når et svar med class=feil trykkes kjøres feil svar funksjonen
    ele.addEventListener("click",feilSvar);
}
for (ele of nesteArray) {
    ele.addEventListener("click",nesteFunk)
}

function riktigSvar(event) { //Gjør at elementet i klassen bytter farge, og gir poeng, og gjør det mulig å gå til neste spørsmål, i tillegg til å gjøre det umulig å svare på spørsmålet på nytt
    if (knapper===false) {
        event.target.innerHTML="riktig";
        event.target.style.backgroundColor="rgb(87, 255, 124)";
        poeng ++;
        poengEl.innerHTML = "Poeng: " + poeng + " av "+makspoeng;
        nesteArray[neste].style.display="block"
    }
    knapper = true
}
function feilSvar(event) { //Gjør at riktig svar og elementet i klassen bytter farge, og gir poeng, og gjør det mulig å gå til neste spørsmål, i tillegg til å gjøre det umulig å svare på spørsmålet på nytt
    if (knapper===false) {
        event.target.innerHTML="feil"
        event.target.style.backgroundColor="rgb(255, 72, 72)"
        riktigSvarArray[riktig].style.backgroundColor="rgb(87,255,124)"
        nesteArray[neste].style.display="block"
        
    }
    knapper = true
}
function nesteFunk(event) { //Viser neste spørsm¨ål
    neste ++;
    riktig ++;
    spm ++;
    if (neste+1 === nesteArray.length ) { //ekstra funksjon som skjer når man er på nest siste "slide", for da skal en hjemknapp bli synlig
        document.getElementById("hjem").style.display="block"
        nesteArray[nesteArray.length - 1].style.display="block"
        if( localStorage.lagretNavn === "false") { //gjør det umulig å lagre highscore hvis man ikke har laget navn
            nesteArray[nesteArray.length - 1].style.display="none"
        }
        
    }  
    event.target.style.display="none"
    spmArray[spm-1].style.display="none"
    spmArray[spm].style.display="block"
    knapper = false
    sluttpoengEl.innerHTML = "Du fikk " + poeng + " av "+ makspoeng +" poeng, bra jobba!"   
     
    
}





const firebaseConfig = {
    apiKey: "AIzaSyD75yTl00zfSwO5vcakpfv1VHjs4okHaDI",
    authDomain: "huskeliste-e3d06.firebaseapp.com",
    projectId: "huskeliste-e3d06",
    storageBucket: "huskeliste-e3d06.appspot.com",
    messagingSenderId: "232669081274",
    appId: "1:232669081274:web:edc18ca3bba59eabfa5c83",
    measurementId: "G-T238YS8HNL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Lager en referanse til databasen
let db = firebase.firestore();

// Henter HTML-element
let listeEl = document.getElementById("liste");

db.collection("dataquiz").get().then((snapshot) => {
    // Henter ut dokumentene
    let dokumenter = snapshot.docs;
  
    // Går gjennom dokumentene og sender dem videre      
    for (let i = 0; i < dokumenter.length; i++) {
      visQuizElement(dokumenter[i]);
    }
});

// Lytter etter endringer i databasen
db.collection("dataquiz").onSnapshot(snapshot => {
    // Kaller funksjonen oppdater(), som lager huskelisten på nytt
    oppdater();
});  

function oppdater() {
  // Henter data. Når første bit er ferdig hentet, starter "then"-biten
  db.collection("dataquiz").orderBy("Poeng","desc").limit(10).get().then((snapshot) => { 
    // Henter ut dokumentene
    let dokumenter = snapshot.docs;

    // Tømmer listeelementet (<div>-elementet der huskelisten lages)
    listeEl.innerHTML = "";

    // Går gjennom dokumentene og lager et element for hvert av dem      
    for (let i = 0; i < dokumenter.length; i++) {
      visQuizElement(dokumenter[i]);
    }
  })
}


 // Funksjon som viser hvert element
function visQuizElement(dokument) {
    // Lager et <tr>-element med klassen "listediv"
    let trEl = document.createElement("tr");
    trEl.setAttribute("class", "listediv");  
    
    // Lager et <td>-element med navn, og legger til dokumentets id i "data-id"
    let tdEl1 = document.createElement("td");
    tdEl1.setAttribute("data-id", dokument.id);
    tdEl1.innerHTML = dokument.data().Navn;
    
  
    // Lager et <td>-element med poeng, og legger til dokumentets id i "data-id"
    let tdEl2 = document.createElement("td");
    tdEl2.setAttribute("data-id", dokument.id);
    tdEl2.innerHTML = dokument.data().Poeng;
    
  
    // Legger til td elementene i tr elementet
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl1);
  
    // legger til tr elementet i tbody
    listeEl.appendChild(trEl);   

}

// lager en eventlistener for når man klikker på lagre highscore knappen
document.getElementById("highscore").addEventListener("click",leggTilScore);

//lager en funksjon som legger til navn og score i firestore når man trykker på lagre highscore
function leggTilScore() {
    db.collection("dataquiz").add({
      Navn: localStorage.lagretNavnForQuiz1,
      Poeng: poeng, 
    });
}
  


