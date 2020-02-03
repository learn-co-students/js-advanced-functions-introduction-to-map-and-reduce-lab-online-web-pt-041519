// Your code here
function mapToNegativize(array) {
    let x = []
    array.forEach(function(element) {
        x.push(element * -1)
    })
    return x
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let x = []
    array.forEach(function(element) {
        x.push(element * 2)
    })
    return x
}

function mapToSquare(array) {
    let x = []
    array.forEach(function(element) {
        x.push(element * element)
    })
    return x
}

function reduceToTotal(array, point = 0) {
    var y = point
    for(let x = 0; x < array.length; x++) {
        y += array[x]
    }
    return y
}

function reduceToAllTrue(array) {
    var bool = true
    for(let x = 0; x < array.length; x++) {
        if(!array || array[x] == false) {
            bool = false
        }
    }
    return bool
}

function reduceToAnyTrue(array) {
    var bool = false
    for(let x = 0; x < array.length; x++) {
        if(array && array[x] == true) {
            bool = true
        }
    }
    return bool
}