// When borrowing methods //
// What will be console logged?

  var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
    players :[{
      name:"Tommy", 
      playerID:987, age:23
    },{
      name:"Pau",
      playerID:87, age:33
    }]
  }

  var appController = {
    
    scores: [900, 845, 809, 950],
    
    avgScore: null,
    
    avg: function() {
      var sumOfScores;
      
      this.avgScore = sumOfScores / this.scores.length;

      sumOfScores = this.scores.reduce(function (prev, cur) {
         console.log(prev + cur)
        return prev + cur;
      });

    }
  }


  gameController.avgScore = appController.avg();
  
  console.log(gameController.avgScore);


  // things removed
    // Params avg function(index, array)

//----------------------
// Answer
//----------------------

// undefined

// The avg() method is still being called on the appContoller Object
// so it will use the avg scores from the appController
// the gameController's avg score will remain null

// to fix.. 
// (comment out the last two lines of the above section)

  // use apply to invoke the avg() funciton, but with gameController
  // as the calling object (the first argument), and the
  // gameController.scores​ as the array values in the second arg
  appController.avg.apply(gameController, gameController.scores);
  console.log (gameController.avgScore); // 46.4​

  // appController.avgScore is still null; 
  // it was not updated, only gameController.avgScore was updated​
  console.log (appController.avgScore); // null