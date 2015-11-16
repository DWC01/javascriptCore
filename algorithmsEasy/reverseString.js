var reverse = function(string) {
  var reverse = [],
      i = string.length-1;

  for(i; i >= 0; i--) {
    reverse.push(string[i]);
  }
  return reverse.join('');
}
console.log(reverse('Hello!'));