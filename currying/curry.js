// // Normal function Sum
// var sum = function(x,y) {
//   return x+y;
// }

// // Curry Function Sum
// var sum = function(x) {
//   return function(y) {
//     return x+y;
//   }
// }

// var addTen = sum(10);
// console.log(addTen(20)); // 30
// console.log(addTen(50)); // 60

// // -- Can also be called immediatley after
// console.log( sum(10)(20) ); // 30
// console.log( sum(10)(50) ); // 60

// // -- Proof
// var addTen = sum(10);
// console.log( addTen(20) === sum(10)(20) ); // 30
// console.log( addTen(50) === sum(10)(50) ); // 60

// Curry function with infinate brackets

// 1. Know that adding + before the function type casts its return to number
// 2. This allows the valueOf to call the toString and return an integer
// var func = function() {
//   return 5 + 6;
// }

// func.toString = function() {
//   return 5 + 6;
// }
// console.log(+func);

// function sum (n) {

//   var innerSum = function (x) {
//     return sum (n + x);
//   };

//   innerSum.valueOf = innerSum.toString = function(){
//       return n;
//   };

//   return innerSum;
// }

// console.log(+sum(1)(2)(3)(4));




