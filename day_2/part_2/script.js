const data = require('../data.js');

console.log("Day 2")
console.log("Part 1")

let passwordApprove = [];

data.data.forEach(p => {
    // console.log(p)
    let n1 = p.password[p.min - 1],
        n2  = p.password[p.max -1],
        isValid = false;
    // console.log(occ)
    if(n1 === p.letter && n2 === p.letter){
        return
    }
    if (n1 === p.letter || n2 === p.letter) {
        isValid = true;
        passwordApprove.push({...p, isValid, n1, n2})
    }
    else{
        // passwordApprove.push({...p, isValid, n1, n2})
    }

})

// console.log(passwordApprove)
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