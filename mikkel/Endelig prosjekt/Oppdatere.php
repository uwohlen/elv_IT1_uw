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
            $navn1 = $_POST["navn1felt"];
            $X = $_POST["X_vinn"];
            $O = $_POST["O_vinn"];
            $navn2 = $_POST["navn2felt"];
            
            $sqlinsert = "INSERT INTO `tabell` (`Spiller1`, `X`, `O`,`Spiller2`) VALUES ('$navn1', $X, $O, '$navn2')";
            $kobling->query($sqlinsert);

            header('Location: trepårad.php');
            exit;
        }
    ?>
    <script></script>
</body>
</html>