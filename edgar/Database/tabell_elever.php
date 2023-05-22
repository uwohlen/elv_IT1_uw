<?php
// Connect to the database
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

// Execute a SELECT statement
$sql = "SELECT * FROM elever";
$result = mysqli_query($conn, $sql);

echo '<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">';
// Fetch the data

if (mysqli_num_rows($result) > 0) {
  echo "<table><tr><th>Fornavn</th> <th>Etternavn</th> <th>Klasse</th><th>Kontaktlaerernr</th> <th></th></tr>";
  while($row = mysqli_fetch_assoc($result)) {
    echo "<tr><td>" . $row["fornavn"] . "</td><td>" . $row["etternavn"] . "</td><td>" . $row["klasse"] . "</td><td>" . $row["kontaktlaerernr"] . "</td><td><button onclick='deleteRow(this)'>Delete</button></td></tr>";
  }
  echo "</table>";
} else {
  echo "0 results";
}




// Close the connection
mysqli_close($conn);
?>