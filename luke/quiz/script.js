
const startButton = document.getElementById('start_btn');
const continueButton = document.getElementById('continue_btn')
const infoContainer = document.getElementById('info_cont');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('btn_grid');
const nextButton = document.getElementById('next_btn');
const pointsElement = document.getElementById('points');
const questionImage = document.getElementById('question_img');
const welcomeContainer = document.getElementById('welcome_cont');
const cookieContainer = document.getElementById('cookie_cont');
const acceptCookies = document.getElementById('accept_cookies');
const disableCookies = document.getElementById('stop_cookies');
const submitName = document.getElementById('submit_btn');
const resultContainer = document.getElementById('result_cont');
const restartButton = document.getElementById('replay');
const exitButton = document.getElementById('exit');
const scoreboard = document.getElementById('scoreboard');

var shuffledQuestions, currentQuestion, completedQuiz, points, username;
var clickedQuestion = false;

hideElements();
cookieConsent();

const questions = [
    {
        question:'Hva står RAM for?',
        image:'images/ram.jpg',
        answers: [
            {text:'Read All Memory', correct: false},
            {text:'Random Access Memory', correct: true},
            {text:'Read Access Memory', correct: false},
            {text:'Random All Memory', correct: false}
        ]
    },
    {
        question:'Hva er en CPU?',
        image:'images/cpu.jpg',
        answers: [
            {text:'Central Processing Unit', correct: true},
            {text:'C Part Unit', correct: false},
            {text:'Central Plotting Unit', correct: false},
            {text:'Central Presence Unit', correct: false}
        ]
    },
    {
        question:'Hva er dette?',
        image:'images/kjøleenhet.jpg',
        answers: [
            {text:'GPU', correct: false},
            {text:'Kjøleenhet', correct: true},
            {text:'Tastatur', correct: false},
            {text:'Batteri', correct: false}
        ]
    },
    {
        question:'Hva er HDD?',
        image:'images/harddisk.jpg',
        answers: [
            {text:'Head Disk Drive', correct: false},
            {text:'Hard Disk Drive', correct: true},
            {text:'Soft Solid Drive', correct: false},
            {text:'Heavy State Drive', correct: false}
        ]
    }
]

function hideElements() {
    infoContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    startButton.style.display = 'none';
    welcomeContainer.style.display = 'none';
    cookieContainer.style.display = 'none';
    disableCookies.style.display = 'none';
    resultContainer.style.display = 'none';
}

function shuffleQuestions() {
    return questions.sort(() => 0.5 - Math.random());
}

function updatePoints(){
    pointsElement.innerHTML = 'Poeng : <b>' + points + '</b>';
}

function showQuiz() {
    completedQuiz = false;
    quizContainer.style.display = 'grid';
    infoContainer.style.display = 'none';
    startButton.style.display = 'none';
    nextButton.innerText = 'Neste';
    shuffledQuestions = shuffleQuestions();
    currentQuestion = 0;
    points = 0;
    updatePoints();
    loadQuestion();
}

const buttonColor = {
    true: 'correct',
    false: 'wrong'
}

function cookieConsent() {
    if(localStorage.getItem('acceptedCookies') === 'true') {
        disableCookies.style.display = 'flex';
        startButton.style.display = 'inline-block'
        return; 
    }

    cookieContainer.style.display = 'inline';
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('acceptedCookies', 'true');
        cookieContainer.style.display = 'none';
        disableCookies.style.display = 'flex';
        startButton.style.display = 'inline-block';
    })
}

function getNameData() {
    if(localStorage.getItem('username') === null) {
        return welcomeContainer.style.display = 'inline';
    }

    username = localStorage.getItem('username');
    infoContainer.style.display = 'inline';
}

function saveName() {
    username = document.getElementById('username').value;
    document.getElementById('username').value = '';
    localStorage.setItem('username', username);
    welcomeContainer.style.display = 'none';
    infoContainer.style.display = 'inline';
}

function selectOption(option) {
    const selected = option.target;
    if(selected.dataset.correct == 'true' && !clickedQuestion){
        points++;
    }
    updatePoints();
    Array.from(answerButtons.children).forEach(button => {
        button.classList.add(buttonColor[button.dataset.correct]);
    });
    if(shuffledQuestions.length == currentQuestion + 1){
        completedQuiz = true;
        nextButton.innerText = 'Besvar';
    }
    nextButton.style.display = 'inline';
    clickedQuestion = true;
}

function loadQuestion() {
    nextButton.style.display = 'none';
    answerButtons.replaceChildren();
    const question = shuffledQuestions[currentQuestion];
    questionElement.innerText = question.question;
    questionImage.src = question.image;
    question.answers.forEach(element => {
        const answerButton = document.createElement('button');
        answerButton.innerText = element.text;
        answerButton.classList.add('btn');
        answerButton.dataset.correct = element.correct;
        answerButton.addEventListener('click', selectOption);
        answerButtons.appendChild(answerButton);
    });
}

function saveScore() {
    var savedData = JSON.parse(localStorage.getItem('scores'));
    if(savedData == null) savedData = [];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    savedData.push(points);
    localStorage.setItem('scores', JSON.stringify(savedData));
}

function displayResults() {
    resultContainer.style.display = 'flex';
    document.getElementById('complete_text').innerText = 'Gratulerer ' + username + ', du fullførte Quizen!'
    document.getElementById('score_text').innerHTML = 'Poeng : <b>' + points + '</b>';
}

submitName.addEventListener('click', saveName);
continueButton.addEventListener('click', showQuiz);
restartButton.addEventListener('click', () => {
    showQuiz();
    resultContainer.style.display = 'none';
});
exitButton.addEventListener('click', () => {
    hideElements();
    disableCookies.style.display = 'flex';
    startButton.style.display = 'inline-block';
})
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    getNameData();
});
nextButton.addEventListener('click', () => {
    clickedQuestion = false;
    if(completedQuiz) {
        quizContainer.style.display = 'none';
        saveScore();
        displayResults();
    } else {
        currentQuestion++;
        loadQuestion();
    }
})
disableCookies.addEventListener('click', () => {
    localStorage.clear();
    hideElements();
    cookieConsent();
})

