const card = document.querySelectorAll('.kort')
const front = document.querySelectorAll('.front')
const poeng = localStorage.getItem('poengIT1fagdag')


stokkekort()
clicking()
function stokkekort(){

    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]

        })
}


function clicking(){

    for(let i =0; i<card.length; i++){

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
            const flippedCard = document.querySelectorAll('.flip')

            if (flippedCard.length == 2)(
                match(flippedCard[0] , flippedCard[1])
            )

        })
    }

}


function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')

        cardOne.classList.add('match')
        cardTwo.classList.add('match')

    }else{

        setTimeout(() => {

        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')
    }, 1000);
    }
}