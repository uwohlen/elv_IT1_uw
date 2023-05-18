import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv-mPsT7Wh5Vey9pKLFiwBaCU9H7nYmIw",
  authDomain: "kinesisk-flashcard.firebaseapp.com",
  projectId: "kinesisk-flashcard",
  storageBucket: "kinesisk-flashcard.appspot.com",
  messagingSenderId: "1071227479259",
  appId: "1:1071227479259:web:364f6ceaba266a73fc18fe",
  measurementId: "G-NL116K95LQ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "flashcards"));

var kinesiskeOrd = [];
var norskeOrd = [];
var quizLength = 0;
var tilfeldig = [];

for (var i = 0; i < quizLength; i++) {
  tilfeldig.append(i);
}

querySnapshot.forEach((doc) => {
  kinesiskeOrd.push(doc.data().Kinesisk);
  norskeOrd.push(doc.data().Norsk);
  quizLength += 1;
});

let currentGlose = 0;
let currentSpraak = "norsk";

function byttOm() {
  currentSpraak = currentSpraak == "norsk" ? "kinesisk" : "norsk";
  oppdaterKort();
  oppdaterTittel();
}

document.getElementById("byttOmKnapp").addEventListener("click", byttOm);
document.getElementById("vis").addEventListener("click", vis);
document.getElementById("neste").addEventListener("click", neste);
document.getElementById("forrige").addEventListener("click", forrige);

function oppdaterKort() {
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
  document.getElementById("oevretittel").innerText =
    currentSpraak == "norsk" ? "Kinesisk:" : "Norsk:";
  document.getElementById("nedretittel").innerText =
    currentSpraak == "norsk" ? "Norsk:" : "Kinesisk:";
}

function vis() {
  document.getElementById("nedre").className += "visible";
}

function neste() {
  currentGlose += 1;
  document.getElementById("nedre").className = "text-white text-4xl hidden";
  oppdaterKort();
  oppdaterTittel();
}

function forrige() {
  if (currentGlose == 0) return;
  currentGlose -= 1;
  document.getElementById("nedre").className = "text-white text-4xl hidden";
  oppdaterKort();
  oppdaterTittel();
}

function startPaaNytt() {
  currentGlose = 0
  document.getElementById("nedre").className = "text-white text-4xl hidden";
  [kinesiskeOrd, norskeOrd] = stokkArrays(kinesiskeOrd, norskeOrd);

}

function stokkArrays(array1, array2) {
  for (let i = array1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array1[i], array1[j]] = [array1[j], array1[i]];
    [array2[i], array2[j]] = [array2[j], array2[i]];
  }

  return [array1, array2];
}

[kinesiskeOrd, norskeOrd] = stokkArrays(kinesiskeOrd, norskeOrd);
oppdaterKort();
oppdaterTittel();

console.log(kinesiskeOrd);
console.log(norskeOrd);
