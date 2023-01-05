
function pluss(params) {
    let sum = 0
    let trekk = 0
    let input = document.getElementById("input").value
    let output = document.getElementById("output")
    let deler = input.split("+")
    let delerM = input.split("*")
    let delerD = input.split("/")
    let multi = 1
    let delt = 1
    for (let i = 0; i < deler.length; i++) {
        if (deler[i].split("-").length >= 1) {
            for (let minus = 1; minus < deler[i].split("-").length; minus++) {
                let subtraksjon = deler[i].split("-")
                trekk += parseInt(subtraksjon[minus]);
                console.log(trekk)
            }
        }
        sum += parseInt(deler[i])
        output.innerHTML = sum - trekk
    }
    if (delerM.length >= 2) {
        for (let im = 0; im < delerM.length; im++) {
            multi *= parseFloat(delerM[im])
        }
        output.innerHTML = multi
    }    


    if (delerD.length >= 2) {
        for (let id = 0; id < delerD.length; id++) {
            if (id == 0) {
                delt *= parseFloat(delerD[id])
            }
            if (id > 0) {
                delt /= parseFloat(delerD[id])                
            }
        }
        output.innerHTML = delt
    } 
}

function minus(params) {

}

function divisjon(params) {
    for (let id = 0; id < delerD.length; id++) {
        if (id == 0) {
            delt *= parseFloat(delerD[id])
        }
        if (id > 0) {
            delt /= parseFloat(delerD[id])
            console.log(delt)
            
        }
    }
}

function multiplikasjon(params) {

}

function kjør(params) {

}