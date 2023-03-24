<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="index.css">
</head>

<body>

    <?php include "login.php";?>
    
    <?php
        if (isset($_GET['navn'])) {

            $navn = $_GET['navn'];
            $sqlselect = "SELECT * FROM `quizscore` WHERE navn='$navn' ORDER BY poeng DESC LIMIT 7";
            $highscore = $kobling->query($sqlselect);
        }
        else {
            $sqlselect = "SELECT * FROM `quizscore` ORDER BY poeng DESC LIMIT 7";
            $highscore = $kobling->query($sqlselect);
        }
    ?>

    
    <div class="container">
        <div id="idQuiz" style="<?php
            if (!isset($_GET['navn'])) {
                echo "display: none;";
            }
        ?>"></div>
    
            
        <div style="<?php
            if (isset($_GET['navn'])) {
                echo "display: none;";
            }
        ?>">
            <p>Hva heter du?</p>
            <form id="form">
                <?php
                    if (isset($_GET['navn'])) {
                        echo "<input type='text' name='navn' id='idNavn' value='$_GET[navn]'>";
                    } else {
                        echo "<input type='text' name='navn' id='idNavn'>";
                    }
                ?>
                <input type="submit">
            </form>
        </div>

        <div>   <!--lagre resultat knapp-->
        <form method="POST" action="highscore_v2.php" id="idForm"></form>
        </div>
    </div>

    
    <!--putter ut tabellen-->
    <div id="idTable" class="position" style="<?php
            if ($highscore->num_rows == 0) {
                echo "display: none;";
            }
        ?>">
        <table>
            <thead>
                <tr>
                    <th>Navn</th>
                    <th>Poeng</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    //if (isset($_GET['navn'])) {
                        while ($rad = $highscore->fetch_assoc()) {
                            echo "<tr>
                                <td>$rad[navn]</td>
                                <td>$rad[poeng]</td>
                            </tr>";
                        }
                    //}
                ?>
            </tbody>
        </table>
    </div>
    
    <div class="position">
    <!--<button id="idToggle">skjul</button>-->
    </div>

    <script src="index.js" defer></script>