let array1 = [1, 2, 3, 4, 5, 6];
function findLength(array) {
  let i = 0;
  for (const {} of array) {
    i++;
  }
  return i;
}

console.log("Oppgave 1:", findLength(array1));

let array2 = [
  "a",
  "a",
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "t",
  "g",
  "c",
  "h",
  "a",
  "b",
  "b",
];
function findElement(array, element) {
  let i = 0;
  for (const e of array) {
    if (e === element) {
      i++;
    }
  }
  return i;
}
console.log("Oppgave 2: Finn B:", findElement(array2, "b"));

let array3 = [3, 7, 2, 9, 5, 10, 8, 1, 6, 4];

let størst = array3[0];

for (let i = 1; i < array3.length; i++) {
  if (størst < array3[i]) {
    størst = array3[i];
  }
}
console.log("Oppgave 3: ", størst);

let array4 = [3, 10, 5, 2, 4, 7, 6, 8, 9, 1];

let minst = array4[0];

for (let i = 1; i < array4.length; i++) {
  if (minst > array4[i]) {
    minst = array4[i];
  }
}
console.log("Oppgave 4: ", minst);

let array5 = [6, 10, 7, 6, 3, 10, 1, 1, 7, 4, 1, 10, 3, 9, 1, 3];
let sum_o5 = 0;

for (let i = 0; i < array5.length; i++) {
  sum_o5 += array5[i];
}
console.log("Oppgave 5: ", sum_o5);

let array6 = [
  15, 17, 3, 15, 15, 2, 16, 1, 4, 8, 13, 1, 2, 14, 17, 9, 12, 12, 18, 12,
];
let sum_o6 = 0;

for (let i = 4; i < array6.length; i++) {
  sum_o6 += array6[i];
}

console.log("Oppgave 6: ", sum_o6);

let array7 = [19, 3, 3, 15, 7, 3, 5, 1, 12, 4, 7, 3, 13, 10, 6, 3, 12];
let sum_o7 = 0;

for (let i = 0; i < array7.length; i++) {
  sum_o7 += array7[i];
}
let avg = sum_o7 / array7.length;
console.log("Oppgave 7: ", avg);

let array8 = [
  20, 95, 50, 52, 91, 2, 41, 50, 91, 12, 45, 60, 42, 22, 3, 1, 98, 79, 16, 81,
  8, 59, 63, 26, 68, 87, 64, 33, 77, 37,
];


function BosIndexOf(array, verdi) {
  for(let i = 0, n = 0; i<=array.length;i++) {
    if (array[i]== verdi){
      n++;
      return i;
    }
  }
  return 
}

let indexofsvar = array7.indexOf(50)
let boindexofsvar = BosIndexOf(array7,50)
console.log("Oppgave 8: ", indexofsvar, boindexofsvar)


