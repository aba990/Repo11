var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(myItems) {
	var myItems;
	myItems[2] = 6;
	return myItems;
}
console.log(myArrayFunction(myArr));
module.exports = myArrayFunction;

