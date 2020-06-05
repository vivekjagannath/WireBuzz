var Path = function (canvas) {
    this.gameWidth = canvas.width;
    this.gameHeight = canvas.height;
    this.pathHeight = 0.01 * this.gameHeight;
    this.pathWidth = 1;
    this.path = [];
    this.dir = 0;

    this.drawPath = function (con) {
        con.fillStyle = "yellow";
        for (let i = 0; i < this.gameWidth; i++) {
            con.fillRect(i, this.path[i], this.pathWidth, this.pathHeight);
        }
    };

    this.buildPath = function () {
        for (let i = 0; i < .1 * this.gameWidth; i++){
            this.path.push(.5 * this.gameHeight);
        }
        for (let i = 2; i <= 10; i ++){
            let min = (i-1) / 10 * this.gameWidth;
            let x = Math.random();
            if (this.path[min - 1] <= .3 * this.gameHeight){
                this.dir = 1;
            }
            else if (this.path[min - 1] >= .9 * this.gameHeight){
                this.dir = -1;
            }
            else{
                switch (this.dir){
                    case -1:
                        if (x < 0.5) this.dir = 0;
                        else this.dir = 1;
                        break;
                    case 0:
                        if (x < 0.5) this.dir = -1;
                        else this.dir = 1;
                        break;
                    case 1:
                        if (x < 0.5) this.dir = -1;
                        else this.dir = 0;
                        break;
                    default:
                        this.dir = -1;
                }
            }
            while (min < i/10 * this.gameWidth){
                this.path.push(this.path[min-1] + this.dir);
                min ++;
            }
        }
    };
};