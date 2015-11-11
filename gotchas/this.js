// What will be console logged?

var person = {
      firstName   :"Penelope",
      lastName    :"Barrymore",
      
        showFullName:function () {
        console.log (this.firstName + " " + this.lastName);
      }
    }
​
    person.showFullName (); 










//----------------------
// Answer
//----------------------

var person = {
      firstName   :"Penelope",
      lastName    :"Barrymore",
        // "this" will have the value of the person object because 
        // the person object will invoke showFullName ()​
        showFullName:function () {
          console.log (this.firstName + " " + this.lastName);
        }
​
    }
​
    person.showFullName (); // Penelope Barrymore
