var factory = function() {
  var highlander = {
    name: 'McCleod'
  }

  return {
    get: function() {
      return highlander;
    }
  }
}

var singleton = factory();
console.log(singleton);