let i=0

var fungprint=JSON.parse(localStorage.getItem("funglist"))
let alleprint=["400","Baymax","Bulbasaur","Cosinus","Darth Vader","Dave","FN-2187","Forrest Gump","Gandalf","Kingpin","Krist","Kurt","Luke","Po","Radagast","RGB(0,0,0)","Roger","Saurmann","Sinus","Stormtrooper","Tak","The Godfather","Tik","Timtim","TK-421","Toad","Tritonus","Kirby","Kopp Presse","Laser Baby","Morpheus","Presse","Trykk Skriver","Turnip head","Vakeum","Voldemort","Zeus"]
console.log(fungprint)
console.log(fungprint)
if(localStorage.getItem("funglist")!==null){
    while(i<(alleprint.length)){
        let element = document.getElementById(alleprint[i])
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
    while(i<(alleprint.length)){
        let j=0
        let element = document.getElementById(alleprint[i])
        while(j<(fungprint.length)){
            console.log
            if(alleprint[i]==fungprint[j]){
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
            console.log(i+alleprint[i])
        }
        i++;
        console.log(i+fungprint[i])
    }
}