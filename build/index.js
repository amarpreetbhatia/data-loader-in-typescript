"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('./data/football.csv', {
    'encoding': 'utf-8'
}).split('\n')
    .map((row) => {
    return row.split(',');
});
console.log(matches);
let manUnitedWins = 0;
for (let match of matches) {
    // 'A' means away team, and 'H' means Home Team
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[6] === 'A') {
        manUnitedWins++;
    }
}
console.log(`Man United wons ${manUnitedWins} games`);
