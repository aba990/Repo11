var myArr = [2, 5, 9, 8, 1];

function bubbleSort(arr){
   for (var i = 0; i < arr.length; i++){
       for (var j = 1 ; j < (arr.length-i); j++){
           if(arr[j-1] > arr[j]){
            temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
           }
     
       }
    }
    return arr;
   } 
console.log(bubblesort(myArr));
module.exports = bubbleSort;