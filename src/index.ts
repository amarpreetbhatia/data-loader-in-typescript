import { MatchReader } from './matchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('./data/football.csv');
reader.read();
console.log(reader.data);

let manUnitedWins = 0;


for(let match of reader.data) {
    // 'A' means away team, and 'H' means Home Team
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[6] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}
console.log(`Man United wons ${manUnitedWins} games`);