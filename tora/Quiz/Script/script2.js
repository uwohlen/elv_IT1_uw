

//henter inn plasseringen spørsmålene skal legges inn i
let spmdiv=document.getElementById("spørsmåldiv")

// array med hvert spørsmål som et objekt
let spørsmål=[
    {"spørsmålet":"Hva står RAM for?",
    "riktig":"random access memory",
    "feil":["Random access management","Rapid eye movement","rapid access management"]
    },
    {"spørsmålet":"Hva kobler alle komponentene i en datamaskin?",
    "riktig":"hovedkort",
    "feil":["skjermkort","RAM","prosessor"]
    },
    {"spørsmålet":"Hva foretar beregninger i en datamaskin?",
    "riktig":"prosessor",
    "feil":["skjermkort","RAM","Hovedkort"]
    },
    {"spørsmålet":"Hvor kan det lagres midlertidig informasjon?",
    "riktig":"RAM",
    "feil":["skjermkort","Prosessor","Hovedkort"]
    },
    {"spørsmålet":"Hva heter grunnleggeren av Microsoft?",
    "riktig":"Bill Gates",
    "feil":["Elon Musk","Bill Clinton","Elon Clinton", "Jeff Bezos","Jeff Bezuz"]
    },
    {"spørsmålet":"Hva heter grunnleggeren av Amazon?",
    "riktig":"Jeff Bezoz",
    "feil":["Elon Musk","Bill Clinton","Elon Clinton", "Bill Gates","Jeff Bezuz"]
    },
    {"spørsmålet":"Hva heter grunnleggeren av Tesla?",
    "riktig":"Elon Musk",
    "feil":["Jeff Bezoz","Jeff Bezuz","Bill Clinton","Elon Clinton", "Bill Gates"]
    },
    {"spørsmålet":"Hvem av disse er en tidligere president i USA?",
    "riktig":"Bill Clinton",
    "feil":["Jeff Bezoz","Jeff Bezuz","Elon Musk","Elon Clinton", "Bill Gates"]
    },
    {"spørsmålet":"Hvor kommer taco fra?",
    "riktig":"Mexico",
    "feil":["Norge","Texas","Costa Rica","Spania"]

    }
]


// løkke som går gjennom spørsmålene og setter de inn i html med riktig struktur
let i=0
while(i<spørsmål.length){
    let divEl = document.createElement("div");
    divEl.setAttribute("class", "spm");

    let div2El = document.createElement("div");
    div2El.setAttribute("class","center");  
    
    let pEl= document.createElement("p");
    pEl.setAttribute("class","sppørsmål");
    pEl.innerHTML=spørsmål[i].spørsmålet;

    //et tomt array hvor svaralternativer med riktig klasse legges inn
    let knappArray=[]

    //lager knapp med riktig svar
    let button =document.createElement("button")
    button.setAttribute("class","riktig")
    button.innerHTML=spørsmål[i].riktig;
    knappArray.push(button)

    //lager en knapp for hvert feil svar
    for(j=0;j<spørsmål[i].feil.length;j++){
        let button = document.createElement("button");
        button.setAttribute("class","feil")
        button.innerHTML=spørsmål[i].feil[j]
        knappArray.push(button)
    }
    //legger spørsmålet inn i div2
    div2El.appendChild(pEl);
    //lager en array med tilfeldig rekkefølge for at knappene kommer i tilfeldig rekkefølge
    let rekkefølge = tilfeldigArray(spørsmål[i].feil.length+1,0,spørsmål[i].feil.length)
    //legger knappene inn i div 2 med tilfeldig rekkefølge, med br tag mellom hvert alternativ
    for(k=0;k<knappArray.length;k++){
        let br = document.createElement("br");
        div2El.appendChild(br)

        let index = rekkefølge[k]
        //console.log(index)
        div2El.appendChild(knappArray[index])
    }
    //legger div2 inn i div 1, og div 1 inn i spmdiv
    divEl.appendChild(div2El)
    spmdiv.appendChild(divEl)  
    i++;
    
}
//legger til nest siste side som en div med class spm
spmdiv.innerHTML+='<div class="spm"><div class="center"><p class="spørsmål" id="sluttpoeng">Du fikk </p> <br><p class="center"> Takk for at du tok denne quizen</p> <br></div></div>'

