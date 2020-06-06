var directions = [[-3,0], [3,0], [0,3], [0,-3]];

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

    document.ontouchstart = function () {
        if (game.gameScreen == GameScreen.level1) {
            return;
        }
        else if (game.gameScreen == GameScreen.gameStart) {
            if (game.gameScreen == GameScreen.gameStart) {
                if (e.touches[0].pageX - canvas.offsetLeft >= game.object.x && e.touches[0].pageX - canvas.offsetLeft <= game.object.x + game.objectWidth && e.touches[0].pageY - canvas.offsetTop >= game.object.y && e.touches[0].pageY - canvas.offsetTop <= game.object.y + game.objectHeight) {
                    game.gameScreen = GameScreen.level1;
                    game.draw(con);
                }
            }
        }
        game.gameScreen = GameScreen.gameStart;
        game.draw(con);
    };

    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 81:
                game.object.update(directions[0][0], directions[0][1]);
                break;
            case 87:
                game.object.update(directions[1][0], directions[1][1]);
                break;
            case 79:
                game.object.update(directions[2][0], directions[2][1]);
                break;
            case 80:
                game.object.update(directions[3][0], directions[3][1]);
                break;
            default:
                break;
        }
    };

    btn1.onclick = function (){
        game.object.update(directions[0][0], directions[0][1]);
    };

    btn2.onclick = function (){
        game.object.update(directions[1][0], directions[1][1]);
    };

    btn3.onclick = function (){
        game.object.update(directions[2][0], directions[2][1]);
    };

    btn4.onclick = function (){
        game.object.update(directions[3][0], directions[3][1]);
    };
};