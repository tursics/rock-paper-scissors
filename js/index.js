window.addEventListener('load', function() {
    var game = new GameLogicRockPaperScissors();
    var playerRandom1 = new PlayerRandom('computer.random 1');
    var playerRandom2 = new PlayerRandom('computer.random 2');
    var playerHuman = new PlayerHuman();

    EventSystem.addListener('vote.player', function(param) {
        var playerName = Business.players[param.player].name;
        console.info(`Player ${playerName} vote: ${param.figure}`);
    });

    UI.init();

    Business.reset(game);
    Business.setPlayers(playerHuman,playerRandom1, playerRandom2);
    Business.openVotes();

    // EventSystem.callListeners('ui.show.vote.human');

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
