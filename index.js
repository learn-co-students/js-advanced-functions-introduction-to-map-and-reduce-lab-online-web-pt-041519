// Your code here
function mapToNegativize(array){
    let newArray = []
    for(const ele of array){
        newArray.push(ele * -1)
    }
    return newArray
} 

function mapToNoChange(array){
    let newArray = []
    for (const ele of array){
        newArray.push(ele)
    }
    return newArray
}

function mapToDouble(array){
    let newArray = []
    for(const ele of array){
        newArray.push(ele * 2)
    }
    return newArray
}

function mapToSquare(array){
    let newArray = []
    for(const ele of array){
        newArray.push(ele ** 2)
    }
    return newArray
}


function reduceToTotal(source, start){
    let value = 0
    if(start){value = start}
    for (const ele of source){
        value += ele
    }
    return value
}

function reduceToAllTrue(array){
    let newArray = []
    let value = true
    for(const ele of array){
        newArray.push(!!ele)
    }
    if(newArray.includes(false)){
        value = false
    }
    return value
}

function reduceToAnyTrue(array){
    let newArray = []
    let value = false
    for(const ele of array){
        newArray.push(!!ele)
    }
    if(newArray.includes(true)){
        value = true
    }
    return value
}