class PageRoundResult extends Page {    
    constructor() {
        super('round-result');

        this.dynmaic = this.div.querySelector('.dynamic');
        this.next = this.div.querySelector('.next');
        this.exit = this.div.querySelector('.exit');

        this.next.addEventListener('click', this.onNext);
        this.exit.addEventListener('click', this.onExit);

        EventSystem.addListener('vote.finish', this.onShow);
    }

    getHTML() {
        var html = '';

        for(var i = 0; i< Business.result.length; ++i) {
            var playerName = Business.result[i].playerName;
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
            html += `<div class="player">${playerName} <div class="figure">${playerFigure} <div class="result">${result}</div></div></div`;
        }

        return html;
    }

    onShow() {
        UI.pageRoundResult.dynmaic.innerHTML = UI.pageRoundResult.getHTML();
        UI.pageRoundResult.show();
    }

    onNext() {
        UI.pageRoundResult.hide();

        Business.openVotes();
    }

    onExit() {
        UI.pageRoundResult.hide();

        EventSystem.callListeners('ui.show.menu.main');
    }
}