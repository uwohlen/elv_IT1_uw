<!DOCTYPE html>
<html lang ='no'>
<head>
    <meta charset ='UTF-8'>
    <meta name ='viewport' content ='width = device-width, initial-scale = 1.0'>
    <title></title>
    <link rel='stylesheet' href='alltid.css'>
    <style>
        div {
            margin: auto;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1> Velkommen til en liste over noen bøker jeg har lest! </h1>
    <?php include "login.php";?>
    <?php 
        $sqlkode = "SELECT * FROM `boker` WHERE 1";
        $bokindeks = $kobling->query($sqlkode);
        //echo "Spørringen $sqlkode ga $bokindeks->num_rows rader.";
    ?>

    <table>
        <thead id ="idTabell"></thead>
        <tbody>
            <?php
                while ($rad = $bokindeks->fetch_assoc()) {
                    echo "<tr>
                    <td>$rad[bokindeks]</td>
                    <td>$rad[tittel]</td>
                    <td>$rad[forfatter]</td>
                    <td>$rad[utgivelsesar]</td>
                    <td>$rad[antallsider]</td>
                    </tr>";
                }
            ?>
        </tbody>
    </table>

    <form method="POST" action="bok_action.php">
        <label for="tittel">Tittel:</label><br>
        <input type="text" id="tittel" name="tittel" value=""><br>
        <label for="forfatter">Forfatter:</label><br>
        <input type="text" id="forfatter" name="forfatter" value=""><br><br>
        <label for="utgivelsesar">Utgivelsesår:</label><br>
        <input type="number" id="utgivelsesar" name="utgivelsesar" value=""><br><br>
        <label for="antallsider">Antall sider:</label><br>
        <input type="number" id="antallsider" name="antallsider" value=""><br><br>
       
        <input name="submit" type="submit" value="Submit">
        <input type="reset" value="Tilbakestill">
    </form>

    <script>
        let tabellEl = document.getElementById("idTabell");

        let titler = ["Bokindeks", "Tittel", "Forfatter", "Utgivelsesår", "Antall sider"];

        let tekst = "<tr>";
        for (let i=0; i<titler.length; i++) {
            tekst += "<th>" + titler[i] + "</th>";
        }
        tekst += "</tr";
        tabellEl.innerHTML = tekst;
    </script>
</body>
</html>