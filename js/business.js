var Business = {
    currentRound: [],
    gameLogic: null,
    players: [],
    result: [],

    reset: function(gameLogic) {
        if (gameLogic) {
            Business.gameLogic = gameLogic;
        } else {
            console.error('Removed game logic');
            Business.gameLogic = null;
        }

        Business.currentRound = [];
        Business.players = [];
        Business.result = [];
	},

    getHumanPlayer: function() {
        var players = Business.players.filter(player => player.isHuman);
        if (players.length > 0) {
            return players[0];
        }
        return null;
    },

    setPlayers: function(...players) {
        var filtered = players.filter(player => typeof player === 'object');

        if (filtered.length < 2) {
            console.error('Removed all players');
            Business.players = [];
        } else if (filtered.length > 2) {
            console.warn('Limit number of players to 2');
            Business.players = filtered.splice(0, 2);
        } else {
            Business.players = filtered;
        }
    },

    openVotes: function() {
        Business.players.forEach(player => {
            player.vote();
        });
    },

    raiseHand: function(player, figure) {
        if (!Business.players.includes(player)) {
            console.error('Unknown player');
            return;
        }

        if (!Business.gameLogic) {
            console.error('No game defined');
        }

        Business.currentRound[Business.players.indexOf(player)] = figure;
        EventSystem.callListeners('vote.player', {
            player: Business.players.indexOf(player),
            figure: figure,
        });

        if (Business.currentRound.filter(player => player).length >= Business.players.length) {
            var result = Business.gameLogic.validate(...Business.currentRound);
            Business.result = [];

            for(var i = 0; i< result.length; ++i) {
                Business.result.push({
                    playerId: i,
                    playerName: Business.players[i].name,
                    playerClass: Business.players[i].className,
                    playerFigure: Business.currentRound[i],
                    score: result[i],
                });
            }

            Business.currentRound = [];

            EventSystem.callListeners('vote.finish');
        }
    },
};