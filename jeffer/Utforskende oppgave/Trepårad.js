var currentPlayer = 1;
var player1moves = [];
var player2moves = [];
var winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
		];



function checkForWinner(moves){
    for (var i = 0; i<winCombinations.length; i++){
        var count = 0;
        for (var j = 0; j<winCombinations[i].length;j++){
            if (moves.indexOf(winCombinations[i][j])>-1){
                count++;
            }
        }
        if (count ===3){
            return true;
        }
    }
    return false;
}

function markSquare(square){
    if (currentPlayer === 1){
        square.innerHTML = "X";
        player1moves.push(parseInt(square.id));
        if (checkForWinner(player1moves)){
            document.getElementById("winner").innerHTML = "Player 1 wins!";
            document.getElementById("winner").style.display = "block";
            return;
        }
    } else { square.innerHTML = "O";
        player2moves.push(parseInt(square.id));
        if (checkForWinner(player2moves)){
            document.getElementById("winner").innerHTML = "Player 2 wins!";
            document.getElementById("winner").style.display = "block";
            return;   
        }
     }
     if (player1moves.length + player2moves.length === 9){
        document.getElementById("winner").innerHTML = "Tie game!";
        document.getElementById("winner").style.display = "block";
        return;
     }
     currentPlayer = (currentPlayer === 1) ? 2:1;
    }

    var squares = document.getElementsByTagName("td");
    for (var i=0;i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            if (this.innerHTML === ""){
                markSquare(this);
            }
        });
    }

