const poengEl=document.getElementById("idPoeng")
const body1=document.getElementById("body1")
function starter() {
    console.log("hei")
    document.getElementById("pistolDiv").style.display = "block";
    document.getElementById("start1").style.display = "none";
    body1.style.cursor="crosshair"
}

let poeng= 0
function kill() {
    if (poeng < 20) {
        poeng++;
    } 
    if (poeng == 20) {
        console.log("heihei")
        document.getElementById("nestespill").style.display="block";
    }
    console.log("Hei")
    poengEl.innerHTML = "Poeng: " + poeng;
}

/*
function bangfunk (){
    let tid1 = setTimeout(() =>{
        document.getElementById("BangImg").style.display="block"
    }, 100)
    */
   /*
let ping= false
function miss(){
let hearth= 4
    if (hearth=3 && ping==true) {
        document.getElementById("HjerteImg3").style.display="none"
        hearth--;
    }
    else if (hearth=2){
        document.getElementById("HjerteImg2").style.display="none"
        hearth--;
    }
    else if (hearth=1){
        document.getElementById("HjerteImg1").style.display="none"
        hearth--;
    }
    else {
        alert="gameover"
    }
}
*/