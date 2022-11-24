window.onload = function() {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerInfo = document.querySelector('.current-player');
    const displayResults = document.querySelector('.results');
    const nextInfo = document.querySelector('.next');
    
    let board = ['','',''
                ,'','','',
                '','','',];

    let currentPlayer = 'X';
    let gameComplete = false;

    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function validateResult() {
        let hasWon = false;
        for (let i = 0; i < winningPositions.length; i++) {
            const position = winningPositions[i];
            const x = board[position[0]];
            const y = board[position[1]];
            const z = board[position[2]];
            if (x === '' || y === '' || z === '') {
                continue;
            }
            if (x === y && y === z) {
                hasWon = true;
                break;
            }
        }

        if (hasWon) {
            if (currentPlayer === 'X') {
                displayResults.innerHTML = 'Player <span class="playerX">X</span> won!';
                nextInfo.classList.remove('hide');
            } else {
                displayResults.innerHTML = 'Player <span class="playerO">O</span> won!';
            }
            displayResults.classList.remove('hide');
            gameComplete = true;
            return;
        }

        if (!board.includes('')){
            displayResults.innerText = 'Tie!';
            displayResults.classList.remove('hide');
        }
    }

    function updateBoard(index) {
        board[index] = currentPlayer;
    }

    function validMove(tile) {
        return tile.innerText == '';
    }

    function changePlayer() {
        playerInfo.classList.remove('player' + currentPlayer);
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
            randomMove();
        } else {
            currentPlayer = 'X';
        }
        playerInfo.classList.add('player' + currentPlayer);
    }
    
    function availableSpaces() {
        let moves = []
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                moves.push(i);
            }
        }
        return moves
    }

    function randomMove() {
        let moves = availableSpaces();
        let position = moves[Math.floor(Math.random()*moves.length)];
        const tile = document.querySelectorAll('.grid div')[position];
        action(tile, position)
    }

    function action(tile, position) {
        if(!gameComplete && validMove(tile)) {
            tile.innerText = currentPlayer;
            tile.classList.add('player' + currentPlayer);
            updateBoard(position);
            validateResult();
            changePlayer();
        }
    }

    tiles.forEach((element, index) => {
        element.addEventListener('click', () => action(element, index));
    });
}