var currentPoint=0;

function Start(){
    document.getElementById("mole").style.visibility='hidden';
    document.getElementById("mud").style.visibility="hidden";
    document.getElementById("start").style.visibility='hidden';

    for(var i=0;i<2;i++){
        document.getElementsByClassName("points")[i].style.visibility="visible";
    }
    for(var i=0;i<6;i++){
        document.getElementsByClassName("dirt")[i].style.visibility="visible";
    }
    setInterval(() => {
        var random=Math.floor(Math.random()*6)+1;
        document.getElementById("mole"+random).style.visibility="visible";
        setTimeout(() => {
            for(var i=0;i<6;i++){
                document.getElementsByClassName("mole")[i].style.visibility="hidden";
            }
        }, 800);
    }, 900);
}

function clicked(){
    document.getElementById("currentPoint").innerHTML=currentPoint++;
}

