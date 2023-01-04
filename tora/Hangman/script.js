
let løsningsord = [
    "javascript",
    "variabler",
    "hovedkort",
    "arbeidsminne",
    "funksjoner",
    "lister",
    "elementer",    
    "dokumenter",
    "hendelseobjekt",
    "brukerinput",
    "koding",
    "skjermkort",
    "operator",
    "konsoll",
    "informasjonsteknologi",
    "algoritmer",
    "objekter",
    "prosedyrer",
    "datamaskin",
    "prosessor",
    "programvare",
    "nettverk",
    "internett",
    "gigabyte",
    "megabyte",
    "tallsystemer",
    "copyright",
    "html"
]


startknappEl = document.getElementById("startknapp");
sjanserEl=document.getElementById("sjanser");
bokstavEl = document.getElementById("bokstav");
riktigeEl = document.getElementById("riktige");
testEl = document.getElementById("test");
gjettedeEl = document.getElementById("gjettede");
poengEl = document.getElementById("poeng");
mulige_poengEl = document.getElementById("mulige_poeng");
velkommenEl = document.getElementById("velkommen")
igjenEl = document.getElementById("igjen")
igjenblokkEl = document.getElementById("igjenblokk")

startknappEl.addEventListener("click",startfunk);
startknappEl.addEventListener("click",tegnGalge);
let canvas = document.getElementById("mittCanvas");
let ctx = canvas.getContext("2d");
const minimumpoeng = -5

let sjanser=7
sjanserEl.innerHTML= "Antall sjanser igjen: "+ sjanser;
let løsning=(løsningsord[Math.floor(Math.random()*løsningsord.length)]).toUpperCase();
let riktigeBokstaver= []
let brukteBokstaver = []


let i=0
while(i <løsning.length){
    riktigeBokstaver.push("_");
    i++;
}
let seiere = 0;
let tap = 0;

poengEl.innerHTML = "Seiere: " + seiere;
mulige_poengEl.innerHTML = "Tap: "+ tap;
velkommenEl.innerHTML = "Velkommen til hangman. Her skal du gjette et ord, men du må være varsom for å ikke bli hengt";

igjenEl.addEventListener("click",igjenFunk)
function igjenFunk(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sjanser=7
    løsning=(løsningsord[Math.floor(Math.random()*løsningsord.length)]).toUpperCase();
    riktigeBokstaver= []
    brukteBokstaver = []
    i = 0
    while(i <løsning.length){
        riktigeBokstaver.push("_");
        i++;
    }
    gjettedeEl.innerHTML="Gjettede bokstaver:"+ brukteBokstaver
    riktigeEl.innerHTML="riktige bokstaver: "+ riktigeBokstaver
    sjanserEl.innerHTML="Antall sjanser igjen: " + sjanser
    igjenblokkEl.style.display="none"
    tegnGalge();
    
}

riktigeEl.innerHTML="riktige bokstaver:"+ riktigeBokstaver
testEl.addEventListener("click",mottaBokstav)
bokstavEl.addEventListener("keydown",lagrefunk);
        function lagrefunk(event) {
            if (event.keyCode === 13) {
                mottaBokstav();
         }
        }
function startfunk(){
    document.getElementById("hoved").style.display="block"
    document.getElementById("start").style.display="none"
    
}
function mottaBokstav(){
    let gjettetBokstav=bokstavEl.value.toUpperCase();
    bokstavEl.value=''
    bokstavEl.innerHTML=bokstavEl.value
    if(gjettetBokstav.length>1){
        alert("velg kun 1 bokstav om gangen!")
    }
    
    else if(brukteBokstaver.indexOf(gjettetBokstav)=== -1){
        brukteBokstaver.push(gjettetBokstav)

        if(løsning.indexOf(gjettetBokstav) === -1){
            sjanser -=1
        }
        else{
            for(let p = 0; p<løsning.length;p++){
                if(løsning[p] === gjettetBokstav){
                    riktigeBokstaver[p]=gjettetBokstav
                }
            }
        }
    brukteBokstaver.sort()
    gjettedeEl.innerHTML="Gjettede bokstaver:"+ brukteBokstaver
    riktigeEl.innerHTML="riktige bokstaver: "+ riktigeBokstaver
    sjanserEl.innerHTML="Antall sjanser igjen: " + sjanser
    


    }
    else{
        alert("Du har allerede prøvd denne bokstaven")
    }
    if( sjanser===6 ){
        tegnHode();
    } 
    else if(sjanser===5){
        tegnHals();
    }
    else if(sjanser===4){
        tegnVenstreArm();
    }
    else if(sjanser===3){
        tegnHøyreArm();
    }
    else if(sjanser===2){
        tegnKropp();
    }
    else if(sjanser===1){
        tegnHøyreBen();
    }
    else if(sjanser===0){
        tegnVenstreBen();
        tap++;
        mulige_poengEl.innerHTML = "Tap: "+ tap;
        document.getElementById("taper").innerHTML="Ånei du tapte";
        igjenblokkEl.style.display="block"; 
        document.getElementById("riktig_ord").innerHTML="riktig ord var "+løsning

    }
    if(riktigeBokstaver.indexOf("_")===-1){
        document.getElementById("igjenblokk").style.display="block";
        document.getElementById("taper").innerHTML="Bravo du klarte det";
        seiere++;
        poengEl.innerHTML="seiere: "+seiere;
        document.getElementById("riktig_ord").innerHTML=""
    }

    
}

function tegnGalge(){
    ctx.beginPath();
    ctx.moveTo(50,280);
    ctx.lineTo(50,265);
    ctx.lineTo(350,265);
    ctx.lineTo(350,280);
    ctx.moveTo(200,265);
    ctx.lineTo(200,10);
    ctx.lineTo(350,10)
    ctx.lineTo(350,30)
    ctx.lineWidth=3;
    ctx.stroke();
}
function tegnHode(){
    ctx.beginPath();
    ctx.arc(350,50,20,0,Math.PI*2)
    ctx.stroke();
}
function tegnHals(){
    ctx.beginPath();
    ctx.moveTo(350,70);
    ctx.lineTo(350,90)
    ctx.stroke();
}
function tegnVenstreArm(){
    ctx.beginPath();
    ctx.moveTo(350,90);
    ctx.lineTo(300,140)
    ctx.stroke();
}
function tegnHøyreArm(){
    ctx.beginPath();
    ctx.moveTo(350,90);
    ctx.lineTo(400,140)
    ctx.stroke();
}
function tegnKropp(){
    ctx.beginPath();
    ctx.moveTo(350,90);
    ctx.lineTo(350,190)
    ctx.stroke();
}
function tegnVenstreBen(){
    ctx.beginPath();
    ctx.moveTo(350,190);
    ctx.lineTo(300,240)
    ctx.stroke();
}
function tegnHøyreBen(){
    ctx.beginPath();
    ctx.moveTo(350,190);
    ctx.lineTo(400,240)
    ctx.stroke();
}








