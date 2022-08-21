class PlayerHuman extends Player {
    constructor() {
        super();

        this.isHuman = true;
        this.name = 'human';
        this.title = 'Me';
    }

    vote() {
        EventSystem.callListeners('ui.show.vote.human');
    }
}