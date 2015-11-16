// Linear addition = n(n+1)/2
var missingNum = function(array) {
  var n = array.length+1,
      expectedTotal = n*(n+1)/2,
      total, 
      diff;

  total = array.reduce(function(a,b) {
    return a+b;
  });
  return expectedTotal - total;
}

var result = missingNum([1,2,3,4,5,6,7,9,10]);
console.log(result);