// Your code here

function mapToNegativize(sourceArray){
    // let newArr = [];
    // for(let arr of sourceArray){
    //     newArr.push(arr * (-1));
    // }
    // return newArr;
    return sourceArray.map(a => a* -1);
}


function mapToNoChange(sourceArray){
    return sourceArray.map(a => a);
}


function mapToDouble(sourceArray){
    // let newArr = [];
    // for(let arr of sourceArray){
    //     newArr.push(arr * 2);
    // }
    // return newArr;
    return sourceArray.map(el => el*2);
}

function mapToSquare(sourceArray){
//     let newArr = [];
//     for(let arr of sourceArray){
//         newArr.push(arr * arr);
//     }
//     return newArr;
    return sourceArray.map(a => a **2 );
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let newValue = startingPoint;

    sourceArray.forEach(a => {
         newValue += a;
    });

    return newValue;
}

function reduceToAllTrue(sourceArray){
    for(let arr of sourceArray){
        if (!arr)
            return false;
        }
    return true;
}

function reduceToAnyTrue(sourceArray){
    for(let arr of sourceArray){
        if (arr) return true;
    }
    return false;
}