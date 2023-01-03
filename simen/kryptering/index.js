let buttonEl = document.getElementById("buttonId");
let krypterEl = document.getElementById("toggleId");
let inputEl = document.getElementById("idInput")
let kodeOrdEl = document.getElementById("IdKodeOrd")
let svarEl = document.getElementById("svarId")

let alfabet = "";

for (let i = 97; i <= 122; i++) {
    alfabet += String.fromCharCode(i);
}

alfabet += "æøå";
let lost;
let solved = []
let nummer;


//når klikkes
buttonEl.addEventListener("click", function() {
    let tekst = inputEl.value
    let ord = kodeOrdEl.value
    dekrypter(tekst, ord);
});
krypterEl.addEventListener("click", function() {
    let tekst = inputEl.value
    let ord = kodeOrdEl.value
    krypter(tekst, ord);
});



function krypter(navn, forskyvning){
    let x = 0; //for forskyvning
    for(let i = 0; i < navn.length; i++){
        if(x >= forskyvning.length) x = 0

        if(navn[i] !== " "){//hopper over hvis det er mellomrom
            if(!alfabet.includes(forskyvning[x])){//hvis det er et tall
                if(alfabet.indexOf(navn[i]) + Number(forskyvning) < alfabet.length){
                    solved.push(alfabet[alfabet.indexOf(navn[i]) + Number(forskyvning)])
                }else{
                    solved.push(alfabet[alfabet.indexOf(navn[i]) + Number(forskyvning) - alfabet.length])
                }
            }

            else{//hvis det er et ord
                nummer = alfabet.indexOf(forskyvning[x])
                if(alfabet.indexOf(navn[i]) + nummer < alfabet.length){
                    solved.push(alfabet[alfabet.indexOf(navn[i]) + nummer])
                }
                else{
                    solved.push(alfabet[alfabet.indexOf(navn[i]) + nummer - alfabet.length])
                }
            }
            x++
        }else {
            solved.push(" ")
        } 
    }
    svarEl.innerHTML = solved.join("")
    solved = []
}

function dekrypter(navn, forskyvning){
    let x = 0; //for forskyvning
    for(let i = 0; i < navn.length; i++){
        if(x >= forskyvning.length) x = 0

        if(navn[i] !== " "){//hopper over hvis det er mellomrom
            if(!alfabet.includes(forskyvning[x])){//hvis det er et tall
                if(alfabet.indexOf(navn[i]) - Number(forskyvning) >= 0){
                    solved.push(alfabet[alfabet.indexOf(navn[i]) - Number(forskyvning)])
                }else{
                    solved.push(alfabet[alfabet.indexOf(navn[i]) - Number(forskyvning) + alfabet.length])
                }
            }

            else{//hvis det er et ord
                nummer = alfabet.indexOf(forskyvning[x])
                if(alfabet.indexOf(navn[i]) - nummer >= 0){
                    solved.push(alfabet[alfabet.indexOf(navn[i]) - nummer])
                }
                else{
                    solved.push(alfabet[alfabet.indexOf(navn[i]) - nummer + alfabet.length])
                }
            }
            x++
        }else {
            solved.push(" ")
        } 
    }
    svarEl.innerHTML = solved.join("")
    solved = []
}
