var Controls = function (game){

    this.mouseMoveHandler = function(e){
        game.object.update(e.clientX, e.clientY);
    };

    this.touchMoveHandler = function(e){
        if(e.touches){
            game.object.update(e.touches[0].pageX, e.touches[0].pageY);
            e.preventDefault();
        }
    };
};