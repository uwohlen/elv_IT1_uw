


let svarEl = document.getElementById("svar")
let regnestykkeEl = document.getElementById("regnestykke");
regnestykkeEl.addEventListener("keydown",lagrefunk);


function lagrefunk(event) {
        if (event.keyCode === 13) {
            input=regnestykkeEl.value
            svarEl.innerHTML=kalkuler(input)
        }
}

function kalkuler(input) {
    let plussminusdeler = input.split(/([+-])/g);
    console.log(plussminusdeler)
    let ledd = plussminusdeler[0]
    let gangedele = ledd.split(/([/*])/g); 
    let result = parseFloat(gangedele[0])

    for(let i=1;i<gangedele.length;i+=2){
        let operator = gangedele[i];
        let operand = parseFloat(gangedele[i + 1]);

        if (operator === '*') {
            result *= operand;
        } else if (operator === '/') {
            if(operand===0){
                alert("ikke del på null!")
                result="error"
            }
            else{
                result /= operand;
            }  
        }
    }
    console.log(gangedele)
    console.log("lengde",plussminusdeler.length)

    for (let i = 1; i < plussminusdeler.length; i += 2) {
        let operator = plussminusdeler[i];
        let operand = plussminusdeler[i + 1];
        console.log(operator)
        console.log(operand)
       
        ledd = plussminusdeler[i+1]
        let gangedele = ledd.split(/([/*])/g); 
        console.log("gangedelr",gangedele)
        let delresult = parseFloat(gangedele[0])

        for(let i=1;i<gangedele.length;i+=2){
            let minioperator = gangedele[i];
            let minioperand = parseFloat(gangedele[i + 1]);
            console.log("mini",minioperator)
            if (minioperator === '*') {
                delresult *= minioperand;
            } else if (minioperator === '/') {
                if(minioperand===0){
                    alert("ikke del på null!")
                    delresult="error"
                }
                else{
                    delresult /= minioperand;
                }  
            }
        }

        if (operator === '+') {
            result += delresult;
        } else if (operator === '-') {
            result -= delresult;
        }
                

    } 
    return result;
}

