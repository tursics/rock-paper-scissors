class PageRoundResult extends Page {    
    constructor() {
        super('round-result');

        this.score = this.div.querySelector('.score');
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
            var playerClass = Business.result[i].playerClass;
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
        }

        return html;
    }

    onShow() {
        UI.pageRoundResult.score.innerHTML = UI.pageRoundResult.getHTML();
        UI.pageRoundResult.show();
    }

    onNext() {
        var classList = UI.pageRoundResult.next.classList;
        classList.add('do');

        window.setTimeout(function() {
            UI.pageRoundResult.hide();
            classList.remove('do');

            Business.openVotes();
        }, 400);
    }

    onExit() {
        var classList = UI.pageRoundResult.exit.classList;
        classList.add('do');

        window.setTimeout(function() {
            UI.pageRoundResult.hide();
            classList.remove('do');

            EventSystem.callListeners('ui.show.menu.main');
        }, 400);
    }
}