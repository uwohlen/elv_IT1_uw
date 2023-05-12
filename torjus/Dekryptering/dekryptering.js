let dekryptertEl=document.getElementById("dekryptert");
let kodeordEl = document.getElementById("kodeord");
let knappEl = document.getElementById("knapp");
let kryptertEl = document.getElementById("kryptert");

// Definerer kodeordet
let kodeord = "noe";

// Dekrypterer ordet
function dekrypter(){
    let a=5
    let b=-1
    dekryptertEl.innerHTML="";
    let kryptert = kryptertEl.value;
    // Hvis det er riktig kodeord, dekrypterer ordet. 
    if(kodeord===kodeordEl.value){
        kodeordEl.value=""
        document.getElementById("kopier").style.display="block"
        document.getElementById("k").style.display="block"
        for(i=0;i<kryptert.length;i+=1){
            if(i%2===0){
                a*=b
            }
            let x = (kryptert.charCodeAt(i)-a);
            if(i%2===0){
                dekryptertEl.innerHTML +=String.fromCharCode(x);

            }
            
        }
        
    }
    // Hvis kodeordet ikke stemmer kommer en pop-up om feil kodeord. 
    else{
        alert("Feil kodeord");
    }

}
// Funksjon som hviser det "skjulte" ordet som man skriver inn i kodeord-feltet. 
function vis() { 
    if (kodeordEl.type === "password") {
      kodeordEl.type = "text";
    } else {
      kodeordEl.type = "password";
    }
  }
function kopier(){ //Funksjon som kopierer den dekrypterte teksten
   navigator.clipboard.writeText(dekryptertEl.innerText);
   alert("Kopierte: " + dekryptertEl.innerText + " til Utklippstavlen");
}
function tøm(){ //Tømmer inputfeltet
    ukryptertEl.value=""
  }
