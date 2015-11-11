// What will be console logged?

function celebrityIDCreator(theCelebrities){
  var i;
  var uniqueID = 100;

  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]["id"] = function (j) {
      return function(){
        return uniqueID + j;
      }()
    }(i);
  }
  return theCelebrities;
}
  
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stallone = createIdForActionCelebs[0];  
console.log(stallone.id);



//----------------------
// Answer
//----------------------

// 100

// Changing the closure to an IFE, so it actually takes the current 
// value of i and sets the theCelebrities.id equal to i. 