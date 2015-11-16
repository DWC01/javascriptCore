var stringCurry = 'While he isn\'t saying one is better than the other, Garnett is claiming Curry has been nothing short of revolutionary for the game, especially with his performances this season. The defending NBA champion has shot the ball from distance at an unprecedented rate, making over five three-pointers per game as he leads the league with 33.3 points per night. His play even has Chicago Bulls head coach Fred Hoiberg taking notice, as he told ESPNChicago.com\'s Nick Friedell that Curry could be the "best shooter of all time." The comparisons drew Fox Sports\' Colin Cowherd to hit the airwaves about it: No one is going to make the claim that Curry is on the same level as Jordan just yet. M.J. is arguably the greatest man to ever play basketball and is in the pantheon of the sport, while Curry is just entering the prime of his career. Of course, some wouldn\'t give Curry the title of best current player either, as arguments could be made in favor LeBron James. Maybe in another decade people can make closer comparisons between Curry and Jordan, but it\'s hard to deny the former has been extremely influential to the game over the past few seasons. If Garnett sees something special, that should be good enough for a lot of basketball fans.'

var topTen = function(txt) {
  var cleanTxt = txt.replace(/[.,"]/g, ''),
      words = cleanTxt.split(' '),
      i = 0,
      len = words.length,
      wordCount = {},
      sortedWords = [];

  // Create object with word count
  for(i; i < len; i++) {
    if(wordCount[words[i]]) {
      wordCount[words[i]] += 1;
    } else {
      wordCount[words[i]] = 1;
    }
  }

  // Create Array with key,val pairs from obj
  for (word in wordCount) {
    if(wordCount.hasOwnProperty(word)) {
      sortedWords.push([word, wordCount[word]]);
    }
  }

  // Sort Array pairs by num val
  sortedWords = sortedWords.sort(function(a,b) {
    return b[1] - a[1];
  });

  return sortedWords;
}

console.log(topTen(stringCurry));