//map-like
const mapToNegativize = (sourceArray) => {
  let negativized = []
  sourceArray.forEach(function(number){
   let negativeNum = `${-number}`
   negativized.push(parseInt(negativeNum, 10))
  })
  return negativized
}


const mapToNoChange = (sourceArray) => {
  return sourceArray
}


const mapToDouble = (sourceArray) => {
  let doubled = []
  sourceArray.forEach(function(number){
    let multiplied = number * 2 
    doubled.push(multiplied)
  })
  return doubled
}



const mapToSquare = (sourceArray) => {
  let squared = []
  sourceArray.forEach(function(number){
    let squaredNum = number ** 2 
    squared.push(squaredNum)
  })
  return squared
}

//reduce-like 

const reduceToTotal = (sourceArray, startingPoint=0) => {
  let accumulator = startingPoint
  for (let i = 0; i < sourceArray.length; i++){
    accumulator += sourceArray[i]
  }
  return accumulator
} 
 


const reduceToAllTrue = (sourceArray) => {
  for (let i = 0; i < sourceArray.length; i++){
     if (!sourceArray[i]) return false
  }
  return true
}


const reduceToAnyTrue = (sourceArray) => {
  for (let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i]) return true
 }
 return false
}