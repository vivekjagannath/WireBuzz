var canvas = document.getElementById("gameCanvas");
var con = canvas.getContext('2d');

var gameHeight = 600;
var gameWidth = 1000;

var game = new Game(canvas, gameWidth, gameHeight);

canvas.addEventListener("mousemove", game.controls.mouseMoveHandler);
canvas.addEventListener("touchstart", game.controls.touchMoveHandler);
canvas.addEventListener("touchmove", game.controls.touchMoveHandler);

function gameLoop(timestamp){
    game.draw(con);
    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);