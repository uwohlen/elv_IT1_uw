/*let tekst = "";
let krypter = "";
let dekrypter = "";
let dekryptertTekst = "";
let forskyvnig = 1;
let alfabet = "";
let alfabetStor = "abcdefghijklmnopqrstuvwxyzæøå";
let tall = "1234567890";*/

/*let tekstEl = document.getElementById("idTekst");
let forskyvnigEl = document.getElementById("idForskyvning");
let krypterEl = document.getElementById("idKrypter");
let dekrypterEl = document.getElementById("idDekrypter");
let resultat = document.getElementById("idResultat");
let alfabet = "abcdefghijklmnopqrstuvwxyzæøå";

krypterEl.addEventListener("click",krypter);
dekrypterEl.addEventListener("click",dekrypter);

function forskyvnig() {
    let forskyvnig = forskyvnigEl.value;
    if (alfabet.indexOf(forskyvnig[0]) === -1) {
        return [Number(forskyvnig)];
    }
    for (let i = 0; i < tekstEl.length; i++) {
        krypterEl = tekstEl[i + forskyvnig];   
    }


}
/*
function krypterfunk(event) {
    if (event.keyCode === 13) {
        console.log("hei")
        console.log(krypteringEl.value);
        krypterTekst = krypteringEl.value;
        console.log(krypterTekst);
        for(let i = 0; i < krypterTekst.length; i++) {
            krypter(i,forskyv);
            //kryptertTekst += alfabet[i + forskyv]
        }
        //return kryptertTekst
        console.log(kryptertTekst); 
    }
}*/

//let tekst = "kaa";

//let forskyvnig = 1;



function krypter() {
    let nyttOrd = "";
    let intPosisjon = 0;
    let alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅabcdefghijklmnopqrstuvwxyzæøå1234567890";
    let strOrd = document.getElementById("idTekst").value;
    let intForskyvning = document.getElementById("idForskyvning").value;
    let nyttOrdEl = document.getElementById("idResultat");
    let intForskyvningEl = document.getElementById("idForskyvning");

    if (intForskyvning < 0 || intForskyvning > 10) {
        intForskyvning = 10;
        intForskyvningEl.value = intForskyvning;
    }

    for (i = 0; i < strOrd.length; i++) {
        intPosisjon = alfabet.indexOf(strOrd[i]);
        nyttOrd += alfabet[intPosisjon + Number(intForskyvning)];
    }
    nyttOrdEl.innerHTML = nyttOrd;
}


function dekrypter() {
    let nyttOrd = "";
    let intPosisjon = 0;
    let alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ1234567890";
    let strOrd = document.getElementById("idTekst").value;
    let intForskyvning = document.getElementById("idForskyvning").value;
    let nyttOrdEl = document.getElementById("idResultat");
    let intForskyvningEl = document.getElementById("idForskyvning");

    if (intForskyvning < 0 || intForskyvning > 10) {
        intForskyvning = 10;
        intForskyvningEl.value = intForskyvning;
    }

    for (i = 0; i < strOrd.length; i++) {
        intPosisjon = alfabet.indexOf(strOrd[i]);
        nyttOrd += alfabet[intPosisjon - Number(intForskyvning)];
    }
    nyttOrdEl.innerHTML = nyttOrd;
}