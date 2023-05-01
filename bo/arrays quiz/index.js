function init() {
  let quizEl = document.getElementById("quiz");
let resultatEl = document.getElementById("resultat");

// Array med spørsmål
var quiz = [
  {
    sporsmaal:
      "Hvilket draktnummer har Harry Kane",
    alternativer: ["7", "8", "9", "10", "11", "12"],
    fasit: "10",
  },
  {
    sporsmaal: "Hvilket draktnummer har Heung-Min Son?",
    alternativer: ["7", "8", "9", "10", "11", "12"],
    fasit: "7",
  },
  {
    sporsmaal: "Hvilket draktnummer har Richarlison?",
    alternativer: ["7", "8", "9", "10", "11", "12"],
    fasit: "9",
  },
];

// Skriver spørsmålene til nettsiden
for (let i = 0; i < quiz.length; i++) {
  // Lager et <div>-element til hvert spørsmål
  let sporsmaalEl = document.createElement("div");
  // Gir <div>-elementet klassen checkboxradio
  sporsmaalEl.className = "checkboxradio";
  // Lager et <h3>-elementet til spørsmålet
  let h3El = document.createElement("h3");
  // Legger til spørsmålet i <h3>-elementet
  h3El.innerHTML = quiz[i].sporsmaal;
  // Legger til <h3>-elementet i <div>-elementet
  sporsmaalEl.appendChild(h3El);

  // Lager elementer for hvert av alternativene
  for (let j = 0; j < quiz[i].alternativer.length; j++) {
    // Lager en <label>
    let labelEl = document.createElement("label");
    // Lager en radioknapp
    let radioEl = document.createElement("input");
    // Angir typen radio
    radioEl.type = "radio";
    // Bruker i som navn for å gi alternativene til samme spørsmål likt name
    radioEl.name = i;

    // Sjekker om dette alternativet er det riktige.
    // Hvis det er riktig, bruker vi "riktig" som value, ellers "galt".
    if (quiz[i].fasit === quiz[i].alternativer[j]) {
      radioEl.value = "riktig";
    } else {
      radioEl.value = "galt";
    }

    // Legger til knappen i <label>-elementet
    labelEl.appendChild(radioEl);

    // Legger til svaralternativ
    labelEl.innerHTML += quiz[i].alternativer[j];

    // Legger til <label>-elementet i <div>-elementet
    sporsmaalEl.appendChild(labelEl);
  }
console.log(quizEl)
  // Legger til <div>-elementet i quiz-elementet
  quizEl.appendChild(sporsmaalEl);
}

// Legger til en knapp til slutt
let knappEl = document.createElement("button");
knappEl.innerHTML = "Sjekk svar";

// Legger til lytter på knappen
knappEl.addEventListener("click", finnPoeng);

// Legger til knappen på nettsiden
quizEl.appendChild(knappEl);

// Funksjon som beregner og skriver ut poengsum
function finnPoeng() {
  // Henter alle radioknapper på siden
  alleRadioEl = document.querySelectorAll("input[type='radio']");

  // Variabel for å telle poeng
  let antallPoeng = 0;

  // Går gjennom alle radioknappene
  for (var i = 0; i < alleRadioEl.length; i++) {
    // Hvis en radioknapp er haket av
    if (alleRadioEl[i].checked) {
      // Undersøk om alternativet er riktig
      if (alleRadioEl[i].value === "riktig") {
        // Hvis riktig, gi ett poeng
        antallPoeng++;
      }
    }
  }

  resultatEl.innerHTML = "Du fikk " + antallPoeng + " poeng!";
}

}

window.onload = init

