/* #bolge{
    background-image: url(Bolge\ 2.0.png);
    height: 20px;
    background-color: turquoise;
}
*/
const TOPPEN=document.getElementById("toppen")
var b = document.body.scrollHeight;
let disable = false;

window.addEventListener('DOMContentLoaded', (event) => {
    var x = document.body.scrollHeight;
    const SCROLL = setInterval(() => {
        window.scrollTo(0,document.body.scrollHeight-x);
        x += 5
        if (x >= 0) {
            clearInterval(SCROLL);
        }
    }, 1)
});

function underwater(e){
    if (e.keyCode===32 && disable == false){
        disable = true
        var x = document.body.scrollHeight;
        const SCROLL = setInterval(() => {
            window.scrollTo(0,document.body.scrollHeight-x);
            x += -5
            if (x <= 0) {
                clearInterval(SCROLL);
            }
        }, 1)

    }
}
addEventListener("keydown", underwater)

