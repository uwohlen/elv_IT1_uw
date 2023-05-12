<!DOCTYPE html>
<html lang="no">
    <head>
        <meta charset="utf-8">
        <meta name='viewport' content='width-device-width, inital-scale=1'>
        <title>Oddspillere</title>
        <link rel='stylesheet' href='CSS/ODD.css'>
        <style>
            div {
                margin: auto;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Oddspillere</h1>
        <?php include "login.php";?>
        <?php
            $sqlkode = "SELECT * FROM oddspillere, posisjoner, spillerposisjoner WHERE oddspillere.spillereID=spillerposisjoner.spillereID AND spillerposisjoner.posisjonID=posisjoner.posisjonID";
            $spillerinfo =$kobling->query($sqlkode);
            ?> 
        <table>
            <thead id="idTabell"></thead>
            <tbody>
                <?php
                    $spillerinfo2 = $spillerinfo -> fetch_assoc();
                    $spillerinfo_array = [];
                    array_push($spillerinfo_array, ["test", "testet"]);
                    while ($rad = $spillerinfo->fetch_assoc()) {
                        array_push($spillerinfo_array, [$rad["spillereID"], $rad["fornavn"], $rad["etternavn"], $rad["alder"],$rad["hoyde"], $rad["nasjonalitet"], $rad["posisjon"], $rad["type"]]);
                    }
                    for ($i = 0; $i < count($spillerinfo_array) - 1; $i++) {
                        if ($spillerinfo_array[$i + 1][0] == $spillerinfo_array[$i][0]) {
                            $spillerinfo_array[$i + 1][6] = $spillerinfo_array[$i][6] . ", " . $spillerinfo_array[$i + 1][6];
                            $spillerinfo_array[$i + 1][7] = $spillerinfo_array[$i][7] . ", " . $spillerinfo_array[$i + 1][7];
                        } 
                        else {
                            for ($k = 0; $k < count($spillerinfo_array); $k++) {
                                $Duplikat[$i][$k]=tostring($spillerinfo_array[$i][$k]);
                            }
                            $spillerinfo_array::__toString();
                            echo "<tr>
                                <td>$spillerinfo_array[$i][0]</td>
                                <td>$spillerinfo_array[$i][1]</td>
                                <td>$spillerinfo_array[$i][2]</td>
                                <td>$spillerinfo_array[$i][3]</td>
                                <td>$spillerinfo_array[$i][4]</td>
                                <td>$spillerinfo_array[$i][5]</td>
                                <td>$spillerinfo_array[$i][6]</td>
                                <td>$spillerinfo_array[$i][7]</td>
                            </tr>";
/*                            for ($k = 0; $k < count($spillerinfo_array); $k++) {
                                $Duplikat[$i][$k]=tostring($spillerinfo_array[$i][$k]);
                            }
                            echo "<tr>
                                <td>$Duplikat[$i][0]</td>
                                <td>$Duplikat[$i][1]</td>
                                <td>$Duplikat[$i][2]</td>
                                <td>$Duplikat[$i][3]</td>
                                <td>$Duplikat[$i][4]</td>
                                <td>$Duplikat[$i][5]</td>
                                <td>$Duplikat[$i][6]</td>
                                <td>$Duplikat[$i][7]</td>
                            </tr>";*/
                        }
                    }
                ?>
            </tbody>
        </table>
        <input id="idFjerne" type="text" placeholder="Velg en spiller å fjerne"><button id="idFjerneBekreft">Bekreft</button>
        <script>
            let ElFjerne = document.getElementById("idFjerne");
            let ElFjerneBekreft = document.getElementById("idFjerneBekreft")
            ElFjerneBekreft.addEventListener("click", fjernefunk);
            ElFjerne.addEventListener("keydown", fjernefunk1);

            function fjernefunk(){
                SELECT * FROM oddspillere WHERE Fornavn=ElFjerne.value
            }
            let tabellEl = document.getElementById("idTabell");

            let titler = ["SpillerID", "Fornavn", "Etternavn", "Alder", "Høyde", "Nasjonalitet", "Posisjon", "Spillertype"];

            let tekst = "<tr>";
            for (let i=0; i<titler.length; i++) {
                tekst += "<th>" + titler[i] + "</th>";
            }
            tekst += "</tr>";
            tabellEl.innerHTML = tekst;

        </script>

    </body>
</html>
