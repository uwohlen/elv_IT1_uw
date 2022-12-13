let krypter_txt=""
let krypter_txt_kryptert=""
let dekrypter_txt=""
let dekrypter_txt_dekryptert=""
let forskyv
let alfabet =""
let alfabet_stor =""
let tall ="1234567890"

let kryptering1_inputEl = document.getElementById("id_kryptering1_input");
let utskrift1_textEl = document.getElementById("id_utskrift1_text")
let dekryptering1_inputEl = document.getElementById("id_dekryptering1_input")
let dekryptere_utskrift1_textEl = document.getElementById("id_dekryptert_utskrift1_text")
let kryptere_forskyve_inputEl = document.getElementById("id_kryptere_forskyve_input");
let forskyves_optionEl = document.getElementById("id_forskyves_option");
let krypter_btnEl = document.getElementById("id_krypter_btn")
let utskriftn_textEl = document.getElementById("id_utskriftn_text")
let dekryptere_forskyve_inputEl = document.getElementById("id_dekryptere_forskyve_input");
let dekryptere_forskyves_optionEl = document.getElementById("id_dekryptere_forskyves_option");
let dekrypter_btnEl = document.getElementById("id_dekrypter_btn")
let dekryptere_utskriftn_textEl = document.getElementById("id_dekryptere_utskriftn_text")
let kryptere_nøkkel_inputEl = document.getElementById("id_kryptere_nøkkel_input");
let krypteringsnøkkel_inputEl = document.getElementById("id_krypteringsnøkkel_input");
let id_utskrift_nøkkel_textEl = document.getElementById("id_utskrift_nøkkel_text")
let dekryptere_nøkkel_inputEl = document.getElementById("id_dekryptere_nøkkel_input");
let dekrypteringsnøkkel_inputEl = document.getElementById("id_dekrypteringsnøkkel_input");
let id_dekryptering_utskrift_nøkkel_textEl = document.getElementById("id_dekryptering_utskrift_nøkkel_text")


kryptering1_inputEl.addEventListener("keydown",krypter1funk)
dekryptering1_inputEl.addEventListener("keydown",dekrypter1funk)
krypter_btnEl.addEventListener("click",forskyv_nfunk)
dekrypter_btnEl.addEventListener("click",dekrypter_forskyv_nfunk)
kryptere_nøkkel_inputEl.addEventListener("keydown",krypternøkkelfunk)
krypteringsnøkkel_inputEl.addEventListener("keydown",krypternøkkelfunk)
dekryptere_nøkkel_inputEl.addEventListener("keydown",dekrypternøkkelfunk)
dekrypteringsnøkkel_inputEl.addEventListener("keydown",dekrypternøkkelfunk)

for(let i = 97; i<= 122; i++){
    alfabet += String.fromCharCode(i);
}
alfabet += "æøå";

for(let i = 65; i<= 90; i++){
    alfabet_stor += String.fromCharCode(i);
}
alfabet_stor += "ÆØÅ";

for (let i = 1; i!==29; i++){
    forskyves_optionEl.innerHTML+="<option>"+i+"</option>";
    id_dekryptere_forskyves_option.innerHTML+="<option>"+i+"</option>";
}

function krypter1funk(){
    if( event.keyCode === 13){
        console.log(kryptering1_inputEl.value)
        krypter_txt = kryptering1_inputEl.value
        console.log(krypter_txt)
        forskyv = 1
        krypter()
        console.log(krypter_txt_kryptert)
        utskrift1_textEl.innerHTML= krypter_txt_kryptert
    }
}

function dekrypter1funk(){
    if( event.keyCode === 13){
        console.log(dekryptering1_inputEl.value)
        dekrypter_txt = dekryptering1_inputEl.value
        console.log(dekrypter_txt)
        forskyv = 1
        dekrypter()
        console.log(dekrypter_txt_dekryptert)
        id_dekryptert_utskrift1_text.innerHTML= dekrypter_txt_dekryptert
    }
}

