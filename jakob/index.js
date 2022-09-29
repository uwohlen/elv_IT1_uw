
function prosjekt_Knapp(prosjektnummer) {
    if (prosjektnummer == 1){
        let cookies = document.getElementById("cookies")
        let cookies_skjerm = document.getElementById("prosjektene")
        cookies.className = "flex w-screen h-screen bg-gradient-to-r from-emerald-100 to-indigo-100 z-10 justify-center items-center"
        cookies_skjerm.className = "hidden"
        console.log("hahah")
    }
    

    
    

}

function godkjenning(param){
    let navn = document.getElementById("navn")
    let bekreftelse = document.getElementById("bekreftelse")
    if(param == 1){
        navn.className = "outline w-1/4 h-16 p-2"
        bekreftelse.className = "hidden"

    }
}


function lagre_navn(navn){
    if (navn == 0){
 
            let navn_id = document.getElementById("navn")
            let hei_id = document.getElementById("hei")
            let tilquiz_id = document.getElementById("tilQuiz")
            console.log(navn_id.value)
            window.localStorage.setItem("navnet", navn_id.value)
            console.log(localStorage.getItem("navnet"))
            hei_id.innerHTML = "Hei, " + localStorage.getItem("navnet")
            tilquiz_id.className = "bg-grey-100 outline rounded p-3"
        

    }
}