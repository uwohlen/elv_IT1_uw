let krypteringene = [
    {
        bokstav: "a",
        kryptering: "rar",

    },
    {
        bokstav: "b",
        kryptering: "nei",

    },
    {
        bokstav: "c",
        kryptering: "skummel",

    },
    {
        bokstav: "d",
        kryptering: "varm",

    },
    {
        bokstav: "e",
        kryptering: "kald",

    },
    {
        bokstav: "f",
        kryptering: "klatre",

    },
    {
        bokstav: "g",
        kryptering: "masse",

    },
    {
        bokstav: "h",
        kryptering: "hardt",

    },
    {
        bokstav: "i",
        kryptering: "hai",

    },
    {
        bokstav: "j",
        kryptering: "skrik",

    },
    {
        bokstav: "k",
        kryptering: "klargjorde",

    },
    {
        bokstav: "l",
        kryptering: "eple",

    },
    {
        bokstav: "m",
        kryptering: "kanon",

    },
    {
        bokstav: "n",
        kryptering: "italiensk",

    },
    {
        bokstav: "o",
        kryptering: "myr",

    },
    {
        bokstav: "p",
        kryptering: "mast",

    },
    {
        bokstav: "q",
        kryptering: "skarp",

    },
    {
        bokstav: "r",
        kryptering: "sløv",

    },
    {
        bokstav: "s",
        kryptering: "baida",

    },
    {
        bokstav: "t",
        kryptering: "harpun",
    },
    {
        bokstav: "u",
        kryptering: "hasjish",

    },
    {
        bokstav: "v",
        kryptering: "papes",

    },
    {
        bokstav: "w",
        kryptering: "minsk",

    },
    {
        bokstav: "x",
        kryptering: "magisk",

    },
    {
        bokstav: "y",
        kryptering: "smil",

    },
    {
        bokstav: "z",
        kryptering: "grell",

    },
    {
        bokstav: "æ",
        kryptering: "konstant",

    },
    {
        bokstav: "ø",
        kryptering: "zouf",

    },
    {
        bokstav: "å",
        kryptering: "grønt",
    },
    {
        bokstav: " ",
        kryptering: "penger",
    },
]

let output = document.getElementById("output")
let kryptert = ""


function krypter(params) {
    let kryptert = ""
    //setter den krypterte teksten tilbake til ingenting for å ikke slå sammen det forrige som ble skrevet
    let input = document.getElementById("input").value
    for (let i = 0; i < input.length; i++) {
            for (let nr = 0; nr < krypteringene.length; nr++) {
                if (krypteringene[nr].bokstav == input[i]) {
                    kryptert += krypteringene[nr].kryptering + " "
                    kjør = true
                }
                //skjekker om den nåværende bokstaven i inputen matcher inputen til det nummeret i "krypteringene". vi prøver å finne ut hvilket nummer det er for å kunne bytte bokstaven ut med riktig kryptering.
            }

        output.innerHTML = kryptert
        //legger til slutt alt som har blitt kryptert til i outputen, eller det som vises på nettsiden
    }
}

function dekrypter(params) {
    kryptert = ""
    let input = document.getElementById("input").value.split(" ")
    console.log(input.length)
    for (let i = 0; i < input.length; i++) {
        for (let nr = 0; nr < krypteringene.length ; nr++) {
            if (krypteringene[nr].kryptering == input[i]) {
                kryptert += krypteringene[nr].bokstav
            }
            
        }
        output.innerHTML = kryptert
    }

}
