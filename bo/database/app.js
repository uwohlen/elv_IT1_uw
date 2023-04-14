// app.js
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD07i2IQoKQJnVShF86ppBQ6r2c77W-qvk",
    authDomain: "databaaae.firebaseapp.com",
    projectId: "databaaae",
    storageBucket: "databaaae.appspot.com",
    messagingSenderId: "675401463184",
    appId: "1:675401463184:web:9ebddb541e9352f3d0af15",
    measurementId: "G-EZRZ19XC6L",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get reference to the players database
  var playersRef = firebase.database().ref('Fotballspillere');
  
  // Load players from database and populate table
  playersRef.on('value', function (snapshot) {
    var playersTable = document.getElementById('playersTable');
    playersTable.innerHTML = '';
    snapshot.forEach(function (childSnapshot) {
      var playerKey = childSnapshot.key;
      var playerData = childSnapshot.val();
      var row = playersTable.insertRow();
      row.innerHTML = `
        <td>${playerData.fornavn}</td>
        <td>${playerData.etternavn}</td>
        <td>${playerData.klubb}</td>
        <td>${playerData.draktnummer}</td>
        <td>${playerData.nasjonalitet}</td>
        <td>
          <button onclick="editPlayer('${playerKey}')">Edit</button>
          <button onclick="deletePlayer('${playerKey}')">Delete</button>
        </td>`;
    });
  });
  
  // Handle form submission to create or update a player
  document.getElementById('playerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var playerKey = document.getElementById('playerKey').value;
    var fornavn = document.getElementById('fornavn').value;
    var etternavn = document.getElementById('etternavn').value;
    var klubb = document.getElementById('klubb').value;
    var draktnummer = document.getElementById('draktnummer').value;
    var nasjonalitet = document.getElementById('nasjonalitet').value;
  
    // Check if the player key exists to determine whether to create or update a player
    if (playerKey) {
      // Update existing player
      playersRef.child(playerKey).update({
        fornavn: fornavn,
        etternavn: etternavn,
        klubb: klubb,
        draktnummer: draktnummer,
        nasjonalitet: nasjonalitet
      });
    } else {
      // Create new player
      playersRef.push({
        fornavn: fornavn,
        etternavn: etternavn,
        klubb: klubb,
        draktnummer: draktnummer,
        nasjonalitet: nasjonalitet
      });
    }
  
    // Reset form inputs
    document.getElementById('playerKey').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('klubb').value = '';
    document.getElementById('draktnummer').value = '';
    document.getElementById('nasjonalitet').value = '';
  });
  
  // Function to edit a player
  function editPlayer(playerKey) {
    playersRef.child(playerKey).once('value', function (snapshot) {
      var playerData = snapshot.val();
      document.getElementById('playerKey').value = playerKey;
      document.getElementById('fornavn').value = playerData.fornavn;
      document.getElementById('etternavn').value = playerData.etternavn;
      document.getElementById('klubb').value = playerData.klubb;
      document.getElementById('draktnummer').value = playerData.draktnummer;
      document.getElementById('nasjonalitet').value = playerData.nasjonalitet;
    });
  }
  
  // Function to delete a player
  function deletePlayer(playerKey) {
    playersRef.child(playerKey).remove();
  }

  console.log(playersRef)