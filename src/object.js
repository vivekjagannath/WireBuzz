var Object = function (game) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.wireHeight = game.wireHeight;
    this.objectHeight = game.objectHeight;
    this.objectWidth = game.objectWidth;
    this.x = 1;
    this.y = game.levels.level1[0] - this.objectHeight / 2 + this.wireHeight / 2;
    this.diff = 2;
    this.object = document.getElementById("object_img");

    this.draw = function (con) {
        con.drawImage(this.object, this.x, this.y, this.objectWidth, this.objectHeight);
    }
};