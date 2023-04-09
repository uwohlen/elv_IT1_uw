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
            $tid = $_POST["tidfelt"];
        
            $sqlinsert = "INSERT INTO `board` (`Navn`, `Poeng`, `Tid`) VALUES ('$navn', $poeng, $tid)";
            $kobling->query($sqlinsert);

            header('Location: Quiz2.php');
            exit;
        }
    ?>
    <script></script>
</body>
</html>