class PageMainMenu extends Page {    
    constructor() {
        super('main-menu');

        this.init = true;

        this.play = this.div.querySelector('.play');
        this.player1 = this.div.querySelector('.player-1');
        this.player2 = this.div.querySelector('.player-2');
        this.gameLogic = this.div.querySelector('.game-logic');

        this.play.addEventListener('click', this.onPlay);
        this.player1.addEventListener('click', this.onTogglePlayer1);
        this.player2.addEventListener('click', this.onTogglePlayer2);
        this.gameLogic.addEventListener('click', this.onToggleGameLogic);

        EventSystem.addListener('ui.show.menu.main', this.onShow);
    }

    onShow() {
        if (UI.pageMainMenu.init) {
            UI.pageMainMenu.init = false;
            UI.pageMainMenu.onTogglePlayer1();
            UI.pageMainMenu.onTogglePlayer2();
            UI.pageMainMenu.onToggleGameLogic();
        }

        UI.pageMainMenu.show();
    }

    onTogglePlayer1() {
        var classList = UI.pageMainMenu.player1.classList;

        if (classList.contains('human')) {
            classList.remove('human');
            classList.add('robot');
            UI.pageMainMenu.player1.innerHTML = '<span>Computer</span>';
        } else {
            classList.remove('robot')
            classList.add('human');
            UI.pageMainMenu.player1.innerHTML = '<span>Ich</span>';
        }
    }

    onTogglePlayer2() {
        var classList = UI.pageMainMenu.player2.classList;

        if (!classList.contains('robot')) {
            classList.add('robot');
            UI.pageMainMenu.player2.innerHTML = '<span>Computer</span>';
        }
    }

    onToggleGameLogic() {
        var classList = UI.pageMainMenu.gameLogic.classList;

        if (classList.contains('rock-paper-scissors')) {
            classList.remove('rock-paper-scissors');
            classList.add('rock-paper-scissors-lizard-spock');
            UI.pageMainMenu.gameLogic.innerHTML = '<span>Mit Echse und Spock</span>';
        } else {
            classList.remove('rock-paper-scissors-lizard-spock');
            classList.add('rock-paper-scissors');
            UI.pageMainMenu.gameLogic.innerHTML = '<span>Stein Papier Schere</span>';
        }
    }

    getPlayerFromClassList(classList) {
        if (classList.contains('human')) {
            return new PlayerHuman();
        } else if (classList.contains('robot')) {
            return new PlayerRandom('computer.random');
        }

        return null;
    }

    getGameLogicFromClassList(classList) {
        if (classList.contains('rock-paper-scissors')) {
            return new GameLogicRockPaperScissors();
        } else if (classList.contains('rock-paper-scissors-lizard-spock')) {
            return new GameLogicRockPaperScissorsLizardSpock();
        }

        return null;
    }

    onPlay() {
        UI.pageMainMenu.hide();

        var gameLogic = UI.pageMainMenu.getGameLogicFromClassList(UI.pageMainMenu.gameLogic.classList);
        Business.reset(gameLogic);

        var player1 = UI.pageMainMenu.getPlayerFromClassList(UI.pageMainMenu.player1.classList);
        var player2 = UI.pageMainMenu.getPlayerFromClassList(UI.pageMainMenu.player2.classList);
        Business.setPlayers(player1, player2);

        Business.openVotes();
    }
}