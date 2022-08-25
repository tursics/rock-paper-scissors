class GameLogicRockPaperScissorsLizardSpock extends GameLogic {
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
        this.figures.push({
            name: 'lizard',
            className: 'lizard',
        });
        this.figures.push({
            name: 'spock',
            className: 'spock',
        });
    }

    validateWinFunc(myName, enemyName) {
        return 0
            || ((myName === 'scissors') && (enemyName === 'paper'))
            || ((myName === 'paper') && (enemyName === 'rock'))
            || ((myName === 'rock') && (enemyName === 'lizard'))
            || ((myName === 'lizard') && (enemyName === 'spock'))
            || ((myName === 'spock') && (enemyName === 'scissors'))
            || ((myName === 'scissors') && (enemyName === 'lizard'))
            || ((myName === 'lizard') && (enemyName === 'paper'))
            || ((myName === 'paper') && (enemyName === 'spock'))
            || ((myName === 'spock') && (enemyName === 'rock'))
            || ((myName === 'rock') && (enemyName === 'scissors'))
            ;
    }
}