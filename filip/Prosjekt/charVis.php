<!DOCTYPE html>
<html lang='no'>

<head>
    <meta charset='UTF-8'>
    <link rel="stylesheet" href="indexStyle.css">
    <title>Avatar Resultat - Fagdag</title>
    <style>
        div {
            padding: 5px;
        }

        label {
            cursor: pointer;
        }
    </style>
</head>

<body>
<?php include "login.php";?>
    
    <?php
        $sqlkode = "SELECT charNr, brukerNavn, charNavn, charHobby, charAlder, charSmak, 
        charPerson, brukerMening FROM skapelser";
        $charinfo = $kobling->query($sqlkode);
    ?>

    <table>
        <thead id="idTabell"></thead>
        <tbody>
            <tr>
                <th>Nummer</th>
                <th>Bruker</th>
                <th>Karakter</th>
                <th>Hobby</th>
                <th>Alder</th>
                <th>Favoritt Smak</th>
                <th>Personlighet</th>
                <th>Bruker Mening</th>
            </tr>
            <?php
                while ($rad = $charinfo->fetch_assoc()) {
                    echo "<tr>
                        <td>$rad[charNr]</td>
                        <td>$rad[brukerNavn]</td>
                        <td>$rad[charNavn]</td>
                        <td>$rad[charHobby]</td>
                        <td>$rad[charAlder] </td>
                        <td>$rad[charSmak]</td>
                        <td>$rad[charPerson]</td>
                        <td>$rad[brukerMening]</td>
                    </tr>";
                }
            ?>
    <script>
    </script>
</body>

</html>