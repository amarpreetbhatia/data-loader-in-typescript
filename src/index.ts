import { CsvFileReader } from "./csvFileReader";
import { MatchReader } from "./matchReader";
import { MatchResult } from "./matchResult";

const csvFileReader = new CsvFileReader('./data/football.csv');
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

let manUnitedWins = 0;


for(let match of matchReader.matches) {
    // 'A' means away team, and 'H' means Home Team
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[6] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}
console.log(`Man United wons ${manUnitedWins} games`);