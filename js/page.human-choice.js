class PageHumanChoice extends Page {    
    constructor() {
        super('human-choice');

        this.rock = this.div.querySelector('.figure.rock');
        this.paper = this.div.querySelector('.figure.paper');
        this.scissors = this.div.querySelector('.figure.scissors');
        this.cancel = this.div.querySelector('.cancel');

        this.rock.addEventListener('click', this.onVote);
        this.paper.addEventListener('click', this.onVote);
        this.scissors.addEventListener('click', this.onVote);
        this.cancel.addEventListener('click', this.onCancel);

        EventSystem.addListener('ui.show.vote.human', this.onShow);
    }

    onCancel() {
        UI.pageHumanChoice.hide();

        console.error('user canceled');
    }

    onShow() {
        UI.pageHumanChoice.show();
    }

    onVote(event) {
        UI.pageHumanChoice.hide();

        var classList = event.target.classList;
        var figures = Business.gameLogic.figures.filter(element => classList.contains(element.className));

        if (figures.length !== 1) {
            console.error('Figures misconfigured');
            return;
        }

        var player = Business.getLocalHumanPlayer();
        Business.raiseHand(player, figures[0].name);
    }
}