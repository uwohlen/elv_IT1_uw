<!DOCTYPE html>
<html lang = 'no'>
<head>
    <meta charset = 'UTF-8'>
    <title><title>
</head>
<body>
    <?php include "login.php";?>
    
    <?php
    
        if (isset($_POST["submit"])) {
            $tittel = $_POST["tittel"];
            $forfatter = $_POST["forfatter"];
            $utgivelsesar = $_POST["utgivelsesar"];
            $antallsider = $_POST["antallsider"];
        
            // apostrofer rundt values som er tekst ikke nummer
            $sqlinsert = "INSERT INTO `boker` (`bokindeks`, `tittel`, `forfatter`, `utgivelsesar`, `antallsider`) VALUES (NULL, '$tittel', '$forfatter', $utgivelsesar, $antallsider)";
            $kobling->query($sqlinsert);


            header('Location: index.php');
            exit;
        }
    ?>


</body>
</html>