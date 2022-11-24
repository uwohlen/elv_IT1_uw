const poengEl=document.getElementById("idPoeng")
function starter() {
    console.log("hei")
    document.getElementById("pistolDiv").style.display = "block";
    document.getElementById("start1").style.display = "none";
}

let poeng= 0
function kill() {
    console.log("Hei")
    poeng++;
    poengEl.innerHTML = "Poeng: " + poeng;
}
if (poeng = 20) {
    console.log("morraknuller")
    document.getElementById("nestespill").style.display="block";
}
