var canvas = document.getElementById("gameCanvas");
var con = canvas.getContext('2d');

var gameHeight = 600;
var gameWidth = 1000;

var game = new Game(gameWidth, gameHeight);

canvas.addEventListener("mousemove", function(e){
    game.object.x = e.clientX;
    game.object.y = e.clientY;
});

function gameLoop(timestamp){
    game.draw(con);
    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);