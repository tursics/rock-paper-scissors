class PageRoundResult extends Page {    
    constructor() {
        super('round-result');

        this.next = this.div.querySelector('.next');
        this.exit = this.div.querySelector('.exit');

        this.next.addEventListener('click', this.onNext);
        this.exit.addEventListener('click', this.onExit);

        EventSystem.addListener('vote.finish', this.onShow);
    }

    onShow() {
        UI.pageRoundResult.show();
    }

    onNext() {
        var classList = UI.pageRoundResult.next.classList;
        classList.add('do');

        window.setTimeout(function() {
            UI.pageRoundResult.hide();
            classList.remove('do');

            EventSystem.callListeners('vote.close');

            Business.openVotes();
        }, 400);
    }

    onExit() {
        var classList = UI.pageRoundResult.exit.classList;
        classList.add('do');

        window.setTimeout(function() {
            UI.pageRoundResult.hide();
            classList.remove('do');

            EventSystem.callListeners('vote.close');
            EventSystem.callListeners('ui.show.menu.main');
        }, 400);
    }
}