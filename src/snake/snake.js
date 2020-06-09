var Snake = function (game) {
    this.gameSide = game.gameSide;
    this.side = 10;
    this.diffx = 0;
    this.diffy = 0;
    this.snake = [];
    this.snake.push([0,0]);

    this.draw = function (con) {
        con.fillStyle = "black";
        for (let i=0; i< this.snake.length; i++){
            con.fillRect(this.snake[i][0], this.snake[i][1], this.side, this.side);
        }
    };

    this.update = function () {
        let head = [];
        head[0] = this.snake[this.snake.length - 1][0];
        head[1] = this.snake[this.snake.length - 1][1];
        this.snake.shift();
        head[0] += this.diffx;
        head[1] += this.diffy;
        this.snake.push(head);
    };

    this.grow = function () {
        let head = [];
        head[0] = this.snake[this.snake.length - 1][0];
        head[1] = this.snake[this.snake.length - 1][1];
        this.snake.push(head);
        this.update();
    };

    this.shrink = function () {
        this.snake.shift();
    };
}