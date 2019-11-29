// returns an array with all values made negative
function mapToNegativize(sourceArray) {
    let newArray = []
    for (var a of sourceArray) {
        newArray.push((-1) * a)
    }
    return newArray
}

// returns an array with the original values
function mapToNoChange(sourceArray) {
    return Array.from(sourceArray)
}

// returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
    let newArray = []
    for (var a of sourceArray) {
        newArray.push((2) * a)
    }
    return newArray
}

// returns an array with the original values squared
function mapToSquare(sourceArray) {
    let newArray = []
    for (var a of sourceArray) {
        newArray.push(a * a)
    }
    return newArray
}

// returns a running total 
// when not given a starting point reduces correctly
function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce(function sum(previousValue, currentValue) { 
        return previousValue + currentValue; 
        }, startingPoint )
}

// returns true when all values are truthy
// returns false when any value is falsy
function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function truthy(previousValue, currentValue) {
        return currentValue ? true : false
    })
}

// returns true when a true value is present
// returns false when no true value is present
function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce(function truthy(previousValue, currentValue) {
        return currentValue ? true : false
    })
}