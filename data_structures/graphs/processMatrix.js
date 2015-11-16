var matrix= [
  [1,2,3,4,5,6,7,8,9,10],
  [11,12,13,14,15,16,17,18,19,20],
  [21,22,23,24,25,26,27,28,29,30],
  [41,42,43,44,45,46,47,48,49,50]
]

var processMatrix = function(matrix) {
  var i = 0,
      j,
      len = matrix.length,
      column,
      clen;

  for(i; i < len; i++) {
    column = matrix[i];
    clen = column.length;

    for (j=0; j<clen; j++) {
      console.log(column[j]);
    }
  }
}

processMatrix(matrix);