let tall=[1,2,3,4,6,10];
let bokstav=[
    ["b","a","f"],
    ["e","c","d"]
];
console.log(tall.length); //lengden av en array

let storst = tall[0];
for (let i = 0; i < tall.length; i++) {
    if (tall[i] > storst) {
        storst = tall[i];
    }
}
console.log(storst); //printer største verdi

let minst = tall[0];
for (let i = 0; i < tall.length; i++) {
    if (tall[i] < minst) {
        minst = tall[i];
    }
}
console.log(minst); //printer minste verdi

let sum = 0;
for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
}
console.log(sum); // printer summen

let gjennomsnitt = sum/tall

tall.splice(2,3,1)

function fakultetfunk(verdi=1) { 
    if(verdi===0){ 
        return 1; 
    } 
    else if (verdi > 0) { 
        let produkt = verdi; 
        for (let i=verdi-1; i>0; i--) { 
            produkt *= i; 
        } 
    return produkt; 
    } 
} 
for (let i=0; i<navn.length;i++){
    tekst+="<p>"+navn[i]+"<p>";
}
function sammenlign(a,b){
    if(a>b) {
        return 1;
    }
    else if (a<b) {
        return 0;
    }
}
for (let i = 0; i<tall.length;i++) {
    tekst += "<tr>";
    for (let j = 0; j< tall[i].length; j++) {
        tekst += "<td>" + tall[i][j] + "/<td>";
        }
    tekst+="/<tr>"
}
function sammenlign2(a,b){
    if (a[1]<b[1]){
        return -1;
    }
    else if (a[1]>b[1]) {
        return 1;
    }
    else {
        return 0;
    }
}
for (let i = 0; i<tall.length;i++) {
    tekst += "<tr>";
    for (let j = 0; j< tall[i].length; j++) {
        if (typeof(tall[i][j])==="number") {
            tekst += "<td class='tallkolonne'>"+ tall[i][j] + "/<td>";
        }
        else {
            tekst += "<td>" + tall[i][j] + "/<td>";
        }
    }
    tekst+="/<tr>"
}
function tildeldig(a,b){
    return Math.floor(Math.random()*2)-1
}
console.log(tall.sort(tilfeldig))