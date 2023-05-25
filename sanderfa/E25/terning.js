let BTN = document.querySelector("#BTN");
let trillet = document.querySelector("#tallet");
let svar = document.querySelector("#svar");
let tall = 0;
let nesteSpillContainer = document.querySelector("#nesteSpillContainer");
let nesteSpill = document.querySelector("#nesteSpill");

function trillTerning() {
  BTN.remove();
  tall = Math.floor(Math.random() * 6) + 1;
  if (tall >= 4) {
    trillet.innerHTML = tall;
    svar.innerHTML = "Du har vunnet";
    nesteSpill.innerHTML += " Du går videre";
    document.getElementById("linkTilNySide").href = "/Fagdag/E26/index.html"; //Legg til vinnerlink
  } else {
    trillet.innerHTML = tall;
    svar.innerHTML = "Du har tapt.";
    nesteSpill.innerHTML += " Du må starte på nytt";
    document.getElementById("linkTilNySide").href = "../index.html"; //Legg til taperlink
  }
  nesteSpillContainer.style.display = "block";
}

BTN.addEventListener("click", trillTerning);