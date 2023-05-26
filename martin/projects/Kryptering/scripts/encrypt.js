

//Krypteringsalgoritmern
function encrypt(id, key, output) {
    
    let message = document.getElementById(id).value;
    let outputEl = document.getElementById(output);

    let encrypted = "";

    for (let i = 0; i < message.length; i++) {
      
      let shifted = message.charCodeAt(i) + key;
      
      if (shifted > 1114111) 
        shifted -= 1114112;
        
      encrypted += String.fromCharCode(shifted);
    
    }

    console.log(encrypted);
    outputEl.innerHTML = encrypted;

}
  //Dekrypteringsalgoritmen
  function decrypt(id, key, output) {

    let encrypted = document.getElementById(id).value;
    let outputEl = document.getElementById(output);

    let decrypted = "";
    for (let i = 0; i < encrypted.length; i++) {

        let shifted = encrypted.charCodeAt(i) - key;

        if (shifted < 0) 
          shifted += 1114112;
        
        decrypted += String.fromCharCode(shifted);

    }

    console.log(decrypted);
    outputEl.innerHTML = decrypted;

  }