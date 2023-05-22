// Spør brukeren om å skrive inn et ord
let word = prompt("Skriv inn et ord:");

// Lag en tom tekststreng som vi skal legge til bokstavene i
let output = "";

// Gå gjennom hver bokstav i ordet
for (let i = 0; i < word.length; i++) {

  // Hent den nåværende bokstaven
  let letter = word[i];

  // Finn den neste bokstaven i alfabetet
  let nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);

  // Legg til den neste bokstaven i output-strengen
  output += nextLetter;
}

// Skriv ut resultatet
console.log(output);
