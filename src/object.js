var Object = function (game, canvas) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.wireHeight = game.wireHeight;
    this.objectHeight = game.objectHeight;
    this.objectWidth = game.objectWidth;
    this.x = 100;
    this.y = game.levels.level1[0] - this.objectHeight / 2 + this.wireHeight / 2
    this.object = document.getElementById("object_img");

    this.draw = function (con) {
        con.drawImage(this.object, this.x, this.y, this.objectWidth, this.objectHeight);
    };

    this.update = function (x_coord, y_coord){
        this.x = x_coord - this.objectWidth / 2 - canvas.offsetLeft;
        this.y = y_coord - this.objectHeight / 2 - canvas.offsetTop;
    };
};