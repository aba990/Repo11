function mySplice(arr1, n){
    var result = [];

    result.push(...arr1.splice(0, n));
    result.push(...n);
    result.push(...arr1.splice(arr1, n.length));

    return result;
}
console.log(mySplice([1, 2, 3], [4, 5], 1));