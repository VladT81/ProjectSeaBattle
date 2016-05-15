<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="ships.css">
    <title>Document</title>
</head>
<body>
<?php
function () //create table-fieldse
{
    echo "<table id='set_field' rules='all'>";
    for ($i = 97; $i <= 107; $i++) {
        $id_tr = chr($i);
        echo "<tr id=" . "$id_tr" . ">";
        for ($j = 0; $j <= 10; $j++) {
            echo "<td id=" . "$id_tr" . "$j" . ">" . " " . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}
?>
</body>
<script>
    for (var k=1; k<=10; k++){
        document.getElementById('a' + k).innerHTML = "k";
    }
    for (m=65; m<=74; m++){
        function char(ascii){
            return String.fromCharCode(ascii);
        }
        var str = char(m),
            idASCII = char(m+33);

        document.getElementById(idASCII + '0').innerHTML = str;
    }
</script>


<script>
    /*function drowShip(obj){
        var idShip = obj.getAttribute("id"), _src;
        //alert(idShip);
        onmouseover.document.getElementById(idShip).src = "missing.png";
        //document.write(idShip);
        delete idShip;
    }
    var prog = document.getElementsByTagName('td')
    prog.onclick = function(){
        alert(e.id)
    }*/
</script>


</html>