//legger til siste side som en div med class spm
spmdiv.innerHTML+='<div class="spm"><div class="center" id="score"><table><thead><tr><th>Poeng</th><th>Navn</th></tr></thead><tbody id="liste"></tbody></table></div></div>'

//legger inn ulike variabler
let poeng=0;
const makspoeng=spørsmål.length;
let neste=0;

//henter inn spørsmålene i en array, riktige alternativer i en array, og feil alternativer i en array
let spmArray = document.getElementsByClassName("spm");
let riktigSvarArray = document.getElementsByClassName("riktig");
let feilSvarArray = document.getElementsByClassName("feil");

//henter inn html elementer med id i quizen
let nesteEl = document.getElementById("neste");
let poengEl = document.getElementById("idPoeng");
let sluttpoengEl =document.getElementById("sluttpoeng");
poengEl.innerHTML = "Poeng: " + poeng + " av "+ makspoeng;

let bId = document.getElementById("b");
bId.innerHTML = "Velkommen " + localStorage.lagretNavnForQuiz1;

//variabel som gjør at knapper bare kan trykkes på en gang per spørsmål
let knapper = false

//viser første spørsmål
spmArray[neste].style.display="block";


//lytter om knappene trykkes, og hvis de gjør det kjøres enten funksjon for riktig svar eller for feil svar
for (ele of riktigSvarArray) { //når et svar med class=riktig trykkes kjøres riktig svar funksjonen
    ele.addEventListener("click",riktigSvar);
}
for(ele of feilSvarArray) { //når et svar med class=feil trykkes kjøres feil svar funksjonen
    ele.addEventListener("click",feilSvar);
}

//lytter etter når neste-knappen trykkes
nesteEl.addEventListener("click",nesteFunk)


function riktigSvar(event) { //Gjør at elementet i klassen bytter farge, og gir poeng, og gjør det mulig å gå til neste spørsmål, i tillegg til å gjøre det umulig å svare på spørsmålet på nytt
    if (knapper===false) {
        event.target.innerHTML="riktig";
        event.target.style.backgroundColor="rgb(87, 255, 124)";
        poeng ++;
        poengEl.innerHTML = "Poeng: " + poeng + " av "+makspoeng;
        nesteEl.style.display="block"
    }
    knapper = true
}
function feilSvar(event) { //Gjør at riktig svar og elementet i klassen bytter farge, og gir poeng, og gjør det mulig å gå til neste spørsmål, i tillegg til å gjøre det umulig å svare på spørsmålet på nytt
    if (knapper===false) {
        event.target.innerHTML="feil"
        event.target.style.backgroundColor="rgb(255, 72, 72)"
        riktigSvarArray[neste].style.backgroundColor="rgb(87,255,124)"
        nesteEl.style.display="block"
        
    }
    knapper = true
}
function nesteFunk() { //Viser neste spørsmål
    neste ++;
    nesteEl.style.display="none"
    if (neste+1 ===spørsmål.length){
        nesteEl.innerHTML="fullfør --->"
    }
    if (neste === spørsmål.length ) { //ekstra funksjon som skjer når man er på nest siste "slide", for da skal en hjemknapp bli synlig
        document.getElementById("hjem").style.display="block"
        if( localStorage.lagretNavn === "false") { //gjør det umulig å lagre highscore hvis man ikke har laget navn
            nesteEl.innerHTML="Se Highscoreliste"
        }
        else{
            nesteEl.innerHTML="Lagre Highscore"
        }
        nesteEl.style.display="block"
    }  

    if(neste === spørsmål.length+1 & localStorage.lagretNavn === "true"){
        leggTilScore();
    }
    spmArray[neste-1].style.display="none"
    
    spmArray[neste].style.display="block"
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


//lager en funksjon som legger til navn og score i firestore når man trykker på lagre highscore
function leggTilScore() {
    db.collection("dataquiz").add({
      Navn: localStorage.lagretNavnForQuiz1,
      Poeng: poeng, 
    });
}