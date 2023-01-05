function encrypt() {
  var input = document.getElementById("input").value;
  var output = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyzæøå".split("");
  for (var i = 0; i < input.length; i++) {
    var charIndex = alphabet.indexOf(input[i]);
    if (charIndex !== -1) {
      charIndex += 10;
      if (charIndex >= alphabet.length) 
        charIndex -= alphabet.length;
      
      output += alphabet[charIndex];
    } else {
      output += input[i];
    }
  }
  document.getElementById("output").textContent = output;
}