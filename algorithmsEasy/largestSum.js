var largestSum = function(array) {
  var largestNum1 = Math.max.apply(null, array),
      index = array.indexOf(largestNum1),
      largestNum2;

  array.splice(index,1);

  largestNum2 = Math.max.apply(null, array);
  
  return largestNum1 + largestNum2;
}

var result = largestSum([1,2,3,4,5,6,7,8,9,10]);
console.log(result);
