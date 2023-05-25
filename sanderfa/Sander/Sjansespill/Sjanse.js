var diceValues = [];
    var rollsLeft = 3;
    var selectedDice = [];
    var playerName;

    function startGame() {
      playerName = document.getElementById("playerName").value;

      if (playerName.trim() === "") {
        alert("Vennligst skriv inn navnet ditt.");
        return;
      }

      var playerNameContainer = document.getElementById("playerNameContainer");
      var gameContainer = document.getElementById("gameContainer");

      playerNameContainer.style.display = "none";
      gameContainer.style.display = "block";
    }

    function rollDice() {
      if (rollsLeft > 0) {
        var diceContainer = document.getElementById("dice-container");
        diceContainer.innerHTML = "";

        for (var i = 0; i < 5; i++) {
          if (!selectedDice.includes(i)) {
            var diceValue = Math.floor(Math.random() * 6) + 1;
            diceValues[i] = diceValue;
          }

          var diceElement = document.createElement("div");
          diceElement.className = "dice";
          diceElement.textContent = diceValues[i];
          diceElement.setAttribute("data-index", i);
          diceElement.onclick = toggleSelectDice;

          if (selectedDice.includes(i)) {
            diceElement.classList.add("selected");
          }

          diceContainer.appendChild(diceElement);
        }

        rollsLeft--;
      }

      if (rollsLeft === 0) {
        var result = calculateSum();

        var resultElement = document.getElementById("result");
        resultElement.textContent = "Sum: " + result;

        addToLeaderboard(playerName, result);
        showLeaderboard();
      }
    }

    function toggleSelectDice() {
      var index = parseInt(this.getAttribute("data-index"));
      var diceElement = document.getElementsByClassName("dice")[index];

      if (selectedDice.includes(index)) {
        var selectedIndex = selectedDice.indexOf(index);
        selectedDice.splice(selectedIndex, 1);
        diceElement.classList.remove("selected");
      } else {
        selectedDice.push(index);
        diceElement.classList.add("selected");
      }
    }

    function calculateSum() {
      var sum = 0;

      for (var i = 0; i < diceValues.length; i++) {
        sum += diceValues[i];
      }

      return sum;
    }

    function endGame() {
      rollsLeft = 0;
      var result = calculateSum();

      var resultElement = document.getElementById("result");
      resultElement.textContent = "Sum: " + result;

      addToLeaderboard(playerName, result);
      showLeaderboard();
    }

    function resetGame() {
      diceValues = [];
      rollsLeft = 3;
      selectedDice = [];

      var diceContainer = document.getElementById("dice-container");
      diceContainer.innerHTML = "";

      var resultElement = document.getElementById("result");
      resultElement.textContent = "Resultat:";
    }

    function addToLeaderboard(name, score) {
      var leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

      leaderboard.push({ name: name, score: score });

      leaderboard.sort(function(a, b) {
        return b.score - a.score;
      });

      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }

    function showLeaderboard() {
      var leaderboardContainer = document.getElementById("leaderboard-container");
      leaderboardContainer.innerHTML = "";

      var leaderboardData = JSON.parse(localStorage.getItem("leaderboard"));

      if (!leaderboardData || leaderboardData.length === 0) {
        leaderboardContainer.innerHTML = "<p>Ingen resultater å vise.</p>";
        return;
      }

      var leaderboardHeading = document.createElement("h2");
      leaderboardHeading.textContent = "Leaderboard";
      leaderboardContainer.appendChild(leaderboardHeading);

      var leaderboardList = document.createElement("ol");
      leaderboardContainer.appendChild(leaderboardList);

      leaderboardData.forEach(function(entry) {
        var leaderboardItem = document.createElement("li");
        leaderboardItem.textContent = entry.name + " - " + entry.score;
        leaderboardList.appendChild(leaderboardItem);
      });
    }