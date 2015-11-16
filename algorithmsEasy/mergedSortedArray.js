var mergeSorted = function(a,b) {
  var mergedArray=[];

  if(a.length === 0) {return b;}
  if(b.length === 0) {return a;}

  while(a[0] || b[0]) {

    if(a[0] && !b[0] || a[0] < b[0]) {
      mergedArray.push(a.shift());
    } else {
      mergedArray.push(b.shift());
    }

  }
  return mergedArray;
}
console.log(mergeSorted([2,5,6,9], [1,2,3,29,30,31,32,33]));