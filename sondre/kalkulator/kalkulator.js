let svar = 0;
let i = 0
regnestykke = ""
let gange = []
let dele = []
let pluss = []
let minus = []
let eksponent = []

let kalkulator_input_El = document.getElementById("id_kalkulator_input");
let kalkulator_output_El = document.getElementById("id_svar_utskrift");

kalkulator_input_El.addEventListener("keydown",regnfunk);

function regnfunk(event) {
    if (event.keyCode === 13) {
        regnestykke = kalkulator_input_El.value
        kalkulator_output_El.innerHTML= regnestykke + "="
        console.log(Number(regnestykke))
        if(regnestykke.indexOf("+") !== -1){
            pluss.push(regnestykke.indexOf("+"))
            regnestykke= regnestykke.split("+")
            svar = Number(Number(regnestykke[0])) + Number(regnestykke[1])
            // regnestykke.splice([pluss.length],0,"+")
            console.log(regnestykke + pluss.length)
        }
        if(regnestykke.indexOf("-") !== -1){
            minus.push(regnestykke.indexOf("-"))
            regnestykke= regnestykke.split("-")
            svar = Number(regnestykke[0]) - Number(regnestykke[1])
            // regnestykke.splice([minus.length],0,"-")
            console.log(regnestykke + minus.length)
        }
        if(regnestykke.indexOf("*") !== -1){
            gange.push(regnestykke.indexOf("*"))
            regnestykke= regnestykke.split("*")
            svar = Number(regnestykke[0]) * Number(regnestykke[1])
            // regnestykke.splice([gange.length],0,"*")
            console.log(regnestykke + gange.length)
        }
        if(regnestykke.indexOf("/") !== -1){
            dele.push(regnestykke.indexOf("/"))
            regnestykke= regnestykke.split("/")
            svar = Number(regnestykke[0]) / Number(regnestykke[1])
            // regnestykke.splice([dele.length],0,"/")
            console.log(regnestykke + dele.length)
        }

        while(regnestykke.length<=i){
            i++
            if(regnestykke[i]===" "){
                // regnestykke.splice(i,0,"0")
                console.log(regnestykke[i])
            }
        }

        console.log(regnestykke[0])

        kalkulator_output_El.innerHTML+= svar
        kalkulator_input_El.value = '';
    }
}
