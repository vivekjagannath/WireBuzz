btn1 = document.getElementById("conBtn1");
btn2 = document.getElementById("conBtn2");
btn3 = document.getElementById("conBtn3");
btn4 = document.getElementById("conBtn4");

var Controls = function(game){
    document.onkeydown = function (e) {
        switch(e.keyCode){
            case 37:
                if (game.snake.diffx == game.snake.side){
                    break;
                } 
                game.snake.diffx = -game.snake.side;
                game.snake.diffy = 0;
                break;
            case 38:
                if (game.snake.diffy == game.snake.side){
                    break;
                } 
                game.snake.diffx = 0;
                game.snake.diffy = -game.snake.side;
                break;
            case 39:
                if (game.snake.diffx == -game.snake.side){
                    break;
                } 
                game.snake.diffx = game.snake.side;
                game.snake.diffy = 0;
                break;
            case 40:
                if (game.snake.diffy == -game.snake.side){
                    break;
                } 
                game.snake.diffx = 0;
                game.snake.diffy = game.snake.side;
                break;
            default:
                break;
        }
    };

    btn1.onmousedown = function () {
        if (game.snake.diffx == game.snake.side){
            return;
        }
        game.snake.diffx = -game.snake.side;
        game.snake.diffy = 0;
    };

    btn2.onmousedown = function () {
        if (game.snake.diffx == -game.snake.side){
            return;
        }
        game.snake.diffx = game.snake.side;
        game.snake.diffy = 0;
    };

    btn3.onmousedown = function () {
        if (game.snake.diffy == -game.snake.side){
            return;
        }
        game.snake.diffx = 0;
        game.snake.diffy = game.snake.side;
    };

    btn4.onmousedown = function () {
        if (game.snake.diffy == game.snake.side){
            return;
        }
        game.snake.diffx = 0;
        game.snake.diffy = -game.snake.side;
    };

    btn1.ontouchstart = function () {
        if (game.snake.diffx == game.snake.side){
            return;
        }
        game.snake.diffx = -game.snake.side;
        game.snake.diffy = 0;
    };

    btn2.ontouchstart = function () {
        if (game.snake.diffx == -game.snake.side){
            return;
        }
        game.snake.diffx = game.snake.side;
        game.snake.diffy = 0;
    };

    btn3.ontouchstart = function () {
        if (game.snake.diffy == -game.snake.side){
            return;
        }
        game.snake.diffx = 0;
        game.snake.diffy = game.snake.side;
    };

    btn4.ontouchstart = function () {
        if (game.snake.diffy == game.snake.side){
            return;
        }
        game.snake.diffx = 0;
        game.snake.diffy = -game.snake.side;
    };
}