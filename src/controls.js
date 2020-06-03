var Controls = function (game, canvas, con) {

    canvas.onmousemove = function (e) {
        if (game.gameScreen == GameScreen.gameStart) {
            if (e.clientX - canvas.offsetLeft >= game.object.x && e.clientX - canvas.offsetLeft <= game.object.x + game.objectWidth && e.clientY - canvas.offsetTop >= game.object.y && e.clientY - canvas.offsetTop <= game.object.y + game.objectHeight) {
                game.gameScreen = GameScreen.level1;
                game.draw(con);
            }
        }
        game.object.update(e.clientX, e.clientY);
    };

    canvas.ontouchmove = function (e) {
        if (e.touches) {
            if (game.gameScreen == GameScreen.gameStart) {
                if (e.touches[0].pageX - canvas.offsetLeft >= game.object.x && e.touches[0].pageX - canvas.offsetLeft <= game.object.x + game.objectWidth && e.touches[0].pageY - canvas.offsetTop >= game.object.y && e.touches[0].pageY - canvas.offsetTop <= game.object.y + game.objectHeight) {
                    game.gameScreen = GameScreen.level1;
                    game.draw(con);
                }
            }
            game.object.update(e.touches[0].pageX, e.touches[0].pageY);
            e.preventDefault();
        }
    };

    canvas.onclick = function () {
        game.gameScreen = GameScreen.gameStart;
        game.draw(con);
    };

    canvas.ontouchstart = function () {
        game.gameScreen = GameScreen.gameStart;
        game.draw(con);
    };
};