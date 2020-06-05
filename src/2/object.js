var Object = function (game, canvas){
    this.objectHeight = .05 * canvas.height;
    this.objectWidth = .01 * canvas.width;
    this.x = .015 * canvas.width;
    this.y = ((0.5 * canvas.height) - (this.objectHeight / 2)) + (game.path.pathHeight / 2);
    this.object = document.getElementById("object_img");

    this.draw = function (con){
        con.drawImage(this.object, this.x, this.y, this.objectWidth, this.objectHeight);
    };

    this.update = function (x_coord, y_coord) {
        this.x += x_coord;
        console.log(this.x);
        this.y += y_coord;
    };
};