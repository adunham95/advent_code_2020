const data = require('../data.js');

console.log("Day 1")
console.log("Part 2")
// console.log(data.data)

let twoValues = [];
let threeValue = [];

data.data.forEach(n1 => {
    // console.log(n)
    data.data.forEach(n2 => {
        let sum = parseInt(n1) + parseInt(n2);
        if(sum < 2020){
            console.log(sum);
            twoValues.push({n1:parseInt(n1),n2:parseInt(n2),sum})
        }
    })
})

twoValues.forEach(v => {
    data.data.forEach(n3 => {
        if(v.n1 === n3 || v.n2 === n3){return}
        else{
            let threeSum = v.sum + parseInt(n3); 
            // console.log("Three sum", {...v, n3:parseInt(n3), totalSum: threeSum})
            if(threeSum === 2020){
                threeValue.push({
                    n1: v.n1,
                    n2: v.n2,
                    n3:parseInt(n3), 
                    twoSum: v.sum,
                    threeSum: threeSum, 
                    totalMultiply: [v.n1, v.n2, parseInt(n3)].reduce((a,c) => a*c)})
            }
        }
    })
})

console.log(twoValues)
console.log(threeValue)