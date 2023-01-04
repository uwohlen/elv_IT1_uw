

let svarEl = document.getElementById("svar")
let resultat=0


let regnestykkeEl = document.getElementById("regnestykke");
    regnestykkeEl.addEventListener("keydown",lagrefunk);
        function lagrefunk(event) {
            console.log(event.keyCode);
            console.log(regnestykkeEl.value);
    
            if (event.keyCode === 13) {
                let pluss=regnestykkeEl.value.indexOf("+")
                let minus=regnestykkeEl.value.indexOf("-")
                let gange=regnestykkeEl.value.indexOf("*")
                let dele=regnestykkeEl.value.indexOf("/")
                if(pluss > 0){
                    resultat =  (Number(regnestykkeEl.value.slice(0,pluss)) + Number(regnestykkeEl.value.slice(pluss+1)))
                    svarEl.innerHTML="summen er " + resultat
                }
                
                else if(gange > 0){
                    console.log(regnestykkeEl.value.slice(gange))
                    resultat =  (Number(regnestykkeEl.value.slice(0,gange)) * Number(regnestykkeEl.value.slice(gange+1)))
                    svarEl.innerHTML="summen er " + resultat
                    document.getElementById("test").innerHTML=Number(regnestykkeEl.value.slice(gange+1))
                }
                else if(minus > 0){
                    resultat =  (Number(regnestykkeEl.value.slice(0,minus)) - Number(regnestykkeEl.value.slice(minus+1)))
                    svarEl.innerHTML="summen er " + resultat

                }
                else if(dele > 0){
                    console.log(regnestykkeEl.value[dele])
                    console.log(regnestykkeEl.value[(dele+1)])
                    if(regnestykkeEl.value[(dele+1)]==="0"){
                        svarEl.innerHTML="ikke del på null"
                    }
                    else{
                        resultat =  (Number(regnestykkeEl.value.slice(0,dele)) / Number(regnestykkeEl.value.slice(dele+1)))
                        svarEl.innerHTML="summen er " + resultat
                    }

                    
                }
                else if(minus > 0){
                    resultat =  (Number(regnestykkeEl.value.slice(0,minus)) - Number(regnestykkeEl.value.slice(minus+1)))
                    svarEl.innerHTML="summen er " + resultat
                }
            }
        }













