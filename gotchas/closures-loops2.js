// What will be console logged?

// function celebrityIDCreator(theCelebrities){
//   var i;
//   var uniqueID = 100;

//   for (i = 0; i < theCelebrities.length; i++) {
//     theCelebrities[i]["id"] = function ()  {
//       return uniqueID + i;
//     }
//   }
//   return theCelebrities;
// }
  
// var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
// var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
// var stallone = createIdForActionCelebs[0];  
// console.log(stallone.id());



//----------------------
// Answer
//----------------------

// 103


// function celebrityIDCreator(theCelebrities){
//   var i;
//   var uniqueID = 100;

//   for (i = 0; i < theCelebrities.length; i++) {
//        console.log("In the Loop!");
//        console.log(i);
//        console.log("");
//       theCelebrities[i]["id"] = function ()  {// <- The closure is not called until the entire function has finished running, it is put on the callback queue
//        console.log("In the Closure!");  // <- This closure only contains a reference to the celebrityIDCreator.uniqueID's value, it is not actually setting it in each iteration
//        console.log(i);
//        console.log("");
//         return uniqueID + i; 
//       } 
//     }
//   console.log(theCelebrities); // Uncomment out this whole function to see that the 'theCelebrities' object is returned before the closure is executed
//   return theCelebrities;       // This happens to allow the closer function to access the function's variables 'by reference', they will be available until the function has finished executing, this is part of the one thread, one callstack, mantra
// }
  
// var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
// var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
// var stallone = createIdForActionCelebs[0];  
// console.log(stallone.id()); // Also notice we are calling id() as a function, Showing that the closure (by reference) function is not even being called until we ask for it