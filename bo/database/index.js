import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
      import {
        getFirestore,
        collection,
        addDoc,
        getDocs,
        doc,
      } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

      const firebaseConfig = {
        apiKey: "AIzaSyD07i2IQoKQJnVShF86ppBQ6r2c77W-qvk",
        authDomain: "databaaae.firebaseapp.com",
        projectId: "databaaae",
        storageBucket: "databaaae.appspot.com",
        messagingSenderId: "675401463184",
        appId: "1:675401463184:web:9ebddb541e9352f3d0af15",
        measurementId: "G-EZRZ19XC6L",
      };


      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);


      const db = getFirestore(app);

      const querySnapshot = await getDocs(collection(db, "Fotballspillere"));
      querySnapshot.forEach((doc) => {

        console.log(doc.id, " => ", doc.data());
      });
      