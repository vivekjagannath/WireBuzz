var Game = function(gameWidth, gameHeight){
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.objectHeight = 30;
    this.objectWidth = 10;
    this.wireWidth = 1;
    this.wireHeight = 5;
    this.currentLevel = 1;
    this.levels = new Levels();
    this.object = new Object(this);

    this.drawTitleText = function (con){
        con.fillStyle = "blue";
        con.fillRect(0,0, gameWidth, gameHeight);
        con.fillStyle = "yellow";
        con.font = "75px Monoton";
        con.textAlign = "center";
        con.fillText("Wire Buzz", this.gameWidth / 2, 100);
    }

    this.draw = function (con){
        this.drawTitleText(con);

        var x = this.collisionDetection();
        
        if (x){
        this.levels.buildLevel(this, this.currentLevel, con);
        
        this.object.draw(con);
        }
        else{
            console.log("You lost!");
        }
    }

    this.collisionDetection = function (){
        if (this.object.y - this.objectHeight / 2 === this.levels.level1[this.object.x - this.objectWidth / 2]){
            return false;
        }
        return true;
    }

};