let level = 10;
let trykkesekvens = [];
let rngsekvens = [];
let trykk = 0;
let k = 0;
let j = 0;
let poeng = 0;
let navn = "";
let lyd1 = new Audio("media/1.mp3");
let lyd2 = new Audio("media/2.mp3");
let lyd3 = new Audio("media/3.mp3");
let lyd4 = new Audio("media/4.mp3");

let fyverkeri_imgEl=document.getElementById("id_fyrverki");

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
let next_levelEL = document.getElementById("id_next_level");
let start_btnEl=document.getElementById("id_start_btn");

start_btnEl.addEventListener("click",startfunk);

if(localStorage.getItem("navnIT1fagdag") !== null){
    hei_txtEl.innerHTML= "Hei,"+localStorage.getItem("navnIT1fagdag")+". Dette er simon spill, målet med spillet er å trykke på knappene i den rekkefølgen de vises. Klarer du ikke dette mister du poeng.";
    navn=localStorage.getItem("navnIT1fagdag");
}

if(localStorage.getItem("poengIT1fagdag") !== null){
    poeng_txtEl.innerHTML= "Du har "+localStorage.getItem("poengIT1fagdag")+" poeng.";
    poeng=Number(localStorage.getItem("poengIT1fagdag"));
}

function startfunk(){
    start_btnEl.style.display="none";
    
    green_btnEl.addEventListener("click", green_btnfunk);
    red_btnEl.addEventListener("click", red_btnfunk);
    yellow_btnEl.addEventListener("click", yellow_btnfunk);
    blue_btnEl.addEventListener("click", blue_btnfunk);


    rngsekvens.push(Math.floor(Math.random()*4)+1);
    if(rngsekvens[0]===1){
        green_btnEl.style.opacity = "30%";
        lyd1.play();
        setTimeout(() => {
            green_btnEl.style.opacity = "85%";
            red_btnEl.style.opacity = "85%";
            yellow_btnEl.style.opacity = "85%";
            blue_btnEl.style.opacity = "85%";
        }, 1000)
    }
    if(rngsekvens[0]===2){
        red_btnEl.style.opacity = "30%";
        lyd2.play();
        setTimeout(() => {
            green_btnEl.style.opacity = "85%";
            red_btnEl.style.opacity = "85%";
            yellow_btnEl.style.opacity = "85%";
            blue_btnEl.style.opacity = "85%";
        }, 1000)
    }
    if(rngsekvens[0]===3){
        yellow_btnEl.style.opacity = "30%";
        lyd3.play();
        setTimeout(() => {
            green_btnEl.style.opacity = "85%";
            red_btnEl.style.opacity = "85%";
            yellow_btnEl.style.opacity = "85%";
            blue_btnEl.style.opacity = "85%";
        }, 1000)
    }
    if(rngsekvens[0]===4){
        blue_btnEl.style.opacity = "30%";
        lyd4.play();
        setTimeout(() => {
            green_btnEl.style.opacity = "85%";
            red_btnEl.style.opacity = "85%";
            yellow_btnEl.style.opacity = "85%";
            blue_btnEl.style.opacity = "85%";
        }, 1000)
    }
}

