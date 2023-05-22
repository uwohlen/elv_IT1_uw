let restartBtn, cells, statusText


let options = ['','','','','','','','','',];


const vinnendePosisjoner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = (Math.floor (Math.random()*2) === 0) ? "X" : "O";
let running = false;
 
initializeGame();

function initializeGame () {

restartBtn = document.getElementById('resetBtn')
cells = document.getElementById('cellContainer').childNodes
statusText = document.getElementById('statusText')

    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer} sin tur`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] !="" || !running) {
        return;
    }
    
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}


function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer} sin tur`;
}

function checkWinner() {
    let harVunnet = false;
    for (let i = 0; i < vinnendePosisjoner.length; i++){
        const condition = vinnendePosisjoner[i];
        const x = options[condition[0]];
        const y = options[condition[1]];
        const z = options[condition[2]];
    
        if (x === ''|| y === ''|| z === '') {
            continue;
        }
        if (x === y && y === z) {
            harVunnet = true
            break;
        }

    }
    if(harVunnet){
        statusText.textContent = `${currentPlayer} vant!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = "Likt!"
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame() {
    options = ['','','','','','','','','',];
    currentPlayer = (Math.floor (Math.random()*2) === 0) ? "X" : "O";
    statusText.textContent = `${currentPlayer} sin tur`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}