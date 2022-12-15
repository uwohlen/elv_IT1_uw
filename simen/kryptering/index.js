let buttonEl = document.getElementById("buttonId");
let toggleEl = document.getElementById("toggleId");
let inputEl = document.getElementById("idInput")
let svarEl = document.getElementById("svarId")
buttonEl.addEventListener("click", dekrypter)
toggleEl.addEventListener("click", krypter)


const alphabet = 'abcdefghijklmnopqrstuvwxyzæøå';


let bokstav;
let letter;

function dekrypter() {
    let lost = ""
    let tekst = inputEl.value
    for (let x = 0; x < tekst.length; x++) {
        let bokstav = tekst[x]

        if (bokstav !== " " && bokstav !== "a") {

            for (let i = 0; bokstav !== alphabet[i]; i++) {
                letter = alphabet[i]
            }
            lost = lost.concat(letter);

        }else if(bokstav === "a"){
            lost = lost.concat("å");
        }else lost = lost.concat(" ");


    }
    svarEl.innerHTML = lost
}

function krypter() {
    let lost = ""
    let tekst = inputEl.value
    for (let x = 0; x < tekst.length; x++) {
        let bokstav = tekst[x]

        if (bokstav !== " " && bokstav !== "å") {

            for (let i = -1; bokstav !== alphabet[i]; i++) {
                letter = alphabet[i+2]
            }
            lost = lost.concat(letter);

        }else if(bokstav === "å"){
            lost = lost.concat("a");
        }else lost = lost.concat(" ");


    }
    svarEl.innerHTML = lost
}