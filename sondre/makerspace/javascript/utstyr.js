let id_grid_nameel = document.getElementById("id_grid_name");
const HTMLNAME = id_grid_nameel.getAttribute("class");

let htmltekst="";
let array_fungerende_printer=[];
let antall_fungerende_printere=Number(localStorage.getItem("fungerende_printere_antall"));
let i=0;
let j=0;

console.log(JSON.parse(localStorage.getItem("array_fungerende_printer")));

let liste_fungerende_printereEl = document.getElementById("id_liste_fungerende_printere");

let antall_fungerendeEL = document.getElementById("id_antall_fungerende");
let id_fungerer_btn = document.getElementById("id_fungerer_btn");
let id_ødelagt_btn = document.getElementById("id_ødelagt_btn");

let knapp_ok_btnEl = document.getElementById("id_ok_btn");
let slett_cookies_btnEl = document.getElementById("id_slett_cookies_btn");
let cookies_pop_upEl = document.getElementById("id_cookies");

knapp_ok_btnEl.addEventListener("click", cookies_ok_funk);
slett_cookies_btnEl.addEventListener("click",slett_funk);


if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    slett_cookies_btnEl.style.display = "inline-block";
    cookies_pop_upEl.style.display ="none";
    console.log(HTMLNAME)

    
    if(JSON.parse(localStorage.getItem("array_fungerende_printer"))===null || Number(localStorage.getItem("fungerende_printere_antall"))===null){
        antall_fungerendeEL.innerHTML="Antall fungerende printere: 37";

        antall_fungerende_printere=37;
        array_fungerende_printer=["400","Baymax","Bulbasaur","Cosinus","Darth Vader","Dave","FN-2187","Forrest Gump","Gandalf","Kingpin","Krist","Kurt","Luke","Po","Radagast","RGB(0,0,0)","Roger","Saurmann","Sinus","Stormtrooper","Tak","The Godfather","Tik","Timtim","TK-421","Toad","Tritonus","Kirby","Kopp Presse","Laser Baby","Morpheus","Presse","Trykk Skriver","Turnip head","Vakeum","Voldemort","Zeus"];

        id_fungerer_btn.removeEventListener("click", fungerer_funk);
        id_fungerer_btn.style.cursor="not-allowed";
        id_ødelagt_btn.addEventListener("click", ødelagt_funk);
        id_ødelagt_btn.style.cursor="pointer";

        console.log("1")
        console.log(array_fungerende_printer)

        j=0;

        while (j < array_fungerende_printer.length) {
            htmltekst +='<a href="'+array_fungerende_printer[j]+'.html"><div class="cl_velg"><img src="../media/'+array_fungerende_printer[j]+'.jpeg" alt="Bilde av utstyr kalt '+array_fungerende_printer[j]+'" height="256em" width="144em"><br><h4>'+array_fungerende_printer[j]+'</h4></div></a>';
           j++;
        }

        liste_fungerende_printereEl.innerHTML = htmltekst;

        console.log("en")
        localStorage.setItem("fungerende_printere_antall",antall_fungerende_printere);
    }
    else{
        antall_fungerendeEL.innerHTML="Antall fungerende printere:"+antall_fungerende_printere;

        let midlertidig=(JSON.parse(localStorage.getItem("array_fungerende_printer")));
        array_fungerende_printer = midlertidig.concat();

        console.log(typeof array_fungerende_printer);
        console.log(array_fungerende_printer);

        while(array_fungerende_printer[i]!==HTMLNAME && i<array_fungerende_printer.length){
            i++;
            console.log(i+array_fungerende_printer[i]);
        }


        while (j < array_fungerende_printer.length) {
            htmltekst += '<a href="'+array_fungerende_printer[j]+'.html"><div class="cl_velg"><img src="../media/'+array_fungerende_printer[j]+'.jpeg" alt="Bilde av utstyr kalt '+array_fungerende_printer[j]+'" height="256em" width="144em"><br><h4>'+array_fungerende_printer[j]+'</h4></div></a>';

            j++;
        }

        
        if(array_fungerende_printer[i]!==HTMLNAME && i<array_fungerende_printer.length){
            id_ødelagt_btn.removeEventListener("click", ødelagt_funk);
            id_ødelagt_btn.style.cursor="not-allowed";
            console.log("2")
        }
        else{
            id_fungerer_btn.removeEventListener("click", fungerer_funk);
            id_fungerer_btn.style.cursor="not-allowed";
            console.log("3")
        }


        liste_fungerende_printereEl.innerHTML = htmltekst;
        console.log("to")
    }


    localStorage.setItem("array_fungerende_printer",JSON.stringify(array_fungerende_printer));
}
else {
    slett_cookies_btnEl.style.display = "none";
    cookies_pop_upEl.style.display = "block";

    id_ødelagt_btn.removeEventListener("click", ødelagt_funk);
    id_ødelagt_btn.style.cursor="not-allowed";
    id_fungerer_btn.removeEventListener("click", fungerer_funk);
    id_fungerer_btn.style.cursor="not-allowed";
    console.log("10")
}


console.log((array_fungerende_printer.indexOf(HTMLNAME)) + array_fungerende_printer+HTMLNAME);
console.log(typeof array_fungerende_printer[13],typeof HTMLNAME);
console.log(array_fungerende_printer[13]);


