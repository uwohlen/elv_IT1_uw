let Okknapp = document.getElementById("ok")
let del1el = document.getElementById("del1")
let del2el = document.getElementById("del2")
del1el.style.display="block"

let navnEl = document.getElementById("idNavn");
        navnEl.addEventListener("keydown",lagrefunk);
        function lagrefunk(event) {
            console.log(event.keyCode);
            console.log(navnEl.value);
            
            if (event.keyCode === 13) {
                localStorage.setItem("lagretNavnForQuiz1",navnEl.value);
                localStorage.setItem("lagretNavn","true")
         }
        }  

Okknapp.addEventListener("click",okfunk);
function okfunk() {
    Okknapp.style.backgroundColor = ("rgb(100,100,100)")
    del1el.style.display="none"
    del2el.style.display="block"
    localStorage.setItem("lagretNavnForQuiz1"," ")
    localStorage.setItem("lagretNavn","false")


    
    
}


