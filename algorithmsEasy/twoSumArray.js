// Ask If this is sorted?

// 1.) Iterate through array
// 2.) Check if difference is in object
// 3.) If not, add item


var twoSum = function(array, sum) {
  var i = 0,
      len = array.length,
      diff,
      iterated = {};

  for (i; i < len; i++) {
    // In order to get sum, I need a num  that equals difference
    diff = sum - array[i];
    
    // Get difference, and check if it is in object already
    if (iterated[diff]) {
      return true;
    } else {
      // If not, put current item in object, and check for it later..
      iterated[array[i]] = true;
  }
  return false;
}

console.log(twoSum([6,4,3,2,1,7], 9));