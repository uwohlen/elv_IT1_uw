<?php

$fornavn = $_POST["fornavn"];
$etternavn = $_POST["etternavn"];
$klasse = $_POST["klasse"];
$kontaktlaerer = $_POST["kontaktlaerer"];
$terms = filter_input(INPUT_POST, "terms", FILTER_VALIDATE_BOOL);

if ( ! $terms) {
    die("Terms must be accepted");
}   

$host = "localhost";
$dbname = "testdatabase";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);
                    

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}


$sql = "INSERT INTO `Klasseliste` (`fornavn`, `etternavn`, `klasse`, `kontaktlaerer`) VALUES ('$fornavn', '$etternavn', '$klasse', '$kontaktlaerer');";

$conn->query($sql);

echo "Skjema lagret";