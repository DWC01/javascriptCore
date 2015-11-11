setTimeout(function(){
  console.log("hello")
},0);

var sum = 0
for (var i = 0; i<10000000; i++){
  sum += i
}
console.log('world')
console.log(sum)