
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
let løsningbeta=løsningsord[Math.floor(Math.random()*løsningsord.length)]
let løsning=løsningbeta.toUpperCase();
document.getElementById("riktig_ord").innerHTML="riktig ord var "+løsning
let riktigeBokstaver= []
let brukteBokstaver = []

let i=0
while(i <løsning.length){
    riktigeBokstaver.push("_");
    i++;
}
let poeng = 0;
let mulige_poeng = 5;
let navn=" "
if (localStorage.poengIT1fagdag !== undefined) {
    navn = localStorage.navnIT1fagdag
}
if (localStorage.poengIT1fagdag !== undefined) {
    poeng = Number(localStorage.poengIT1fagdag);
}
poengEl.innerHTML = "Totalpoeng: " + poeng;
mulige_poengEl.innerHTML = "Mulige poeng: "+ mulige_poeng
velkommenEl.innerHTML = "Velkommen til hangman, "+navn+ ". Her skal du gjette et ord, men du må være varsom for å ikke bli hengt. Hvis du gjetter feil bokstav 7 ganger taper du. Hvis du klarer spillet på første forsøk får du 5 poeng, på andre får du 0 poeng og på tredje eller dårligere får du -5 poeng. Fra tidligere arkadespill har du "+poeng+" poeng";

igjenEl.addEventListener("click",igjenFunk)
function igjenFunk(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sjanser=7
    løsningbeta=løsningsord[Math.floor(Math.random()*løsningsord.length)]
    løsning=løsningbeta.toUpperCase();
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
    document.getElementById("riktig_ord").innerHTML="riktig ord var "+løsning
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
        igjenblokkEl.style.display="block";
        if(mulige_poeng > minimumpoeng){
            mulige_poeng-=5
            mulige_poengEl.innerHTML="mulige poeng:"+mulige_poeng
            

        }
        else{
            poeng=mulige_poeng
            document.getElementById("taper").style.display="block"
            document.getElementById("taper").innerHTML="Du tapte 3 ganger og kan derfor velge å gå til neste spill. Du fikk -5 poeng i hangman og har derfor totalt "+poeng+" poeng"
            document.getElementById("neste2").style.display="block"
            localStorage.poengIT1fagdag = String(poeng);

        }
            
    }
    if(riktigeBokstaver.indexOf("_")===-1){
        document.getElementById("neste").style.display="block";
        poeng +=mulige_poeng;
        document.getElementById("vinner").innerHTML="Du fikk "+mulige_poeng+" poeng av å klare hangman og har derfor totalt "+poeng+" poeng"
        localStorage.poengIT1fagdag = String(poeng);
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








