var areEqual = function(a, b) {

  var i = 0,
      aProps = Object.getOwnPropertyNames(a),
      bProps = Object.getOwnPropertyNames(b),
      len = aProps.length;

  if (aProps !== bProps) {return false;}

  for (i; i < len; i++) {
    var propName = aProps[i];
    if(aProps[propName] !== bProps[propName]) {return false;}
  }
  return true;
}