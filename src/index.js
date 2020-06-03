var canvas = document.getElementById("gameCanvas");
var con = canvas.getContext('2d');

var gameHeight = 600;
var gameWidth = 1000;

var game = new Game(gameWidth, gameHeight);

canvas.addEventListener("mousemove", function(e){
    game.object.x = e.clientX - game.objectWidth / 2;
    game.object.y = e.clientY - game.objectHeight / 2;
});

canvas.addEventListener("touchmove", function(e){
    game.object.x = e.clientX - game.objectWidth / 2;
    game.object.y = e.clientY - game.objectHeight / 2;
});

function gameLoop(timestamp){
    game.draw(con);
    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);