function clearEquation() {
  document.getElementById("equation").value = "";
  document.getElementById("result").innerHTML = "";
}

document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let equation = document.getElementById("equation").value;
    let result = 0;

    // Pluss
    if (equation.includes("+")) {
      let numbers = equation.split("+");
      numbers.forEach(function (number) {
        result += parseInt(number);
      });
    }
    // Minus
    else if (equation.includes("-")) {
      let numbers = equation.split("-");
      result = parseInt(numbers[0]);
      for (let i = 1; i < numbers.length; i++) {
        result -= parseInt(numbers[i]);
      }
    }
    // Gange
    else if (equation.includes("*")) {
      let numbers = equation.split("*");
      result = 1;
      numbers.forEach(function (number) {
        result *= parseInt(number);
      });
    }
    // Dele
    else if (equation.includes("/")) {
      let numbers = equation.split("/");
      result = parseInt(numbers[0]);
      for (let i = 1; i < numbers.length; i++) {
        result /= parseInt(numbers[i]);
      }
    }
    // Fant ingenting å løse
    else {
      result = parseInt(equation);
    }
    document.getElementById("result").innerHTML = result;
  });
