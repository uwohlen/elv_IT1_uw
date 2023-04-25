
//Definerer en klasse for spørsmålene. Max antall spørsmål man kan ha er 4
class Question{

    constructor(question, svar_1, svar_2, svar_3, svar_4, riktig_svar){
        this.question = question;
        this.svar_1 = svar_1;
        this.svar_2 = svar_2;
        this.svar_3 = svar_3;
        this.svar_4 = svar_4;
        this.riktig_svar = riktig_svar;
    }
}

//Setter opp en quiz buffer som skal loade informasjonen til HTML
var quiz = [];


//TEMP_KODE -- Midlertidig spørsmåls dump inntil en bedre server løsning settes opp 
var questions = [
    ['Hvem er statsminister i Norge', 'Jesus', 'Jonas Gahr Støre', 2],
    ['Hva heter tanta di', 'Vet ikke', 'Moren din', 1],
    ['Hvem spurte', 'Jeg', 'Ingen', 'Tanta Di', 2],
    ['Når slutter 2. verdenskrig', "Igår", "1945", 2]
]
//TEMP_KODE


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
    if (quiz[i].svar_3 == null && quiz[i].svar_4 == null){
        
        //DEBUG-ELEMENT
        console.log("DEBUG_LOG_QUIZ: SVAR 3 OG 4 UDEFINERT");
        

        delete quiz[i].svar_3;
        delete quiz[i].svar_4;
    }
    else if (quiz[i].svar_4 == null){
        
        //DEBUG-ELEMENT
        console.log("DEBUG_LOG_QUIZ: SVAR 4 UDEFINERT");
        

        delete quiz[i].svar_4;
    }

}


//DEBUG-ELEMENT
console.log(quiz);


for(let i = 0; i < quiz.length; i++){

    document.getElementById('questions').innerHTML += '<Div class="question">' +
                                '<h1>' +  quiz[i].question + '</h1>' +
                                '<button>' + quiz[i].svar_1 + '</button>'+

                                '<button id="'+ i + '">' + quiz[i].svar_2 + '</button>';
                                
                                
                                if(typeof quiz[i].svar_3 != "undefined"){
                                    document.getElementById(i).innerHTML += '<button>' + quiz[i].svar_3 + '</button>';
                                }
                                    
                                if(typeof quiz[i].svar_4 != "undefined")
                                {
                                    document.getElementById(i).innerHTML += '<button>' + quiz[i].svar_3 + '</button>';
                                }


    document.getElementById('questions').innerHTML += '</Div> <br>';
    
    

}


