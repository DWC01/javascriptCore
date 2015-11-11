// Mehtod passed as a Callback

// What will be console logged?

var user = {
  data:[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
  ],
  clickHandler:function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; 
    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
  }
}

$ ("button").click (user.clickHandler);

$("button").click (user.clickHandler.bind(user)); 


//----------------------
// Answer
//----------------------

// Cannot read property '0' of undefined

// P. Mickelson 43

//
// The output will be undefined on the first solution 
// because there is no data property on the button object​
// The 'this' refers to the object that invokes the function,
// and in this case it is the button
// 
// To fix this issue, you can bind() the user object to the click
// handler so the this refers to the user as its object
