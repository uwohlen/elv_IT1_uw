let knapp1aEl = document.getElementById("id1a");
let knapp2aEl = document.getElementById("id2c");
let knapp3aEl = document.getElementById("id3a");
let knapp4aEl = document.getElementById("id4b");
let body = document.getElementById("body")
let img1=document.getElementById("idImg1")
let img2=document.getElementById("idImg2")
let img3=document.getElementById("idImg3")
let img4=document.getElementById("idImg4")

knapp1aEl.addEventListener("click",Riktig)
knapp2aEl.addEventListener("click",Riktig2)
knapp3aEl.addEventListener("click",Riktig3)
knapp4aEl.addEventListener("click",Riktig4)

function Riktig() 
{
    knapp1aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img1.style.display="block"
    knapp1aEl.style.backgroundColor="green"
}
function Riktig2() 
{
    knapp2aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img2.style.display="block"
    knapp2aEl.style.backgroundColor="green"
}
function Riktig3() 
{
    knapp3aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img3.style.display="block"
    knapp3aEl.style.backgroundColor="green"
}
function Riktig4() 
{
    knapp4aEl.innerHTML = "Riktig";
    body.style.backgroundColor="";
    img4.style.display="block"
    knapp4aEl.style.backgroundColor="green"
}