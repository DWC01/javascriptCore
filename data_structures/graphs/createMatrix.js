var createMatrix = function(rowNum, columnNum, initial) {
  var array = [],
      i = 0,
      j = 0;

  for(i; i < rowNum; i++) {
    var columns=[];
    for(j; j < columnNum; j++) {
      columns[j] = initial;
    }
    array[i] = columns;
  }
  return array;
};

console.log(createMatrix(10,10,0)));