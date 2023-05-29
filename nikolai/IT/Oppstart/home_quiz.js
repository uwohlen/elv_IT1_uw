let x = 0; // gir variabelen x verdien 0
let retning = false // gjør at variabelen retning er false
let interval = setInterval(draw_img, 10); //setter et tids interval der hver tiende millisekund så skjer funksjonen draw_img
function draw_img() { //definerer funksjonen draw_img
    if (x > window.innerWidth-270) { //når x er større enn bredden til nettsiden -270 så er retning lik true
        retning = true;
}
    if (x < 0) { //når x er mindre enn 0 så er retning lik false
        retning = false;
}
    if (retning == true) { //når retning er lik true så subtraherer den 5
        x-=5;
}
    else { //ellers så plusser den på 5
        x+=5;
}
document.getElementById("bilde1").style.marginLeft = x+"px"; //
}
// Cookies

let navnEl = document.getElementById("idNavn"); //lager variabelen navnEl

function okfunk() { //lagre funk er funksjonen som skal lagre navnet ditt på pcen
    document.getElementById("navn").style.display="block"
    document.getElementById("avsluttbtn").style.display="inline"
    document.getElementById("okbtn").style.display="none"
}

function lagrenavn(event){
    if (event.keyCode === 13) { //når man presser ned "enter" knappen lagrer pcen navnet til Quiz nettsiden
        localStorage.setItem("navn",navnEl.value);
    }
}
navnEl.addEventListener("keydown", lagrenavn); //gjør at gjør at når man presser ned en knapp så aktiveres lagrefunk

function avsluttfunk() { //funksjonen som gjør at pcen ikke lagrer navnet ditt
    document.getElementById("avsluttbtn").style.display="none"
    document.getElementById("navn").style.display="none"
    document.getElementById("okbtn").style.display="inline"
    localStorage.removeItem("lagrefunk");
    localStorage.removeItem("Quiz_datamaskin.html");
    cookieEl.style.display = "block";
    quizEl.style.display = "none";
    linkEl.style.display = "none";
    heiEl.innerHTML = "";
    lockEl.innerHTML = "&#128274";
}