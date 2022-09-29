const startButton = document.getElementById('Start-btn')
const questionContainerElement = document.getElementById('Question-container')

let shuffledQuestions, currentQuestionindex

startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = spørsmål.sort(() => Math.random() - .5)
currentQuestionindex = 0
questionContainerElement.classList.remove('hide')
SetNesteSpørsmål()
}

function SetNesteSpørsmål() {
showQuestion(shuffledQuestions[currentQuestionindex])
}

function showQuestion(spørsmål)

function VelgSvar() {

}

const spørsmål = [
    {
        spørsmål: "hva står cpu for?",
        svar: [
            { text: 'Central prossesing unit', correct: true},
            { text: 'Cirkle parameter use', correct: false}

        ]
    }
]