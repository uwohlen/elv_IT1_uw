const MinArray = [1, 2, 3, 4, 6, 8, 10];

const MinArray2D = [[3, 2, 1], [6, 5, 4], [9, 8, 7]];

let verdi = 1;

let Etter = 2;




//finne lengden av en array

function arraylength(array) {
    return array.length;
}

console.log(arraylength(MinArray));




//finne ut av hvor mange av noe

function hvorMange(array, verdi) {
    let teller = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === verdi) {
            teller++;
        }
    }
    return teller;
}
console.log(hvorMange(MinArray, verdi));




//finne høyeste verdien i en array

function maxVerdi(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxVerdi(MinArray));




//finne minste verdien i en array

function minVerdi(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
console.log(minVerdi(MinArray));




//finne summen av en array

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
         sum += array[i];
    }
        return sum;
}
console.log(sumArray(MinArray));




//finne summen av tall etter en viss index

function sumEtterIndeks(array, indeks) {
    let sum = 0;
    for (let i = indeks + 1; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumEtterIndeks(MinArray, Etter));




//finne gjennomsnittet av en array

function finneGjennomsnitt(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}
console.log(finneGjennomsnitt(MinArray));




//blande tallene tilfeldig

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(shuffleArray(MinArray));





// egen versjon av indexOf

function myIndexOf(array, Value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === Value) {
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(MinArray, Val));




// egen versjon av reverse

function myReverse(array) {
    let nyArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        nyArray.push(array[i]);
    }
    return nyArray;
}
console.log(myReverse(MinArray));




// egen versjon av includes

function myIncludes(array, Value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === Value) {
            return true;
        }
    }
    return false;
}
console.log(myIncludes(MinArray, Val));




// egen versjon av sort

function mySort(array) {
    return array.sort((a, b) => a - b);
}
console.log(mySort(MinArray));




// egen versjon av slice

function mySlice(array, start, end) {
    let nyArray = [];
    for (let i = start; i < end; i++) {
        nyArray.push(array[i]);
    }
    return nyArray;
}
console.log(mySlice(MinArray, 1, 4));





// lage en array med tilfeldige tall innenfor et intervall

function randomMinArray(length, min, max) {
    let nyArray = [];
    for (let i = 0; i < length; i++) {
        nyArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return nyArray;
}
console.log(randomMinArray(5, 1, 10));




// lage en kopi av en array

function kopiArray(array) {
    let nyArray = [];
    for (let i = 0; i < array.length; i++) {
        nyArray.push(array[i]);
    }
    return nyArray;
}
console.log(kopiArray(MinArray));





////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2D Arrays



// finne lengden av en 2D-array

function lengthArray2D(array) {
    let length = 0;
    for(let i = 0; i < array.length; i++) {
        length += array[i].length;
    }
    return length;
}
console.log(lengthArray2D(MinArray2D));




// finne ut av hvor mange av noe i en 2D-array

function hvorMange2D(array, verdi) {
    let teller = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(array[i][j] === verdi) {
                teller++;
            }
        }
    }
    return teller;
}
console.log(hvorMange2D(MinArray2D, 1));




// finne høyeste verdien i en 2D-array

function maxVerdi2D(array) {
    let max = array[0][0];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(array[i][j] > max) {
                max = array[i][j];
            }
        }
    }
    return max;
}
console.log(maxVerdi2D(MinArray2D));




// finne minste verdien i en 2D-array

function minVerdi2D(array) {
    let min = array[0][0];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(array[i][j] < min) {
                min = array[i][j];
            }
        }
    }
    return min;
}
console.log(minVerdi2D(MinArray2D));




// finne summen av en 2D-array

function sumArray2D(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            sum += array[i][j];}
        }
        return sum;
}
console.log(sumArray2D(MinArray2D));