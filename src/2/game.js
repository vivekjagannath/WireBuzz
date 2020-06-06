var GameScreen = { startMenu: 0, gameOn: 1, gameLost: 2, gameWon: 3 };

var Game = function (canvas, con) {
    this.gameWidth = canvas.width;
    this.gameHeight = canvas.height;
    this.path = new Path(canvas);
    this.object = new Object(this, canvas);
    this.controls = new Controls(this, canvas, con);
    this.gameScreen = GameScreen.startMenu;
    this.collide = false;
    this.currentLevel = 1;
    this.zapp = document.getElementById("zapp_img");

    this.drawTitleText = function (con) {
        con.fillStyle = "blue";
        con.fillRect(0, 0, this.gameWidth, this.gameHeight);
        con.fillStyle = "yellow";
        con.font = "100px Monoton";
        con.textAlign = "center";
        con.fillText("Wire Buzz", this.gameWidth / 2, .2 * this.gameHeight);
    };

    this.startScreen = function (con) {
        this.drawTitleText(con);
        con.fillStyle = "white";
        con.font = "40px Ariel";
        con.textAlign = "center";
        con.fillText("Tap on the screen to start!", this.gameWidth / 2, .8 * this.gameHeight);
    };

    this.gameLostScreen = function (con, x, y) {
        this.drawTitleText(con);
        con.fillStyle = 'rgba(0,0,0,0.5)';
        con.fillRect(0, 0, this.gameWidth, this.gameHeight);
        con.fillStyle = "white";
        con.font = "40px Ariel";
        con.textAlign = "center";
        con.fillText("Tap on the screen to restart!", this.gameWidth / 2, .8 * this.gameHeight);
        con.font = "80px Ariel";
        con.fillText("YOU LOST!", this.gameWidth / 2, this.gameHeight / 2);
        this.path.drawPath(con);
        this.path.path = [];
        con.drawImage(this.zapp, x - 25, y - 25);
    };

    this.gameWonScreen = function (con) {
        this.drawTitleText(con);
        con.fillStyle = 'rgba(0,0,0,0.5)';
        con.fillRect(0, 0, this.gameWidth, this.gameHeight);
        con.fillStyle = "white";
        con.font = "40px Ariel";
        con.textAlign = "center";
        if (this.currentLevel > 1) {
            con.fillText("Tap on the screen for the next level!", this.gameWidth / 2, .8 * this.gameHeight);
        }
        else if (this.currentLevel == 1) {
            con.fillText("You have completed all the levels!!", this.gameWidth / 2, .8 * this.gameHeight);
        }
        con.font = "80px Ariel";
        con.fillText("YOU WON!!!", this.gameWidth / 2, this.gameHeight / 2);
        this.path.path = [];
    };

    this.draw = function (con) {
        if (this.gameScreen == GameScreen.startMenu) {
            this.startScreen(con);
        }
        else if (this.gameScreen == GameScreen.gameWon) {
            this.gameWonScreen(con);
        }
        else if (this.gameScreen == GameScreen.gameOn) {
            this.drawTitleText(con);
            this.collisionDetection(con);
            if (this.object.x >= .98 * this.gameWidth){
                this.gameScreen = GameScreen.gameWon;
            }
            this.path.drawPath(con);
            this.object.draw(con);
        }
    };

    this.declareLost = function (con, x, y){
        this.currentLevel = 1;
        this.gameScreen = GameScreen.gameLost;
        this.gameLostScreen(con, x, y);
        return;
    };

    this.collisionDetection = function (con) {
        if (this.object.y >= this.path.path[this.object.x] - 5) {
            this.declareLost(con, this.object.x, this.object.y);
        }
        else if (this.object.y >= this.path.path[this.object.x + this.object.objectWidth] - 5) {
            this.declareLost(con, this.object.x + this.object.objectWidth, this.object.y);
        }
        else if (this.object.y + this.object.objectHeight <= this.path.path[this.object.x] + this.path.pathHeight + 5) {
            this.declareLost(con, this.object.x, this.object.y + this.object.objectHeight);
        }
        else if (this.object.y + this.object.objectHeight <= this.path.path[this.object.x + this.object.objectWidth] + this.path.pathHeight + 5) {
            this.declareLost(con, this.object.x + this.object.objectWidth, this.object.y + this.objectHeight);
        }
    };
};