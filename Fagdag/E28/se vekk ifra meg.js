let level = 10;
let trykkesekvens = [];
let rngsekvens = [];
let trykk = 0;
let k = 0;
let j = 0;
let poeng = 0;
let navn = "";

let hei_txtEl=document.getElementById("id_hei_txt");
let poeng_txtEl=document.getElementById("id_poeng_txt");
let level_txtEl=document.getElementById("id_level_txt");

let simonEl=document.getElementById("id_simon");
let taptEl=document.getElementById("id_tapt");
let taptbtnEl=document.getElementById("id_taptbtn");

let green_btnEl = document.getElementById("id_green_btn");
let red_btnEl = document.getElementById("id_red_btn");
let yellow_btnEl = document.getElementById("id_yellow_btn");
let blue_btnEl = document.getElementById("id_blue_btn");
let next_levelbtnEL = document.getElementById("id_next_levelbtn");

green_btnEl.addEventListener("click", green_btnfunk);
red_btnEl.addEventListener("click", red_btnfunk);
yellow_btnEl.addEventListener("click", yellow_btnfunk);
blue_btnEl.addEventListener("click", blue_btnfunk);

if(localStorage.getItem("navnIT1fagdag") !== null){
    hei_txtEl.innerHTML= "Hei,"+localStorage.getItem("navnIT1fagdag")+". Dette er simon spill, målet med spillet er å trykke på knappene i den rekkefølgen de vises. Klarer du ikke dette mister du poeng.";
    navn=localStorage.getItem("navnIT1fagdag");
}

if(localStorage.getItem("poengIT1fagdag") !== null){
    poeng_txtEl.innerHTML= "Du har "+localStorage.getItem("poengIT1fagdag")+" poeng.";
    poeng=Number(localStorage.getItem("poengIT1fagdag"));
}

rngsekvens.push(Math.floor(Math.random()*4)+1);
console.log(rngsekvens);
if(rngsekvens[0] === 1){
    green_btnEl.style.opacity = "30%";
    setTimeout(() => {
        green_btnEl.style.opacity = "85%";
        red_btnEl.style.opacity = "85%";
        yellow_btnEl.style.opacity = "85%";
        blue_btnEl.style.opacity = "85%";
    }, 1000)
}
if(rngsekvens[0]===2){
    red_btnEl.style.opacity = "30%";
    setTimeout(() => {
        green_btnEl.style.opacity = "85%";
        red_btnEl.style.opacity = "85%";
        yellow_btnEl.style.opacity = "85%";
        blue_btnEl.style.opacity = "85%";
    }, 1000)
}
if(rngsekvens[0]===3){
    yellow_btnEl.style.opacity = "30%";
    setTimeout(() => {
        green_btnEl.style.opacity = "85%";
        red_btnEl.style.opacity = "85%";
        yellow_btnEl.style.opacity = "85%";
        blue_btnEl.style.opacity = "85%";
    }, 1000)
}
if(rngsekvens[0]===4){
    blue_btnEl.style.opacity = "30%";
    setTimeout(() => {
        green_btnEl.style.opacity = "85%";
        red_btnEl.style.opacity = "85%";
        yellow_btnEl.style.opacity = "85%";
        blue_btnEl.style.opacity = "85%";
    }, 1000)
}


