class GameLogicRockPaperScissors extends GameLogic {
    constructor() {
        super();

        this.figures.push({
            name: 'rock',
            className: 'rock',
        });
        this.figures.push({
            name: 'paper',
            className: 'paper',
        });
        this.figures.push({
            name: 'scissors',
            className: 'scissors',
        });
    }

    validateWinFunc(myName, enemyName) {
        return ((myName === 'rock') && (enemyName === 'scissors'))
            || ((myName === 'paper') && (enemyName === 'rock'))
            || ((myName === 'scissors') && (enemyName === 'paper'));
    }
}