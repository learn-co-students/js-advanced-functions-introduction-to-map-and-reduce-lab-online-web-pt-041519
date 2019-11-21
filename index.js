// MAP
function mapToNegativize(array)
{
    let newArray = []
    array.forEach(function(e)
    {
        newArray.push(e*(-1))
    })
    return newArray
}

function mapToNoChange(array)
{
    let newArray = [...array]
    return newArray
}

function mapToDouble(array)
{
    let newArray = []
    array.forEach(function(e)
    {
        newArray.push(e*(2))
    })
    return newArray
}

function mapToSquare(array)
{
    let newArray = []
    array.forEach(function(e)
    {
        newArray.push(e*e)
    })
    return newArray
}

// REDUCE

function reduceToTotal(array, start=0)
{
    let total = start
    let newArray = []
    array.forEach(function(e)
    {
       total = total + e
    })
    return total
}


function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
      }
      return true
 }

 function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
 }