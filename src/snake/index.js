canvas = document.getElementById('gameCanvas');
con = canvas.getContext('2d');

canvas.height = 500;
canvas.width = 500;

var game = new Game(canvas, con);

game.food.generateSweetCoords();
game.food.generatePoisonCoords();

var frameRate = setInterval(gameLoop, 150);

function gameLoop(){
    game.draw(con);
}