function calculate() {
    // Få verdien til de to talene som blir skrevet inn
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.querySelector('input[name="operator"]:checked').value;

    // Her fulføres kalkulasjonen og svaret blir vist
    var result;
    if (operator === "addere") {
      result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "subtrahere") {
      result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "multiplisere") {
      result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === "dividere") {
      result = parseFloat(num1) / parseFloat(num2);
    }
    document.getElementById("Svar").innerHTML = result;
  }