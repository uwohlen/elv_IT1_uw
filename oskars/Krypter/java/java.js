//KRYPTER

let encryptedMessage = document.getElementById("idKrypteringsfelt");
let RESULTAT_ELEMENT = document.getElementById("idResultat");

encryptedMessage.addEventListener("keydown", observer);


function encryptMessage(message) {
    let encryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
  
      charCode += 4;
  
      encryptedMessage += String.fromCharCode(charCode);
    }
    return encryptedMessage;
}

function observer(event) {
    if (event.keyCode !== 13) {
        return;
    }
    RESULTAT_ELEMENT.innerHTML = encryptMessage(encryptedMessage.value)
}

//DEKRYPTER

let decryptedMessage = document.getElementById("idDekrypteringsfelt");
let DERESULTAT_ELEMENT = document.getElementById("idDeresultat");

decryptedMessage.addEventListener("keydown", entertast);


function decryptMessage(message) {
    let decryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
  
      charCode -= 4;
  
      decryptedMessage += String.fromCharCode(charCode);
    }
    return decryptedMessage;
}

function entertast(event) {
    if (event.keyCode !== 13) {
        return;
    }
    DERESULTAT_ELEMENT.innerHTML = decryptMessage(decryptedMessage.value)
}


function addCopyButton(elementId) {
    // Create a new button element
    var button = document.createElement('button');
    
    // Set the button text to "Copy"
    button.textContent = "Copy";
    
    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Get the element with the specified ID
      var element = document.getElementById(elementId);
      
      // Select the element's text
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
      
      // Copy the selected text to the clipboard
      document.execCommand('copy');
      
      // Deselect the text
      selection.removeAllRanges();
    });
    
    // Append the button to the page
    document.body.appendChild(button);
  }

  addCopyButton('idResultat');
