let sporsmal = [
    {
        sporsmal: "Hva er RAM?",
        alt1: "korttidsminne for PC-en",
        alt2: "en type grafikkort",
        alt3: "regulerer temperatur",
        alt4: "RAM er ikke ekte",
        riktig: 1,
        svart: false,
    },
    {
        sporsmal: "hva står SSD for?",
        alt1: "Solid-Speed Drive",
        alt2: "Super-Speed Drive",
        alt3: "Solid-State Drive",
        alt4: "Super-State Drive",
        riktig: 3,
        svart: false
    },
    {
        sporsmal: "hva står CPU for?",
        alt1: "Computer processing unit",
        alt2: "Computer power utilizer",
        alt3: "canvas player up",
        alt4: "Central Processing Unit",
        riktig: 4,
        svart: false,
    },
    {
        sporsmal: "Hihihihi",
        alt1: "Halvor veeeet hva som skjer",
        alt2: "Faen ass damn",
        alt3: "har ikke noe å si. klarer det uansett",
        alt4: "vær forsiksiktig, før han stjeler lyspæra",
        riktig: 1,
        svart: false,
    }
]   
let poengene = 0
let currentSpm = 0
let isWaiting = false
let maksFeil = 2
let feil = 0

function init() {
    document.getElementById("alt1").innerText = sporsmal[currentSpm].alt1
    document.getElementById("alt2").innerText = sporsmal[currentSpm].alt2
    document.getElementById("alt3").innerText = sporsmal[currentSpm].alt3
    document.getElementById("alt4").innerText = sporsmal[currentSpm].alt4
    document.getElementById("spm").innerText = sporsmal[currentSpm].sporsmal
    document.getElementById("poeng").innerText = "Poeng:" + poengene


}

function handleAnswer(alt) {
    if (isWaiting) return
    if (feil === 2) return
    if (alt == sporsmal[currentSpm].riktig) {
        if (currentSpm == sporsmal.length - 1) {
            poengene += 1
            quiz()
            poengene += 1
            console.log("hvaa")
            return
        }

    }
    /*
    1. se om svaret er riktig
    2. gjøre boksen rød eller grønn basert på svaret
    3. bytte spørsmål
    */
    console.log("he")

    if (alt == sporsmal[currentSpm].riktig &&
        !sporsmal[currentSpm].svart
    ) {
        const newalt = document.getElementById("alt" + alt.toString())
        newalt.innerText = "Riktig!"
        newalt.className = "bg-green-700 flex p-4 rounded-md h-40 w-96 items-center justify-center"
        feil = 0



        const spm = document.getElementById("spm")

        console.log(window.localStorage.getItem("navnet"))
        console.log(sporsmal[currentSpm].svart)


        if (!sporsmal[currentSpm].svart) {
            poengene += 1

        }
        document.getElementById("poeng").innerText = "Poeng:" + poengene
        sporsmal[currentSpm].svart = true;

        window.localStorage.setItem(window.localStorage.getItem("navnet")+"_poeng", poengene)

        isWaiting = true
        setTimeout(() => {
            currentSpm++;
            spm.innerText = sporsmal[currentSpm].sporsmal
            document.getElementById("alt1").innerText = sporsmal[currentSpm].alt1
            document.getElementById("alt2").innerText = sporsmal[currentSpm].alt2
            document.getElementById("alt3").innerText = sporsmal[currentSpm].alt3
            document.getElementById("alt4").innerText = sporsmal[currentSpm].alt4
            alt1.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt2.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt3.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt4.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            isWaiting = false

        }, 1000);



    }
    else if (alt == sporsmal[currentSpm].neste)
        nesteSpm(0)





    else if (alt == sporsmal[currentSpm].forrige) {
        forrigeSpm(0)
        console.log("yoo")
    }



    else {
        console.log("hei")
        let newalt = document.getElementById("alt" + alt.toString())
        newalt.innerText = "Feil! Noob"
        newalt.className = "bg-red-700 flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
        feil += 1
        if (feil >= maksFeil){
            isWaiting = true
            setTimeout(() => {
                viderefeil()
                isWaiting = false
            }, 200);
            if (currentSpm == sporsmal.length - 1) {
                quiz()
                console.log("hvaa")
                return
            }
        }
       

    }




}


function nesteSpm() {

    if (currentSpm + 1 >= sporsmal.length)
        setSpm(0)
    else setSpm(currentSpm + 1)

}

function forrigeSpm() {

    if (currentSpm - 1 < 0)
        setSpm(sporsmal.length - 1)
    else setSpm(currentSpm - 1)

}

function setSpm(spmID) {
    const spm = document.getElementById("spm")

    setTimeout(() => {


        currentSpm = spmID;

        spm.innerText = sporsmal[currentSpm].sporsmal
        document.getElementById("alt1").innerText = sporsmal[currentSpm].alt1
        document.getElementById("alt2").innerText = sporsmal[currentSpm].alt2
        document.getElementById("alt3").innerText = sporsmal[currentSpm].alt3
        document.getElementById("alt4").innerText = sporsmal[currentSpm].alt4
        alt1.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
        alt2.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
        alt3.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
        alt4.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"

        if (sporsmal[currentSpm].svart != null) {
            console.log("g er er tulling", sporsmal[currentSpm].svart)
        }

    }, 200);
}

function quiz() {
    let quiz = document.getElementById("quizen")
    let ferdig = document.getElementById("finishPage")
    let sPoeng = document.getElementById("sluttPoeng")
    let skjul = document.getElementById("poeng")
    let omstart = document.getElementById("prøveIgjen")
    let gratulerer = document.getElementById("gratulerer")
    gratulerer.innerHTML = "Gratulerer, " + window.localStorage.getItem("navnet") + "!"
    skjul.className = "hidden"
    quiz.className = "hidden"
    ferdig.className = "z-20 flex h-screen w-screen bg-emerald-50 justify-center items-center"
    sPoeng.className = "flex text-3xl justify-center item-center"
    sPoeng.innerHTML = poengene + "/" + (sporsmal.length) + " Poeng"
    omstart.className = "flex text-xl justify-center item-center"


}


function igjen() {
    window.location.reload()
   
}


function viderefeil(){

    setTimeout(() => {
        setSpm(currentSpm + 1)
        feil = 0 
    }, 100);
}


