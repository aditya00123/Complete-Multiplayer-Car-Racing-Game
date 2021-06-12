class Game {
//Get the game state value from the database 
getState() {
    database.ref('gameState').on('value',(trans)=>{
        gameState = trans.val();
    });
}

//update the game state value to the database
updateState(state) {
database.ref('/').update({
    gameState:state,
})
}

async start() {
if (gameState === 0) {
    player = new Player();
    var playerCountref = await database.ref('playerCount').once("value");
    if (playerCountref.exists()) {
        playerCount = playerCountref.val();
        player.getCount();
    }

    form = new Form();
    form.display();
}

car1 = createSprite(100,200);
car1.addImage(c1);
car2 = createSprite(300,200);
car2.addImage(c2);
car3 = createSprite(500,200);
car3.addImage(c3);
car4 = createSprite(700,200);
car4.addImage(c4);
// what is relative path
cars = [car1,car2,car3,car4];

passFinished = false;

}
play() {
   form.hide();
   Player.getPlayerInfo();
   player.getFinishedPlayers();

   if (allPlayers != 'undefined') {
       background(ground);
       image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
    var index = 0;
    var x = 200;
    var y;

    for (var plr in allPlayers) {
        index = index+1;
        x = x+220;
        y = displayHeight-allPlayers[plr].distance;

        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index) {
            fill('red');
            ellipse(x,y,60,60)
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
        }
        
    }

   }
   
   if (keyIsDown(UP_ARROW)) {
    player.distance = player.distance +  10;
    player.update();
    console.log(camera.position.x, camera.position.y);
   }

   if (player.distance > 4100 && passFinished === false) {
      Player.updateFinishedPlayers();
      player.rank = finishedPlayers;
      player.update();
      passFinished = true; 
   }

   drawSprites();
}

displayRank() {
    camera.position.x = 0;
    camera.position.y = 0;
    textSize(35);
    fill('black');
    for (var plr in allPlayers) {
        if (allPlayers[plr].rank === 1) {
            text("First Rank: "+allPlayers[plr].name,0,85);
        }
        else if (allPlayers[plr].rank === 2) {
            text('Second Rank: '+allPlayers[plr].name,0,165);
        }
        else if (allPlayers[plr].rank === 3) {
            text('Third Rank: '+allPlayers[plr].name,0,245);
        }
        else {
            text('Good Try: '+allPlayers[plr].name,0,325)
        }
    }
}
}