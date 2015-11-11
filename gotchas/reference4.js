// Write a function that:
//  turns ["dog", "cat", "mouse"] => ["dog1", "cat2", "mouse3"]



































var array = ["dog", "cat", "mouse"];

var modArray = function(array) {
  var i = 0,
      len = array.length;

  for (i; i < len; i++) {
    array[i] += (i+1)
  }
}

// -- or --

// var modArray = function(array) {
//   array.forEach(function(item, index){
//     array[index] += (index+1);
//   });
// }

modArray(array);
console.log(array);

