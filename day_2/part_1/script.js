const data = require('../data.js');

console.log("Day 2")
console.log("Part 1")

let passwordApprove = [];

data.data.forEach(p => {
    // console.log(p)
    let occ = occurrences(p.password, p.letter);
    let isValid = false;
    // console.log(occ)
    if (occ >= p.min && occ <= p.max) {
        isValid = true;
        passwordApprove.push({...p, isValid, occ})
    }
    else{
        // passwordApprove.push({...p, isValid, occ})
    }

})

console.log(passwordApprove.length)

function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}