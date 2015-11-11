// What will be logged by console?
 
var txt = ["a","b","c"];
 
for (var i = 0; i < 3; ++i ){
  var msg = txt[i];
  setTimeout(function() { console.log(msg); }, i*1000);
}














//----------------------
// Answer
//----------------------

// c
// c
// c


// setTimeout is a closure, creating 3 Activation Objects, one 
// for each loop, when the anonymous function is executed. The 
// last Activation Object created, and the first to be looked
// during Identifier Resolution is the first Activation Object
// holding 'c' as the variable for msg...