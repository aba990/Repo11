function multiplyArrayFunction (myArray){
    var product = 1;

    for(var i = 0; i < myArray.length; j += 1){
        product *= myArray[i][j];
    } 
    return product;
}

console.log(multiplyArrayFunction(myArray));
module.exports = multiplyArrayFunction;