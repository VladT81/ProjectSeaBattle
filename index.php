<?php
error_reporting(-1);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">

    <title>Морской бой/Главная</title>
    <script src="jquery-1.12.3.js"></script>
    <link rel="stylesheet" href="main.css" type="text/css">


</head>

<body>
<script>
    window.onunload(){
        var loc = window.location;
        if (loc!=null){
            document.getSelection.setAttribute(li, 'active');
        }
    }


</script>
<?php
if(isset($_GET['page'])){
    echo $_GET['page'];
}else $_GET['page'] = 'main';
?>
<header>

    <div class="logotype">
        <div><img src="pict/logotype.png"></div>
        <div><img src="pict/logotxt.png"></div>
        <div id="txt">Морской бой</div>
    </div>

    <nav>
            <ul>
                <li><a id="nav" href="index.php?page=main">Главная</a></li>
                <li><a id="nav" href="index.php?page=project">О проекте</a></li>
                <li><a id="nav" href="index.php?page=aboutus">Обо мне</a></li>
                <li><a id="nav" href="index.php?page=roles">Правила игры</a></li>
                <li><a id="nav" href="javascript/SetGame.html">Игра</a></li>
                <li><a id="nav" href="index.php?page=entering">Вход</a></li>
            </ul>
    </nav>

</header>

<?php

include $_GET['page'].'.php';

?>


<footer>
    <div>
        <nav>
            <ul>
                <li><a href="index.php?page=forum">Форум</a></li>
                <li><a href="index.php?page=uselinks">Полезные ссылки</a></li>
                <li><a href="http://sourceit.com.ua/">Курсы SourceIT</a></li>
                <li><a href="index.php?page=entering">Вход</a></li>
            </ul>
        </nav>
    </div>



<h2><b><i>Сайт разработал: Ткаченко Владимир, май 2016 / <?echo date('M-Y') ?></i><b/></h2>
</footer>

<a href="javascript/SetGame.html">Setfield2</a>
<a href="form/form.php">Example</a>



</body>
</html>
</html>

