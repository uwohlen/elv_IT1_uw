<?php

$fornavn = $_POST["fornavn"];
$etternavn = $_POST["etternavn"];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "klasseliste";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//Prepare SQL query
$sql = "INSERT INTO laerere (fornavn, etternavn) VALUES ('$fornavn', '$etternavn')";

// Excute query
if (mysqli_query($conn, $sql)) {
    echo "Dataen har blitt lagret";
}    else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

// Close connection
mysqli_close($conn);

header("Location: http://localhost/Database/tabell_laerere.php");
die();
?>