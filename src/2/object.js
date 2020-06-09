var Object = function (game, canvas) {
    this.objectHeight = .05 * canvas.height;
    this.objectWidth = .01 * canvas.width;
    this.x = .015 * canvas.width;
    this.y = ((0.5 * canvas.height) - (this.objectHeight / 2)) + (game.path.pathHeight / 2);
    this.object = document.getElementById("object_img");
    this.diffx = 0;
    this.diffy = 0;

    this.draw = function (con) {
        con.drawImage(this.object, this.x, this.y, this.objectWidth, this.objectHeight);
    };

    this.update = function (xDiff, yDiff) {
        this.x += this.diffx;
        this.y += this.diffy;
    };
};