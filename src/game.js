var GameScreen = { startMenu: 0, gameStart: 1, level1: 2, gameLost: 3, gameWon: 4 }

var Game = function (canvas, con, gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.objectHeight = 30;
    this.objectWidth = 10;
    this.wireWidth = 1;
    this.wireHeight = 5;
    this.currentLevel = 1;
    this.gameScreen = GameScreen.startMenu;
    this.collision_x = 0;
    this.collision_y = 0;
    this.levels = new Levels();
    this.object = new Object(this, canvas);
    this.controls = new Controls(this, canvas, con);

    this.drawTitleText = function (con) {
        con.fillStyle = "blue";
        con.fillRect(0, 0, gameWidth, gameHeight);
        con.fillStyle = "yellow";
        con.font = "75px Monoton";
        con.textAlign = "center";
        con.fillText("Wire Buzz", this.gameWidth / 2, 100);
    };

    this.startScreen = function (con) {
        this.drawTitleText(con);

        con.fillStyle = "white";
        con.font = "25px Arial";
        con.textAlign = "center";
        con.fillText("Tap on the screen to start!", this.gameWidth / 2, 400);
    }

    this.gameLostScreen = function (con) {
        this.drawTitleText(con);
        this.levels.buildLevel(this, this.currentLevel, con);
        this.object.draw(con);
        let zapp = document.getElementById("zapp_img");
        con.drawImage(zapp, this.collision_x - 25, this.collision_y - 25);

        con.fillStyle = 'rgba(0,0,0,0.5)';
        con.fillRect(0, 0, this.gameWidth, this.gameHeight);

        con.fillStyle = "white";
        con.font = "50px Arial";
        con.textAlign = "center";
        con.fillText("YOU LOST!", this.gameWidth / 2, 300)

        con.font = "25px Arial";
        con.fillText("Tap on the screen to restart!", this.gameWidth / 2, 500);
    }

    this.gameWonScreen = function () {
        this.drawTitleText(con);
        this.levels.buildLevel(this, this.currentLevel, con);
        this.object.draw(con);

        con.fillStyle = 'rgba(0,0,0,0.5)';
        con.fillRect(0, 0, this.gameWidth, this.gameHeight);

        con.fillStyle = "white";
        con.font = "50px Arial";
        con.textAlign = "center";
        con.fillText("YOU WON!", this.gameWidth / 2, 300)

        con.font = "25px Arial";
        con.fillText("Tap on the screen to restart!", this.gameWidth / 2, 500);
    }

    this.draw = function (con) {
        if (this.gameScreen == GameScreen.startMenu) {
            this.startScreen(con);
        }
        else if (this.gameScreen == GameScreen.gameStart) {
            this.drawTitleText(con);
            this.levels.buildLevel(this, this.currentLevel, con);
            this.object.x = 25;
            this.object.y = game.levels.level1[0] - this.objectHeight / 2 + this.wireHeight / 2;
            this.object.draw(con);
        }
        else if (this.gameScreen == GameScreen.level1) {
            this.drawTitleText(con);
            this.collisionDetection();
            this.levels.buildLevel(this, this.currentLevel, con);
            this.object.draw(con);
            if (this.object.x >= this.gameWidth - 15) {
                game.gameScreen = GameScreen.gameWon;
                game.gameWonScreen();
            }
        }
        else if (this.gameScreen == GameScreen.gameLost) {
            this.gameLostScreen(con);
        }
        else if (this.gameScreen == GameScreen.gameWon) {
            this.gameWonScreen();
        }
    };

    this.collisionDetection = function () {
        if (this.object.y >= this.levels.level1[this.object.x] - 1) {
            this.gameScreen = GameScreen.gameLost;
            this.collision_x = this.object.x;
            this.collision_y = this.object.y;
        }
        else if (this.object.y + this.objectHeight <= this.levels.level1[this.object.x] + this.wireHeight + 1) {
            this.gameScreen = GameScreen.gameLost;
            this.collision_x = this.object.x;
            this.collision_y = this.object.y + this.objectHeight;
        }
        else if (this.object.y >= this.levels.level1[this.object.x + this.objectWidth] - 1) {
            this.gameScreen = GameScreen.gameLost;
            this.collision_x = this.object.x + this.objectWidth;
            this.collision_y = this.object.y;
        }
        else if (this.object.y + this.objectHeight <= this.levels.level1[this.object.x + this.objectWidth] + this.wireHeight + 1) {
            this.gameScreen = GameScreen.gameLost;
            this.collision_x = this.object.x + this.objectWidth;
            this.collision_y = this.object.y + this.objectHeigh;
        }
    };
};