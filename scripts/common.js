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
    var style = window.getComputedStyle(element);
    return (style.display !== 'none')
}