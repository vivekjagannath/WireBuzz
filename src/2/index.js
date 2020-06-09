canvas = document.getElementById("gameCanvas");
con = canvas.getContext('2d');

canvas.height = 1000;
canvas.width = 1000;

var game = new Game(canvas, con);

var frameRate = setInterval(gameLoop, 50);

function gameLoop(timestamp) {
    game.draw(con);
}