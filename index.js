// Your code here
function mapToNegativize(array) {
    return array.map(num => num * -1)
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    return array.map(num => num * 2)
}

function mapToSquare(array) {
    return array.map(num => num * num)
}


function reduceToTotal(array, memo = 0) {
    array.forEach(function(num) {
        memo += num;
    })
    return memo
}


function reduceToAllTrue(array) {
    return array.every(function(el) {
        return el
    })
}

function reduceToAnyTrue(array) {
    return array.some(function(el) {
        return el
    })
}
