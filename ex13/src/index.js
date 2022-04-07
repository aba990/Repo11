var str ="Paragon!";

function myReverse(str){
    var result = "";

    for (var i = str.length - 1; i >= 0; i -= 1)
    {
        result += str[i];
    }
    return result;
}
console.log(myReverse(str));
module.exports = myReverse;