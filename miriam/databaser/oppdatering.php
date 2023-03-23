<!DOCTYPE html>
<html lang="no">
    <head>
    </head>
    <body>
        <?php include "login.php";
        ?>
        
        <?php
    
            if (isset($_GET["submit"])) {
                echo "hei";
                $Fornavn = $_GET["fnavn"];
                $Etternavn = $_GET["enavn"];
                $Alder = $_GET["alder"];
                $Bosted = $_GET["bosted"];
                $Album = $_GET["album"];
                $Sang = $_GET["sang"];

                $sqlinsert = "INSERT INTO `artister_jeg_liker` (`Fornavn`, `Etternavn`,`Alder`,`Bosted`,`Album`,`Sang`) VALUES ('$Fornavn', '$Etternavn','$Alder','$Bosted','$Album','$Sang' )";
                $kobling->query($sqlinsert);

                header('Location: index2.php');
                exit;
            }
        ?>

    </body>
    </html>
