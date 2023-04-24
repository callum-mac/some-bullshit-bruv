<html>
<title>Times Tables Game</title>
<body>
<link rel="stylesheet" href="styles.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
<div class = content>
    <!-- Multiplication Game-->
    <h1 class = center style = "font-size:50px; color:#e2e8f0;">Times Tables Game</h1>
    <div class = content2>
        <p>Enter the answer to the following multiplication problem:</p>
        <p id="problem">3 x 4 = </p>
        <input class = input type="text" id="answer">
        <button class = button id="check-button">Check Answer</button>
        <p id="result">Check Your Answer!</p>
        <h1 style = "font-size:20px;">Your Score:</h1>
        <p class = score id="scoreLabel">0</p>
    </div>
    <img id = frog src='/assets/frog.gif' class = hide style = "width:200px;height:200px;margin:auto;padding:50px;">
    <img id = dyl src='/assets/dyl2.jpg' class = hide style = "width:200px;height:250px;margin:auto;padding:50px;">
    <script src="game.js"></script>
</div>
</body>
</html>