class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2");
        title.html("Hurdules Game");
        title.position(130,0);

        var input=createInput(" Player Name");
        var button=createButton("PLAY");

        var greet=createElement("h5");
        input.position(130,160);

        button.position(200,200);

        button.mousePressed(function(){
                input.hide();
                button.hide();

                var name=input.value();

                playerCount++;
                player.update(name);
                player.updateCount(playerCount);

                greet.html("Welcome to the ground " +name);
                greet.position(130,160);
                }
        )
    }
}