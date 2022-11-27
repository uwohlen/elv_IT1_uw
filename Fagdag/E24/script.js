const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const tekst = document.getElementById('tekst');
const videre = document.getElementById('videre');
const igjen = document.getElementById('igjen');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = "yellow";
  btn.style.fontSize= '80px';
  btn.style.borderRadius= '20px'
  btn.innerHTML = "IT-1!";
  btn.style.color = "black";
  btn1.style.opacity='100%'
  btn2.style.opacity='100%'
});

btn1.addEventListener('click', function onClick() {
    btn1.style.backgroundColor = "green";
    btn1.style.fontSize= '100px';
    btn.style.opacity='0%'
    btn2.style.opacity='0%'
    btn1.innerHTML = "Riktig";
    btn.style.fontSize= '0px';
    btn2.style.fontSize= '0px';
    videre.style.fontSize= '40px';
});

btn2.addEventListener('click', function onClick() {
    btn2.style.backgroundColor = "red";
    btn2.style.fontSize= '100px';
    btn.style.opacity='0%'
    btn1.style.opacity='0%'
    tekst.style.opacity='100%'
    btn2.innerHTML = "Feil";
    btn.style.fontSize= '0px';
    btn1.style.fontSize= '0px';
    igjen.style.fontSize= '40px'
});

let Poeng = 0;
let PoengEl = document.getElementById('idPoeng');
console.log(PoengEl)

function Riktig(id){
    document.getElementById(id).innerHTML="Riktig";
    Poeng += 5;
    PoengEl.innerHTML="Poeng:"+Poeng;
    document.getElementById(id).removeAttribute("onclick");
}

function Feil(id){
    document.getElementById(id).innerHTML="Feil";
    Poeng -= 5;
    PoengEl.innerHTML="Poeng:"+Poeng;
    document.getElementById(id).removeAttribute("onclick");
}
