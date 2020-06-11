var Food = function (game) {
    this.sweetx = 0;
    this.sweety = 0;
    this.poisonx = 0;
    this.poisony = 0;
    this.poison1x = 0;
    this.poison1y = 0;
    this.poison2x = 0;
    this.poison2y = 0;
    this.battery = document.getElementById("battery_img");
    this.resistor = document.getElementById("resistor_img");

    this.placeFood = function (con) {
        con.drawImage(this.battery, this.sweetx, this.sweety, game.snake.side, game.snake.side);
        con.drawImage(this.resistor, this.poisonx, this.poisony, game.snake.side, game.snake.side);
        con.drawImage(this.resistor, this.poison1x, this.poison1y, game.snake.side, game.snake.side);
        con.drawImage(this.resistor, this.poison2x, this.poison2y, game.snake.side, game.snake.side);
    };

    this.generateSweetCoords = function () {
        this.sweetx = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.sweety = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
    };

    this.generatePoisonCoords = function () {
        this.poisonx = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.poisony = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.poison1x = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.poison1y = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.poison2x = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
        this.poison2y = Math.floor(Math.random() * game.gameSide / game.snake.side) * game.snake.side;
    };
};