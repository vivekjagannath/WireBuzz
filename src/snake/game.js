var GameScreen = { gameStartScreen: 0, gameInstructions: 1, gameOn: 2, gameOver: 3};

var Game = function (canvas, con){
    this.gameSide = canvas.width;
    this.snake = new Snake(this);
    this.controls = new Controls(this, canvas, con);
    this.food = new Food(this);
    this.score = 500;
    this.gameScreen = GameScreen.gameStartScreen;

    this.startScreen = function (con){
        this.score = 500;
        con.fillStyle = "blue";
        con.fillRect(0, 0, this.gameSide, this.gameSide);
        con.fillStyle = "yellow";
        con.font = "100px Ariel";
        con.textAlign = "center";
        con.fillText("Snake", this.gameSide / 2, .3 * this.gameSide);
        con.fillStyle = "white";
        con.font = "20px Ariel";
        con.fillText("Tap on the screen to start!", this.gameSide / 2, .9 * this.gameSide);
        document.getElementById("score").innerHTML = "Voltage : 0";
    };

    this.instructionsScreen = function (con){
        con.fillStyle = "blue";
        con.fillRect(0, 0, this.gameSide, this.gameSide);
        con.fillStyle = "yellow";
        con.font = "80px Ariel";
        con.textAlign = "center";
        con.fillText("Instructions:", this.gameSide / 2, .2 * this.gameSide);
        con.font = "18px Ariel";
        con.fillText("1. Use arrow keys or the controls below to move the wire.", this.gameSide / 2, .3 * this.gameSide);
        con.fillText("2. Collecting batteries increases length and voltage by 50.", this.gameSide / 2, .4 * this.gameSide);
        con.fillText("3. Going into walls reduces voltage to 0.", this.gameSide / 2, .5 * this.gameSide);
        con.fillText("4. Collecting resistors reduces length and voltage by 100.", this.gameSide / 2, .6 * this.gameSide);
        con.fillText("5. Wire contacting itself causes short- circuit.", this.gameSide / 2, .7 * this.gameSide);
        con.font = "18px Ariel";
        con.fillText("Tap on the screen to start!", this.gameSide / 2, .9 * this.gameSide);
    };

    this.gameOverScreen = function (con) {
        con.fillStyle = "blue";
        con.fillRect(0, 0, this.gameSide, this.gameSide);
        con.fillStyle = "yellow";
        con.font = "60px Ariel";
        con.textAlign = "center";
        con.fillText("GAME OVER", this.gameSide / 2, .5 * this.gameSide);
        con.fillStyle = "white";
        con.font = "40px Ariel";
        con.fillText("Your Score: " + this.score, this.gameSide / 2, .6 * this.gameSide);
        con.font = "20px Ariel";
        con.fillText("Tap on the screen to restart!", this.gameSide / 2, .8 * this.gameSide);
    };

    this.draw = function (con) {
        if (this.gameScreen == GameScreen.gameStartScreen){
            this.startScreen(con);
        }
        else if (this.gameScreen == GameScreen.gameInstructions){
            this.instructionsScreen(con);
        }
        else if (this.gameScreen == GameScreen.gameOver){
            this.gameOverScreen(con);
        }
        else if (this.gameScreen == GameScreen.gameOn){
            con.fillStyle = "white";
            con.fillRect(0, 0 ,this.gameSide, this.gameSide);
            this.snake.update();
            this.snake.draw(con);
            this.food.placeFood(con);
            this.ateCheck();
            this.deathCheck();
            document.getElementById("score").innerHTML = "Voltage : " + this.score;
        }
    };

    this.ateCheck = function () {
        if (this.snake.snake[this.snake.snake.length - 1][0] == this.food.sweetx && this.snake.snake[this.snake.snake.length - 1][1] == this.food.sweety){
            this.snake.grow();
            this.score += 50;
            this.food.generateSweetCoords();
        }
        else if (this.snake.snake[this.snake.snake.length - 1][0] == this.food.poisonx && this.snake.snake[this.snake.snake.length - 1][1] == this.food.poisony){
            this.snake.shrink();
            this.score -= 100;
            this.food.generatePoisonCoords();
        }
        else if (this.snake.snake[this.snake.snake.length - 1][0] == this.food.poison1x && this.snake.snake[this.snake.snake.length - 1][1] == this.food.poison1y){
            this.snake.shrink();
            this.score -= 100;
            this.food.generatePoisonCoords();
        }
        else if (this.snake.snake[this.snake.snake.length - 1][0] == this.food.poison2x && this.snake.snake[this.snake.snake.length - 1][1] == this.food.poison2y){
            this.snake.shrink();
            this.score -= 100;
            this.food.generatePoisonCoords();
        }
    };

    this.deathCheck = function () {
        if (this.snake.snake.length == 0){
            this.snake.diffx = this.snake.side;
            this.snake.diffy = 0;
            this.score = 0;
            this.snake.snake.push([0,0]);
            this.gameScreen = GameScreen.gameOver;
            this.draw(con);
        }

        if (this.snake.snake[this.snake.snake.length -1][0] < 0 || this.snake.snake[this.snake.snake.length -1][0] > this.gameSide || this.snake.snake[this.snake.snake.length -1][1] < 0 || this.snake.snake[this.snake.snake.length -1][1] > this.gameSide){
            this.snake.diffx = this.snake.side;
            this.snake.diffy = 0;
            this.snake.snake = [];
            this.snake.snake.push([0,0]);
            this.gameScreen = GameScreen.gameOver;
            this.draw(con);
        }
        for (let i = 0; i < this.snake.snake.length - 1; i++){
            if (this.snake.snake[this.snake.snake.length - 1][0] == this.snake.snake[i][0] && this.snake.snake[this.snake.snake.length -1][1] == this.snake.snake[i][1]){
                this.snake.diffx = this.snake.side;
                this.snake.diffy = 0;
                this.snake.snake = [];
                this.snake.snake.push([0,0]);
                this.gameScreen = GameScreen.gameOver;
                this.draw(con);
                break;
            }
        }
    };
}