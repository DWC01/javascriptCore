// Revealing Module Pattern
// Private and Public Methods/properties made available through anonymous object

var integgralAds = (function(){
  var 
    name = 'Integgral Ad Science',
    size = 300,
    _statement = function() {
      return 'We are ' + name + ' with ' + size + ' employees.';
    }

    return {
      name: name,
      size: size,
      statement: _statement()
    }

})();

console.log(integgralAds);