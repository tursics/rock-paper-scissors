class PageMainMenu extends Page {    
    constructor() {
        super('main-menu');

        this.humanRandom = this.div.querySelector('.human-random');
        this.randomRandom = this.div.querySelector('.random-random');

        this.humanRandom.addEventListener('click', this.onHumanVsRandom);
        this.randomRandom.addEventListener('click', this.onRandomVsRandom);

        EventSystem.addListener('ui.show.menu.main', this.onShow);
    }

    onShow() {
        UI.pageMainMenu.show();
    }

    onHumanVsRandom(event) {
        UI.pageMainMenu.hide();

        var game = new GameLogicRockPaperScissors();
        Business.reset(game);

        var playerHuman = new PlayerHuman();
        var playerRandom = new PlayerRandom('computer.random');
        Business.setPlayers(playerHuman,playerRandom);

        Business.openVotes();
    }

    onRandomVsRandom(event) {
        UI.pageMainMenu.hide();

        var game = new GameLogicRockPaperScissors();
        Business.reset(game);

        var playerRandom1 = new PlayerRandom('computer.random 1');
        var playerRandom2 = new PlayerRandom('computer.random 2');
        Business.setPlayers(playerRandom1, playerRandom2);

        Business.openVotes();
    }
}