
//Definerer en klasse for spørsmålene. Max antall spørsmål man kan ha er 4
class Question{

    constructor(question, answer_1, answer_2, answer_3, answer_4, correct_answer){
        this.question = question;
        this.answer_1 = answer_1;
        this.answer_2 = answer_2;
        this.answer_3 = answer_3;
        this.answer_4 = answer_4;
        this.correct_answer = correct_answer;
    }
}

//Setter opp en quiz buffer som skal loade informasjonen til HTML
var quiz = [];

/*
   _____ _  _______  _______      __  ______ _____ _   _ ______    _____ _____   _____ _____   _____ __  __    _    _        _    _ ______ _____  
  / ____| |/ /  __ \|_   _\ \    / / |  ____/ ____| \ | |  ____|  / ____|  __ \ / __//|  __ \ / ____|  \/  |  (o)  | |      | |  | |  ____|  __ \ 
 | (___ | ' /| |__) | | |  \ \  / /  | |__ | |  __|  \| | |__    | (___ | |__) | | // | |__) | (___ | \  / |  / \  | |      | |__| | |__  | |__) |
  \___ \|  < |  _  /  | |   \ \/ /   |  __|| | |_ | . ` |  __|    \___ \|  ___/| |//| |  _  / \___ \| |\/| | / _ \ | |      |  __  |  __| |  _  / 
  ____) | . \| | \ \ _| |_   \  /    | |___| |__| | |\  | |____   ____) | |    | //_| | | \ \ ____) | |  | |/ ___ \| |____  | |  | | |____| | \ \ 
 |_____/|_|\_\_|  \_\_____|   \/     |______\_____|_| \_|______| |_____/|_|     //___/|_|  \_\_____/|_|  |_/_/   \_\______| |_|  |_|______|_|  \_\
                                                                                                                                                                                                                                                                                                    
*/
//TEMP_KODE -- Midlertidig spørsmåls dump inntil en bedre server løsning settes opp 
var questions = [
    ['Hvem er statsminister i Norge?', 'Jesus', 'Jonas Gahr Støre', 'Frank Gahr Støre', 'Jens Gahr Støre', 2],
    ['Hva er hovedstaden i Norge?', 'Oslo', 'Christiania', 'Bergen', 1],
    ['Hvor mange varmegrader er det på solens overflate?', '5500 °C', '5500 °K', 1],
    ['Er det flere oppoverbakker enn nedoverbakker i Norge?', 'Ja', 'Nei', 'Av og til', 2],
    ['En hund spiser en bolle med oreo kjeks, hva er volumet av katten?', 'A = pi*r^2', 'Eierne er tiltalt', 'Tilnærmet lik hunden', 2]

]


//Stripper ned spørsmålsmatrisen og pakker alt inn i quiz bufferen
//Variabel 'i' representerer hver rad
for (let i = 0; i < questions.length; i++) {

    var innerArrayLength = questions[i].length;
    var tempQstion;

    var options = [];
    var answerIndex;

    console.log("");
    console.log("Kjører rad nr:", i);

    //Henter all informasjonen fra rad 'i'
    //Variabel 'j' representerer hvert element innenfor rad 'i'
    for (let j = 0; j < innerArrayLength; j++) {


        if(j === 0)
            tempQstion = questions[i][j];
        

        if(typeof questions[i][j] === "string" && j != 0)
        {
            //DEBUG-ELEMENT
            console.log("Dytter element:", questions[i][j]);

            options.push(questions[i][j]);
        } 
        else
            answerIndex = questions[i][j]; 
    }

    answer = options[answerIndex -1];


    //DEBUG-ELEMENTER
    console.log("svar satt:", answer);
    console.log(options);
    //--------


    //Dytter all informasjonen inn i et nytt spørsmåls objekt
    quiz.push(new Question(tempQstion, options[0], options[1], options[2], options[3], answer));



    //Kontrollerer antall svar alternativer satt opp for hvert spørsmål
    if (quiz[i].answer_3 == null && quiz[i].answer_4 == null){
        
        //DEBUG-ELEMENT
        console.log("DEBUG_LOG_QUIZ: SVAR 3 OG 4 UDEFINERT");
        

        delete quiz[i].answer_3;
        delete quiz[i].answer_4;
    }
    else if (quiz[i].answer_4 == null){
        
        //DEBUG-ELEMENT
        console.log("DEBUG_LOG_QUIZ: SVAR 4 UDEFINERT");
        

        delete quiz[i].answer_4;
    }

}


//DEBUG-ELEMENT
console.log(quiz);

//Gjør quiz dataen om til html elementer
for(let i = 0; i < quiz.length; i++){

    document.getElementById('questions').innerHTML += '<Div class="question">' +
                                '<h1>' +  quiz[i].question + '</h1>' +
                                '<button>' + quiz[i].answer_1 + '</button>'+

                                '<button id="'+ i + '">' + quiz[i].answer_2 + '</button>';
                                
                                
                                if(typeof quiz[i].answer_3 != "undefined"){
                                    document.getElementById(i).innerHTML += '<button>' + quiz[i].answer_3 + '</button>';
                                }
                                    
                                if(typeof quiz[i].answer_4 != "undefined")
                                {
                                    document.getElementById(i).innerHTML += '<button>' + quiz[i].answer_3 + '</button>';
                                }


    document.getElementById('questions').innerHTML += '</Div> <br>';
    


   
}



let points = 0

let pointsEl = document.getElementById('pointsId');

let buttons = document.querySelectorAll('button');


//Legger til event listener på hver knapp og når knappen klikkes sjekker programmet om knappen er riktig svar til spørsmålet
buttons.forEach((btn)=>{
    btn.addEventListener('click', function(){


        let buttonPressed;

        let questionActivated = quiz.find(q =>{
            if(q.answer_1 == btn.innerHTML){
                
                buttonPressed = q.answer_1
                return q;
            }
            else if(q.answer_2 == btn.innerHTML)
            {
                buttonPressed = q.answer_2
                return q
            }  
            else if(q.answer_3 == btn.innerHTML)
            {
                buttonPressed = q.answer_3
                return q
            }  
            else if(q.answer_4 == btn.innerHTML)
            {
                buttonPressed = q.answer_4
                return q
            }        
        });
        

        if (questionActivated.correct_answer == buttonPressed)
        {
            points++;
            btn.style.backgroundColor = "Lime";
        }
        else   
            btn.style.backgroundColor = "Red";

            pointsEl.innerHTML = "Poeng: " + points;
        
    });

});








