const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
]
 
function superbowlWin(record){
    const yearWin = record.find(record => record.result === "W");
    if (yearWin) {
        return yearWin.year;
    } else {
        return undefined;
    }
}