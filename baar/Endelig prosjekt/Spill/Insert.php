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
            $level = $_POST["levelfelt"];
            $tid = $_POST["tidfelt"];
            
            $sqlinsert = "INSERT INTO `tabell` (`Navn`, `Level`, `Tid`) VALUES ('$navn', $level, $tid)";
            $kobling->query($sqlinsert);

            header('Location: MazeIndex.php');
            exit;
        }
    ?>
    <script></script>
</body>
</html>