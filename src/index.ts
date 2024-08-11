import fs from 'fs';

const matches = fs.readFileSync('./data/football.csv',{
'encoding':'utf-8'
}).split('\n')
.map((row:string):string[] => {
    return row.split(',');
});

console.log(matches);

let manUnitedWins = 0;

for(let match of matches) {
    // 'A' means away team, and 'H' means Home Team
    if(match[1] === 'Man United' && match[5] === 'H'){
        manUnitedWins++;
    }else if(match[2] === 'Man United' && match[6] === 'A'){
        manUnitedWins++;
    }
}
console.log(`Man United wons ${manUnitedWins} games`);