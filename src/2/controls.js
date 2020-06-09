var directions = [[-3, 0], [3, 0], [0, 3], [0, -3]];

btn1 = document.getElementById("conBtn1");
btn2 = document.getElementById("conBtn2");
btn3 = document.getElementById("conBtn3");
btn4 = document.getElementById("conBtn4");

var Controls = function (game, canvas, con) {
    canvas.onclick = function () {
        if (game.gameScreen == GameScreen.gameOn) {
            return;
        }
        else {
            game.object.x = .015 * game.gameWidth;
            game.object.y = ((0.5 * game.gameHeight) - (game.object.objectHeight / 2)) + (game.path.pathHeight / 2);
            game.path.buildPath(game.currentLevel);
            game.gameScreen = GameScreen.gameOn;
            game.draw(con);
        }
    };

    canvas.ontouchstart = function () {
        if (game.gameScreen == GameScreen.gameOn) {
            return;
        }
        else {
            game.object.x = .015 * game.gameWidth;
            game.object.y = ((0.5 * game.gameHeight) - (game.object.objectHeight / 2)) + (game.path.pathHeight / 2);
            game.path.buildPath(game.currentLevel);
            game.gameScreen = GameScreen.gameOn;
            game.draw(con);
        }
    };

    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                game.object.diffx = directions[0][0];
                game.object.diffy = directions[0][1];
                break;
            case 39:
                game.object.diffx = directions[1][0];
                game.object.diffy = directions[1][1];
                break;
            case 40:
                game.object.diffx = directions[2][0];
                game.object.diffy = directions[2][1];
                break;
            case 38:
                game.object.diffx = directions[3][0];
                game.object.diffy = directions[3][1];
                break;
            default:
                break;
        }
    };

    document.onkeyup = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn1.onmousedown = function () {
        game.object.diffx = directions[0][0];
        game.object.diffy = directions[0][1];
    };

    btn2.onmousedown = function () {
        game.object.diffx = directions[1][0];
        game.object.diffy = directions[1][1];
    };

    btn3.onmousedown = function () {
        game.object.diffx = directions[2][0];
        game.object.diffy = directions[2][1];
    };

    btn4.onmousedown = function () {
        game.object.diffx = directions[3][0];
        game.object.diffy = directions[3][1];
    };

    btn1.onmouseup = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn2.onmouseup = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn3.onmouseup = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn4.onmouseup = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn1.ontouchstart = function () {
        game.object.diffx = directions[0][0];
        game.object.diffy = directions[0][1];
    };

    btn2.ontouchstart = function () {
        game.object.diffx = directions[1][0];
        game.object.diffy = directions[1][1];
    };

    btn3.ontouchstart = function () {
        game.object.diffx = directions[2][0];
        game.object.diffy = directions[2][1];
    };

    btn4.ontouchstart = function () {
        game.object.diffx = directions[3][0];
        game.object.diffy = directions[3][1];
    };

    btn1.ontouchend = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn2.ontouchend = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn3.ontouchend = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };

    btn4.ontouchend = function () {
        game.object.diffx = 0;
        game.object.diffy = 0;
    };
};