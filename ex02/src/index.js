var myStr = "Paragon is the best!";
function useMethods(str){
	var myReverse;
	var countCaracthers;
	
	var rijeci = str.split(" ");
	rijeci = rijeci.reverse();
	
	countCaracthers = rijeci.map((s) => s.length);
	
	rijeci = rijeci.map((r) => r.split("").reverse().join(""));
	
	myReverse = rijeci.join(" ");
	
	return { myReverse, countCaracthers};
	
}
console.log(useMethods(myStr));
module.exports = useMethods;
