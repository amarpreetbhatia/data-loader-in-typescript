import { MatchData } from "../matchData";
import { MatchResult } from "../matchResult";
import { Analyzer } from "../summary";

export class WinsAnalysis implements Analyzer{
    constructor(public team:string){}

    run(matches: MatchData[]): string {
     let wins = 0;
     for(let match of matches) {
    // 'A' means away team, and 'H' means Home Team
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        wins++;
    }else if(match[2] === 'Man United' && match[6] === MatchResult.AwayWin){
        wins++;
    }
}
    return `Team ${this.team} won ${wins} game`;
    }
}