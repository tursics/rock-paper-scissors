window.addEventListener('load', function() {
    var game = new GameLogicRockPaperScissors();
    var playerRandom1 = new PlayerRandom('computer.random 1');
    var playerRandom2 = new PlayerRandom('computer.random 2');

    EventSystem.addListener('vote.player', function(param) {
        var playerName = Business.players[param.player].name;
        console.info(`Player ${playerName} vote: ${param.figure}`);
    });
    EventSystem.addListener('vote.finish', function() {
        console.info('All hands raised \\o/');

        for(var i = 0; i< Business.result.length; ++i) {
            var playerName = Business.result[i].playerName;
            var playerFigure = Business.result[i].playerFigure;
            var score = Business.result[i].score;
            if (score === GameLogic.won) {
                console.log(`Player ${playerName} won with ${playerFigure}`);
            } else if (score === GameLogic.lost) {
                console.log(`Player ${playerName} lost with ${playerFigure}`);
            } else {
                console.log(`Player ${playerName} drawn with ${playerFigure}`);
            }
        }
    });

    UI.init();

    Business.reset(game);
    Business.setPlayers(playerRandom1, playerRandom2);
    Business.openVotes();

    EventSystem.callListeners('ui.show.vote.human');

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