function forskyv_nfunk(){
    console.log(kryptere_forskyve_inputEl.value)
    console.log(krypter_txt)
    forskyv = Number(forskyves_optionEl.value)
    krypter_txt = kryptere_forskyve_inputEl.value
    console.log(forskyv)
    krypter()
    console.log(krypter_txt_kryptert)
    utskriftn_textEl.innerHTML= krypter_txt_kryptert
}

function dekrypter_forskyv_nfunk(){
    console.log(dekryptere_forskyve_inputEl.value)
    console.log(dekrypter_txt)
    forskyv = Number(dekryptere_forskyves_optionEl.value)
    dekrypter_txt = dekryptere_forskyve_inputEl.value
    console.log(forskyv)
    dekrypter()
    console.log(dekrypter_txt_dekryptert)
    dekryptere_utskriftn_textEl.innerHTML= dekrypter_txt_dekryptert
}

function krypter(){
    krypter_txt_kryptert=""
    for (let i = 0; i<krypter_txt.length; i++){
        console.log(alfabet_stor.indexOf(krypter_txt[i])+ forskyv)
        if(alfabet.indexOf(krypter_txt[i]) + forskyv <29 && alfabet.indexOf(krypter_txt[i])!==-1 ){
            krypter_txt_kryptert+= alfabet[alfabet.indexOf(krypter_txt[i])+forskyv]
            console.log("2")
        }
        else if(28 < alfabet.indexOf(krypter_txt[i]) + forskyv && alfabet.indexOf(krypter_txt[i])!==-1 ){
            krypter_txt_kryptert+= alfabet[(alfabet.indexOf(krypter_txt[i])+forskyv-29)]
            console.log("1"+krypter_txt_kryptert)
        }
        else if(alfabet_stor.indexOf(krypter_txt[i])+ forskyv <29 && alfabet_stor.indexOf(krypter_txt[i])!==-1 ){
            krypter_txt_kryptert+= alfabet_stor[alfabet_stor.indexOf(krypter_txt[i])+forskyv]
            console.log("3"+krypter_txt_kryptert)
        }
        else if(28 < alfabet_stor.indexOf(krypter_txt[i]) + forskyv && alfabet_stor.indexOf(krypter_txt[i])!==-1){
            krypter_txt_kryptert+= alfabet_stor[(alfabet_stor.indexOf(krypter_txt[i])+forskyv-29)]
            console.log((27-alfabet_stor.indexOf(krypter_txt[i])))
        }
        else{
            krypter_txt_kryptert+= krypter_txt[i]
            console.log("5")
        }
    }
}

function dekrypter(){
    dekrypter_txt_dekryptert=""
    for (let i = 0; i<dekrypter_txt.length; i++){
        console.log(alfabet_stor.indexOf(dekrypter_txt[i])+ forskyv)
        if(0<=alfabet.indexOf(dekrypter_txt[i]) - forskyv && alfabet.indexOf(dekrypter_txt[i])!==-1 ){
            dekrypter_txt_dekryptert+= alfabet[alfabet.indexOf(dekrypter_txt[i])-forskyv]
            console.log("2"+dekrypter_txt_dekryptert)
        }
        else if(alfabet.indexOf(dekrypter_txt[i]) - forskyv<0 && alfabet.indexOf(dekrypter_txt[i])!==-1 ){
            dekrypter_txt_dekryptert+= alfabet[(alfabet.indexOf(dekrypter_txt[i])-forskyv+29)]
            console.log("1"+dekrypter_txt_dekryptert)
        }
        else if(0<=alfabet_stor.indexOf(krypter_txt[i])+ forskyv && alfabet_stor.indexOf(dekrypter_txt[i])!==-1 ){
            dekrypter_txt_dekryptert+= alfabet_stor[alfabet_stor.indexOf(dekrypter_txt[i])+forskyv]
            console.log("3"+dekrypter_txt_dekryptert)
        }
        else if(alfabet_stor.indexOf(dekrypter_txt[i]) - forskyv < 0 && alfabet_stor.indexOf(dekrypter_txt[i])!==-1){
            dekrypter_txt_dekryptert+= alfabet_stor[(alfabet_stor.indexOf(dekrypter_txt[i])-forskyv+29)]
            console.log("4"+dekrypter_txt_dekryptert)
        }
        else{
            dekrypter_txt_dekryptert+= dekrypter_txt[i]
            console.log("5")
        }
    }
}

