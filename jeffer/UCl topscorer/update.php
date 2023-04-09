<!DOCTYPE html>
<html lang='no'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title></title>
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
        
        
            $sqlinsert = "UPDATE UCL_topscorers SET Fornavn='$Fornavn', Etternavn='$Etternavn', Goals='$Goals', Antall_kamper='$Antall_kamper' WHERE idnr='$idnr'";
            $kobling->query($sqlinsert);

            header('Location: ucl.php');
            exit;
        }
    ?>
    <script>
    </script>
</body>
</html>