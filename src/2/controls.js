var Controls = function (game, canvas, con) {
    document.onclick = function () {
        if (game.gameScreen == GameScreen.level1){
            return;
        }
        game.gameScreen = GameScreen.gameStart;
        game.draw(con);
    };

    document.ontouchstart = function () {
        if (game.gameScreen == GameScreen.level1){
            return;
        }
        else if (game.gameScreen == GameScreen.gameStart){
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
        switch (e.keyCode){
            case 81:
                game.object.update(-3,0);
                break;
            case 87:
                game.object.update(3,0);
                break;
            case 79:
                game.object.update(0,3);
                break;
            case 80:
                game.object.update(0,-3);
                break;
            default:
                break;
        }
    };
};