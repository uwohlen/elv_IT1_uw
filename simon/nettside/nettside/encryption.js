const alpha = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
    æ: 26,
    ø: 27,
    å: 28,
  };
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  function makeKey() {
    const word = document.querySelector("#pass").value;
    const sentence = document.querySelector("#encrypt-text").value;
    if (word.trim() == "" || sentence.trim() == "") {
      alert("Password and Text are required");
      return "";
    } else {
      let holder = "";
      let x = 0;
      for (let i = 0; i < sentence.length; i++) {
        holder += word.charAt(x);
        x++;
        if (x == word.length) {
          x = 0;
        }
      }
      return holder;
    }
  }
  
  function encode() {
    const sentence = document.querySelector("#encrypt-text").value;
    const key = makeKey();
  
    if (key == "" || sentence.trim() == "") {
    } else {
      let encoded = "";
  
      for (let i = 0; i < sentence.length; i++) {
        let character = sentence.charAt(i);
        if (alphabets.includes(character)) {
          let characterNumber = alpha[character];
          let keyCharacter = key.charAt(i);
          let keyNumber = alpha[keyCharacter];
          let encodedNumber = characterNumber + keyNumber;
          encoded += alphabets.charAt(encodedNumber % 26);
        } else {
          encoded += character;
        }
      }
      document.querySelector("#encrypted-label").style.display = "block";
      document.querySelector("#encrypted-text").style.display = "block";
      document.querySelector("#encrypted-label").textContent =
        "Encrypted Text";
      document.querySelector("#encrypted-text").value = encoded;
    }
  }
  function decode() {
    const sentence = document.querySelector("#encrypt-text").value;
    const key = makeKey();
  
    if (key == "" || sentence.trim() == "") {
    } else {
      let decoded = "";
  
      for (let i = 0; i < sentence.length; i++) {
        let character = sentence.charAt(i);
        if (alphabets.includes(character)) {
          let characterNumber = alpha[character];
          let keyCharacter = key.charAt(i);
          let keyNumber = alpha[keyCharacter];
          let decodedNumber = characterNumber - keyNumber;
          decoded += alphabets.charAt(
            decodedNumber < 0 ? decodedNumber + 26 : decodedNumber
          );
        } else {
          decoded += character;
        }
      }
      document.querySelector("#encrypted-label").style.display = "block";
      document.querySelector("#encrypted-text").style.display = "block";
      document.querySelector("#encrypted-label").textContent =
        "Decrypted Text";
      document.querySelector("#encrypted-text").value = decoded;
    }
  }