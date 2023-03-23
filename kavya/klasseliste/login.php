<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "klasseliste";

    $kobling = new mysqli($host, $username, $password, $database);
    if ($kobling -> connect_error) {
        die("Noe gikk galt: ". $kobling->connect_error);
    }
    else {
        //echo "Koblingen virker!";
    }
    $kobling->set_charset("utf8");
?>