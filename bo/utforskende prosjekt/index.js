import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js"; //henter "initializeApp" fra Firebase-nettsiden
import {
  //henter de kodene vi trenger fra Firebase-nettsiden
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

const firebaseConfig = {
  //lager en variabel for hvilken spesifikk Firebase-app som er vår
  apiKey: "AIzaSyAv-mPsT7Wh5Vey9pKLFiwBaCU9H7nYmIw",
  authDomain: "kinesisk-flashcard.firebaseapp.com",
  projectId: "kinesisk-flashcard",
  storageBucket: "kinesisk-flashcard.appspot.com",
  messagingSenderId: "1071227479259",
  appId: "1:1071227479259:web:364f6ceaba266a73fc18fe",
  measurementId: "G-NL116K95LQ",
};

const app = initializeApp(firebaseConfig); //lager en variabel som henter vår app fra Firebase

const db = getFirestore(app); //henter databasen fra appen

const querySnapshot = await getDocs(collection(db, "flashcards")); //henter dokumentene fra firebase, "await" gjør slik at koden ikke gjør noe annet før dette er fullført

var kinesiskeOrd = []; //lager variabler som vi skal redigere senere
var norskeOrd = [];
var quizLength = 0;

querySnapshot.forEach((doc) => {
  //lager to arrays for de norske ordene og de kinesiske, som er hentet fra databasen
  kinesiskeOrd.push(doc.data().Kinesisk);
  norskeOrd.push(doc.data().Norsk);
  quizLength += 1;
});

let currentGlose = 0;
let currentSpraak = "norsk";

function byttOm() {
  //funksjon for hva som skjer når du trykker på "bytt om" knappen.
  currentSpraak = currentSpraak == "norsk" ? "kinesisk" : "norsk";
  document.getElementById("nedre").className = "text-white text-3xl hidden";
  oppdaterKort();
  oppdaterTittel();
}

function oppdaterKort() {
  //funksjon for å oppdatere kortene, som passer på at kortene alltid har hvert sitt språk
  document.getElementById("nedre").innerText =
    currentSpraak == "norsk"
      ? norskeOrd[currentGlose]
      : kinesiskeOrd[currentGlose];
  document.getElementById("oevre").innerText =
    currentSpraak == "norsk"
      ? kinesiskeOrd[currentGlose]
      : norskeOrd[currentGlose];
}

function oppdaterTittel() {
  //passer på at tittelen over kortene viser riktig språk for glosene inni
  document.getElementById("oevretittel").innerText =
    currentSpraak == "norsk" ? "Kinesisk:" : "Norsk:";
  document.getElementById("nedretittel").innerText =
    currentSpraak == "norsk" ? "Norsk:" : "Kinesisk:";
}

function vis() {
  //gjør nedre kort synlig etter du trykker på "vis"
  document.getElementById("nedre").className += "visible";
}

function neste() {
  //går videre til neste kort i array'en, og passer på at du ikke kan trykke på neste når du har gått gjennom alle kortene
  if (currentGlose == quizLength - 1) return;
  currentGlose += 1;
  document.getElementById("nedre").className = "text-white text-3xl hidden";
  oppdaterKort();
  oppdaterTittel();
}

function forrige() {
  //går tilbake til forrige kort, og passer på at du ikke kan gå lenger tilbake enn første kort
  if (currentGlose == 0) return;
  currentGlose -= 1;
  document.getElementById("nedre").className = "text-white text-3xl hidden";
  oppdaterKort();
  oppdaterTittel();
}

function startPaaNytt() {
  //stokker om rekkefølgen på kortene og starter quizzen på nytt
  currentGlose = 0;
  document.getElementById("nedre").className = "text-white text-3xl hidden";
  [kinesiskeOrd, norskeOrd] = stokkArrays(kinesiskeOrd, norskeOrd);
  oppdaterKort();
}

function stokkArrays(array1, array2) {
  //funksjon som stokker to arrays parallellt (hentet fra nettet)
  for (let i = array1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array1[i], array1[j]] = [array1[j], array1[i]];
    [array2[i], array2[j]] = [array2[j], array2[i]];
    console.log(j)
  }

  return [array1, array2];
}

document.getElementById("byttOmKnapp").addEventListener("click", byttOm); //lager event listeners for alle knappene på nettsiden, og kobler de opp mot riktig funksjon dersom de blir klikket
document.getElementById("vis").addEventListener("click", vis);
document.getElementById("neste").addEventListener("click", neste);
document.getElementById("forrige").addEventListener("click", forrige);
document.getElementById("startPaaNytt").addEventListener("click", startPaaNytt);

[kinesiskeOrd, norskeOrd] = stokkArrays(kinesiskeOrd, norskeOrd); //gjør første stokken når nettsiden lastes opp for første gang
oppdaterKort();
oppdaterTittel();

console.log(kinesiskeOrd);
console.log(norskeOrd);
