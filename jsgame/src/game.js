import Object from "/src/object";
import {buildLevel} from "/src/levels";

export class Game{
    constructor(gameHeight, gameWidth){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.objectHeight = 30;
        this.objectWidth = 10;
        this.wireWidth = 1;
        this.wireHeight = 5;
        this.currentLevel = 1;
        this.object = new Object(this);
    }

    drawTitleText(con){
        con.fillStyle = "yellow";
        con.font = "75px Monoton";
        con.textAlign = "center";
        con.fillText("Wire Buzz", gameWidth / 2, 100);
    }

    draw(con){
        this.drawTitleText(con);

        this.object.draw(con);
        
        buildLevel(this, this.currentLevel, con);
    }
}