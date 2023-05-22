const quizData = [
    {
      spørsmal: "Hva er hovedkomponenten i en datamaskin som utfører beregninger og instruksjoner?",
      a: "Hovedkort",
      b: "Prosessor",
      c: "Grafikkort",
      d: "Harddisk",
      correct: "b",
    },
    {
      spørsmal: "Hvilken komponent lagrer midlertidige data for rask tilgang av prosessoren?",
      a: "RAM",
      b: "SSD",
      c: "HDD",
      d: "CPU",
      correct: "a",
    },
    {
      spørsmal: "Hvilken komponent er ansvarlig for å vise visuelt innhold på en dataskjerm?",
      a: "Nettverkskort",
      b: "Lydkort",
      c: "Grafikkort",
      d: "Strømforsyning",
      correct: "c",
    },
    {
      spørsmal: "Hvilken komponent lagrer permanent data på en datamaskin?",
      a: "Harddisk",
      b: "Minnebrikker",
      c: "Prosessor",
      d: "Skjermkort",
      correct: "a",
    },
  ];
  

const quiz= document.getElementById('quiz')
const svarEls = document.querySelectorAll('.svar')
const spørsmalEl = document.getElementById('spørsmal')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const svarKnp = document.getElementById('avgiSvar')

let currentQuiz = 0
let score = 0

visQuiz()

function visQuiz() {
    fjernSvar()
    const currentQuizData = quizData[currentQuiz]
    spørsmalEl.innerText = currentQuizData.spørsmal
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function fjernSvar() {
    svarEls.forEach(svarEl => svarEl.checked = false)
}

function velge() {
    let svar
    svarEls.forEach(svarEl => {
        if(svarEl.checked) {
            svar = svarEl.id
        }
    })
    return svar
}

svarKnp.addEventListener('click', () => {
    const svar = velge()
    if(svar) {
       if(svar === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           visQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Du svarte ${score}/${quizData.length} spørsmål riktig</h2>
           <button onclick="location.reload()">Spill igjen</button>
           `
       }
    }
})

function svarAvgitt() {
    const svar = velge();
    if (svar) {
      if (svar === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        visQuiz();
      } else {
        quiz.innerHTML = `
        <h2>Du svarte ${score}/${quizData.length} spørsmål riktig</h2>
        <button onclick="location.reload()">Spill igjen</button>
        `;
      }
    }
  }
  
  svarKnp.addEventListener('click', svarAvgitt);
  
  document.addEventListener("keypress",
  function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        svarAvgitt()
      }
  }
);
  