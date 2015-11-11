// Window Global Object Everything Runs Under
// Docuemnt is DOM

console.log(window.document === document); //true
console.log(window.getElementById); // undefined
console.log(document.getElementById); //function getElementById() { [native code] }


// Window Onload
// Everything has been loaded/downloaded
window.addEventListener("onload", function() {
  console.log("window onload");
});

// Document Onload
// When markup is complete loading

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded");
});

document.onreadystatechange = function() {

  // The document is still loading.
  if (document.readyState  === "loading") {
    console.log("DOM - loading");
  }

  // The document has finished loading. We can now access the DOM elements.
  if (document.readyState  === "interactive") {
    console.log("DOM - interactive");
  }
  
  // The page is fully loaded.
  if (document.readyState  === "complete") {
    console.log("DOM - complete");
  }
}


