// http://javascript.info/tutorial/bubbling-and-capturing


// Events

// Capture down to deepest element, set as event.target
// Bubble up, checking for event handle on each element


// JQuery 

// -- Capture Phase
// event.target === actually element clicked 
// (deepest element registered during capture phase)
// .overlay -> article -> button
// This then bubbles up to .overlay, fires click event

// -- Bubble Phase
// event.currentTarget === this
// (the item the event listener is attached to, and what triggers)
