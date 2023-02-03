 
const PI = 3.141592653589793 ;

function getSum(a,b){ 
    return a+b;
}

function getSub(a,b){ 
    return a-b;
}

function getMulti(a, b) {
    return a * b;
}
function getDiv(a, b) {
    return a / b;
};

// these are a bunch of functions that we will feed into consumerFunc.js
module.exports = {PI, getSum, getSub,  getMulti, getDiv};

//OR

/*
exports.PI = PI ; 
exports.getSum = getSum;
exports.getSub = getSub;
exports.getMulti = getMulti; 
exports.getDiv = getDiv; 
*/