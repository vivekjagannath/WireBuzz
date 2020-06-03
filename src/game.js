var Game = function(canvas, gameWidth, gameHeight){
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.objectHeight = 30;
    this.objectWidth = 10;
    this.wireWidth = 1;
    this.wireHeight = 5;
    this.currentLevel = 1;
    this.levels = new Levels();
    this.object = new Object(this, canvas);
    this.controls = new Controls(this);

    this.drawTitleText = function (con){
        con.fillStyle = "blue";
        con.fillRect(0,0, gameWidth, gameHeight);
        con.fillStyle = "yellow";
        con.font = "75px Monoton";
        con.textAlign = "center";
        con.fillText("Wire Buzz", this.gameWidth / 2, 100);
    };

    this.draw = function (con){
        this.drawTitleText(con);

        this.levels.buildLevel(this, this.currentLevel, con);

        this.object.draw(con);
    };
};