var canvas = document.getElementById("gameCanvas");
var con = canvas.getContext('2d');

var gameHeight = 600;
var gameWidth = 1000;

var game = new Game(gameWidth, gameHeight);

game.draw(con);