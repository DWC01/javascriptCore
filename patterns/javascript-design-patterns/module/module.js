// Module Pattern
// Private variables only accessible through public facing API

var integralAds = (function(args){
    var _args = args
    return {
      args: function() {
        return _args; 
      },
      name: "Integral Ad Science",
      size: 300,
      addEmployees: function(num) {
        this.size = this.size += num;
      }
    }

})('Argument');

console.log(integralAds);

console.log(integralAds.name); // Integral Ad Science
console.log(integralAds.size); // 300

integralAds.name = "IAS";
integralAds.addEmployees(10);

console.log(integralAds.name); // IAS
console.log(integralAds.size); // 310
console.log(integralAds.args()); // Argument

