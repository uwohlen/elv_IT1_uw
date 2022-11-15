let x = 0;
let retning = false
let interval = setInterval(draw_img, 10);
function draw_img() {
    if (x > window.innerWidth-270) {
        retning = true;
}
    if (x < 0) {
        retning = false;
}
    if (retning == true) {
        x-=5;
}
    else {
        x+=5;
}
document.getElementById("bilde1").style.marginLeft = x+"px";
}
// Cookies

let navnEl = document.getElementById("idNavn");
navnEl.addEventListener("keydown",lagrefunk);
function lagrefunk(event) {
//console.log(event.keyCode); <marquee behaviour="scroll" direction="down"></marquee>
//console.log(navnEl.value);

if (event.keyCode === 13) {
    localStorage.setItem("Quiz_datamaskin.html",navnEl.value);
}
}
function avsluttfunk() {
    localStorage.removeItem("lagrefunk");
    localStorage.removeItem("Quiz_datamaskin.html");
    cookieEl.style.display = "block";
    quizEl.style.display = "none";
    linkEl.style.display = "none";
    heiEl.innerHTML = "";
    lockEl.innerHTML = "&#128274";
}