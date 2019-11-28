// Your code here
function mapToNegativize(sourceArray){
  let newarr = []
  sourceArray.forEach(fn => {
       newarr.push(fn * -1)
    }) 
    return newarr
} 

function mapToNoChange(sourceArray){
    let newarr = []
    sourceArray.forEach(fn => {
         newarr.push(fn)
      }) 
      return newarr
  } 

  
  function mapToDouble(sourceArray){
    let newarr = []
    sourceArray.forEach(fn => {
         newarr.push(fn * 2)
      }) 
      return newarr
  } 

 
//   function mapToSquare(sourceArray) {
//     let newarr = []
//     for (let i = 0; i < sourceArray.length; i++ ) {
//         newarr.push(sourceArray[i] * sourceArray[i])
//     }
//     return newarr
//   }

  function mapToSquare(sourceArray){
    let newarr = []
    sourceArray.forEach(fn => {
         newarr.push(fn * fn)
      }) 
      return newarr
  } 


  function reduceToTotal(sourceArray, startingPoint = 0){
      let total = startingPoint
      sourceArray.forEach(element => {
          total = element + total
      });
      return total
  }

 
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }