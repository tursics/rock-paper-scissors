window.addEventListener('load', function() {
    var game = new GameLogicRockPaperScissors();
    var foo = {name:'foo'};
    var bar = {name:'bar'};
    var baz = {name:'baz'};
    var playerRandom = new PlayerRandom('computer.random');

    Business.reset(game);
    Business.setPlayers(playerRandom, foo, bar, baz);

    playerRandom.vote();
    Business.raiseHand(baz, 'rock');
    Business.raiseHand(bar, 'rock');
    Business.raiseHand(bar, 'paper');
    Business.raiseHand(bar, 'scissors');
    Business.raiseHand(foo, 'rock');
});
