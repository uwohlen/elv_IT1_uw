const BUTTON_HAX = document.getElementById("bunn");
const CODE_ECHO_RANDOM = document.getElementById("echo-random");

BUTTON_HAX.addEventListener("click", hax);
CODE_ECHO_RANDOM.addEventListener("click", echo_random);

function hax() {
    document.documentElement.style.setProperty('--code-farge', 'rgb(22, 198, 12)');
}

function random() {
    // %random% gir et tilfeldig tall fra og med 0 og til og med 32767
    return Math.round(Math.random() * 32767);
}

function echo_random() {
    let tekst = CODE_ECHO_RANDOM.innerHTML;
    let i = 0;
    // > er slutt-taggen på <br>
    while (tekst.substring(i, i + 1) !== ">") {
        i++;
    }
    CODE_ECHO_RANDOM.innerHTML = tekst.substring(i + 1) + "<br>" + random();
}

setInterval(echo_random, 100);