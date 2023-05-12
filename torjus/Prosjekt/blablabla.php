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
            p {
                display:inline-block;
            }
/*            button, input[type="checkbox"], input[type="radio"], input[type="submit"], input[type="reset"], input[type="button"],.hand {
                cursor: pointer;
            }
            form{
                border: solid black 1px;
                padding: 10px;
                background-color: bisque;
            }*/
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
                    while ($rad = $spillerinfo->fetch_assoc()) {
                        echo "<tr>
                            <td>$rad[spillereID]</td>
                            <td>$rad[fornavn]</td>
                            <td>$rad[etternavn]</td>
                            <td>$rad[alder]</td>
                            <td>$rad[hoyde]</td>
                            <td>$rad[nasjonalitet]</td>
                            <td>$rad[posisjon]</td>
                            <td>$rad[type]</td>
                        </tr>";
                    }
                ?>
            </tbody>
        </table>
        <form id="idForm">
            <p><input placeholder="Velg en spiller å fjerne" name="navn" type="text" required></p>
            <p><input type="submit" value="Lagre"></p>
        <script>
            var formEl = document.getElementById("idForm")
            formEl.addEventListener("submit", fjernefunk)
            function fjernefunk(event){
                event.preventDefault()
                
                $sql = "SELECT spillereID FROM oddspillere WHERE fornavn='ElFjerne.value'"
                $result = $kobling->query($sql);
                if ($result->num_rows > 0) {
                    $fjerner = "DELETE FROM oddspillere AND spillerposisjoner WHERE spillereID='$result'"
                    $kobling->query($fjerner)
                }
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
