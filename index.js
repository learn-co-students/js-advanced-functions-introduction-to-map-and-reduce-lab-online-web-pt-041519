// Your code here
function mapToNegativize(array) {
     let a = array.map(x => x = -x)
    return a
}

function mapToNoChange(array) {
    let a = array.map(x => x = x)
    return a 
}

function mapToDouble(array) {
    let a = array.map(x => x * 2)
    return a   
}
function mapToSquare(array) {
    let a = array.map(x => x * x)
    return a
}

function reduceToTotal(array) { 
    let a = 0
    for (let i = 0; i < array.length; i++){
    a = a + array[i]
    }
    return a
}
 
function reduceToTotal(array, starting = 0) { 
    let a = starting
    for (let i = 0; i < array.length; i++){
    a = a + array[i]
    }
    return a
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++){
        if ( !array[i]) return false
    } 
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++){
        if ( !!array[i]) return true
    } 
    return false
}