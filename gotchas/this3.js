// What will be console logged?

  var firstName = "Peter";
  var lastName = "Ally";

  function showFullName() {
    console.log (this.firstName + " " + this.lastName);
  }
  var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    showFullName:function () {
    console.log (this.firstName + " " + this.lastName);
    }
  }
 
  showFullName ();
  window.showFullName ();
  person.showFullName (); 

  

//----------------------
// Answer
//----------------------
 
// Peter Ally
// Peter Ally

// Penelope Barrymore


// In the first two examples, the 'this' is set to the default 'window'
// Since that is the object calling the showFullName funciton
// This occurs due to the fact that showFullName is defined on the 
// Global Scope, and is being invoked by the 'window' object

// But on the second example, the object 'person' is envoking
// showFullName so it is set to 'this' (in the Activation Object) 
  