class PageHumanChoice extends Page {    
    constructor() {
        super('human-choice');

        this.bottom = this.div.querySelector('.bottom');

        EventSystem.addListener('ui.show.vote.human', this.onShow);
    }

    onShow() {
        var i18n = {rock: 'Stein', 'paper':'Papier', 'scissors': 'Schere', 'lizard': 'Echse', 'spock': 'Spock'};
        var html = '';

        Business.gameLogic.figures.forEach(figure => {
			html += `<button class="figure ${figure.className}"><span>${i18n[figure.name]}</span></button>`;
        });

        UI.pageHumanChoice.bottom.innerHTML = html;

        Business.gameLogic.figures.forEach(figure => {
            var elem = UI.pageHumanChoice.div.querySelector(`.figure.${figure.className}`);
            elem.addEventListener('click', UI.pageHumanChoice.onVote);
        });

        UI.pageHumanChoice.show();
    }

    onVote(event) {
        UI.pageHumanChoice.hide();

        var classList = event.target.classList;
        var figures = Business.gameLogic.figures.filter(element => classList.contains(element.className));

        if (figures.length !== 1) {
            console.error('Figures misconfigured', figures);
            return;
        }

        var player = Business.getHumanPlayer();
        Business.raiseHand(player, figures[0].name);
    }
}