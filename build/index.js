"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvFileReader_1 = require("./csvFileReader");
const reader = new csvFileReader_1.CsvFileReader('./data/football.csv');
reader.read();
console.log(reader.data);
let manUnitedWins = 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of reader.data) {
    // 'A' means away team, and 'H' means Home Team
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[6] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United wons ${manUnitedWins} games`);
