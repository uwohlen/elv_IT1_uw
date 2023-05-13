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

querySnapshot.forEach((doc) => {
  kinesiskeOrd.push(doc.data().Kinesisk);
  norskeOrd.push(doc.data().Norsk);
});
