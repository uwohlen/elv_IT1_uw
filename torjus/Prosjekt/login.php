<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "noe";

    $kobling = new mysqli($host, $username, $password, $database);
    if ($kobling -> connect_error) {
        die("Noe gikk galt: ". $kobling->connect_error);
    }
    else {
        //echo "Koblingen virker!";
    }
    $kobling->set_charset("utf8");

    /*$sqlinsert = "INSERT INTO `theboss_quiz_score` (`navn`, `poeng`) VALUES ('Unni', 200)";
    $kobling->query($sqlinsert);*/
?>