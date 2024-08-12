"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvFileReader_1 = require("./csvFileReader");
const matchReader_1 = require("./matchReader");
const matchResult_1 = require("./matchResult");
const csvFileReader = new csvFileReader_1.CsvFileReader('./data/football.csv');
const matchReader = new matchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    // 'A' means away team, and 'H' means Home Team
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[6] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United wons ${manUnitedWins} games`);
