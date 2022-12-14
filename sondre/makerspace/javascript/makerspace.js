let i=0

let antall_fungerende_printere=0

let midlertidig=(JSON.parse(localStorage.getItem("array_fungerende_printer")))
array_fungerende_printer = midlertidig.concat()
let alle_printerne_array=["400","Baymax","Bulbasaur","Cosinus","Darth Vader","Dave","FN-2187","Forrest Gump","Gandalf","Kingpin","Krist","Kurt","Luke","Po","Radagast","RGB(0,0,0)","Roger","Saurmann","Sinus","Stormtrooper","Tak","The Godfather","Tik","Timtim","TK-421","Toad","Tritonus","Kirby","Kopp presse","Laser Baby","Morpheus","Presse","Trykk skriver","Turnip head","Vakeum","Voldemort","Zeus"]

let antall_fungerendeEL = document.getElementById("id_antall_fungerende");

console.log(array_fungerende_printer)
console.log(array_fungerende_printer)
if(array_fungerende_printer!==null){
    while(i<(alle_printerne_array.length)){
        let element = document.getElementById(alle_printerne_array[i])
        element.style.backgroundColor="darkred"
        element.addEventListener("mouseover",mouseOver2)
        element.addEventListener("mouseout",mouseOut2)
        function mouseOver2() {
            element.style.backgroundColor = "red";
        }
    
        function mouseOut2() {
            element.style.backgroundColor = "darkred";
        }
    i++
    }
    i=0
    while(i<(alle_printerne_array.length)){
        let j=0
        let element = document.getElementById(alle_printerne_array[i])
        while(j<(array_fungerende_printer.length)){
            console.log
            if(alle_printerne_array[i]===array_fungerende_printer[j]){
                element.style.backgroundColor="green"
                element.addEventListener("mouseover",mouseOver)
                element.addEventListener("mouseout",mouseOut)
                function mouseOver() {
                    element.style.backgroundColor = "lightgreen";
                }
                
                function mouseOut() {
                    element.style.backgroundColor = "green";
                }

            }
            j++;
            console.log(i+alle_printerne_array[i])
        }
        i++;
        console.log(i+array_fungerende_printer[i])
    }
}

if (Number(localStorage.getItem("fungerende_printere_antall"))!== null){
    antall_fungerende_printere=Number(localStorage.getItem("fungerende_printere_antall"));
}

antall_fungerendeEL.innerHTML="Antall fungerende printere:"+antall_fungerende_printere;