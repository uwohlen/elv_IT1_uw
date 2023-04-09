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
    
        if (isset($_POST["lagrePoeng"])) {
            $navn = $_POST["navnfelt"];
            $poeng = $_POST["poengfelt"];
        
            $sqlinsert = "INSERT INTO `quizscore` (`navn`, `poeng`) VALUES ('$navn', $poeng)";
            $kobling->query($sqlinsert);

            header("Location: index2.php?navn=$navn");
            exit;
        }
    ?>
    <script src='js/alltid.js'></script>
    <script>
    </script>
</body>
</html>