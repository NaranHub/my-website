// Adds the same listener function to the list of events
function addListenerToEvents(element, events, fn) {
  events.split(' ').forEach(e => element.addEventListener(e, fn, false));
}

// Adds the same listener function to the list of events
function removeListenerFromEvents(element, events, fn) {
  events.split(' ').forEach(e => element.removeEventListener(e, fn, false));
}

// Checks if an element is visible (not hidden)
function isVisible(element) {
    let style = window.getComputedStyle(element);
    return (style.display !== 'none')
}

// Enforces a minimum time interval between calls to a function
// Useful when subscribing to scroll events, for instance
function throttle(fn, interval) {
  let lastCall, timeoutId;
  return function () {
    let now = new Date().getTime();
    if (lastCall && now < (lastCall + interval) ) {
      // if we are inside the interval we wait
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        lastCall = now;
        fn.call();
      }, interval - (now - lastCall) );
    } else {
      // otherwise, we directly call the function 
      lastCall = now;
      fn.call();
    }
  };
}

function initPage() { 
  initNavigationBar();
  const scrollHandler = new ScrollHandler();
  $(window).scroll(throttle(() => scrollHandler.highlightNavigationLink(), 100));        
}
