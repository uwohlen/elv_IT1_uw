var karakter =
document.getElementById("karakter");
var blokk = document.getElementById("blokk");
function jump(){
    if(karakter.classList !="animate"){
    karakter.classList.add("animate");
    }
    setTimeout(function(){
        karakter.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    var karakterTop =
    parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    var blokkLeft =
    parseInt(window.getComputedStyle(blokk).getPropertyValue("left"));
    if(blokkLeft<40 && blokkLeft>0 && karakterTop>=260){
        blokk.style.animation = "none";
        blokk.style.display = "none";
        alert("Du tapte. Første gangen er vanskelig. Prøv igjen");
    }
},10);


