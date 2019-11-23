// Your code here
function mapToNegativize(src) {
  let arr = []
  for (let i=0; i<src.length; i++) {
    arr.push(src[i]*-1)
  }
  return arr
}

function mapToNoChange(src) {
  return src
}

function mapToDouble(src) {
  let arr = []
  for (let i=0; i<src.length; i++) {
    arr.push(src[i]*2)
  }
  return arr
}

function mapToSquare(src) {
  let arr =[]
  for (let i=0; i<src.length; i++) {
    arr.push(Math.pow(src[i], 2))
  }
  return arr
}

function reduceToTotal(src, startingPoint=0){
  let total = startingPoint
  for (let i=0; i<src.length; i++) {
    total += src[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i=0; i<src.length; i++){
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i=0; i<src.length; i++) {
    if (src[i]) return true
  }
  return false
}