function green_btnfunk(){
    let knapp = 1;

    trykkesekvens.push(knapp);

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
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
    lyd1.currentTime=0;
    lyd1.play();
    setTimeout(() => {
        green_btnEl.style.opacity = "85%";
    }, 200);

    if(trykkesekvens.length===rngsekvens.length){
        let i =0;
        if(k==rngsekvens.length){
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                level_txtEl.style.display="none";
                setTimeout(() => {
                    fyverkeri_imgEl.style.display="none";
                }, 2100)
                poeng+=5;
                setTimeout(() => {
                    lyd1.volume=0;
                    lyd2.volume=0;
                    lyd3.volume=0;
                    lyd4.volume=0;
                }, 1000)
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[]
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    clearInterval(stopp);
                }
                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    lyd1.currentTime=0;
                    lyd1.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    lyd2.currentTime=0;
                    lyd2.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    lyd3.currentTime=0;
                    lyd3.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    lyd4.currentTime=0;
                    lyd4.play();
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

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
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


    red_btnEl.style.opacity= "50%";
    lyd2.currentTime=0;
    lyd2.play();
    setTimeout(() => {
        red_btnEl.style.opacity = "85%";
    }, 200)
    
    if(trykkesekvens.length===rngsekvens.length){
        let i =0;

        if(k==rngsekvens.length){
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                level_txtEl.style.display="none";
                setTimeout(() => {
                    fyverkeri_imgEl.style.display="none";
                }, 2100)
                poeng+=5;
                setTimeout(() => {
                    lyd1.volume=0;
                    lyd2.volume=0;
                    lyd3.volume=0;
                    lyd4.volume=0;
                }, 1000)
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[];
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    clearInterval(stopp);
                }

                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    lyd1.currentTime=0;
                    lyd1.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    lyd2.currentTime=0;
                    lyd2.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    lyd3.currentTime=0;
                    lyd3.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    lyd4.currentTime=0;
                    lyd4.play();
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
    lyd3.currentTime=0;
    lyd3.play();
    setTimeout(() => {
        yellow_btnEl.style.opacity = "85%";
    }, 200)

    trykkesekvens.push(knapp);

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
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

        if(k==rngsekvens.length){
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                level_txtEl.style.display="none";
                setTimeout(() => {
                    fyverkeri_imgEl.style.display="none";
                }, 2100)
                poeng+=5;
                setTimeout(() => {
                    lyd1.volume=0;
                    lyd2.volume=0;
                    lyd3.volume=0;
                    lyd4.volume=0;
                }, 1000)
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[];
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    clearInterval(stopp);
                }
                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    lyd1.currentTime=0;
                    lyd1.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    lyd2.currentTime=0;
                    lyd2.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    lyd3.currentTime=0;
                    lyd3.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    lyd4.currentTime=0;
                    lyd4.play();
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
    lyd4.currentTime=0;
    lyd4.play();
    lyd4.currentTime=0;
    setTimeout(() => {
        blue_btnEl.style.opacity = "85%";
    }, 200)

    trykkesekvens.push(knapp);

    if(knapp!==rngsekvens[trykk]){
        if(poeng>0){
            poeng--;
            poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
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

        if(k==rngsekvens.length){
            if(rngsekvens.length===level){
                simonEl.style.display= "none";
                level_txtEl.style.display="none";
                setTimeout(() => {
                    fyverkeri_imgEl.style.display="none";
                }, 2100)
                poeng+=5;
                setTimeout(() => {
                    lyd1.volume=0;
                    lyd2.volume=0;
                    lyd3.volume=0;
                    lyd4.volume=0;
                }, 1000)
                poeng_txtEl.innerHTML= "Du har "+poeng+" poeng.";
                next_levelEL.style.display="block";
                localStorage.setItem("poengIT1fagdag",poeng);
            }
            rngsekvens.push(Math.floor(Math.random()*4)+1);
            trykk=0;
            level_txtEl.innerHTML="Level"+rngsekvens.length;
            j=0;
            k=0;
            trykkesekvens=[];
            let stopp = setInterval(visfunk,1200);
            function visfunk(){
                if(rngsekvens.length<=j){
                    clearInterval(stopp);
                }
                if(rngsekvens[j]===1){
                    green_btnEl.style.opacity = "30%";
                    lyd1.currentTime=0;
                    lyd1.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===2){
                    red_btnEl.style.opacity = "30%";
                    lyd2.currentTime=0;
                    lyd2.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===3){
                    yellow_btnEl.style.opacity = "30%";
                    lyd3.currentTime=0;
                    lyd3.play();
                    setTimeout(() => {
                        green_btnEl.style.opacity = "85%";
                        red_btnEl.style.opacity = "85%";
                        yellow_btnEl.style.opacity = "85%";
                        blue_btnEl.style.opacity = "85%";
                    }, 1000)
                }
                if(rngsekvens[j]===4){
                    blue_btnEl.style.opacity = "30%";
                    lyd4.currentTime=0;
                    lyd4.play();
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
localStorage.setItem("levelIT1fagdag",28)