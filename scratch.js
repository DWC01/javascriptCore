var reverse = function(string) {
  var reversed = [],
      i = string.length-1;

  for(i; i >= 0; i--) {
    reversed.push(string[i]);
  }
  return reversed.join('');
}
console.log(reverse('hello!'));