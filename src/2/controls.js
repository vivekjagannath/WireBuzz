var directions = [[-3,0], [3,0], [0,3], [0,-3]];

var Controls = function (game, canvas, con) {
    document.onclick = function () {
        if (game.gameScreen == GameScreen.gameOn) {
            return;
        }
        else {
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
};