

function finnArrayLengde(verdi){
    let lengde = verdi.length
    return lengde
}
//console.log(finnArrayLengde([1,2,3,5]))


function finnStørsteElement(array){
    verdi=array[0]
    størsteverdi=verdi
    for(i=0;i<array.length;i++){
        verdi=array[i]
        if(størsteverdi<verdi){
            størsteverdi=verdi;
        }
    }
    return størsteverdi 
}
//console.log(finnMinsteElement([1,4,3,22,-8]))

function finnMinsteElement(array){
    verdi=array[0]
    minsteverdi=verdi
    for(i=0;i<array.length;i++){
        verdi=array[i]
        if(minsteverdi>verdi){
            minsteverdi=verdi;
        }
    }
    return minsteverdi 
}
//console.log(finnMinsteElement([1,4,3,22,-8]))

function finnSum(array){
    verdi=array[0]
    sum=0
    for(i=0;i<array.length;i++){
        verdi=array[i]
        sum+=verdi
    }
    return sum 
}
//console.log(finnSum([1,2,3,8]))

function finnGjennomsnitt(array){
    verdi=array[0]
    sum=0
    for(i=0;i<array.length;i++){
        verdi=array[i]
        sum+=verdi
    }
    return sum/array.length
}
//console.log(finnGjennomsnitt([1,2,3,8]))

function finnIndexOf(bokstav,input){
    array=input.split("");
    for(i=0;i<array.length;i++){
        if(bokstav===array[i]){
            return i
        }
    }
    return -1
}
//console.log(finnIndexOf("b","abraham"))

function primTallFaktoriser(input){
    verdi=Number(input)
    array=[]
    brød=2

    while(brød<=verdi){
        if(verdi%i===0){
            array.push(brød)
            verdi=(verdi/brød)
            brød=2
        }
        else{
            brød+=1
        }
    }
    array.push[verdi]
    return(array)
}
//console.log(primTallFaktoriser(497770))


function tilfeldigArray(antall,minsteverdi,størsteverdi){
    array=[]
    brød=0
    while(brød<antall){
        tall=Math.floor(Math.random()*(størsteverdi+1-minsteverdi)+minsteverdi);
        if(array.includes(tall)){
        }
        else{
            array.push(tall);
            brød++;
        }
        
    }
    return(array)
}
//console.log(tilfeldigArray(10,1,10))











