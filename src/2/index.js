canvas = document.getElementById("gameCanvas");
con = canvas.getContext('2d');

canvas.height = 1000;
canvas.width = 1000;

var game = new Game(canvas, con);

game.path.buildPath();

function gameLoop(timestamp) {
    game.draw(con);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);