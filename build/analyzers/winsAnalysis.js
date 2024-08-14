"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const matchResult_1 = require("../matchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            // 'A' means away team, and 'H' means Home Team
            if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' && match[6] === matchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} game`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
