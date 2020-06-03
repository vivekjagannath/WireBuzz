var Controls = function (game, canvas) {

    canvas.onmousemove = function (e) {
        game.object.update(e.clientX, e.clientY);
    };

    canvas.ontouchmove = function (e) {
        if (e.touches) {
            game.object.update(e.touches[0].pageX, e.touches[0].pageY);
            e.preventDefault();
        }
    };

    canvas.onclick = function () {
        game.gameScreen = GameScreen.level1;
        game.draw();
    };

    canvas.ontouchstart = function () {
        game.gameScreen = GameScreen.level1;
        game.draw();
    };
};