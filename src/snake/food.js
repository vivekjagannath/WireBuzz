var Food = function (game) {
    this.sweetx = 0;
    this.sweety = 0;
    this.poisonx = 0;
    this.poisony = 0;

    this.placeFood = function (con) {
        con.fillStyle = "green";
        con.fillRect(this.sweetx, this.sweety, game.snake.side, game.snake.side);
        con.fillStyle = "red";
        con.fillRect(this.poisonx, this.poisony, game.snake.side, game.snake.side);
    };

    this.generateSweetCoords = function () {
        this.sweetx = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.sweety = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
    };

    this.generatePoisonCoords = function () {
        this.poisonx = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.poisony = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
    };
};