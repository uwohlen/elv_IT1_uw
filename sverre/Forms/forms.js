const FORM = document.getElementById("form");
const P_TILBAKEMELDING = document.getElementById("tilbakemelding");

FORM.addEventListener("submit", send_inn);

function send_inn(event) {
    event.preventDefault();

    let interesser = [];
    for (knapp of FORM.interesser.getElementsByTagName("input")) {
        if (knapp.checked) {
            interesser.push(knapp.dataset["interesse"]);
        }
    }

    let tekst_ut = "Hei " + FORM.navn.value + " (" + FORM.alder.value + "). ";
    if (interesser.length !== 0) {
        //opplisting_funk fra funksjoner.js
        let interesser_tekst = opplisting_funk(interesser);
        tekst_ut += "Kult at du liker " + interesser_tekst + "! ";
    }
    tekst_ut += "Din kontaktlærer i " + FORM.klasse.value + " har id-en " + FORM.kontaktlaerer.value + ". ";
    P_TILBAKEMELDING.innerText = tekst_ut;
}