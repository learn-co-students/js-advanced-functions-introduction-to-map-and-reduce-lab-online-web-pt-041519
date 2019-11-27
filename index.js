//map-like
const mapToNegativize = (sourceArray) => {
  let negativized = []
  for (let i = 0; i < sourceArray.length; i++){
    negativized.push(sourceArray[i] - sourceArray[i] * 2)
  }
  return negativized
}


const mapToNoChange = (sourceArray) => {
  return sourceArray
}


const mapToDouble = (sourceArray) => {
  let doubled = []
  for (let i = 0; i < sourceArray.length; i++){
    doubled.push(sourceArray[i] * 2)
  }
  return doubled
}



const mapToSquare = (sourceArray) => {
  let squared = []
  for (let i = 0; i < sourceArray.length; i++){
    squared.push(sourceArray[i] ** 2)
  }
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