var Game = function (canvas){
    this.gameSide = canvas.width;
    this.snake = new Snake(this);
    this.controls = new Controls(this);
    this.food = new Food(this);

    this.draw = function (con) {
        con.fillStyle = "white";
        con.fillRect(0, 0 ,this.gameSide, this.gameSide);
        this.snake.update();
        this.snake.draw(con);
        this.food.placeFood(con);
        this.ateCheck();
        this.deathCheck();
    };

    this.ateCheck = function () {
        if (this.snake.snake[this.snake.snake.length - 1][0] == this.food.sweetx && this.snake.snake[this.snake.snake.length - 1][1] == this.food.sweety){
            this.snake.grow();
            this.food.generateSweetCoords();
        }
        else if (this.snake.snake[this.snake.snake.length - 1][0] == this.food.poisonx && this.snake.snake[this.snake.snake.length - 1][1] == this.food.poisony){
            this.snake.shrink();
            this.food.generatePoisonCoords();
        }
    };

    this.deathCheck = function () {
        if (this.snake.snake[this.snake.snake.length -1][0] < 0 || this.snake.snake[this.snake.snake.length -1][0] > this.gameSide || this.snake.snake[this.snake.snake.length -1][1] < 0 || this.snake.snake[this.snake.snake.length -1][1] > this.gameSide){
            this.snake.snake = [[0,0]];
        }
        for (let i = 0; i < this.snake.snake.length - 1; i++){
            if (this.snake.snake[this.snake.snake.length - 1][0] == this.snake.snake[i][0] && this.snake.snake[this.snake.snake.length -1][1] == this.snake.snake[i][1]){
                this.snake.snake = [[0,0]];
                break;
            }
        }
    };
}