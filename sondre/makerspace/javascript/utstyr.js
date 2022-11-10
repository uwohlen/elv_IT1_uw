let grid_nameel= document.getElementById("grid_name")
const htmlname = grid_nameel.getAttribute("class");

let htmltekst=""
let fungprint=[]
let fungsum=(localStorage.getItem("fungsave"));
let i=0
let j=0

let listprint = document.getElementById("idprintlist")

let fungerende3d = document.getElementById("idfung3d");
let fungbtn = document.getElementById("fungbtn");
let ødelagtbtn = document.getElementById("ødelagtbtn");

let knappokEl = document.getElementById("ok");
let knappslett = document.getElementById("btnslett");
let cookiesup = document.getElementById("cookies");

knappokEl.addEventListener("click", cookies_ok)
knappslett.addEventListener("click",slett)

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    knappslett.style.display = "inline-block";
    cookiesup.style.display ="none";
    fungbtn.addEventListener("click", fung);
    fungbtn.style.cursor="pointer"
    ødelagtbtn.addEventListener("click", ødelagt);
    ødelagtbtn.style.cursor="pointer"
    console.log(htmlname)

    if(fungsum==0){
        ødelagtbtn.removeEventListener("click", ødelagt)
        ødelagtbtn.style.cursor="not-allowed"
        listprint.innerHTML = "Dessverre er alle printerne ute av drift:(";
    }
    
    if(fungsum==37){
        fungbtn.removeEventListener("click", fung)
        fungbtn.style.cursor="not-allowed"
        let fungprint=[]
        fungprint=["400","Baymax","Bulbasaur","Cosinus","Darth Vader","Dave","FN-2187","Forrest Gump","Gandalf","Kingpin","Krist","Kurt","Luke","Po","Radagast","RGB(0,0,0)","Roger","Saurmann","Sinus","Stormtrooper","Tak","The Godfather","Tik","Timtim","TK-421","Toad","Tritonus","Kirby","Kopp Presse","Laser Baby","Morpheus","Presse","Trykk Skriver","Turnip head","Vakeum","Voldemort","Zeus"]
        j=0
        while (j < fungprint.length) {
            htmltekst += '<a href="'+fungprint[j]+'.html"><div class="velg"><img src="../media/'+fungprint[j]+'.jpeg" alt="Bilde av utstyr kalt '+fungprint[j]+'" height="256em" width="144em"><br><h4>'+fungprint[j]+'</h4></div></a>';
    
            j++;
        }
        listprint.innerHTML = htmltekst;
    }
    
    if(localStorage.getItem("fungsave")==null || (localStorage.getItem("fungprint"))==null){
        fungerende3d.innerHTML="Antall fungerende printere: 37";
        fungsum=37
        let fungprint=[]
        fungprint=["400","Baymax","Bulbasaur","Cosinus","Darth Vader","Dave","FN-2187","Forrest Gump","Gandalf","Kingpin","Krist","Kurt","Luke","Po","Radagast","RGB(0,0,0)","Roger","Saurmann","Sinus","Stormtrooper","Tak","The Godfather","Tik","Timtim","TK-421","Toad","Tritonus","Kirby","Kopp Presse","Laser Baby","Morpheus","Presse","Trykk Skriver","Turnip head","Vakeum","Voldemort","Zeus"]
        fungbtn.removeEventListener("click", fung)
        fungbtn.style.cursor="not-allowed"
        console.log(fungprint.length)
        j=0
        while (j < fungprint.length) {
            htmltekst +='<a href="'+fungprint[j]+'.html"><div class="velg"><img src="../media/'+fungprint[j]+'.jpeg" alt="Bilde av utstyr kalt '+fungprint[j]+'" height="256em" width="144em"><br><h4>'+fungprint[j]+'</h4></div></a>';
           j++;
        }
        listprint.innerHTML = htmltekst;
        console.log("en")
    }
    else{
        fungerende3d.innerHTML="Antall fungerende printere:"+fungsum;
        fungprint.push((localStorage.getItem("fungprint")))
        console.log(fungprint)
        while(fungprint[i]!==htmlname && i<fungprint.length){
            i++;
            console.log(i+fungprint[i])
        }
        while (j < fungprint.length) {
        htmltekst += '<a href="'+fungprint[j]+'.html"><div class="velg"><img src="../media/'+fungprint[j]+'.jpeg" alt="Bilde av utstyr kalt '+fungprint[j]+'" height="256em" width="144em"><br><h4>'+fungprint[j]+'</h4></div></a>';

        j++;
        }
        if(fungprint[i]!==htmlname && i<fungprint.length){
            ødelagtbtn.removeEventListener("click", ødelagt)
            ødelagtbtn.style.cursor="not-allowed"
        }
        else{
            fungbtn.removeEventListener("click", fung)
            fungbtn.style.cursor="not-allowed"
        }
        listprint.innerHTML = htmltekst;
        console.log("to")
    }
    localStorage.setItem("fungprint",(fungprint))
}
else {
    ødelagtbtn.removeEventListener("click", ødelagt)
    ødelagtbtn.style.cursor="not-allowed"
    knappslett.style.display = "none";
    cookiesup.style.display ="block";
    ødelagtbtn.removeEventListener("click", ødelagt)
    ødelagtbtn.style.cursor="not-allowed"
    fungbtn.removeEventListener("click", fung)
    fungbtn.style.cursor="not-allowed"
}

