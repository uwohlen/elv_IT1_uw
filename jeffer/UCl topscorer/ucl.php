<!DOCTYPE html>
<html lang='no'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <ti2tle></title>
    <link rel='stylesheet' href='css/alltid.css'>
    <style>
         body {
            background-color: #1d428a;
            color: #fff;
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center;
            font-size: 40px;
            margin-top: 50px;
        }

        table {
            margin: 50px auto;
            border-collapse: collapse;
            width: 80%;
            max-width: 1200px;
            background-color: #fff;
            border: 3px solid #d3d3d3;
        }

        th, td {
            padding: 15px;
            text-align: center;
            border: 1px solid #d3d3d3;
            color: #000;
        }

        th {
            background-color: #1d428a;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #d3d3d3;
        }
    </style>
</head>
<body>
    <h1>Velkommen til Klasselisten!</h1>
    <?php include "login.php";?>
    <?php
        $sqlkode = "SELECT * FROM `UCL_topscorers`";
        $elevinfo = $kobling->query($sqlkode);
        //echo "Spørringen $sqlkode ga $elevinfo->num_rows rader.";
    ?>

    <table>
        <thead id="idTabell"></thead>
        <tbody>
            <?php
                while ($rad = $elevinfo->fetch_assoc()) {
                    echo "<tr>
                        <td>$rad[idnr]</td>
                        <td>$rad[Fornavn]</td>
                        <td>$rad[Etternavn]</td>
                        <td>$rad[Goals]</td>
                        <td>$rad[Antall_kamper]</td>
                    </tr>";
                }
            ?>
        </tbody>
    </table>
    <script>
        let tabellEl = document.getElementById("idTabell");

        let titler = ["Spiller nr.","Fornavn","Etternavn","Antall mål","Antall kamper"];

        let tekst = "<tr>";
        for (let i=0; i<titler.length; i++) {
            tekst += "<th>" + titler[i] + "</th>";
        }
        tekst += "</tr>";
        tabellEl.innerHTML = tekst;

    </script>

        
   
</body>
</html>