function krypternøkkelfunk(){
    if( event.keyCode === 13){
        let error=false
        let j = 0
        krypter_txt = kryptere_nøkkel_inputEl.value
        nøkkel_txt = krypteringsnøkkel_inputEl.value
        krypter_txt_kryptert=""
        for (let i = 0; i<krypter_txt.length && error===false; i++){
            console.log(krypter_txt)

            console.log(j)
            console.log((0<=alfabet.indexOf(nøkkel_txt[j])))
            console.log(0<=alfabet_stor.indexOf(nøkkel_txt[j]))
            console.log((0<=tall.indexOf(nøkkel_txt[j])))
            console.log(alfabet.indexOf(nøkkel_txt[j]))
            console.log(alfabet_stor.indexOf(nøkkel_txt[j]))
            console.log(tall.indexOf(nøkkel_txt[j]))

            if(0<=alfabet.indexOf(nøkkel_txt[j])){
                forskyv=alfabet.indexOf(nøkkel_txt[j])
                console.log("1")
            }
            else if(0<=alfabet_stor.indexOf(nøkkel_txt[j])){
                forskyv=alfabet_stor.indexOf(nøkkel_txt[j])
                console.log("2")
            }
            else if(0<=tall.indexOf(nøkkel_txt[j])){
                forskyv=tall.indexOf(nøkkel_txt[j])
                console.log("3")
            }
            else{
                error=true
                id_utskrift_nøkkel_textEl.innerHTML= "nøkkelen er ugyldig"
            }
            console.log(forskyv)
            console.log(nøkkel_txt[j])
            if(j<nøkkel_txt.length-1){
                j++
            }
            else{
                j=0
            }

            if(error!==true){
                if(alfabet.indexOf(krypter_txt[i]) + forskyv <29 && alfabet.indexOf(krypter_txt[i])!==-1 ){
                    krypter_txt_kryptert+= alfabet[alfabet.indexOf(krypter_txt[i])+forskyv]
                    console.log("2"+krypter_txt_kryptert)
                }
                else if(28 < alfabet.indexOf(krypter_txt[i]) + forskyv && alfabet.indexOf(krypter_txt[i])!==-1 ){
                    krypter_txt_kryptert+= alfabet[(alfabet.indexOf(krypter_txt[i])+forskyv-29)]
                    console.log("1"+krypter_txt_kryptert)
                }
                else if(alfabet_stor.indexOf(krypter_txt[i])+ forskyv <29 && alfabet_stor.indexOf(krypter_txt[i])!==-1 ){
                    krypter_txt_kryptert+= alfabet_stor[alfabet_stor.indexOf(krypter_txt[i])+forskyv]
                    console.log("3"+krypter_txt_kryptert)
                }
                else if(28 < alfabet_stor.indexOf(krypter_txt[i]) + forskyv && alfabet_stor.indexOf(krypter_txt[i])!==-1){
                    krypter_txt_kryptert+= alfabet_stor[(alfabet_stor.indexOf(krypter_txt[i])+forskyv-29)]
                    console.log("4"+krypter_txt_kryptert)
                }
                else{
                    dekrypter_txt_dekryptert+= krypter_txt[i]
                    console.log("5"+krypter_txt_kryptert)
                }
            }
        }
        if(error!==true){
            id_utskrift_nøkkel_textEl.innerHTML=krypter_txt_kryptert
        }
    }
}

