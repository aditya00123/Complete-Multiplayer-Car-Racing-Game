class Form {
    constructor() {
        this.title = createElement('h1');
        this.input = createInput('name');
        this.button = createButton('PLAY');
        this.greeting = createElement('h2');
        this.reset = createButton('RESET');
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
 

    display() {
        this.title.html('Car Racing Game');
        this.title.position(displayWidth/2-100,50);
        this.input.position(displayWidth/2-50,displayHeight/2);
        this.button.position(displayWidth/2,(displayHeight/2)+50);
        this.reset.position(displayWidth-200, 100);
        this.button.mousePressed( () => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;

            player.updateCount(playerCount);
            player.update();

            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2-50,displayHeight/2);

        })

        this.reset.mousePressed( () => {

            game.updateState(0);
            player.updateCount(0);

            database.ref('/').update({
              players:null,
              rank:0,
                
            })
    
    })

}
}