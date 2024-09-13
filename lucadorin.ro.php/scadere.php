<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scadere</title>
    <link rel="stylesheet" href="styleGen.css">
</head>
<body>
    <nav class="topnav" id="myTopnav">
        <a href="index.php" >Inmultire</a>
        <a href="impartire.php">Impartire</a>
        <a href="adunare.php">Adunare</a>
        <a href="scadere.php">Scadere</a>
        <a href="javascript:void(0);" class="apps" onclick="forMenu()">
        <span>Menu</span>
        </a>
    </nav>

    <div class="objectMulty">

        <div class="container" id="containerScad">
          <span class="tipRaspuns" id="tipRaspunsScad"></span>
          <span class="scor" id="scorScad"></span>
          <div  class="intrebarea" id="intrebareaScad"></div>
          <input type="text" class="intrare" id="intrareScad" size="10" placeholder="Raspuns" autofocus>
          <div id="appGen" class="no1 ">   
            <div id="keys">
  
              <button class="taste" onclick="nAppend(this.innerHTML)">7</button>
              <button class="taste" onclick="nAppend('8')">8</button>
              <button class="taste" onclick="nAppend('9')">9</button>
              <button class="taste" onclick="nAppend('4')">4</button>
              <button class="taste" onclick="nAppend('5')">5</button>
              <button class="taste" onclick="nAppend('6')">6</button>
              <button class="taste" onclick="nAppend('1')">1</button>
              <button class="taste" onclick="nAppend('2')">2</button>
              <button class="taste" onclick="nAppend('3')">3</button>
              <button class="taste" onclick="nAppend('0')">0</button>
              <button   class="taste buton" id="butonScad" >Enter</button>
              <button   class="taste" id="sterge" style="background-color: red;">Del</button>
            </div>
          </div>
        </div>
        
    </div>


    <footer class="footer">Contact at: dorin@lucadorin.ro</footer>

 <script src="scadere.js"></script>  
    
</body>
</html>