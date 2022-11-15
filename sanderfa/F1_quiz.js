let knapp1aEl = document.getElementById("id1a");
let knapp2aEl = document.getElementById("id2c");
let knapp3aEl = document.getElementById("id3a");
let knapp4aEl = document.getElementById("id4b");

let knapp1bEl = document.getElementById("id1b");
let knapp2bEl = document.getElementById("id2a");
let knapp3bEl = document.getElementById("id3b");
let knapp4bEl = document.getElementById("id4a");

let knapp1cEl = document.getElementById("id1c");
let knapp2cEl = document.getElementById("id2b");
let knapp3cEl = document.getElementById("id3c");

let body = document.getElementById("body")

let img1=document.getElementById("idImg1")
let img2=document.getElementById("idImg2")
let img3=document.getElementById("idImg3")
let img4=document.getElementById("idImg4")

knapp1aEl.addEventListener("click",Riktig)
knapp2aEl.addEventListener("click",Riktig2)
knapp3aEl.addEventListener("click",Riktig3)
knapp4aEl.addEventListener("click",Riktig4)

knapp1bEl.addEventListener("click",Feil)
knapp2bEl.addEventListener("click",Feil2)
knapp3bEl.addEventListener("click",Feil3)
knapp4bEl.addEventListener("click",Feil4)

knapp1cEl.addEventListener("click",Feil5)
knapp2cEl.addEventListener("click",Feil6)
knapp3cEl.addEventListener("click",Feil7)

function Riktig() 
{
    knapp1aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img1.style.display="block"
    knapp1aEl.style.backgroundColor="green"
    knapp1aEl.removeEventListener ("click",Riktig)
}
function Riktig2() 
{
    knapp2aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img2.style.display="block"
    knapp2aEl.style.backgroundColor="green"
    knapp2aEl.removeEventListener ("click",Riktig2)
}
function Riktig3() 
{
    knapp3aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img3.style.display="block"
    knapp3aEl.style.backgroundColor="green"
    knapp3aEl.removeEventListener ("click",Riktig3)
}
function Riktig4() 
{
    knapp4aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img4.style.display="block"
    knapp4aEl.style.backgroundColor="green"
    knapp4aEl.removeEventListener ("click",Riktig4)
}
function Feil() 
{
    knapp1bEl.innerHTML = "Feil";
    body.style.backgroundColor="";
    img1.style.display="block"
    knapp1bEl.style.backgroundColor="Red"
    knapp1bEl.removeEventListener ("click",Feil)
}
function Feil2() 
{
    knapp2bEl.innerHTML = "Feil";
    body.style.backgroundColor="";
    img2.style.display="block"
    knapp2bEl.style.backgroundColor="Red"
    knapp2bEl.removeEventListener ("click",Feil2)
}
function Feil3() 
{
    knapp3bEl.innerHTML = "Feil";
    body.style.backgroundColor="";
    img3.style.display="block"
    knapp3bEl.style.backgroundColor="Red"
    knapp3bEl.removeEventListener ("click",Feil3)
}
function Feil4() 
{
    knapp4bEl.innerHTML = "Feil";
    body.style.backgroundColor="";
    img4.style.display="block"
    knapp4bEl.style.backgroundColor="Red"
    knapp4bEl.removeEventListener ("click",Feil4)
}
function Feil5() 
{
    knapp1cEl.innerHTML = "Feil";
    body.style.backgroundColor="";
    img1.style.display="block"
    knapp1cEl.style.backgroundColor="Red"
    knapp1cEl.removeEventListener ("click",Feil5)
}
function Feil6() 
{
    knapp2cEl.innerHTML = "Feil";
    body.style.backgroundColor="";
    img2.style.display="block"
    knapp2cEl.style.backgroundColor="Red"
    knapp2cEl.removeEventListener ("click",Feil6)
}
function Feil7() 
{
    knapp3cEl.innerHTML = "Feil";
    body.style.backgroundColor="";
    img3.style.display="block";
    knapp3cEl.style.backgroundColor="Red";
    knapp3cEl.removeEventListener ("click",Feil7)
}