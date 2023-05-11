// henter verdiene fra localStorage
const spillerX = localStorage.getItem("spillerXNavn");
const spillerO = localStorage.getItem("spillerONavn");

// bruker verdiene
console.log(`Spiller X: ${spillerX}`);
console.log(`Spiller O: ${spillerO}`);



let spiller_x = 'x'
let spiller_o = 'circle'
let vinner_kombinasjoner = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
//konstante variabler for x og o. Tabellen består av vinner-kombinasjoner. finner ut av om spillet er slutt.



let cellElements = document.querySelectorAll('[data-cell]')
let brettEl = document.getElementById('brett')
let vinnerMeldingEl = document.getElementById('vinnerMelding')
let prøvIgjenKnapp = document.getElementById('prøvIgjenKnapp')
let tilbakeTilForsideKnapp = document.getElementById('tilbakeTilForsideKnapp')
let vinnerMeldingTextEl = document.getElementById('vinnerMeldingText')
let isPlayer_O_Turn = false

//id tæggene fra index.html blir brukt for å lagre verdier av alle brett elements, winning message og restart button. 


let rundeNr = 1;
let vinnerRunder = {
  spillerX: 0,
  spillerO: 0
};



startGame()

prøvIgjenKnapp.addEventListener('click', startGame)

function startGame() {
	isPlayer_O_Turn = false;
	cellElements.forEach(cell => {
		cell.classList.remove(spiller_x);
		cell.classList.remove(spiller_o);
		cell.removeEventListener('click', handleCellClick);
		cell.addEventListener('click', handleCellClick, { once: true });
		
	});
	setBrettHoverClass();
	let vinnerRunder = {
		spillerX: 0,
		spillerO: 0
	  };
	tilbakeTilForsideKnapp.style.display="none";
	vinnerMeldingEl.classList.remove('show');
	document.getElementById('runde').textContent = `RUNDE: ${rundeNr} /3`; // Setter runde nummeret
	document.getElementById('tur').textContent = `Din tur: ${spillerX}`; // Setter turteksten til spiller X fordi X starter
	

}
  //X starter. Alt tidligere blir fjernet



function handleCellClick(e) {
	let cell = e.target
	let currentClass = isPlayer_O_Turn ? spiller_o : spiller_x
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBrettHoverClass()
	}
}

function endGame(draw) {
	if (draw) {
		vinnerMeldingTextEl.innerText = "UAVGJORT";
	} else {
		let vinnerNavn = isPlayer_O_Turn ? spillerO : spillerX;
		vinnerMeldingTextEl.innerText = `Gratulerer ${vinnerNavn}, du vant runde ${rundeNr}!`;
		if (isPlayer_O_Turn) { // Legger til vinnerrunde til spilleren
			vinnerRunder.spillerO++;
			document.getElementById('vunnetRunderO').textContent = vinnerRunder.spillerO; // Oppdater visning for spiller O
		} else {
			vinnerRunder.spillerX++;
			document.getElementById('vunnetRunderX').textContent = vinnerRunder.spillerX; // Oppdater visning for spiller X
		}
	}
	

	vinnerMeldingEl.classList.add('show'); // Sjekker om det er siste runde
	if (rundeNr === 3) {
		prøvIgjenKnapp.textContent = 'Spill igjen'; // Endrer tekst på knappen
		
		tilbakeTilForsideKnapp.style.display="block";
		tilbakeTilForsideKnapp.addEventListener('click', function() {
		window.location = 'index.html';
		});

		let vinnerSpiller = '';
		if (vinnerRunder.spillerO > vinnerRunder.spillerX) {
			vinnerSpiller = spillerO;
			vinnerMeldingTextEl.innerText = `Gratulerer ${vinnerSpiller}, du vant TRE PÅ RAD med ${vinnerRunder.spillerX} runder!`;
		} else if (vinnerRunder.spillerX > vinnerRunder.spillerO) {
			vinnerSpiller = spillerX;
			vinnerMeldingTextEl.innerText = `Gratulerer ${vinnerSpiller}, du vant TRE PÅ RAD med ${vinnerRunder.spillerX} runder!`;
		} else {
			vinnerSpiller = 'ingen';
			vinnerMeldingTextEl.innerText = `Dere er like gode begge to, dette ble uavgjort`;
		}

		vinnerRunder = { // Reseter spillerRunder objektet
		spillerX: 0,
		spillerO: 0
		};


		
    
    	rundeNr = 1; // Reseter runde nummeret
			} else {
				rundeNr++; // Øker runde nummeret med 1
			}
		document.getElementById('runde').textContent = `Runde ${rundeNr}`; // Oppdaterer runde nummeret
}





function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains(spiller_x) || cell.classList.contains(spiller_o)
	})
}



function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

function swapTurns() {
	isPlayer_O_Turn = !isPlayer_O_Turn
	if (isPlayer_O_Turn) {
		document.getElementById('tur').textContent = `Din tur: ${spillerO}`;
	} else {
		document.getElementById('tur').textContent = `Din tur: ${spillerX}`;
	}
}


function setBrettHoverClass() {
	brettEl.classList.remove(spiller_x)
	brettEl.classList.remove(spiller_o)
	if (isPlayer_O_Turn) {
		brettEl.classList.add(spiller_o)
	} else {
		brettEl.classList.add(spiller_x)
	}
}

function checkWin(currentClass) {
	return vinner_kombinasjoner.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}


