let StartEl = document.getElementById("idStart");
let EnEl = document.getElementById("idNb1");
let ToEl = document.getElementById("idNb2");
let TreEl = document.getElementById("idNb3");
let FireEl = document.getElementById("idNb4");
let FemEl = document.getElementById("idNb5");
let SeksEl = document.getElementById("idNb6");
let SpmEl = document.getElementById("idSpm")

StartEl.addEventListener("click",startfunk);

function startfunk() {
    EnEl.style.display = "inline-block";
    StartEl.style.display ="none";
    SpmEl.style.display ="inline-block";
}
let Liv = 0;
let LivEl=document.getElementById('idLiv');

function Feil(id){
    document.getElementById(id).innerHTML="Feil";
    document.getElementById(id).style.backgroundColor = "red";
        Liv--;
        LivEl.innerHTML="Liv: " + Liv;
        
}
let knapp4El = document.getElementById("idKnapp4");
        knapp4El.addEventListener("click",riktig1)
        function riktig1() {
            knapp4El.innerHTML ="Riktig";
            knapp4El.style.backgroundColor = "green";
            EnEl.style.display = "none";
            ToEl.style.display = "inline-block";            
}
let knapp6El = document.getElementById("idKnapp6");
        knapp6El.addEventListener("click",riktig2)
        function riktig2() {
            knapp6El.innerHTML ="Riktig";
            knapp6El.style.backgroundColor = "green";
            ToEl.style.display = "none";
            TreEl.style.display = "inline-block"; 
}
let treverkEl = document.getElementById("idSpm3");
        treverkEl.addEventListener("click",riktig3)
        function riktig3() {
            treverkEl.innerHTML ="Riktig";
            treverkEl.style.backgroundColor = "green";
            TreEl.style.display = "none";
            FireEl.style.display = "inline-block";
}
let knapp13El = document.getElementById("idKnapp13");
        knapp13El.addEventListener("click",riktig4)
        function riktig4() {
            knapp13El.innerHTML ="Riktig";
            knapp13El.style.backgroundColor = "green";
            FireEl.style.display = "none";
            FemEl.style.display = "inline-block"; 
}
let knapp17El = document.getElementById("idKnapp17");
        knapp17El.addEventListener("click",riktig5)
        function riktig5() {
            knapp17El.innerHTML ="Riktig";
            knapp17El.style.backgroundColor = "green";
            FemEl.style.display = "none";
            SeksEl.style.display = "inline-block"; 
}
let knapp18El = document.getElementById("idKnapp18");
        knapp18El.addEventListener("click",feil2)
        function feil2() {
            knapp18El.innerHTML ="Feil";
            knapp18El.style.color = "red";
            Liv--;
            LivEl.innerHTML="Liv: " + Liv;
} 
let knapp19El = document.getElementById("idKnapp19");
        knapp19El.addEventListener("click",feil3)
        function feil3() {
            knapp19El.innerHTML ="Feil";
            knapp19El.style.color = "red";
            Liv--;
            LivEl.innerHTML="Liv: " + Liv;
} 
let knapp20El = document.getElementById("idKnapp20");
        knapp20El.addEventListener("click",feil4)
        function feil4() {
            knapp20El.innerHTML ="Feil";
            knapp20El.style.color = "red";
            Liv--;
            LivEl.innerHTML="Liv: " + Liv;
} 
let knapp21El = document.getElementById("idKnapp21");
        knapp21El.addEventListener("click",feil5)
        function feil5() {
            knapp21El.innerHTML ="Feil";
            knapp21El.style.color = "red";
            Liv--;
            LivEl.innerHTML="Liv: " + Liv;
} 