window.addEventListener('load', function() {
    EventSystem.addListener('vote.player', function(param) {
        var playerName = Business.players[param.player].name;
        console.info(`Player ${playerName} vote: ${param.figure}`);
    });

    UI.init();
});
