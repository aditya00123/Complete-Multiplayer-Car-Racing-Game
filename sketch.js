

var database;


var gameState = 0;
var playerCount;

var allPlayers;

var car1, car2, car3, car4, cars;
var c1, c2, c3, c4, track, ground;

var finishedPlayers = 0;
var passFinished;

var distance = 0;
var form;
var game;
var player;

function preload() {
    c1 = loadImage('Images/car1.png');
    c2 = loadImage('Images/car2.png');
    c3 = loadImage('Images/car3.png');
    c4 = loadImage('Images/car4.png');
    track = loadImage('Images/track.jpg');
    ground = loadImage('Images/ground.png');
}


function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();

    //console.log(allPlayers);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("lightblue");
    
    if (playerCount === 4 && finishedPlayers === 0) {
        game.updateState(1);
    }

    if (gameState === 1) {
        game.play();
    }

    if (finishedPlayers === 4) {
        game.updateState(2);
    }

    if (gameState === 2 && finishedPlayers === 4) {
        game.displayRank();
    }

   // drawSprites();
}

