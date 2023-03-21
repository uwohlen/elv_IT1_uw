
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Min nettside</title>
    <link rel="stylesheet" href="../Css/Css.css"> 
</head>
    <body class="body">

        <!-- Skrive inn navn -->
        <div id="brukernavnspørsmål" class="Brukernavn" style="display: inline">
            <p class="Standard"><input id="navn" type="text" placeholder="Skriv navnet ditt her"><br> /Enter</p>
        </div>

        <div id="Nettside" style="visibility: hidden;">
            <div id="Spørsmålbox" class="flexbox">
                <h1 id="Spørsmål"></h1> 
                <button id="alt1"class="boxer"></button> 
                <button id="alt2"class="boxer"></button>
                <button id="alt3"class="boxer"></button>
                <button id="alt4"class="boxer"></button>
            </div>

            <p class="TilbakeLink"><a class="Standard" href="../index.html">Tilbake</a></p>

            <?php include "login.php";?>
            <?php
                $sqlkode = "SELECT * from board";
                $spillerinfo = $kobling->query($sqlkode);
            ?>

            <table>
                <thead id="idTabell"></thead>
                <tbody>
                    <?php
                        while ($rad = $spillerinfo->fetch_assoc()) {
                            echo "<tr style='color:rgb(241, 241, 243)'>
                                <td>$rad[Navn]</td>
                                <td>$rad[Poeng]</td>
                                <td>$rad[Tid]</td>

                            </tr>";
                        }

                    ?>
                </tbody>
            </table>
        </div>




        <script>
            let NavnEl=document.getElementById("navn");
            let brukernavnspørsmålEl = document.getElementById("brukernavnspørsmål");
            NavnEl.addEventListener("keydown", lagreBruker);
            let tabellEl = document.getElementById("idTabell");
            let titler = ["Navn","Score","Tid(s)"];

            var score=0;
            var Nr=0;

            var Riktig=["alt3","alt2","alt1","alt1"];
            var Spørsmål=[
                ["Digitalt utstyr baserer seg på sifrene 0 og 1. Hva kaller vi disse enhetene alene?", "Ram", "Kode", "Bite","Elementær kode"],
                ["Hva kaller vi det når flere bites henger sammen i en lengre rekke?", "Kode", "Byte", "Bites","Elementær kode"],
                ["Hvorfor bruker vi UTF-8?","Lar oss bruke flere ukjente tegn","Lar oss bruke forskjellige kodespråk","Lar oss å lage kortere koder","Lar oss gjøre matematikk"], 
                ["Hvilken farge tror du vi får fra fargekoden #FF00FF?","Magenta","Rosa","Lilla","Hvit"]
            ]

            localStorage.setItem("Brukernavn", "NEI");

            if(localStorage.getItem("Brukernavn")=="OK"){
                document.getElementById("Nettside").style.visibility="visible";
                document.getElementById("brukernavnspørsmål").style.display="none";
            }
            
            function lagreBruker(event){ 
                console.log(NavnEl.value);
                if (event.keyCode=== 13){
                    document.getElementById("Nettside").style.visibility="visible";
                    document.getElementById("brukernavnspørsmål").style.display="none";
                    localStorage.setItem("Brukernavn", "OK");
                    Start_tid = Math.floor(Date.now() / 1000);
                }
            }

            let tekst = "<tr style='color:rgb(241, 241, 243)';>";
            for (let i=0; i<titler.length; i++) {
                tekst += "<th>" + titler[i] + "</th>";
            }
            tekst += "</tr>";
            tabellEl.innerHTML = tekst;


            for (let i=1; i<5; i++){
                document.getElementById("alt"+i).addEventListener("click",testsvar)
            }
            
            go();
            


            function go(){
                if (Nr < Spørsmål.length){
                    for (let i=1; i<5; i++){
                        document.getElementById("alt"+i).style.color="black";
                        document.getElementById("alt"+i).style.borderColor="black";
                    }
                    document.getElementById("Spørsmål").innerHTML=Spørsmål[Nr][0];
                    for (let i = 1; i < 5; i++) {
                        document.getElementById("alt"+i).innerHTML=Spørsmål[Nr][i];
                    }
                }
                else{
                    Slutt_tid = Math.floor(Date.now() / 1000);
                    var tid = (Slutt_tid - Start_tid);
                    console.log(tid);
                    document.getElementById("Spørsmålbox").innerHTML="<h1>Gratulerer! Du fikk " + score + " poeng :) <form method='POST' action='highscore_v2.php' id='idForm'></form> </h1>";
                    let formEl = document.getElementById("idForm");
                    let formtekst = "<input type='hidden' name='navnfelt' value='" + NavnEl.value + "'><input type='hidden' name='poengfelt' value ='" + score + "'><input type='hidden' name='tidfelt' value ='" + tid + "'><input type='submit' name='lagrePoeng' value='Lagre resultatet'>";
                    formEl.innerHTML = formtekst;
                }
            }

            function testsvar(event){
                if (event.target.id === Riktig[Nr]){
                    score+=1;
                    document.getElementById(event.target.id).style.borderColor = "green";
                    document.getElementById(event.target.id).style.color = "green";
                    Nr++;
                    go()
                }
                else{
                    score-=1;
                    document.getElementById(event.target.id).style.borderColor = "red";
                    document.getElementById(event.target.id).style.color = "red";
                }
            }

        </script>
    </body>
</html>