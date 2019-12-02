// MAP-LIKE
// Returns an array with the original values turned negaive.
function mapToNegativize(arr) {
    const negativized = [];
    for (const ea of arr) { negativized.push(ea * -1) }
    return negativized;
}

// Returns an array with the original values.
function mapToNoChange(arr) {
    return arr;
}

// Returns an array with the original values multiplied by 2.
function mapToDouble(arr) {
    const doubled = [];
    for (const ea of arr) { doubled.push(ea * 2) }
    return doubled;
}

// Returns an array with the original values squared.
function mapToSquare(arr) {
    const squared = [];
    for (const ea of arr) { squared.push(ea ** 2) }
    return squared;
}



// REDUCE-LIKE
// Returns the total of all values in the array, from the starting point.
function reduceToTotal(arr, startingValue = 0) {
    let total = startingValue;
    for (const ea of arr) {
        total = total += ea;
    }
    return total;
}

// Returns true when all values are truthy; false if any values is falsy.
function reduceToAllTrue(arr) {
    let allTrue = true;
    for (const ea of arr) { if (!!ea == false ) { allTrue = false } }
    return allTrue;
}

// Returns true when any value is truthy; false if all values are falsy.
function reduceToAnyTrue(arr) {
    let anyTrue = false;
    for (const ea of arr) { if ( !!ea == true ) { anyTrue = true } }
    return anyTrue;
}