var mArray = [1, 1, 2, 3, 4, 5, 10];
var searchVal = 1;
var Etter = 2;

function ArrayLength(arr) {
    return arr.length;
    }
    
    console.log(ArrayLength(mArray));


function countOccurrences(arr, val) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
        count++;
        }
    }
    return count;
    }
    
    console.log(countOccurrences(mArray, searchVal));


function maxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
        }
    }
    return max;
    }
    
    console.log(maxValue(mArray));


function minValue(arr) {
      let min = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
      }
      return min;
    }

    console.log(minValue(mArray));


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
    }
    
    console.log(sumArray(mArray));


function sumEtterIndeks(arr, indeks) {
    let sum = 0;
    for (let i = indeks + 1; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
    }
    
    console.log(sumEtterIndeks(mArray, Etter));


function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
    }
    
    console.log(findAverage(mArray));