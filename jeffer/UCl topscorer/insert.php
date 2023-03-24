<!DOCTYPE html>
<html lang='no'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title></title>
    <link rel='stylesheet' href='css/alltid.css'>
    <style>
    </style>
</head>
<body>
    <?php include "login.php";?>
    
    <?php
   
   
    if (isset($_POST["submit"])) {
        $idnr = $_POST["idnr"];
        $Fornavn = $_POST["Fornavn"];
        $Etternavn = $_POST["Etternavn"];
        $Goals = $_POST["Goals"];
        $Antall_kamper = $_POST["Antall_kamper"];
        
            $sqlinsert = "INSERT INTO `UCL_topscorers` (`Fornavn`, `Etternavn`,`Goals`,`Antall_kamper`) VALUES ('$Fornavn', '$Etternavn', $Goals, $Antall_kamper)";
            $kobling->query($sqlinsert);

            header('Location: ucl.php');
            exit;
        }
        echo "hei";
    ?>
    <script src='js/alltid.js'></script>
    <script>
    </script>
</body>
</html>