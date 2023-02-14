// Encryption
function encrypt(message, key, ) {
    
    
  
    let encrypted = "";

    for (let i = 0; i < message.length; i++) {
      
      // Shift the character by the key, wrapping around the alphabet if necessary

      let shifted = message.charCodeAt(i) + key;
      
      if (shifted > 1114111) 
        shifted -= 1114112;
        
      encrypted += String.fromCharCode(shifted);
    
    }

    return encrypted;
  
}
  
  // Decryption
  function decrypt(encrypted, key) {

    let decrypted = "";
    for (let i = 0; i < encrypted.length; i++) {

        // Shift the character by the key, wrapping around the alphabet if necessary
        let shifted = encrypted.charCodeAt(i) - key;

        if (shifted < 0) 
          shifted += 1114112;
        
        decrypted += String.fromCharCode(shifted);

    }
    return decrypted;
  }
  
  // Example
  let message = "Hæææ";
  let key = 5;
  let encrypted = encrypt(message, key);
  let decrypted = decrypt(encrypted, key);
  
  console.log("Original message: " + message);
  console.log("Encrypted message: " + encrypted);
  console.log("Decrypted message: " + decrypted);