function mapToNegativize(sourceArray){
    // return sourceArray.map(el => el * -1)
    let arr = []
    sourceArray.forEach(el => arr.push(el * -1))
    return arr
}

function mapToNoChange(sourceArray) {
    // return sourceArray
    let arr = []
    sourceArray.forEach(el => arr.push(el))
    return arr
}

function mapToDouble(sourceArray) {
    // return sourceArray.map(el => el * 2)
    let arr = []
    sourceArray.forEach(el => arr.push(el * 2))
    return arr
}

function mapToSquare(sourceArray) {
    // return sourceArray.map(el => el ** 2)
    let arr = []
    sourceArray.forEach(el => arr.push(el ** 2))
    return arr
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    // return sourceArray.reduce(function(total, el) {return el + total}, startingPoint)
    let total = startingPoint 
    sourceArray.forEach(el => total += el)
    return total
}

function reduceToAllTrue(sourceArray) {
    // return sourceArray.every(el => !!el)
    let value = true
    sourceArray.forEach(el => {
        // If each el is true, do nothing, else change value to false
        !!el ? undefined : value = false
    })
    return value
}

function reduceToAnyTrue(sourceArray) {
    // return sourceArray.some(el => !!el)
    let value = false 
    sourceArray.forEach (el => {
        // If any el is true, change value to true, else do nothing
        !!el ? value = true : undefined
    })
    return value
}