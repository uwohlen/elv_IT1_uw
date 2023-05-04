
let ukryptertEl=document.getElementById("ukryptert")
let kodeordEl = document.getElementById("kodeord");
let knappEl = document.getElementById("knapp");
let kryptertEl = document.getElementById("kryptert")
let kodeord = "noe";

function krypter(){ //Funksjon som kjøres når man trykker på krypter knappen
  let a=5
  let b=-1
    kryptertEl.innerHTML=""
    let ukryptert = ukryptertEl.value
    if(kodeord===kodeordEl.value){ // Hvis kodeordet er riktig kjøres denne delen av funksjonen, og teksten blir kryptert
      document.getElementById("kopier").style.display="block"
      document.getElementById("k").style.display="block"
      kodeordEl.value=""
        for(i=0;i<ukryptert.length;i++){
            a*=b
            let x = (ukryptert.charCodeAt(i)+a)
            kryptertEl.innerHTML +=String.fromCharCode(x);
            kryptertEl.innerHTML+=String.fromCharCode(Math.floor(Math.random()*94+32)) 
        }
        console.log(kryptertEl.innerHTML)
        console.log(kryptertEl.innerText)
    }
    else{ //Hvis kodeordet er feil sier programmet fra om det, og teksten blir ikke kryptert
        alert("Feil kodeord")
    }
}
function vis() { //Funksjon som viser passordet hvis man vil, og skjuler passordet hvis man vil
    if (kodeordEl.type === "password") {
      kodeordEl.type = "text";
    } else {
      kodeordEl.type = "password";
    }
  }
function kopier(){ //Funksjon som kopierer den krypterte teksten
  navigator.clipboard.writeText(kryptertEl.innerText);
  alert("Kopierte \"" + kryptertEl.innerText + "\" til Utklippstavlen");
}
function tøm(){ //tømmer inputfeltet
  ukryptertEl.value=""
}