  // Array av spørsmålene
  var questions = [
    "Hvorfor baserer digitalt utstyr seg på sifrene 0 og 1?",
    "Hva er et tegnsett?",
    "Hva er forskjellen på et tegn og en glyf?",
    "Hva er en piksel (eng. pixel)?",
    "Hva er en fil?",
    "Hvordan skriver vi inn farger i CSS?"
  ];

  // Array av alternativene for hvert spørsmål
  var options = [
    ["Elektronikken i en datamaskin baserer seg på verdiene 0 og 1 (av og på),", 
    "De vet bare om verdiene 0 og 1", "Fordi 0 og 1 er de to første positive tallene ", 
    "Programmeringen går fra lav verdi til høy verdi"]
    ,
    ["En tegning som programmet tegner", "En tegning du designer ved å bruke CSS", 
    "En slags oppskrift som gjør om kombinasjoner av 0-er og 1-ere til tegn.", 
    "Et oppsett som viser koden din"]
    ,
    ["Tegning er oppskrift, glyf er programmet", 
    "Bokstaven F er et eksempel på et tegn, men en F kan ha mange ulike utseender. De ulike utseendene kalles glyfer", 
    "De er to ulike typer oppskrift", "Tegn er utseende og glyf er oppsettet"]
    ,
    ["Et bildepunkt", "En robot", "Enhet for kamerakvalitet", "Lydkvalitet"]
    ,
    ["En mappe", "En gruppe dokumenter", "Forkortelse for filter", "En samling av tegnene 0 og 1"]
    ,
    ["Du skriver /, også fargekoden", "Du skriver #, også farge korden", "Du skriver (), også farge korden", "Du skriver $, også fargekoden"]
  ];

  // Array av riktige svar
  var answers = [0, 2, 1, 0, 3, 1];

  function startQuiz() {
    var html = "";
    for (var i = 0; i < questions.length; i++) {
      html += "<h3>" + questions[i] + "</h3>";
      for (var j = 0; j < options[i].length; j++) {
        html += "<label><input type='radio' name='q" + i + "' value='" + j + "'> " + options[i][j] + "</label><br>";
      }
    }
    html += "<br><button onclick='checkAnswers()'>Se resultat</button>";
    document.getElementById("quiz").innerHTML = html;
  }

  function checkAnswers() {
var score = 0;
for (var i = 0; i < questions.length; i++) {
  var radios = document.getElementsByName("q" + i);
  for (var j = 0; j < radios.length; j++) {
    if (radios[j].checked) {
      if (radios[j].value == answers[i]) {
        score++;
      }
      break;
    }
  }
}
var scoreMessage;
if (score == questions.length) {
  scoreMessage = "Gratulerer! Du fikk full pot";
} else if (score >= questions.length / 2) {
  scoreMessage = "Bra jobba, du besto! Prøv igjen for full pot";
} else {
  scoreMessage = "Prøv igjen, du klarer det!";
}
var html = "<h2>Du fikk " + score + "/" + questions.length + "</h2>";
html += "<p>" + scoreMessage + "</p>";
document.getElementById("score").innerHTML = html;
}