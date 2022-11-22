const card = document.querySelectorAll('.kort')


stokkekort()
function stokkekort(){

    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]

        })
}
