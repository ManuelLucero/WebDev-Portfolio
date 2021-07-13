// JavaScript Document
// The debounce function receives the function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so it can be cancelled later
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clears it, and queues for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queues the function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Calls the function and pass any params received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so that it can be used in the stylesheet
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events; debounces our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Updates scroll position for first time
storeScroll();