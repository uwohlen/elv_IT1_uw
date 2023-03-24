<!DOCTYPE html>
<html lang = 'no'>
    <head>
    <meta charset = 'UTF-8'>
        <title>   <title>
    </head>
    <body>
        <?php include "login.php";?>

        <?php

            if (isset($_GET["submit"])) {

                $fornavn = $_GET["fornavn"];
                $etternavn = $_GET["etternavn"];
                $klasse = $_GET["klasse"];
                $telefonNr = $_GET["telefonNr"];
                
                // apostrofer rundt values som er tekst ikke nummer
                $sqlinsert = "INSERT INTO `elever` (`elevNr`, `fornavn`, `etternavn`, `klasse`, `kontaktlaererNr`, `telefonNr`, `termin1`) VALUES (NULL, '$fornavn', '$etternavn', '$klasse', NULL, '$telefonNr', NULL)";
                $kobling->query($sqlinsert);

                header('Location: index.php');
                exit;
            
            }
        ?>


    </body>
</html>