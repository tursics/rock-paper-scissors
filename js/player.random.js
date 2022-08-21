class PlayerRandom extends Player {
    constructor(id) {
        super();

        this.className = 'robot';
        this.name = id;
        this.title = 'Stupid AI';
    }

    vote() {
        var figureId = Math.floor(Math.random() * Business.gameLogic.numberOfFigures);
        var figureName = Business.gameLogic.getName(figureId);

        Business.raiseHand(this, figureName);
    }
}