function dekrypternøkkelfunk(){
    if( event.keyCode === 13){
        console.log("yes")
        let error=false
        let j = 0
        dekrypter_txt = dekryptere_nøkkel_inputEl.value
        dekryptering_nøkkel_txt = dekrypteringsnøkkel_inputEl.value
        dekrypter_txt_dekryptert=""
        for (let i = 0; i<dekrypter_txt.length && error===false; i++){
            console.log(dekrypter_txt)

            console.log(j)
            console.log((0<=alfabet.indexOf(dekryptering_nøkkel_txt[j])))
            console.log(0<=alfabet_stor.indexOf(dekryptering_nøkkel_txt[j]))
            console.log((0<=tall.indexOf(dekryptering_nøkkel_txt[j])))
            console.log(alfabet.indexOf(dekryptering_nøkkel_txt[j]))
            console.log(alfabet_stor.indexOf(dekryptering_nøkkel_txt[j]))
            console.log(tall.indexOf(dekryptering_nøkkel_txt[j]))

            if(0<=alfabet.indexOf(dekryptering_nøkkel_txt[j])){
                forskyv=alfabet.indexOf(dekryptering_nøkkel_txt[j])
                console.log("1")
            }
            else if(0<=alfabet_stor.indexOf(dekryptering_nøkkel_txt[j])){
                forskyv=alfabet_stor.indexOf(dekryptering_nøkkel_txt[j])
                console.log("2")
            }
            else if(0<=tall.indexOf(dekryptering_nøkkel_txt[j])){
                forskyv=tall.indexOf(dekryptering_nøkkel_txt[j])
                console.log("3")
            }
            else{
                error=true
                id_dekryptering_utskrift_nøkkel_textEl.innerHTML= "nøkkelen er ugyldig"
            }
            console.log(forskyv)
            console.log(dekryptering_nøkkel_txt[j])
            if(j<dekryptering_nøkkel_txt.length-1){
                j++
            }
            else{
                j=0
            }

            if(0<=alfabet.indexOf(dekrypter_txt[i]) - forskyv && alfabet.indexOf(dekrypter_txt[i])!==-1 ){
                dekrypter_txt_dekryptert+= alfabet[alfabet.indexOf(dekrypter_txt[i])-forskyv]
                console.log("2"+dekrypter_txt_dekryptert)
            }
            else if(alfabet.indexOf(dekrypter_txt[i]) - forskyv<0 && alfabet.indexOf(dekrypter_txt[i])!==-1 ){
                dekrypter_txt_dekryptert+= alfabet[(alfabet.indexOf(dekrypter_txt[i])-forskyv+29)]
                console.log("1"+dekrypter_txt_dekryptert)
            }
            else if(0<=alfabet_stor.indexOf(krypter_txt[i])+ forskyv && alfabet_stor.indexOf(dekrypter_txt[i])!==-1 ){
                dekrypter_txt_dekryptert+= alfabet_stor[alfabet_stor.indexOf(dekrypter_txt[i])+forskyv]
                console.log("3"+dekrypter_txt_dekryptert)
            }
            else if(alfabet_stor.indexOf(dekrypter_txt[i]) - forskyv < 0 && alfabet_stor.indexOf(dekrypter_txt[i])!==-1){
                dekrypter_txt_dekryptert+= alfabet_stor[(alfabet_stor.indexOf(dekrypter_txt[i])-forskyv+29)]
                console.log("4"+dekrypter_txt_dekryptert)
            }
            else{
                dekrypter_txt_dekryptert+= dekrypter_txt[i]
                console.log("5")
            }
    }
        if(error!==true){
            id_dekryptering_utskrift_nøkkel_textEl.innerHTML=dekrypter_txt_dekryptert
        }
    }
}