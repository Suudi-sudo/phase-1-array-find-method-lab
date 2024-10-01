// code your solution here
function superbowlWin(record){
    const winRecord = record.find(game => game.result === "W");
    return winRecord ? winRecord.year : undefined;
}
const record = [
    {year: '2015', team: 'Denver Broncos', result: 'W'}, 
    {year: '2014', team: 'Seattle Seahawks', result: 'L'}
    
    
];
console.log(superbowlWin(record));



