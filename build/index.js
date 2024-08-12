"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvFileReader_1 = require("./csvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new csvFileReader_1.CsvFileReader('./data/football.csv');
reader.read();
console.log(reader.data);
let manUnitedWins = 0;
for (let match of reader.data) {
    // 'A' means away team, and 'H' means Home Team
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[6] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United wons ${manUnitedWins} games`);
