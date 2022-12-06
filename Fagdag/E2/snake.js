//body
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//slange
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//mat
var foodX;
var foodY;

var gameOver = false;

var score = 0;
var spillPoeng = 0;

let spillerNavn = "Spiller";

let poeng;

window.onload = function () {
  spillerNavn = window.localStorage.getItem("navnIT1fagdag");

  if (spillerNavn === undefined || spillerNavn == null) spillerNavn = "Spiller";
  document.getElementById("navn").innerText = spillerNavn;

  poeng = window.localStorage.getItem("poengIT1fagdag");

  if (poeng === undefined || poeng == null) poeng = 0;

  startSpill();
};
function startSpill() {
  document.getElementById("modal").className =
  "hidden";
let modalTekst = document.getElementById("modalTekst");
document.getElementById("blurSkjerm").className =
  "";
document.getElementById("modalBoks").style.width = "0%";
document.getElementById("modalBoks").style.height = "0%";

  blockSize = 25;
  rows = 20;
  cols = 20;
  board = undefined;
  context = undefined;
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  velocityX = 0;
  velocityY = 0;
  snakeBody = [];
  foodX = undefined;
  foodY = undefined;
  gameOver = false;
  score = 0;
  document.getElementById("score").innerText = score;
  spillPoeng = 0;
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");
  placeFood();
}

document.addEventListener("keyup", changeDirection);
//update();
setInterval(update, 1000 / 10);

function update() {
  if (gameOver) {
    return;
  }
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
    score += 1;
    document.getElementById("score").innerText = score;
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }
  if (
    snakeX < 0 ||
    snakeX > cols * blockSize - 1 ||
    snakeY < 0 ||
    snakeY > rows * blockSize - 1 || (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1])
  ) {
    gameOver = true;
    velocityX = 0;
    velocityY = 0;

    document.getElementById("modal").className =
      "h-screen w-screen z-20 fixed inset-x-0 mx-auto my-auto flex justify-center items-center transition ease-in-out delay-150";
    let modalTekst = document.getElementById("modalTekst");
    document.getElementById("blurSkjerm").className =
      "bg-slate-700 h-screen blur";
    document.getElementById("modalBoks").style.width = "33%";
    document.getElementById("modalBoks").style.height = "33%";

    //modalTekst.innerText = "dsdsdasdasfsdtf "

    console.log(score);
    if (score <= 3) {
      spillPoeng = -1;
      modalTekst.innerText = `Du fikk en score på ${score}, ${spillerNavn}. Du fikk -1 poeng på dette spillet, og har ${
        poeng - 1
      } poeng til sammen`;
    } else if ((score >= 4) && (score <= 7)) {
      spillPoeng = 0;
      modalTekst.innerText = `Du fikk en score på ${score}, ${spillerNavn}. Du fikk 0 poeng på dette spillet, og har ${poeng} poeng til sammen`;
    } else if ((score >= 8) && (score <= 11)) {
      spillPoeng = 1;
      modalTekst.innerText = `Du fikk en score på ${score}, ${spillerNavn}. Du fikk 1 poeng på dette spillet, og har ${
        poeng + 1
      } poeng til sammen`;
    } else if ((score >= 12) && (score <= 15)) {
      spillPoeng = 2;
      modalTekst.innerText = `Du fikk en score på ${score}, ${spillerNavn}. Du fikk 2 poeng på dette spillet, og har ${
        poeng + 2
      } poeng til sammen`;
    } else if ((score >= 16) && (score <= 19)) {
      spillPoeng = 3;
      modalTekst.innerText = `Du fikk en score på ${score}, ${spillerNavn}. Du fikk 3 poeng på dette spillet, og har ${
        poeng + 3
      } poeng til sammen`;
    } else if ((score >= 20) && (score <= 23)) {
      spillPoeng = 4;
      modalTekst.innerText = `Du fikk en score på ${score}, ${spillerNavn}. Du fikk 4 poeng på dette spillet, og har ${
        poeng + 4
      } poeng til sammen`;
    } else {
      spillPoeng = 5;
      modalTekst.innerText = `Du fikk en score på ${score}, ${spillerNavn}. Du fikk 5 poeng på dette spillet, og har ${
        poeng + 5
      } poeng til sammen`;
    }
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      startSpill();
    } 
  }
}
function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}
function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function nesteSpill() {
  window.localStorage.setItem("poengIT1fagdag", window.localStorage.getItem("poengIT1fagdag")+spillPoeng) 
}
