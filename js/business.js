var Business = {
    currentRound: [],
    gameLogic: null,
    players: [],

    reset: function(gameLogic) {
        if (gameLogic) {
            Business.gameLogic = gameLogic;
        } else {
            console.error('Removed game logic');
            Business.gameLogic = null;
        }

        Business.currentRound = [];
        Business.players = [];
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

    raiseHand: function(player, figure) {
        if (!Business.players.includes(player)) {
            console.error('Unknown player');
            return;
        }

        if (!Business.gameLogic) {
            console.error('No game defined');
        }

        Business.currentRound[Business.players.indexOf(player)] = figure;

        if (Business.currentRound.filter(player => player).length >= Business.players.length) {
            console.info('All hands raised \\o/');
        }
    },
};