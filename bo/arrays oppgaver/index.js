let array1 = [1, 2, 3, 4, 5, 6];
function findLength(array) {
  let i = 0;
  for (const element of array) {
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
console.log("Oppgave 2; Finn B:", findElement(array2, "b"));

let array3 = [];
