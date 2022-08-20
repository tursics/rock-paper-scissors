window.addEventListener('load', function() {
    var game = new GameLogicRockPaperScissors();
    var playerRandom1 = new PlayerRandom('computer.random 1');
    var playerRandom2 = new PlayerRandom('computer.random 2');

    Business.reset(game);
    Business.setPlayers(playerRandom1, playerRandom2);
    Business.openVotes();

    // old test code
    /* var foo = {name:'foo'};
    var bar = {name:'bar'};
    var baz = {name:'baz'};
    Business.setPlayers(playerRandom1, playerRandom2, foo, bar, baz);
    Business.raiseHand(baz, 'rock');
    Business.raiseHand(bar, 'rock');
    Business.raiseHand(bar, 'paper');
    Business.raiseHand(bar, 'scissors');
    Business.raiseHand(foo, 'rock'); */
});
