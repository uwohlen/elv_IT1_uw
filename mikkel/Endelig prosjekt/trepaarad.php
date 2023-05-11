<!DOCTYPE html>
<html>
<head>
  <title>Three in a Row Game</title>
  <style>
      .board {
        display: none;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        width: 300px;
        margin: 0 auto;
      }

      .cell {
      background-color: white;
      width: 100%;
      height: 100px;
      border: 1px solid black;
      font-size: 60px;
      text-align: center;
      line-height: 90px;
      cursor: pointer;
      }

      .trepaarad {
      width: 50%;
      height: 120px;
      margin: Auto;
      background-color: rgb(161, 26, 152);
      border-width: 8px;
      border-color: rgb(253, 215, 65);
      border-radius: 20px;
      border-style: solid;
      color: white;
      font-family: Geneva;
      text-align: center;
      font-size: 90px;
      }

  </style>
</head>
<body style="background-color:rgb(240, 158, 235); text-align: center;">
    <div class="trepaarad">TRE PÅ RAD</div>
    <div id="Oppgavetekst" style="display: none;"></div><br>
    <button id="Startknapp" style="display: none;font-size:27px; " onclick="startspill()"> Spill </button><br><br>

    <div id="NavnFelt" style="display:inline-block; margin:auto; text-align:center; width:50%;">
        <p><input style="font-size:27px;margin:0 auto; display:block;" id="SpillerNavn" type="text" value="" placeholder="Skriv navnet til spiller X her"><br>/Enter</p>
    </div>

    <div id=BRETT class="board">
        <div class="cell" id="1" onclick="Trekk(id)"></div>
        <div class="cell" id="2" onclick="Trekk(id)"></div>
        <div class="cell" id="3" onclick="Trekk(id)"></div>
        <div class="cell" id="4" onclick="Trekk(id)"></div>
        <div class="cell" id="5" onclick="Trekk(id)"></div>
        <div class="cell" id="6" onclick="Trekk(id)"></div>
        <div class="cell" id="7" onclick="Trekk(id)"></div>
        <div class="cell" id="8" onclick="Trekk(id)"></div>
        <div class="cell" id="9" onclick="Trekk(id)"></div>
    </div>

    <div id="PHPtabell" style="display: none;">
        <?php include "login.php";?>
        <?php
            $sqlkode = "SELECT * FROM `tabell`";
            $spillerinfo = $kobling->query($sqlkode);
        ?>
        <table style="left: 0; width: 10%;">
            <thead id="Tabell"></thead>
            <tbody>
                <?php
                    while ($rad = $spillerinfo->fetch_assoc()) {
                        echo "<tr style='color:black;'>
                            <td>$rad[Spiller1]</td>
                            <td>$rad[X]</td>
                            <td>$rad[O]</td>
                            <td>$rad[Spiller2]</td>
                            </tr>";
                    }
                ?>
            </tbody>
        </table>
    </div>

  <script>
    localStorage.setItem("NavnGitt", "NEI");
    let OppgavetekstEl = document.getElementById("Oppgavetekst");
    let StartKnappEl = document.getElementById("Startknapp");
    let TabellEl = document.getElementById("Tabell");
    let BrettEl = document.getElementById("BRETT");
    let titler = ["Spiller","X", "O","Spiller"];
    let Spiller = 'X';
    let Moves = 0;
    let SpillerNavnEl = document.getElementById("SpillerNavn");
    SpillerNavnEl.addEventListener("keydown", lagreBruker);


    const Spiller_X=[];
    const Spiller_O=[];

    var Spiller_X_vinn=0;
    var Spiller_O_vinn=0;

    let tekst = "<tr style=black;>";
            for (let i=0; i<titler.length; i++) {
                    tekst += "<th>" + titler[i] + "</th>";
            }
            tekst += "</tr>";
            TabellEl.innerHTML = tekst;

    

    if (localStorage.getItem("NavnGitt")=="OK"){
        document.getElementById("PHPtabell").style.display="inline-block";
        OppgavetekstEl.style.display="inline-block";
        StartKnappEl.style.display="inline-block";
        document.getElementById("NavnFelt").style.display="none";
    }

    let Vinn = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['3', '5', '7']
    ];

    var k=0;
    function lagreBruker(event){ 
        if (event.keyCode === 13){
            localStorage.setItem("NavnGitt", "OK");
            k++;
            if (k==1){
                localStorage.setItem("SpillerX", SpillerNavnEl.value);
                SpillerNavnEl.placeholder="Skriv navnet til spiller O her"
                document.getElementById("SpillerNavn").value="";
            }
            else if (k==2){
                localStorage.setItem("SpillerO", SpillerNavnEl.value);
                document.getElementById("PHPtabell").style.display="inline-block";
                OppgavetekstEl.style.display="inline-block";
                StartKnappEl.style.display="inline-block";
                document.getElementById("NavnFelt").style.display="none";
            }
        }
    }

    function startspill(){
        StartKnappEl.innerHTML="Spill igjen";
        OppgavetekstEl.innerHTML = ('<p style="font-size: 27px;">Spiller '+Spiller+' starter</p>');
        document.getElementById("BRETT").style.display="grid";
        StartKnappEl.style.display="none";
        Moves = 0;
        Spiller_X.length=0;
        Spiller_O.length=0;
        for (p=1;p<10;p++){
            document.getElementById(p).innerHTML="";
        }
    }

    function Trekk(x){
        console.log(Spiller);
        if (document.getElementById(x).innerHTML !== ""){
            console.log("Plassen er tatt!");
        }
        else{
            Moves++;
            if (Moves>8){
                Gameover();
            }
            document.getElementById(x).innerHTML=Spiller;
            if(Spiller == 'X'){
                Spiller_X.push(x);
                SjekkForVinn(Spiller);
                Spiller = 'O';
                console.log("SpillerO push");
            }
            else if (Spiller == 'O'){
                Spiller_O.push(x);
                SjekkForVinn(Spiller);
                Spiller ='X';
                console.log("SpillerX push");
            }
            
        }
        
    }


    function SjekkForVinn(y){
        console.log('SpillerX:'+Spiller_X+'      SpillerO'+Spiller_O +'');
        if(Spiller =='X'){
            k=Spiller_X;
        }
        else{
            k=Spiller_O;
        }
        for (let i = 0; i < Vinn.length; i++) {
            for (var j = 0; j < Vinn[i].length; j++) {
                if (k.includes(Vinn[i][0]) && k.includes(Vinn[i][1]) && k.includes(Vinn[i][2]) && k.length >= 3) {
                    Vinner(y);
                }
            }
        }
    }

    function Vinner(x){
        if (x=='X'){
            Spiller_X_vinn++;
        }
        else{
            Spiller_O_vinn++;
        }
        OppgavetekstEl.innerHTML = ("<p style='font-size:30px; margin:auto;'>Gratulerer spiller "+x+"</p><form method='POST' action='Oppdatere.php' id='idForm'></form>")
        document.getElementById("BRETT").style.display="none";
        StartKnappEl.style.display="inline-block";
        let formEl = document.getElementById("idForm");
        let navn1=localStorage.getItem("SpillerX");
        let navn2=localStorage.getItem("SpillerO");
        let formtekst = "<input type='hidden' name='navn1felt' value='" + navn1 + "'><input type='hidden' name='X_vinn' value ='" + Spiller_X_vinn + "'><input type='hidden' name='O_vinn' value ='" + Spiller_O_vinn + "'><input type='hidden' name='navn2felt' value ='" + navn2 + "'><input style='font-size:27px;'type='submit' name='lagrePoeng' value='Lagre dagens resultat'>";
        formEl.innerHTML = formtekst;
    }
    
    function Gameover() {
        OppgavetekstEl.innerHTML = ("Det ble uavgjort, prøv gjerne igjen!")
        document.getElementById("BRETT").style.display="none";
        StartKnappEl.style.display="inline-block";
    }
 
  </script>
</body>
</html>