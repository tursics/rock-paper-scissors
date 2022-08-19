window.addEventListener('load', function() {
    var game = new GameLogicRockPaperScissors();
    var foo = {name:'foo'};
    var bar = {name:'bar'};
    var baz = {name:'baz'};

    Business.reset(game);
    Business.setPlayers(foo, bar, baz);

    Business.raiseHand(baz, 'rock');
    Business.raiseHand(bar, 'rock');
    Business.raiseHand(bar, 'paper');
    Business.raiseHand(bar, 'scissors');
    Business.raiseHand(foo, 'rock');
});
