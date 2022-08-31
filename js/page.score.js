class PageScore extends Page {    
    constructor() {
        super('score');

        this.scoreboard = [];

        EventSystem.addListener('vote.openGame', this.onShow);
        EventSystem.addListener('vote.closeGame', this.onHide);
        EventSystem.addListener('vote.player', this.onVotePlayer);
        EventSystem.addListener('vote.finish', this.onVoteFinish);
        EventSystem.addListener('vote.finish.winner', this.onVoteFinish);
    }

    getHTML() {
        var html = '';

        for(var i = 0; i< Business.players.length; ++i) {
            var playerName = Business.players[i].title;
            var playerClass = Business.players[i].className;
            var result = '';
            var figureHTML = '';

            for (var s = 0; s < UI.pageScore.scoreboard.length; ++s) {
                var item = UI.pageScore.scoreboard[s];

                var playerFigure = item[i].playerFigure;
                var score = item[i].score;

                if (score === GameLogic.won) {
                    result = 'win';
                } else if (score === GameLogic.lost) {
                    result = 'loose';
                } else {
                    result = 'draw';
                }
                figureHTML += `<div class="figure ${playerFigure} ${result}"></div>`;
            }
            html += `<div class="player ${playerClass} ${result}">${figureHTML}</div>`;
        }

        return html;
    }

    onShow() {
        UI.pageScore.scoreboard = [];
        UI.pageScore.div.innerHTML = UI.pageScore.getHTML();
        UI.pageScore.show();
    }

    onHide() {
        UI.pageScore.hide();
    }

    onVotePlayer() {
        UI.pageScore.div.innerHTML = UI.pageScore.getHTML();
    }

    onVoteFinish() {
        UI.pageScore.scoreboard.push(Business.result);
        UI.pageScore.div.innerHTML = UI.pageScore.getHTML();
    }
}