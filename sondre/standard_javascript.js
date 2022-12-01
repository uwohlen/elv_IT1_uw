let knapp_ok_btnEl = document.getElementById("id_ok_btn");
let slett_cookies_btnEl =document.getElementById("id_slett_cookies_btn");
let cookies_pop_upEl =document.getElementById("id_cookies");

knapp_ok_btnEl.addEventListener("click", cookies_ok_funk)
slett_cookies_btnEl.addEventListener("click",slett_funk)

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    slett_cookies_btnEl.style.display = "inline-block";
    cookies_pop_upEl.style.display ="none";
}
else {
    slett_cookies_btnEl.style.display = "none";
    cookies_pop_upEl.style.display ="block";
}

function slett_funk() {
    localStorage.clear();
    cookies_pop_upEl.style.display = "block"
    slett_cookies_btnEl.style.display ="none"
    location.reload();
}

function cookies_ok_funk(){
    console.log("ja")
    cookies_pop_upEl.style.display = "none";
    slett_cookies_btnEl.style.display ="inline-block";
    localStorage.setItem("cookiesGodkjentForIndex1", "Ja")
    location.reload();
}

if (localStorage.getItem("cookiesGodkjentForIndex1")=== "Ja"){
    console.log("ok")
}