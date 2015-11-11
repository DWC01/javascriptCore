var singleton = (function(){
  var instance;

  var init = function(cfg) {
    var _name = "David",
        _cfg = cfg;
        _randomNumber = Math.random();

    return { 
      name: "David",
      sayHelloPrivate: function() {
        return "Hi, my name is " + _name;
      },
      sayHelloPublic: function() {
        return "Hi, my name is " + this.name;
      },
      num: function() {
        return _randomNumber;
      },
      cfg: function(){
        return _cfg;
      }
    }
  }

  return {
    getInstance: function(cfg) {
      if (!instance) {
        instance = init(cfg);
      }
      return instance;
    }
  };

})();

var mySingleton = singleton.getInstance({arg1:"arg1"});

console.log(mySingleton);
console.log(mySingleton.sayHelloPublic()); // David
console.log(mySingleton.sayHelloPrivate()); // David

console.log(mySingleton.num());
mySingleton = singleton.getInstance();
console.log(mySingleton.num());
console.log(mySingleton.cfg());

