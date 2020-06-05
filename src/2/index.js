canvas = document.getElementById("gameCanvas");
con = canvas.getContext('2d');

canvas.height = 1000;
canvas.width = 1000;

var game = new Game(canvas, con);

function gameLoop(timestamp) {
    game.collisionDetection();
    game.draw(con);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);