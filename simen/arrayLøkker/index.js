let test = ["5","2","10","3","1","100"]

function ArrayLength(array){
    let i;
    for(i = 0; array[i] !== undefined; i++){}
    return i
}
function ArrayContains(array, verdi){
    let teller = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === verdi) teller++;
    }
    return teller
}

console.log(ArrayContains(test, "3"))

/*
finner største tall i array
*parameter (array) - array bestående av tall
*returnerer (tall) - største tall i array
*/
function ArrayBiggest(array){
    let i=0
    let tall = array[i]
    for(i; i<array.length; i++){
        if(Number(array[i]) > Number(tall)) tall = array[i]
    }
    return tall
}

/*
finner minste tall i array
*parameter (array) - array bestående av tall
*returnerer (tall) - minste tall i array
*/
function ArraySmallest(array){
    let i = 0
    let tall = array[i]
    for(i; i<array.length; i++){
        if(Number(array[i]) < Number(tall)){
            tall = array[i];
        }
    }
    return tall
}

/*
summerer alle tall i en array
*parameter (array) - array bestående av tall

*returnerer (sum) - summen
*/

function ArraySum(array){
    let sum = 0;
    for(let i=0; i < array.length; i++){
    sum += Number(array[i])
    }
    return sum
}

/*
summerer alle tall i array etter index
*parameter (array) - array bestående av tall
*parameter (index) - index du ønsker å summere etter

*returnerer (sum) - summen
*/
function ArraySumEtterIndex(array, index){
    let sum = 0;
    for(let i=0; i < array.length; i++){
    if(i >= Number(index)) sum += Number(array[i]);
    }
    return sum
}

/*
finner snittet av en array
*parameter (array) - array bestående av tall

*returnerer (sum/i) - gjennomsnittet
function ArrayAverage(array){
    let sum = 0;
    let i = 0;
    for(i; i < array.length; i++){
    sum += Number(array[i])
    }
    return sum/i
}

/*
Sjekker indexen til verdi i array
parameter (array) - array du ønsker å sjekke verdien for
parameter (verdi) - verdi du ønsker å finne index av

returnerer (index) - index verdi til verdi
*/
function ArrayIndexOf(array, verdi){
    let index = undefined
    for(let i=0; i < array.length; i++){
        if(array[i] === verdi) {
            index = i
            break
        }
    }
    return index
}


/*
reverserer array
parameter (array) - array du ønsker å reversere
returnerer (arrayCopy) - reverse kopi av array
*/

function reverse(array){
    let arrayCopy = []
    for(let i = array.length - 1; i >= 0; i--){
        arrayCopy.push(array[i])
    }
    return arrayCopy
}

/*
*sjekker om array inneholder verdi
*Parameter (array) - array du ønsker å sjekke
*parameter (verdi) - verdi du vil sjekke om array inneholde 
*returnerer (includes) - true or false
*/

function ArrayIncludes(array, verdi){
    let includes = false
    for(let i=0; i < array.length; i++){
        if(array[i] === verdi) {
            includes = true
            break
        }
    }
    return includes
}

/*
sorterer array fra minst til størst

Parameter (array) - array bestående av tall
Returner (arrayCopy) - sortert kopi av array
*/

function SortNum(array){
    let arrayCopy = [];
    length = array.length
    for(let x = 0; x<length; x++){
        let i = 0
        let tall = array[i];
        for(i = 0; i<array.length; i++){
            if(Number(array[i]) < Number(tall)){
                tall = array[i];
            }
        }
        arrayCopy.push(tall)
        array.splice(array.indexOf(tall), 1)
    }
    return arrayCopy
}
console.log(SortNum(test))




