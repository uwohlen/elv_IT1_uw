let knappokEl = document.getElementById("ok");
let knappslett =document.getElementById("btnslett");
let cookiesup =document.getElementById("cookies");

knappokEl.addEventListener("click", cookies_ok)
knappslett.addEventListener("click",slett)

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    knappslett.style.display = "inline-block";
    cookiesup.style.display ="none";
}
else {
    knappslett.style.display = "none";
    cookiesup.style.display ="block";
}

function slett() {
    localStorage.clear();
    cookiesup.style.display = "block"
    knappslett.style.display ="none"
    location.reload();
}

function cookies_ok(){
    console.log("ja")
    cookiesup.style.display = "none";
    knappslett.style.display ="inline-block";
    localStorage.setItem("cookiesGodkjentForIndex1", "Ja")
    location.reload();
}

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    console.log("ok")
}