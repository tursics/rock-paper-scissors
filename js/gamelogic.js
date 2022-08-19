class GameLogic {    
    constructor() {
        this.figures = [];
    }

    static get won() {
        return 1;
    }
    static get lost() {
        return -1;
    }
    static get drawn() {
        return 0;
    }

    get numberOfFigures() {
        return this.figures.length;
    }

    getName(figureId) {
        if (figureId < this.figures.length) {
            return this.figures[figureId].name;
        }

        return '';
    }

    getClassName(figureId) {
        if (figureId < this.figures.length) {
            return this.figures[figureId].className;
        }

        return '';
    }

    validateWinFunc(myName, enemyName) {
        return false;
    }

    validate(...figureNames) {
        var maxWon = 0;
        var wins = figureNames.map(myName => {
            var count = 0;

            figureNames.forEach(enemyName => {
                if (this.validateWinFunc(myName, enemyName)) {
                    ++count;
                }
            });

            maxWon = Math.max(maxWon, count);
            return count;
        });

        var tie = wins.filter(won => won === maxWon);
        if (tie.length === 1) {
            return wins.map(countWon => countWon === maxWon ? GameLogic.won : GameLogic.lost);
        }
        return wins.map(countWon => countWon === maxWon ? GameLogic.drawn : GameLogic.lost);
    }
}