const FARGE_RIKTIG = "#90EE90";
const FARGE_FEIL = "#FFCCCB";

const DIV_SPSM = document.getElementById("spsm-div");

const DIV_ALT = document.getElementById("alt-div");
const P_TEKST_UT = document.getElementById("tekst-ut");
const BUTTON_SVAR_AVGITT = document.getElementById("svar-avgitt");
const BUTTON_FORTSETT = document.getElementById("fortsett");
BUTTON_FORTSETT.style.display = "none";

const DIV_BRUKER = document.getElementById("bruker-div");

const DIV_RESULTAT = document.getElementById("resultat");
DIV_RESULTAT.style.display = "none";

BUTTON_FORTSETT.addEventListener("click", fortsett_knapp);
BUTTON_SVAR_AVGITT.addEventListener("click", svar_avgitt);

let spsm_indeks = 0;
let feil_ord = [];
let poeng_total = 0;
let maks_riktige = 0;

class Spsm {
    constructor(tekst, alt) {
        this.tekst_arr = tekst.split("{}");
        this.alt = alt;
        this.bruker_svar = {};
    }
    hent_tekst_html() {
        let resultat = this.tekst_arr[0];
        for (let i = 1; i < this.tekst_arr.length; i++) {
            let alt_i = i - 1;
            resultat += "<div class='dropp-boks' data-riktig-alt='alt-" + alt_i + "' ondrop='dropp(event)' ondragover='godta_dropp(event)'>&nbsp</div>";
            resultat += this.tekst_arr[i];
        }
        return resultat;
    }
    hent_alt_html() {
        let alternativer_html = [];
        for (let i = 0; i < this.alt.length; i++) {
            let temp_html = "";
            temp_html += "<div class='dropp-boks' data-riktig-alt='' ondrop='dropp(event)' ondragover='godta_dropp(event)'>";
            temp_html += "   <div class='alt' draggable='true' ondragstart='dra_start(event)' id='alt-" + i + "'>" + this.alt[i] + "</div>";
            temp_html += "</div>";
            alternativer_html.push(temp_html);
        }

        let resultat = "";
        while (alternativer_html.length !== 0) {
            let i = tilfeldig_tall(0, alternativer_html.length - 1);
            resultat += alternativer_html[i];
            alternativer_html = fjern_indeks(alternativer_html, i);
        }
        return resultat;
    }
    hent_bruker_svar_html() {
        let resultat = this.tekst_arr[0];
        for (let i = 1; i < this.tekst_arr.length; i++) {
            let alt_i = i - 1;
            let svar = this.bruker_svar["alt-" + alt_i];
            resultat += "<div class='dropp-boks' style='background-color:";
            if (svar === undefined) {
                resultat += FARGE_FEIL + ";'>&nbsp</div>";
            } else {
                resultat += (svar === this.alt[alt_i] ? FARGE_RIKTIG : FARGE_FEIL) + ";'>";
                resultat += svar;
                resultat += "</div>";
            }
            resultat += this.tekst_arr[i];
        }
        return resultat;

    }
}

function godta_dropp(event) {
    event.preventDefault();
}

function dra_start(event) {
    event.dataTransfer.setData("alt-id", event.target.id);
}

function dropp(event) {
    event.preventDefault();
    let alt_id = event.dataTransfer.getData("alt-id");
    let alt = document.getElementById(alt_id);
    let gammel_parent = alt.parentNode;

    let alt_html = gammel_parent.innerHTML;

    //event.target kan enten være boksen eller alternativet:
    let ny_parent = event.target.className === "dropp-boks" ? event.target : event.target.parentNode;

    gammel_parent.innerHTML = ny_parent.innerHTML;
    ny_parent.innerHTML = alt_html;
}

function svar_avgitt() {
    let poeng = evaluer_svar();
    P_TEKST_UT.innerHTML = poeng + " av " + sporsmalene[spsm_indeks].alt.length + " riktige";
    BUTTON_FORTSETT.style.display = "unset";
    BUTTON_SVAR_AVGITT.style.display = "none";
}

function fortsett_knapp() {
    BUTTON_FORTSETT.style.display = "none";
    BUTTON_SVAR_AVGITT.style.display = "unset";
    spsm_indeks++;
    if (spsm_indeks < sporsmalene.length) {
        vis_sporsmal();
    } else {
        vis_resultat();
    }
}

function vis_sporsmal() {
    P_TEKST_UT.innerHTML = "Dra tekstboksene til rett sted";
    DIV_SPSM.innerHTML = sporsmalene[spsm_indeks].hent_tekst_html();
    DIV_ALT.innerHTML = sporsmalene[spsm_indeks].hent_alt_html();
}

function evaluer_svar() {
    let alternativer = document.getElementsByClassName("alt");
    let poeng = 0;
    for (alt of alternativer) {
        let parent = alt.parentNode;
        let riktig_alt = parent.dataset.riktigAlt;
        if (riktig_alt !== "") {
            sporsmalene[spsm_indeks].bruker_svar[riktig_alt] = alt.innerHTML;
        }
        if (riktig_alt === alt.id) {
            poeng++;
            parent.style.backgroundColor = FARGE_RIKTIG;
        } else {
            feil_ord.push(alt.innerHTML);
            parent.style.backgroundColor = FARGE_FEIL;
        }
    }
    poeng_total += poeng;
    maks_riktige += alternativer.length;
    return poeng;
}

function vis_resultat() {
    DIV_SPSM.style.display = "none";
    DIV_ALT.style.display = "none";
    DIV_BRUKER.style.display = "none";

    let resultat = "";
    let andel_riktig = poeng_total / maks_riktige;

    resultat += "<h2>";
    if (andel_riktig === 1) {
        resultat += "Veldig imponerende!";
    } else if (andel_riktig > 0.8) {
        resultat += "Godt jobbet!";
    } else if (andel_riktig > 0.5) {
        resultat += "Du klarte det meste";
    } else {
        resultat += "Du burde nok øve mer...";
    }
    resultat += "</h2>";

    resultat += "<p>Du fikk " + poeng_total + " riktige av " + maks_riktige + " mulige.<p>";

    if (feil_ord.length !== 0) {
        //opplisting_funk fra ../funksjoner.js
        resultat += "<p>Ordene du kanskje burde øve på er " + opplisting_funk(feil_ord) + ".</p>";
    }

    for (spsm of sporsmalene) {
        resultat += "<div class='quiz-tekst-liten'>";
        resultat += spsm.hent_bruker_svar_html();
        resultat += "</div>";
    }

    DIV_RESULTAT.innerHTML = resultat;
    DIV_RESULTAT.style.display = "unset";
}

sporsmalene = [
    new Spsm(
        "En byte består av åtte {}. Med en byte kan vi representere en bokstav i formatet {}. Vi bruker {} for å gjøre binære tall mer praktiske å lese.",
        ["bits", "UTF-8", "heksadesimaler"]
    ),
    new Spsm(
        "Hvis vi lager et bilde med {} kan det forstørres så mye man vil uten å bli uklart slik et {}-bilde vil bli. For å gjøre filene mindre kan vi bruke {}. Dette finnes det mange ulike metoder for dette, men et eksempel er run-lenght {}.",
        ["vektorgrafikk", "punktgrafikk", "komprimering", "encoding"]
    ),
    new Spsm(
        "En {} er som regel raskere enn en {}. Til gjengjeld vil sistnevnte gi deg mer {} for pengene. Vi bruker {} for å holde styr på hvilket format en fil er i.",
        ["solid state drive", "HDD", "lagringsplass", "filendelser"]
    ),
];

vis_sporsmal();