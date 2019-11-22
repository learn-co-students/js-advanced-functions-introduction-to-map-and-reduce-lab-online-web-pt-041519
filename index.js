// Your code here

function mapToNegativize(sourceArray){
    return sourceArray.map(el => el * -1);
};

function mapToNoChange(sourceArray){
    return sourceArray.map(el => el);
};

function mapToDouble(sourceArray){
    return sourceArray.map(el => el * 2);
};

function mapToSquare(sourceArray){
    return sourceArray.map(el => el ** 2);
};

function reduceToTotal(sourceArray, startingPoint = 0){
    let i = startingPoint;
    sourceArray.forEach(el => {
        return i += el;
    });
    return i;
};

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false;
      }
      return true;
};

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true;
      }
      return false;
};