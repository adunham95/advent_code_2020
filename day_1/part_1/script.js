const data = require('../data.js');

console.log("Day 1")
console.log("Part 1")
// console.log(data.data)
let object = {}
let keysCompleted = [];
let equalsYear = []

data.data.forEach(n => {
    // console.log(n)
    const diff = 2020-n;
    let sum = data.data.filter(r => r == diff)
    object[n] = sum;
})

for (const [key, value] of Object.entries(object)) {
    // console.log(value.length)
    if(object[key].length > 0){
        // console.log("Running code")
        // console.log(typeof value)
        // console.log(value.length)
        equalsYear.push([key,value[0]]);
    }
}

equalsYear.forEach(y => {
    console.log(y.reduce((a,c) => a*c))
})

// console.log(object)
// console.log(equalsYear);