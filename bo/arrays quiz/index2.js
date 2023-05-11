var quiz = [
  {
    sporsmaal: "Hvor mange bit er i en byte?",
    alternativer: ["1", "4", "8", "64"],
    fasit: "8",
  },
  {
    sporsmaal: "Hva er et annet ord for totallssystemet?",
    alternativer: [
      "Det binære tallsystemet",
      "Det sekulære tallsystemet",
      "Det doble tallsystemet",
      "Det sekundære tallsystemet",
    ],
    fasit: "Det binære tallsystemet",
  },
  {
    sporsmaal: "Hvilken komponent av datamaskinen utfører beregninger?",
    alternativer: ["Skjermkortet", "Prosessoren", "RAM", "Harddisken"],
    fasit: "9",
  },
  {
    sporsmaal: "Hva er et annet ord for sekstentallsystemet?",
    alternativer: ["Rex", "Hex", "Dex", "Tex"],
    fasit: "Hex",
  },
];

function fillQuiz() {
  for (let i = 0; i < quiz.length; i++) {
    let selected = document.getElementById("sporsmal" + i);
    selected.innerText = quiz[i].sporsmaal;
  }
}
