// O(n)
var removeDups = function(array) {
  var cleanArray = [],
      exists = {},
      i = 0,
      len = array.length;

  // i always < len when starting at 0
  for(i; i<len; i++) {
    // Grab Item
    var item  = array[i];
    // if not in exists, add to array and exists
    if(!exists[item]) {
      cleanArray.push(item);
      exists[item] = true;
    }
  }
  return cleanArray;
}
console.log(removeDups([1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5]));