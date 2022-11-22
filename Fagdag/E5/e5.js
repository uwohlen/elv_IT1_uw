let poeng = 0;
localStorage.poengIT1fagdag = poeng;


let navnEl = document.getElementById("idNavn");
navnEl.addEventListener("keydown", lagreNavn);
function lagreNavn(event) {
    
    if (event.keyCode === 13) {
        console.log(event.keyCode)
        localStorage.setItem("navnIT1fagdag", navnEl.value)
    }
}

if (localStorage.getItem("navnIT1fagdag") !== null) {
    navnEl.innerHTML = " " + localStorage.getItem("navnIT1fagdag");
}

//localStorage.levelIT1fagdag = "E5"

let levelEl = document.getElementById("idLevel")
levelEl.addEventListener("click", levelHopp)

function levelHopp() {
    if (localStorage.getItem("levelIT1fagdag") !== undefined) {
       let level = localStorage.getItem("levelIT1fagdag") + "/index.html";
        window.open(level, target="_self");
    }
}

if (localStorage.getItem("levelIT1fagdag") !== undefined) {
    levelEl.classList.add("levelBtn");
    levelEl.style.display = "block";
}



