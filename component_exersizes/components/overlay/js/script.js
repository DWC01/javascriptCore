// document.addEventListener('DOMContentLoaded', function() {
//   console.log('DOMContentLoaded')
// });

// document.onreadystatechange = function () {
//   // Initial Load
//   if (document.readyState === 'interactive') {
//     console.log('interactive -- dom content loaded');
//   }

//   // DOMContentLoaded Fires

//   // Polite Load
//   if (document.readyState === 'complete') {
//     console.log('Complete - dom content and downloads complete');
//   }
// }

// window.onload = function(){
//   console.log('Window Load - fires after document has completed');
// };

var closeOverlay = function() {
  $('.overlay').addClass('hide');
}

$(document).ready(function() {
  
  $('.overlay').click(function(e) {
    console.log(e);
    console.log(e.target.nodeName)

    if(e.target === e.currentTarget || e.target.nodeName === 'BUTTON') {
      closeOverlay();
    }
  });

  // $('article').click(function(e) {
  //   console.log(e);
  // });

});
