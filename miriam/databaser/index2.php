<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        div{
            margin: auto;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1> Velkommen til en liste over de artistene jeg liker </h1>
    
    <?php include "login.php";?>
    <?php
        $sql="SELECT * FROM `artister_jeg_liker`";
        $etternavn = $kobling->query($sql);
        //echo "Spørringen $sqlkode ga $etternav n->num_rows rader.";
    ?>

    <table>
        <thead id="idTabell"></thead>
        <tbody>
            <?php
                while ($rad= $etternavn->fetch_assoc()){
                    echo "<tr>
                        <td>$rad[Fornavn]</td>
                        <td>$rad[Etternavn]</td>
                        <td>$rad[Alder]</td>
                        <td>$rad[Bosted]</td>
                        <td>$rad[Album]</td>
                        <td>$rad[Sang]</td>
                    </tr>";
                }
            ?>
        </tbody>
    </table>
    <br><br>
    <h2> Her kan du legge til dine egne artister!</h2>
    <form method="GET" action="oppdatering.php">
        <label for="fnavn">Fornavn:</label><br>
        <input type="text" id="fnavn" name="fnavn" value=""><br>
        <label for="enavn">Etternavn:</label><br>
        <input type="text" id="enavn" name="enavn" value=""><br>
        <label for="alder">Alder:</label><br>
        <input type="number" id="alder" name="alder" value=""><br>
        <label for="bosted">Bosted:</label><br>
        <input type="text" id="bosted" name="bosted" value=""><br>
        <label for="album">Favoritt album:</label><br>
        <input type="text" id="album" name="album" value=""><br>
        <label for="sang">Favoritt sang:</label><br>
        <input type="text" id="sang" name="sang" value=""><br>
        <input name="submit" type="submit" value="Submit">
        <input type="reset" value="Tilbakestill">
    </form>
    <script>
        let tabellEl= document.getElementById("idTabell");
        let titler= ["Fornavn","Etternavn","Alder","Bosted","Fav album","Fav sang atm"];

        let tekst= "<tr>";
        for(let i=0; i<titler.length; i++){
            tekst += "<th>" + titler[i] +"</th>";
        }
        tekst += "</tr>";
        tabellEl.innerHTML= tekst;
        
    </script>
</body>
</html>