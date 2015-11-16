var reverseWords = function(sentance) {
  var words = sentance.split(' '),
      i = words.length,
      reversed =[];

  for(i; i >= 0; i--) {
    reversed.push(words[i]); 
  }

  return reversed.join(' ');
}

console.log(reverseWords('The quick brown fox'));