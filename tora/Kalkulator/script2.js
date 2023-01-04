let svarEl = document.getElementById("svar")
let resultat=0



let regnestykkeEl = document.getElementById("regnestykke");
    regnestykkeEl.addEventListener("keydown",lagrefunk);
        function lagrefunk(event) {
            console.log(event.keyCode);
            console.log(regnestykkeEl.value);
            if(event.keyCode === 13){  
                let plussMinus = []
                let plussMinusIndex = []
                let gangeDele = []
                let gangeDeleIndex = []
                let text = regnestykkeEl.value
                i = 0
                while(i <text.length){
                    if(text[i]==="+"||text[i]==="-"){
                        plussMinus.push(text[i]);
                        plussMinusIndex.push(i);
                    }
                    i++;
                }
                i = 0
                while(i <text.length){
                    if(text[i]==="*"||text[i]==="/"){
                        gangeDele.push(text[i]);
                        gangeDeleIndex.push(i);
                    }
                    i++;
                }
                for(i=0;i<plussMinus.length;i++){
                    for(a=0;a<plussMinusIndex[i];a++){
                        if(plussMinusIndex[i-1]!==-1){
                            a+=plussMinusIndex[i-1]
                        }
                        console.log("test"+text[a,a+1])

                    }
                }









                document.getElementById("test").innerHTML=plussMinus;
                document.getElementById("test2").innerHTML=plussMinusIndex;
                document.getElementById("test3").innerHTML=gangeDele;
                document.getElementById("test4").innerHTML=gangeDeleIndex;
    





            }  
        }