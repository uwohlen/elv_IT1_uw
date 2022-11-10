let knapp1 = document.getElementById("en")
let knapp2 = document.getElementById("to");
let knapp3 = document.getElementById("tre")
let cont = document.getElementById("cont")
let contB = cont.getElementsByTagName("div")


//finne vidden til knappene
console.log(document.getElementById("knappS").offsetWidth)


knapp1.addEventListener("click", en)
knapp2.addEventListener("click", to)
knapp3.addEventListener("click", tre)

knapp3.style.backgroundColor = "#5d5d5d"

function en() {
    for (let i = 0; i < contB.length; i++){
        contB[i].style.flexBasis = "100%";
    }
    knapp1.style.backgroundColor = "#5d5d5d"
    knapp2.style.backgroundColor = ""
    knapp3.style.backgroundColor = ""
}
function to() {
    for (let i = 0; i < contB.length; i++) {
        contB[i].style.flexBasis = "50%";
        contB[i].style.marginBottom = "2.5%"
    }
    knapp2.style.backgroundColor = "#5d5d5d"
    knapp1.style.backgroundColor = ""
    knapp3.style.backgroundColor = ""
}
function tre() {
    for (let i = 0; i < contB.length; i++) {
        contB[i].style.flexBasis = "33.3333%";
        contB[i].style.marginBottom = "1.75%"
    }
    knapp3.style.backgroundColor = "#5d5d5d"
    knapp1.style.backgroundColor = ""
    knapp2.style.backgroundColor = ""
}
