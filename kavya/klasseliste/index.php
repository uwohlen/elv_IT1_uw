<!DOCTYPE html>
<html lang='no'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title></title>
    <link rel='stylesheet' href='css/quiztermin2.css'>
    <style>
        div {
            margin: auto;
            padding: 20px;
        }
        
        /*body */
* {
    box-sizing: border-box;
    }


body {
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    background-color:#f1d4d9ea; 
    }
    
    h1{
    font-family: "Calibri light";
    font-size: 300%;
    color: rgb(255, 255, 255);
    }
    
    h2, h3{
    font-family: "NSimSun";
    text-align: center;
    
    }
    tr{
        text-align: center;
        font-family: "Calibri light";
        font-size: 21px;
    }
    td{
        text-align: center;
        padding: 10px;
        font-family: "Calibri light";
    }
    
    p {
    font-family: 'Courier New', Courier, monospace;
    }

          
                
    .header {
    padding: 20px;
    background: rgba(182, 57, 73, 0.945);   
    }
    
        


    </style>
</head>
<body>
    <div class="header">
         <h1>Velkommen, dette er klasselisten!</h1>
    </div>
    <?php include "login.php";?>
    <?php
        $sqlkode1 = "SELECT elever.*,laerere.fornavn AS LFnavn,laerere.etternavn AS LEnavn FROM elever LEFT JOIN laerere ON elever.kontaktlaererNr = laerere.idNr";
    
        $sqlkode2 = "SELECT * FROM elever, interesser, elever_med_interesser WHERE elever.elevNr = elever_med_interesser.elevNr AND interesser.interesseNr = elever_med_interesser.interesseNr ORDER BY `elever`.`elevNr` ASC";
    
    
        $elevNr= $kobling->query($sqlkode1);
        $interesseNr = $kobling->query($sqlkode2);
        //echo "Spørringen $sqlkode ga $elevinfo->num_rows rader.";
    ?>

    
    <table>
        <thead id="idTabell1"></thead>
        <tbody>
            <?php
                while ($rad = $elevNr->fetch_assoc()) {
                    echo "<tr>
                        <td>$rad[elevNr]</td>
                        <td>$rad[fornavn]</td>
                        <td>$rad[etternavn]</td>
                        <td>$rad[klasse]</td>
                        <td>$rad[telefonNr]</td>
                        <td>$rad[LFnavn]</td>
                        <td>$rad[LEnavn]</td>
                    </tr>";
                }
            ?>
        </tbody>
        
        
        <thead id="idTabell2"></thead>
        <tbody>
            <?php
                while ($rad = $interesseNr->fetch_assoc()) {
                    echo "<tr>
                        <td>$rad[elevNr]</td>
                        <td>$rad[interesse]</td>
                        <td>$rad[sted]</td>
                        <td>$rad[utbytte]</td>
                        
                    </tr>";
                }
            ?>
        </tbody>
    </table>
    
    <form method="GET" action="skriveinnselv.php">
        <label for="fornavn">Fornavn:</label><br>
        <input type="text" id="fornavn" name="fornavn" value=""><br><br>
        
        <label for="etternavn">Etternavn:</label><br>
        <input type="text" id="etternavn" name="etternavn" value=""><br><br>
        
        <label for="klasse">Klasse:</label><br>
        <input type="text" id="klasse" name="klasse" value=""><br><br>
        
        <label for="telefonNr">Telefon nummer:</label><br>
        <input type="number" id="telefonNr" name="telefonNr" value=""><br><br>



        <input name="submit" type="submit" value="Submit">
        <input type="reset" value="Tilbakestill">
     </form>
    
    
    
    
    
    <script>
        let tabell1El = document.getElementById("idTabell1");

        let titler = ["Elev nr.","Fornavn","Etternavn","Klasse","Telefon","Lærer FN", "Lærer EN"];

        let tekst = "<tr>";
        for (let i=0; i<titler.length; i++) {
            tekst += "<th>" + titler[i] + "</th>";
        }
        tekst += "</tr>";
        tabell1El.innerHTML = tekst;
        
        
        
        
        
        let tabell2El = document.getElementById("idTabell2");

        let titler2 = ["Elev nr.", "Interesse", "Sted", "Utbytte"];

        let tekst2 = "<tr>";
        for (let i=0; i<titler2.length; i++) {
            tekst2 += "<th>" + titler2[i] + "</th>";
        }
        tekst2 += "</tr>";
        tabell2El.innerHTML = tekst2;

    </script>

 
   
</body>
</html>