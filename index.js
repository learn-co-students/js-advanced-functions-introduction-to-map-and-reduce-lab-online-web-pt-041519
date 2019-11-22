function mapToNegativize(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] - (sourceArray[i] * 2))
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)
    }
    return newArray
}

function reduceToTotal(array, startingPoint = 0) {
    for(let i = 0; i < array.length; i++) {
        startingPoint = startingPoint + array[i]
    }
    return startingPoint
}

function reduceToAllTrue(array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i]) {
        } else {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i]) {
            return true
        } else {
        }
    }
    return false
}
