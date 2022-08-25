class PageMainMenu extends Page {    
    constructor() {
        super('main-menu');

        this.init = true;

        this.play = this.div.querySelector('.play');
        this.player1 = this.div.querySelector('.player-1');
        this.player2 = this.div.querySelector('.player-2');

        this.play.addEventListener('click', this.onPlay);
        this.player1.addEventListener('click', this.onTogglePlayer1);
        this.player2.addEventListener('click', this.onTogglePlayer2);

        EventSystem.addListener('ui.show.menu.main', this.onShow);
    }

    onShow() {
        if (UI.pageMainMenu.init) {
            UI.pageMainMenu.init = false;
            UI.pageMainMenu.onTogglePlayer1();
            UI.pageMainMenu.onTogglePlayer2();
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

    getPlayerFromClassList(classList) {
        if (classList.contains('human')) {
            return new PlayerHuman();
        } else if (classList.contains('robot')) {
            return new PlayerRandom('computer.random');
        }

        return null;
    }

    onPlay() {
        UI.pageMainMenu.hide();

        var game = new GameLogicRockPaperScissors();
        Business.reset(game);

        var player1 = UI.pageMainMenu.getPlayerFromClassList(UI.pageMainMenu.player1.classList);
        var player2 = UI.pageMainMenu.getPlayerFromClassList(UI.pageMainMenu.player2.classList);
        Business.setPlayers(player1, player2);

        Business.openVotes();
    }
}