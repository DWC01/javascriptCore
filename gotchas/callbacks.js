// What will be console logged? 

function compile(name, callback) {
  setTimeout(function() {
    callback(name)
  }, 0)
  console.log("End of compile")
}

function notify(name) {
  console.log(name)
}

compile("John", notify)








//----------------------
// Answer
//----------------------

// 'End of compile'
// 'John'

// The setTimeout() function gets put in a queue
// to be executed after compile() executes regardless of the time
// that it has set as its iterval.



