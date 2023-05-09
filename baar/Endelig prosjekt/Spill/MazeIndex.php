<!DOCTYPE html>

<html>
<head>
    <link rel="stylesheet" href="../Css/Css.css"> 
    <html lang="no">
    <meta charset="UTF-8">
    <title>Spill</title>
</head>
    <body id="Body" class="body">    

        <!-- Heading -->
        <div id="Heading"class="Heading">
            </br>
            <h1 class="Overskrift"> Lek deg med mus-koordinasjon! </h1>
        </div>

        <!-- Navn-innskrivnings-felt -->
        <div id="brukernavnspørsmål" class="Brukernavn" style="display: inline">
                <p class="Standard"><input id="navn" type="text" placeholder="Skriv navnet ditt her"><br> /Enter</p>
        </div>

        <!-- Tekstelement + start spill knapp -->
        <div id="tekst" style="display: none;" class="Standard" style="font-size: 90px; ">
            <a>Spillet du nå skal spille går ut på å bevege musepekeren fra <a style="background-color: red;"> rød</a> til <a style="background-color: yellow; color: black;"> gul</a> uten å bevege musepekeren utenfor det <a style="background-color: black;">sorte</a> området</a>
            </br>
            <a>(Trykker du "start spill" godkjenner du at nettleseren bruker cookies)</a>
            </br>
            <button id="start" onclick="NesteNivå()"> Start spill </button>
        </div>

        <!-- Tilbake link -->
        <p class="TilbakeLink"><a class="Standard" href="../index.html">Tilbake</a></p>

        <div id="brett" class="grid"></div>

        <!-- Lage tabell med php -->
        <div id="database">
            <?php include "login.php";?>
            <?php
                $sqlkode = "SELECT * FROM `tabell` ORDER BY `Level` DESC";
                $spillerinfo = $kobling->query($sqlkode);
            ?>
            <table style="margin: auto; width: 10%;">
                <thead id="idTabell"></thead>
                <tbody>
                    <?php
                        while ($rad = $spillerinfo->fetch_assoc()) {
                            echo "<tr style='color:rgb(241, 241, 243)'>
                                <td>$rad[Navn]</td>
                                <td>$rad[Level]</td>
                                <td>$rad[Tid]</td>
                                </tr>";
                        }
                    ?>
                </tbody>
            </table>
        </div>

        

        
        
        
        
        <script>
            localStorage.setItem("Brukernavn", "NEI");
            let BrettEl=document.getElementById("brett");
            let StartEl=document.getElementById("start");
            let TekstEl=document.getElementById("tekst");
            let databaseEl=document.getElementById("database");
            let NavnEl=document.getElementById("navn");
            let tabellEl = document.getElementById("idTabell");
            let titler = ["Navn","Level","Tid(s)"];
            NavnEl.addEventListener("keydown", lagreBruker);

            const nivåer = [[0,0],[20,10],[32,16],[40,20],[52,26],[60,30],[72,36],[80,40],[92,46],[100,50],[112,56],[120,60],[132,66],[140,70],[152,76],[160,80],[172,86],[180,90],[192,96],[200,100],[212,106],[220,110],[232,116]];
            var AntallNivåer = nivåer.length;
            var start_column=0;
            var slutt_column=0;
            var start_row=0;
            var slutt_row=0;
            var nivå=0;

            if (localStorage.getItem("Brukernavn")=="OK"){
                TekstEl.style.display="inline-block";
                document.getElementById("brukernavnspørsmål").style.display="none";
            }

            let tekst = "<tr style='color:rgb(241, 241, 243)';>";
            for (let i=0; i<titler.length; i++) {
                    tekst += "<th>" + titler[i] + "</th>";
            }
            tekst += "</tr>";
            tabellEl.innerHTML = tekst;
            

            function lagreBruker(event){ 
                    console.log(NavnEl.value);
                    if (event.keyCode=== 13){
                        TekstEl.style.display="inline-block";
                        document.getElementById("brukernavnspørsmål").style.display="none";
                        localStorage.setItem("Brukernavn", "OK");
                        localStorage.setItem("navn", NavnEl.value);
                    }
                }

            function NesteNivå(){
                nivå++;
                if (nivå>(AntallNivåer-1)){
                    Gameover();
                }
                else{
                    BrettEl.style.height="600px";
                    BrettEl.style.display = "grid";
                    var txt = '<h1>level ' + nivå +'</h1>'
                    TekstEl.innerHTML=txt;
                    lengde=nivåer[nivå][0];
                    høyde=nivåer[nivå][1];
                    BrettEl.innerHTML="";
                    Start_tid = Math.floor(Date.now() / 1000);
                    lag_startpunkt();
                }
            }   

            function Lag(){
                BrettEl.innerHTML+='<div class="grid-item" style="grid-column-start: '+start_column+';grid-column-end: '+slutt_column+';grid-row-start: '+start_row+';grid-row-end: '+slutt_row+'; background-color: rgb(3, 3, 3);" onmouseleave="sjekk()"></div>';
            }

            function sjekk(){
                var e = window.event;
                if(((document.elementFromPoint(e.clientX, e.clientY)).className)!=="grid-item"){
                    Gameover();
                }
                
            }
            function Gameover(){
                BrettEl.style.display = "inline-block";
                TekstEl.style.display="inline-block";
                Slutt_tid = Math.floor(Date.now() / 1000);
                var tid = (Slutt_tid - Start_tid);
                TekstEl.innerHTML="<h1> Du kom til level " + nivå + " :) <form method='POST' action='Insert.php' id='idForm'></form> </h1>";
                let formEl = document.getElementById("idForm");
                let navninsert=localStorage.getItem("navn");
                let formtekst = "<input type='hidden' name='navnfelt' value='" + navninsert + "'><input type='hidden' name='levelfelt' value ='" + nivå + "'><input type='hidden' name='tidfelt' value ='" + tid + "'><input type='submit' name='lagrePoeng' value='Lagre resultatet'>";
                formEl.innerHTML = formtekst;
                nivå=0;
                console.log(tid);
            }
            

            function lag_startpunkt(){
                BrettEl.style.gridTemplateColumns="repeat("+lengde+",auto)";
                BrettEl.style.gridTemplateRows="repeat("+høyde+",auto)";
                start_column=2;
                slutt_column=3;
                start_row=((høyde/2)-1);
                slutt_row=((høyde/2));
                BrettEl.innerHTML+='<div class="grid-item" style="grid-column-start: '+start_column+';grid-column-end: '+slutt_column+';grid-row-start: '+start_row+';grid-row-end: '+slutt_row+'; background-color: rgb(202, 4, 4);" onmouseenter="lag_bane()" onmouseleave="sjekk()" ></div>';
            }


            function lag_bane(){
                while (slutt_column<(lengde-4)){
                    start_column=slutt_column-1;
                    slutt_column=slutt_column+(Math.floor(Math.random() * 2))+2;
                    Lag();
                    start_column=slutt_column-1;
                    if(slutt_column>(lengde-4)){
                        break;
                    }

                    if (Math.random() <= 0.5) {
                        slutt_row=slutt_row+(Math.floor(Math.random() * 2))+2;
                        if (slutt_row>høyde){slutt_row=høyde;}
                        Lag();
                        start_row=slutt_row-1;
                        let siste="+";
                    } 
                    else {
                        start_row=slutt_row;
                        slutt_row=start_row-((Math.floor(Math.random() * 2))+3);
                        if (slutt_row<2){slutt_row=2}
                        Lag();
                        start_row=slutt_row;
                        slutt_row=start_row+1;
                        let siste="-";
                    }
                }
                if (siste="-"){
                    BrettEl.innerHTML+='<div class="grid-item" style="grid-column-start: '+ (start_column) +';grid-column-end: '+slutt_column+';grid-row-start: '+(start_row)+';grid-row-end: '+(start_row+1)+'; background-color: yellow;" onmouseover="NesteNivå()"> </div>';
                }
                else{
                    BrettEl.innerHTML+='<div class="grid-item" style="grid-column-start: '+ (start_column) +';grid-column-end: '+slutt_column+';grid-row-start: '+(slutt_row-1)+';grid-row-end: '+slutt_row+'; background-color: yellow;" onmouseover="NesteNivå()"></div>';
                }
            }
        </script>
    </body>
</html>