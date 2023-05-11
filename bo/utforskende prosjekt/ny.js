console.log("Halla");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
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
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  var element = document.createElement("tr");
  element.innerHTML = `
  <td class="border-4 border-white text-3xl text-white">${doc.data().Norsk}</td>
  <td class="border-4 border-white text-3xl text-white">${doc.data().Kinesisk}</td>
  `;
  document.getElementById("table").appendChild(element);
});

document.getElementById("nyttOrd").addEventListener("submit", nyttOrd);

async function nyttOrd(e) {
  e.preventDefault();
  const docRef = await addDoc(collection(db, "flashcards"), {
    Norsk: document.getElementById("nyNorsk").value,
    Kinesisk: document.getElementById("nyKinesisk").value
  });
window.location.reload()
}
