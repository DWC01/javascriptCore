//  In a Closue
// What will be console logged?

  var user = {
  tournament:"The Masters",
    data:[
      {name:"T. Woods", age:37},
      {name:"P. Mickelson", age:43}
    ],

    clickHandler:function () {
      this.data.forEach (function (person) {
        console.log ("What is This referring to? " + this);
        console.log (person.name + " is playing at " + this.tournament);
      })
    }
  }
  user.clickHandler();





//----------------------
// Answer
//----------------------

  var user = {
  tournament:"The Masters",
    data:[
      {name:"T. Woods", age:37},
      {name:"P. Mickelson", age:43}
    ],

    clickHandler:function () {
      this.data.forEach (function (person) {
      // the anonymous funciton in the forEach loop causes a closure
      // the this is the closer refers to the object that called
      // the anymous function [object Window]
      console.log ("What is This referring to? " + this);
      console.log (person.name + " is playing at " + this.tournament);
      // T. Woods is playing at undefined​
      // P. Mickelson is playing at undefined​
      })
    }
  ​
  }
  user.clickHandler(); // What is "this" referring to? [object Window]

// To Fix 

// You would want to assign the 'this' to a variable and access that
// inside the forEach loop.

 clickHandler:function (event) {
    var theUserObj = this;
      this.data.forEach (function (person) {
      console.log (person.name + " is playing at " + theUserObj.tournament);
    })
  }

  // Another common practice amongst JavaScript users is to 
  // use this code​, calling 'this', 'that'
    var that = this;


