btn1 = document.getElementById("conBtn1");
btn2 = document.getElementById("conBtn2");
btn3 = document.getElementById("conBtn3");
btn4 = document.getElementById("conBtn4");

var Controls = function(game, canvas, con){

    canvas.onclick = function () {
        if (game.gameScreen == GameScreen.gameOn){
            return;
        }
        else if (game.gameScreen == GameScreen.gameStartScreen){
            game.gameScreen = GameScreen.gameInstructions;
        }
        else if (game.gameScreen == GameScreen.gameInstructions){
            game.gameScreen = GameScreen.gameOn;
        }
        else if (game.gameScreen == GameScreen.gameOver){
            game.gameScreen = GameScreen.gameStartScreen;
        }
    };

    let goUp = function () {
        if (game.snake.diffy == game.snake.side){
            return;
        }
        game.snake.diffx = 0;
        game.snake.diffy = -game.snake.side;
    };

    let goDown = function () {
        if (game.snake.diffy == -game.snake.side){
            return;
        }
        game.snake.diffx = 0;
        game.snake.diffy = game.snake.side;
    };

    let goLeft = function () {
        if (game.snake.diffx == game.snake.side){
            return;
        }
        game.snake.diffx = -game.snake.side;
        game.snake.diffy = 0;
    };

    let goRight = function () {
        if (game.snake.diffx == -game.snake.side){
            return;
        }
        game.snake.diffx = game.snake.side;
        game.snake.diffy = 0;
    };

    document.onkeydown = function (e) {
        switch(e.keyCode){
            case 37:
                goLeft();
                break;
            case 38:
                goUp();
                break;
            case 39:
                goRight();
                break;
            case 40:
                goDown();
                break;
            default:
                break;
        }
    };

    btn1.addEventListener("mousedown", goLeft);
    btn2.addEventListener("mousedown", goRight);
    btn3.addEventListener("mousedown", goDown);
    btn4.addEventListener("mousedown", goUp);
    btn1.addEventListener("touchstart", goLeft);
    btn2.addEventListener("touchstart", goRight);
    btn3.addEventListener("touchstart", goDown);
    btn4.addEventListener("touchstart", goUp);
};