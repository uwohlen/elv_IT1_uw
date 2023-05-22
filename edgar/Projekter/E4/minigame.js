//Denne koden velger alle elementer med klassen "kort" og "front" fra html
const card = document.querySelectorAll('.kort')
const front = document.querySelectorAll('.front')
const poeng = localStorage.getItem('poengIT1fagdag')


stokkekort()
clicking()
//Denne funksjonen stokker rekkefølgen av kortene i en array
function stokkekort(){

    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]

        })
}


function clicking(){
    //Denne kodelinjen er en for-løkke som går igjennom hvert element i "kort"-arrayen
    for(let i =0; i<card.length; i++){
        //legger til en eventlistener til elementet med indeks "i" i "kort"-arrayen
        card[i].addEventListener('click' ,()=>{
            //Leggertil en flip for index "i" i "front"-arrayen
            front[i].classList.add('flip')
            //Henter konstanten flip fra css
            const flippedCard = document.querySelectorAll('.flip')
            //Sjekker om det er to snudde kort og venter på match funksjonen
            if (flippedCard.length == 2)(
                match(flippedCard[0] , flippedCard[1])
            )

        })
    }

}

//Lager en match funksjon
function match(cardOne , cardTwo){
    //Hvis bildene har samme data-index skal noe skje
    if(cardOne.dataset.index == cardTwo.dataset.index){
        //Flipper kortene og setter på match hvis data-index er lik
        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')

        cardOne.classList.add('match')
        cardTwo.classList.add('match')
    //Hvis data-index ikke er lik blir kortene snudd etter 1000 ms / 1sekund
    }else{

        setTimeout(() => {

        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')
    }, 1000);
    }
}