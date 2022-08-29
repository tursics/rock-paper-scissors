class PageScore extends Page {    
    constructor() {
        super('score');

        EventSystem.addListener('vote.open', this.onShow);
        EventSystem.addListener('vote.close', this.onHide);
        EventSystem.addListener('vote.player', this.onVotePlayer);
        EventSystem.addListener('vote.finish', this.onVoteFinish);
    }

    getHTML() {
        var html = '';

        for(var i = 0; i< Business.players.length; ++i) {
            var playerName = Business.players[i].title;
            var playerClass = Business.players[i].className;

            if (Business.result[i]) {
                var playerFigure = Business.result[i].playerFigure;
                var score = Business.result[i].score;
                var result = '';

                if (score === GameLogic.won) {
                    result = 'win';
                } else if (score === GameLogic.lost) {
                    result = 'loose';
                } else {
                    result = 'draw';
                }
                html += `<div class="player ${playerClass} ${result}"><div class="figure ${playerFigure}"></div></div>`;
            } else {
                html += `<div class="player ${playerClass}"></div>`;
            }
        }

        return html;
    }

    onShow() {
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
        UI.pageScore.div.innerHTML = UI.pageScore.getHTML();
    }
}