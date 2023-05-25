// Definerer en funksjon som tar inn en array som parameter
function arrayLength(arr) {
    // Oppretter en variabel for å telle antall elementer i arrayet
    let count = 0;
    // Looper gjennom hvert element i arrayet
    for (let i in arr) {
        // Øker teller-variablen med 1 for hvert element
        count++;
    }
    // Returnerer antall elementer i arrayet
    return count;
}

let myArray = [1, 2, 3, 4, 5];
console.log(arrayLength(myArray)); // Output: 5