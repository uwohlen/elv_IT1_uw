let button = document.getElementById("buttonId")
let quizEL = document.getElementById("idQuiz")
let formEl = document.getElementById("idForm");
let toggleEl = document.getElementById("idToggle")
let tableEl = document.getElementById("idTable")

let navnEl = document.getElementById("idNavn")
let poengEl = document.getElementById("idPoeng")

let navn = navnEl.value

console.log(navn)

//toggleEl.addEventListener("click", endre)

let quizTekst = ""
let quiz = [
    {
        spm: "Hvor mange verdier kan lagres i en byte (svar med doobelklikk)",
        alt: ["365", "256", "28540"],
        fasit: [0, 1, 0,],
        media: "<img src='media/Byte.jpg' alt='Byte'>",
        type: "radio"
    },
    {
        spm: "Hvilke tall er dette i titallsystemet?",
        alt: ["10", "6", "5"],
        fasit: [0, 0, 1,],
        media: "<img src='media/Tall.png' alt='101'>",
        type: "radio"
    },
    {
        spm: "Hva er den vanligste måten å representere farger på skjermer?",
        alt: ["CMYK", "RGB", "XYZ"],
        fasit: [0, 1, 0,],
        media: " ",
        type: "radio"
    },
    {
        spm: "Gir punktgrafikk ett bilde som kan forstørres uten å komprimere bildekvaliteten",
        alt: ["NEI", "JA"],
        fasit: [1, 0],
        type: "radio"
    }

]
let i = 0
let poeng = 0;
let teller = 0;
let sjekkbokser;
function next() {
    if(teller < quiz.length){
    if (teller > 0) {
        for (let k = 0; k < sjekkbokser.length; k++) {
            if (sjekkbokser[k].checked) {
                poeng += Number(sjekkbokser[k].value);
            }
        }
    }
    quizTekst = ""
    quizTekst += "<a href='index2.php'><button id='idTilbake'>Tilbake</button></a>"
    quizTekst += "<div id='child1'>"
    quizTekst += "<p>" + quiz[i].spm + "</p>";
    quizTekst += "</div>"

    if(quiz[i].media !== undefined){
        quizTekst += "<div id='child2'>"
        quizTekst += quiz[i].media
        quizTekst += "</div>"
    }
    
    quizTekst += "<div id='child3'>"
    for (let j = 0; j < quiz[i].alt.length; j++) {
        quizTekst += "<div>"
        quizTekst += "<input id='id" + i + j + "' class='alt' type='" + quiz[i].type + "' name='svaralternativer" + i + "' value=" + quiz[i].fasit[j] + "><label for='id" + i + j + "'>" + quiz[i].alt[j] + "</label>";
        quizTekst += "</div>"

    }
    quizTekst += "</div>"
    i++
    quizEL.innerHTML = quizTekst
    console.log(poeng)
    teller +=1
    sjekkbokser = document.getElementsByClassName("alt");


    
//Delvis lånt fra https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/


    document.querySelectorAll('.alt').forEach(item => {
        item.addEventListener('click', event => {
            if(!event.target.classList.contains("Clicked")){
                console.log("clicked")
                remove()
                event.target.classList.add("Clicked")
            }else next()
        })
      })
    
    }else ferdig()
}

console.log("hei")

next()


function remove(){
    for(let i = 0; i < sjekkbokser.length;i++){
        sjekkbokser[i].classList.remove("Clicked")
    }
}
function ferdig(){
    console.log("kjøres")
    for (let k = 0; k < sjekkbokser.length; k++) {
        if (sjekkbokser[k].checked) {
            poeng += Number(sjekkbokser[k].value);
        }
    }
    quizTekst = "du fikk " + poeng + " av 4 mulige poeng"
    quizTekst += "<br>"
    quizTekst += check(poeng)
    let formtekst = "<input type='hidden' name='navnfelt' value='" + navn + "'><input type='hidden' name='poengfelt' value ='" + poeng + "'><input type='submit' name='lagrePoeng' value='Lagre resultatet'>";
    console.log(formtekst);
    console.log(formEl);
    formEl.innerHTML = formtekst;
    quizEL.innerHTML = quizTekst
}

function check(poeng){
    if(poeng === 3){
        return "du kan en del om datamaskiner"
    }
    else if(poeng === 4){
        return "du er et data geni"
    }
    else if(poeng === 2){
        return "du kan litt om datamaskiner"
    }
    else if(poeng === 1){
        return "du kan lite om datamaskiner"
    }
    else if(poeng === 0){
        return "du kan ingenting om datamaskiner"
    }
    else{
        return "wow, du lurte programmet"
    }
}

/*
function endre(){
    console.log(tableEl.style.display)
    if(tableEl.style.display === "none"){
        tableEl.style.display = "inline-block"
        toggleEl.innerHTML = "skjul"
    }
    else{
        tableEl.style.display = "none"
        toggleEl.innerHTML = "vis"
    }
}
*/




