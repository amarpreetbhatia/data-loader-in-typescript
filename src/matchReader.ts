
import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';
import { MatchData } from './matchData';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader{
    matches: MatchData[] = [];
    constructor(public reader: DataReader){}

    load():void{
        this.reader.read();
        this.matches = this.reader.data.map(this.mapRow);
    }

    mapRow(row:string[]): MatchData{
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // Type Assertion
            row[6]
        ]
    }
}