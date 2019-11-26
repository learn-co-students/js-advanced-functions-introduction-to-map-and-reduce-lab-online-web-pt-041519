// Your code here
function mapToNegativize(arr){
    let x = []
    for(let i = 0; i < arr.length; i++){
    x.push(-1 * arr[i])
    }
    return x
}

function mapToNoChange(arr){
    let x = []
    for(let i = 0; i < arr.length; i++){
    x.push(arr[i])
    }
    return x
}

function mapToDouble(arr){
    let x = []
    for(let i = 0; i < arr.length; i++){
    x.push(2 * arr[i])
    }
    return x
}

function mapToSquare(arr){
    let x = []
    for(let i = 0; i < arr.length; i++){
    x.push(arr[i] * arr[i])
    }
    return x
}

function reduceToTotal(arr, startingPoint=0){
    let total = startingPoint
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i]
    }
    return total
}

function reduceToAllTrue(arr){
    for(let i = 0; i < arr.length; i++){
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i]) return true
    }
    return false
}
