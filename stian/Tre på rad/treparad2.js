let spiller = document.getElementById('spiller')
let restartknapp = document.getElementById('restartknapp')
let bokser = Array.from(document.getElementsByClassName('box'))

let Vinner = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEKST = "O"    //Konstante variabler
const X_TEKST = "X"
let nåspiller = X_TEKST
let spaces = Array(9).fill(null)

const startspill = () => {  //Definerer en funksjon som har event listener på hver boks slik at man kan trykke på dem
    bokser.forEach(box => box.addEventListener('click', klikkboks))   
}

function klikkboks(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = nåspiller
        e.target.innerText = nåspiller

        if(vinnendespiller() !==false){
            spiller.innerHTML = `${nåspiller} vant!`
            let winning_blocks = vinnendespiller()

            winning_blocks.map( box => bokser[box].style.backgroundColor=Vinner)
            return
        }

        nåspiller = nåspiller == X_TEKST ? O_TEKST : X_TEKST  //Bytter mellom X og O sin runde
    }
}

const kombinasjoner = [   //array for hvilke kombinasjoner som gir vinner
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function vinnendespiller() {
    for (const condition of kombinasjoner) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartknapp.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    bokser.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    spiller.innerHTML = 'Tre på rad'

    nåspiller = X_TEKST
}

startspill()