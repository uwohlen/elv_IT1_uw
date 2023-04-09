let spørsmåls_divEl = document.getElementById("id_spørsmåls_div")
let ferdigEl = document.getElementById("id_score")
let svar = document.getElementsByClassName("class_spørsmåls_svar")
let poengEl = document.getElementById("id_poeng")
let totaltEl = document.getElementById("id_total")

let quiz = [
    {
        media: [],/* [hva i media,media type,alt-tekst,høyde,bredde] */
        spørsmål: "Hvilke tallsystem benytter CPU og andre lignende komponenter?",
        svar_alternativer: [["titall", -1], ["Hexadesimal", -1], ["totall", 1], ["Brigske logaritmer", -1]],
        svar_måte: "radio",
    },
    {
        media: [],
        spørsmål: "Hvor mange bits i en byte?",
        svar_alternativer: [["8", 1], ["16", -1], ["1", -1], ["4", -1]],
        svar_måte: "radio",
    },
    {
        media: [],
        spørsmål: "Hvordan representeres 0 og 1 i en CPU",
        svar_alternativer: [["Strøm av og strøm på", 1], ["Som 0 og 1", -1]],
        svar_måte: "radio",
    },
    {
        spørsmål: "Hvordan gjør datamaskinen at bildene tar mindre plass",
        svar_alternativer: [["Kutter bilde", -1], ["Gjør det sort hvit", -1], ["Gjør det om til vektor grafikk", -1], ["Komprimer det", 1]],
        svar_måte: "radio",
    },
    {
        media: [],
        spørsmål: "Hva er stemmer med å komprimere",
        svar_alternativer: [["Informasjon blir fjernet", 1 / 3], ["Tar mindre plass", 1 / 3], ["Komprimering kan gjøres forskjellig", 1 / 3], ["Ødelegger bildet", -1]],
        svar_måte: "checkbox",
    },
]
let poeng = 0
let nytt_spørsmål = "";
let j = 0

function nytt_spørsmålfunk(nr) {
    nytt_spørsmål = "<div class='class_spørsmål' id='id_spørsmål" + nr + "'>"

    if (quiz[nr].media !== undefined) {
        nytt_spørsmål += "<" + quiz[nr].media[1] + " class='class_spørsmåls_bilde' id='id_bilde" + nr + "' src='media/" + quiz[nr].media[0] + "' alt='" + quiz[nr].media[2] + "' height='" + quiz[nr].media[3] + "' width='" + quiz[nr].media[4] + "'>"
    }

    nytt_spørsmål += "<h2>" + quiz[nr].spørsmål + "</h2>"

    for (let i = 0; i < quiz[nr].svar_alternativer.length; i++) {
        nytt_spørsmål += "<label class='class_svar' id='id_spørsmål" + nr + "_valg" + i + "'><input class='class_spørsmåls_svar' name='" + quiz[nr].svar_måte + "" + nr + "' type='" + quiz[nr].svar_måte + "' value=" + quiz[nr].svar_alternativer[i][1] + ">" + quiz[nr].svar_alternativer[i][0] + "</label><br></br>"
    }
    if (j < quiz.length - 1) {
        nytt_spørsmål += "<button class='cl_btn' id='id_spørsmåls_knapp' onclick='poengfunk(); nytt_spørsmålfunk(j)'>Neste spørsmål</button>"
    }
    else {
        nytt_spørsmål += "<button class='cl_btn' id='id_spørsmåls_knapp' onclick='poengfunk(); ferdigfunk()'>Ferdig</button>"
    }
    nytt_spørsmål += "</div>"
    spørsmåls_divEl.innerHTML = nytt_spørsmål
    setTimeout(() => { window.location.href = "index.html#id_spørsmåls_knapp"; }, 5)
    j++
}

function totalFunk(){
    let total = 0
    for (let nr = 0; nr < Number(quiz.length); nr++) {
        for (let i = 0; i < Number(quiz[nr].svar_alternativer.length); i++) {
            if (0 < quiz[nr].svar_alternativer[i][1]) {
                total += Number(quiz[nr].svar_alternativer[i][1])*10
            }
        }
    }
    return Math.round(total)/10
}

function ferdigfunk() {
    ferdigEl.style.display = "block"
    window.location.href = "index.html#id_score"
    poengEl.innerHTML = poeng
    totaltEl.innerHTML = totalFunk()
    scorefunk()
    spørsmåls_divEl.innerHTML ="<button class='cl_btn' onclick='reloadfunk()'>Spill på nytt</button>"
}

function reloadfunk(){location.reload()}

function poengfunk() {
    let midlertidig=0
    for (var k = 0; k < svar.length; k++) {
        if (svar[k].checked) {
            midlertidig += Number(svar[k].value)*10;
            console.log(midlertidig)
        }
    }
    poeng+=Math.round(midlertidig)/10
    console.log(poeng)
}
nytt_spørsmålfunk(j)

function sorterToArrays(poengli,navnli) {
    let temp1 = []; 
    let temp2 = [];

    antall = poengli.length

    let i = 0;

    while (i < antall) {
        let j = 0;
        let storst = poengli[j];
        let indeks = j;
        j++;
        while (j < poengli.length) {
            if (poengli[j] > storst) {
                storst = poengli[j];
                indeks = j;
            }
            j++;
        }
        temp1.push(storst); 
        temp2.push(navnli[indeks]);

        poengli.splice(indeks,1);
        navnli.splice(indeks,1);

        i++;
    }
    /* Bli kvitt dobble navn */
    return [temp1, temp2]
}

function scorefunk(){
    let navn = "";
    let navneliste = [];
    let poengliste = [];
    let htmltekst = "";

    if (localStorage.getItem("lagretNavnForQuiz1") !== null) {
        navn = localStorage.getItem("lagretNavnForQuiz1");
    }
    
    if (localStorage.getItem("lagretHighScoreForQuiz1") === null) {
        navneliste.push(navn);
        poengliste.push(poeng);
        let resultat = [poengliste,navneliste];
        localStorage.setItem("lagretHighScoreForQuiz1",JSON.stringify(resultat)); 
    }
    else {
        let resultat = JSON.parse(localStorage.getItem("lagretHighScoreForQuiz1"));
        poengliste = resultat[0];
        navneliste = resultat[1];
        poengliste.push(poeng);
        navneliste.push(navn);
        resultat = sorterToArrays(poengliste,navneliste);
        poengliste = resultat[0];
        navneliste = resultat[1];
        localStorage.setItem("lagretHighScoreForQuiz1",JSON.stringify(resultat)); 
    }

    let i = 0;

    while (i < navneliste.length && i < 5) {
        htmltekst += "<li><span class='high'>" + navneliste[i] + "</span>:<span class='high'>" + poengliste[i] + "</span></li>";

        i++;
    }

    ferdigEl.innerHTML += htmltekst;
}