function green_btnfunk(){
    let knapp = 1;

    trykkesekvens.push(knapp);
    console.log(knapp);
    console.log(rngsekvens[trykk]);
    console.log(trykk);

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
            console.warn("feil");
            taptEl.style.display="block";
            taptbtnEl.style.display="none";
            setTimeout(() => {
                location.reload();
                localStorage.setItem("poengIT1fagdag",poeng);
            }, 2000)
            trykk=0;
            rngsekvens=[];
            i=0;
        }
        else{
            simonEl.style.display= "none";
            taptEl.style.display="block";
            poeng=0;
        }
    }
    else{
        trykk++
        k++
    }

    
    green_btnEl.style.opacity= "50%";
    setTimeout(() => {
        green_btnEl.style.opacity = "85%";
    }, 200);

    if(trykkesekvens.length===rngsekvens.length){
        let i =0;
        console.log(k);
        if(k==rngsekvens.length){
            console.log("helt riktig");
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                poeng+=5;
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelbtnEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            console.log(rngsekvens);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[]
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    console.log("ferdig");
                    clearInterval(stopp);
                }
                console.log(rngsekvens.length);
                console.log(j);
                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                j++;
            }
        }
    }
}
function red_btnfunk(){
    let knapp = 2;

    trykkesekvens.push(knapp);
    console.log(knapp);
    console.log(rngsekvens[trykk]);
    console.log(trykk);

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
            console.warn("feil");
            taptEl.style.display="block";
            taptbtnEl.style.display="none";
            setTimeout(() => {
                location.reload();
                localStorage.setItem("poengIT1fagdag",poeng);
            }, 2000)
            trykk=0;
            rngsekvens=[];
            i=0;
        }
        else{
            simonEl.style.display= "none";
            taptEl.style.display="block";
            poeng=0;
        }
    }
    else{
        trykk++;
        k++;
    }
    console.log(trykkesekvens);

    red_btnEl.style.opacity= "50%";
    setTimeout(() => {
        red_btnEl.style.opacity = "85%";
    }, 200)
    
    if(trykkesekvens.length===rngsekvens.length){
        let i =0;

        console.log(k);
        if(k==rngsekvens.length){
            console.log("helt riktig");
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                poeng+=5;
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelbtnEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            console.log(rngsekvens);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[];
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    console.log("ferdig");
                    clearInterval(stopp);
                }
                console.log(rngsekvens.length);
                console.log(j);
                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                j++
            }
        }
    }
}
function yellow_btnfunk(){
    let knapp = 3;



    yellow_btnEl.style.opacity= "50%";
    setTimeout(() => {
        yellow_btnEl.style.opacity = "85%";
    }, 200)

    trykkesekvens.push(knapp);
    console.log(knapp);
    console.log(rngsekvens[trykk]);
    console.log(trykk);

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
            console.warn("feil");
            taptEl.style.display="block";
            taptbtnEl.style.display="none";
            setTimeout(() => {
                location.reload();
                localStorage.setItem("poengIT1fagdag",poeng);
            }, 2000)
            trykk=0;
            rngsekvens=[];
            trykk=0;
            i=0;
        }
        else{
            simonEl.style.display= "none";
            taptEl.style.display="block";
            poeng=0;
        }
    }
    else{
        trykk++;
        k++;
    }
    
    if(trykkesekvens.length===rngsekvens.length){
        let i =0;

        console.log(k);
        if(k==rngsekvens.length){
            console.log("helt riktig");
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                poeng+=5;
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelbtnEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            console.log(rngsekvens);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[];
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    console.log("ferdig");
                    clearInterval(stopp);
                }
                console.log(rngsekvens.length);
                console.log(j);
                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                j++;
            }
        }
    }
}
function blue_btnfunk(){
    let knapp = 4;



    blue_btnEl.style.opacity= "50%";
    setTimeout(() => {
        blue_btnEl.style.opacity = "85%";
    }, 200)

    trykkesekvens.push(knapp);
    console.log(knapp);
    console.log(rngsekvens[trykk]);
    console.log(trykk);

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
            console.warn("feil");
            taptEl.style.display="block";
            taptbtnEl.style.display="none";
            setTimeout(() => {
                location.reload();
                localStorage.setItem("poengIT1fagdag",poeng);
            }, 2000)
            trykk=0;
            rngsekvens=[];
            trykk=0;
            i=0;
        }
        else{
            simonEl.style.display= "none";
            taptEl.style.display="block";
            poeng=0;
        }
    }
    else{
        trykk++;
        k++;
    }
    
    if(trykkesekvens.length===rngsekvens.length){
        let i =0;

        console.log(k);
        if(k==rngsekvens.length){
            console.log("helt riktig");
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                poeng+=5;
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelbtnEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            console.log(rngsekvens);
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            console.log(rngsekvens);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[];
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    console.log("ferdig");
                    clearInterval(stopp);
                }
                console.log(rngsekvens.length);
                console.log(j);
                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                j++;
            }
        }
    }
}