function slett() {
    localStorage.clear();
    cookiesup.style.display = "block"
    knappslett.style.display ="none"
    ødelagtbtn.removeEventListener("click", ødelagt)
    ødelagtbtn.style.cursor="not-allowed"
    fungbtn.removeEventListener("click", fung)
    fungbtn.style.cursor="not-allowed"
    location.reload();
}

function cookies_ok(){
    cookiesup.style.display = "none";
    knappslett.style.display ="inline-block";
    localStorage.setItem("cookiesGodkjentForIndex1", "Ja")

    fungbtn.addEventListener("click", fung);
    fungbtn.style.cursor="pointer"
    ødelagtbtn.addEventListener("click", ødelagt);
    ødelagtbtn.style.cursor="pointer"
    location.reload();
}
function fung(){
    fungsum+=1
    fungerende3d.innerHTML="Antall fungerende printere:"+fungsum;

    fungbtn.removeEventListener("click", fung)
    fungbtn.style.cursor="not-allowed"

    ødelagtbtn.addEventListener("click", ødelagt);
    ødelagtbtn.style.cursor="pointer"

    fungprint.push(htmlname)

    j=0
    while (j < fungprint.length) {
        htmltekst += '<a href="'+fungprint[j]+'.html"><div class="velg"><img src="../media/'+fungprint[j]+'.jpeg" alt="Bilde av utstyr kalt '+fungprint[j]+'" height="256em" width="144em"><br><h4>'+fungprint[j]+'</h4></div></a>';

        j++;
    }

    listprint.innerHTML = htmltekst;

    if(fungsum==37){
        fungbtn.removeEventListener("click", fung)
        fungbtn.style.cursor="not-allowed"
    }
    localStorage.setItem("fungprint",(fungprint))
}

function ødelagt(){
    fungsum-=1
    localStorage.setItem("fungsave",(fungsum));  
    fungerende3d.innerHTML="Antall fungerende printere:"+fungsum;

    fungbtn.addEventListener("click", fung);
    fungbtn.style.cursor="pointer"

    ødelagtbtn.removeEventListener("click", ødelagt)
    ødelagtbtn.style.cursor="not-allowed"
    
    i=0
    while(fungprint[i]!==htmlname && i<fungprint.length){
        i++;
        console.log(i+fungprint[i])
    }
    fungprint.splice(i,1);
    console.log(i+fungprint)

    j=0
    htmltekst=""
    while (j < fungprint.length && i<fungprint.length) {
        htmltekst += '<a href="'+fungprint[j]+'.html"><div class="velg"><img src="../media/'+fungprint[j]+'.jpeg" alt="Bilde av utstyr kalt '+fungprint[j]+'" height="256em" width="144em"><br><h4>'+fungprint[j]+'</h4></div></a>';

        j++;
    }

    listprint.innerHTML = htmltekst;

    if(fungsum==0){
        ødelagtbtn.removeEventListener("click", ødelagt)
        ødelagtbtn.style.cursor="not-allowed"
    }
    localStorage.setItem("fungprint",(fungprint))
    console.log(fungprint)
}
    console.log((localStorage.getItem("fungprint")))
    console.log(fungprint)