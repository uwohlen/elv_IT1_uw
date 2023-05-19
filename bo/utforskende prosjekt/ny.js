import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js"; //henter "initializeApp" fra Firebase-nettsiden
import {
  //henter de kodene vi trenger fra Firebase-nettsiden
  getFirestore,
  collection,
  addDoc,
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
querySnapshot.forEach((doc) => {
  //legger til hver doc til den tomme tabellen vi lagde i html-dokumentet, gjentar prosessen for hver doc
  console.log(doc.id, " => ", doc.data());
  var element = document.createElement("tr"); //lager et element av typen "tr" som er en del av en tabell
  element.innerHTML = `
  <td class="border-4 border-white text-3xl text-white">${doc.data().Norsk}</td>
  <td class="border-4 border-white text-3xl text-white">${
    doc.data().Kinesisk //gir elementet html koden for å fungere som et element av en tabell
  }</td>
  `;
  document.getElementById("table").appendChild(element); //legger til elementet vi nettopp lagde i den tomme tabellen på html-siden
});

async function nyttOrd(e) {//legger til ordene i form'en til firebase databasen
  e.preventDefault();
  const docRef = await addDoc(collection(db, "flashcards"), {
    Norsk: document.getElementById("nyNorsk").value,
    Kinesisk: document.getElementById("nyKinesisk").value,
  });
  window.location.reload();//reloader nettsiden slik at de nye ordene dukker opp med en gang
}

document.getElementById("nyttOrd").addEventListener("submit", nyttOrd); //utfører nyttord-funksjonen når du trykker "submit"
