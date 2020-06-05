var GameScreen = { startMenu: 0, gameStart: 1, level1: 2, gameLost: 3, gameWon: 4 }

var Game = function(canvas, con) {
    this.gameWidth = canvas.width;
    this.gameHeight = canvas.height;
    this.path = new Path(canvas);
    this.object = new Object(this, canvas);
    this.controls = new Controls(this, canvas, con);
    this.gameScreen = GameScreen.startMenu;

    this.drawTitleText = function (con) {
        con.fillStyle = "blue";
        con.fillRect(0, 0, this.gameWidth, this.gameHeight);
        con.fillStyle = "yellow";
        con.font = "100px Monoton";
        con.textAlign = "center";
        con.fillText("Wire Buzz", this.gameWidth / 2, .2 * this.gameHeight);
    };

    this.draw = function (con) {
        this.drawTitleText(con);
        this.path.drawPath(con);
        this.object.draw(con);
    }
};