if(array_fungerende_printer.indexOf(HTMLNAME) === -1){
    id_fungerer_btn.addEventListener("click", fungerer_funk);
    id_fungerer_btn.style.cursor="pointer";
    console.log("4")

    id_ødelagt_btn.removeEventListener("click", ødelagt_funk);
    id_ødelagt_btn.style.cursor="not-allowed";
    console.log("5")
}
else{
    id_fungerer_btn.removeEventListener("click", fungerer_funk);
    id_fungerer_btn.style.cursor="not-allowed";
    console.log("6")

    id_ødelagt_btn.addEventListener("click", ødelagt_funk);
    id_ødelagt_btn.style.cursor="pointer";
    console.log("7")
}


function slett_funk() {
    localStorage.clear();
    cookies_pop_upEl.style.display = "block";
    slett_cookies_btnEl.style.display = "none";

    id_ødelagt_btn.removeEventListener("click", ødelagt_funk);
    id_ødelagt_btn.style.cursor="not-allowed";
    id_fungerer_btn.removeEventListener("click", fungerer_funk);
    id_fungerer_btn.style.cursor="not-allowed";

    console.log("11")
    location.reload();
}


function cookies_ok_funk(){
    cookies_pop_upEl.style.display = "none";
    slett_cookies_btnEl.style.display ="inline-block";

    localStorage.setItem("cookiesGodkjentForIndex1", "Ja");

    id_fungerer_btn.addEventListener("click", fungerer_funk);
    id_fungerer_btn.style.cursor="pointer";
    id_ødelagt_btn.addEventListener("click", ødelagt_funk);
    id_ødelagt_btn.style.cursor="pointer";

    console.log("12")
    location.reload();
}


function fungerer_funk(){
    antall_fungerende_printere+=1;
    antall_fungerendeEL.innerHTML="Antall fungerende printere:"+antall_fungerende_printere;

    id_fungerer_btn.removeEventListener("click", fungerer_funk);
    id_fungerer_btn.style.cursor="not-allowed";

    id_ødelagt_btn.addEventListener("click", ødelagt_funk);
    id_ødelagt_btn.style.cursor="pointer";
    console.log("13")

    array_fungerende_printer.push(HTMLNAME);

    htmltekst=""
    j=0

    
    while (j < array_fungerende_printer.length) {
        htmltekst += '<a href="'+array_fungerende_printer[j]+'.html"><div class="cl_velg"><img src="../media/'+array_fungerende_printer[j]+'.jpeg" alt="Bilde av utstyr kalt '+array_fungerende_printer[j]+'" height="256em" width="144em"><br><h4>'+array_fungerende_printer[j]+'</h4></div></a>';

        j++;
    }


    liste_fungerende_printereEl.innerHTML = htmltekst;

    
    if(antall_fungerende_printere === 37){
        id_fungerer_btn.removeEventListener("click", fungerer_funk);
        id_fungerer_btn.style.cursor="not-allowed";
        console.log("14")
    }


    localStorage.setItem("array_fungerende_printer",JSON.stringify(array_fungerende_printer));
    console.log(array_fungerende_printer);
    localStorage.setItem("fungerende_printere_antall",antall_fungerende_printere);
}


function ødelagt_funk(){
    antall_fungerende_printere -= 1
    
    localStorage.setItem("fungerende_printere_antall",(antall_fungerende_printere));  
    antall_fungerendeEL.innerHTML="Antall fungerende printere:"+antall_fungerende_printere;

    id_fungerer_btn.addEventListener("click", fungerer_funk);
    id_fungerer_btn.style.cursor="pointer";

    id_ødelagt_btn.removeEventListener("click", ødelagt_funk);
    id_ødelagt_btn.style.cursor="not-allowed";
    console.log("15")
    
    i=0


    while(array_fungerende_printer[i]!==HTMLNAME && i<array_fungerende_printer.length){
        i++;
        console.log(i+array_fungerende_printer[i]);
    }


    array_fungerende_printer.splice(i,1);
    console.log(i+array_fungerende_printer);

    j = 0;
    htmltekst = "";
    

    while (j < array_fungerende_printer.length && j<array_fungerende_printer.length) {
        htmltekst += '<a href="'+array_fungerende_printer[j]+'.html"><div class="cl_velg"><img src="../media/'+array_fungerende_printer[j]+'.jpeg" alt="Bilde av utstyr kalt '+array_fungerende_printer[j]+'" height="256em" width="144em"><br><h4>'+array_fungerende_printer[j]+'</h4></div></a>';

        j++;
    }


    liste_fungerende_printereEl.innerHTML = htmltekst;


    if(antall_fungerende_printere===0){
        id_ødelagt_btn.removeEventListener("click", ødelagt_funk);
        id_ødelagt_btn.style.cursor="not-allowed";
        console.log("16")
    }

    localStorage.setItem("array_fungerende_printer",JSON.stringify(array_fungerende_printer));
    console.log(array_fungerende_printer)
    localStorage.setItem("fungerende_printere_antall",antall_fungerende_printere);
}
    console.log((localStorage.getItem("array_fungerende_printer")))
    console.log(array_fungerende_printer + antall_fungerende_printere)
    console.log(JSON.parse(localStorage.getItem("array_fungerende_printer")))