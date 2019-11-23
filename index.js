function mapToNegativize(sourceArray) {
    let newArr = []
    for (let i=0; i<=sourceArray.length-1; i++) {
        sourceArray[i] = sourceArray[i]*(-1) 
        newArr.push(sourceArray[i])
    }
    return newArr
}

function mapToNoChange(arr) {
    let newArr = []
    for (let i=0; i<=arr.length-1; i++) { 
        newArr.push(arr[i])
    }
    return newArr
}

function mapToDouble(arr) {
    let newArr = []
    for (let i=0; i<=arr.length-1; i++) { 
        arr[i] = arr[i]*2
        newArr.push(arr[i])
    }
    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    for (let i=0; i<=arr.length-1; i++) { 
        arr[i] = arr[i]**2
        newArr.push(arr[i])
    }
    return newArr
}

function reduceToTotal(arr, start = 0) {
    let total = start 
    arr.forEach(el => total += el)
    return total

}

function reduceToAllTrue(arr) {
    let isTrue = true 
    arr.forEach(el => !!el ? true : isTrue = false )
    return isTrue
}

function reduceToAnyTrue(arr) {
    let isTrue = false 
    arr.forEach(el => !!el ? isTrue = true : false )
    return isTrue
}
