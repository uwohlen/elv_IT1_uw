const INPUT_ELEMENT = document.getElementById("regnestykke");
const RESULTAT_ELEMENT = document.getElementById("resultat");
const OPERATORER = ['+', 
                    '-', 
                    '*', 
                    '/'];

                    
INPUT_ELEMENT.addEventListener("keydown", observer);


function observer(event) {
   
    if (event.keyCode != 13)
        return;
    else
        RESULTAT_ELEMENT.innerHTML = calculate(INPUT_ELEMENT.value);
}

function calculate(raw_input) {
    
    for (let i = 0; i < OPERATORER.length; i++) {
        
        console.log("variabel i: ", i)

        let operator = OPERATORER[i];

        console.log("operator i bruk: ", operator)

        let index = raw_input.lastIndexOf(operator);
        

        console.log("operator sin index: ", index)


        if (index == -1) {
            continue;
        }
        
        let num_1 = raw_input.substr(0, index)
        let num_2 = raw_input.substr(index + 1)

        return operation(calculate(num_1), calculate(num_2), operator);

    }
    return raw_input;
}

function operation(num_1, num_2, operator) {

    let a = parseInt(num_1);
    let b = parseInt(num_2);


    switch(operator)
    {
        case '+':
            return a + b;
            break;
        
        case '-':
            return a - b;
            break;
        
        case '*':
            return a * b;
            break;
        
        case '/':
            return a / b;
            break;
    }
}
