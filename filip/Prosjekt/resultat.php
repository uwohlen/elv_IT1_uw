<!DOCTYPE html>
<html lang='no'>

<head>
    <meta charset='UTF-8'>
    <link rel="stylesheet" href="indexStyle.css">
    <title>Avatar Resultat - Fagdag</title>
    <style>
        div {
            padding: 5px;
        }

        label {
            cursor: pointer;
        }
    </style>
</head>

<body>
<?php include "login.php";?>
    
    <?php
    
        if (isset($_POST["submitForm"])) {
            $brukerNavn = $_POST["idBruker"];
            $charNavn = $_POST["idChar"];
            $charHobby = $_POST["idHobby"];
            $charAlder = $_POST["idAlder"];
            $charSmak = $_POST["idSmak"];
            $charPerson = $_POST["idPerson"];
            $brukerMening = $_POST["idMening"];
        
            $sqlinsert = "INSERT INTO `skapelser` (`brukerNavn`, `charNavn`, `charHobby`, `charAlder`, `charSmak`, `charPerson`, `brukerMening`) VALUES ('$brukerNavn', '$charNavn', '$charHobby', '$charAlder', '$charSmak', '$charPerson', '$brukerMening');";
            $kobling->query($sqlinsert);

            header('Location: charVis.php');
            exit;
        }
    ?>
    <script>
    </script>
</body>

</html>