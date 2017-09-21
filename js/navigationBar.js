// Sets up the navigation bar (to be called once the HTML is loaded)
function initNavigationBar() {
    // Adds a listener to prevent the dropdown closer to close the dropdown right after opening it
    let nb = document.getElementById('topNavigationBar');
    addListenerToEvents(nb, 'click touchstart', e => e.stopPropagation());
    
    // Adds a listener to prevent the dropdown open when tapping the title
    let title = document.getElementById('title-nav');
    addListenerToEvents(title, 'click touchstart', e => e.stopPropagation());
}

// Deploys and collapses the dropdown menu in small devices
function nbToggle() {
    if(isToggleNavVisible()) {
        let nb = document.getElementById('topNavigationBar');
        if (nb.className === 'navigationBar') {
            addListenerToEvents(document.body, 'click touchstart', dropdownCloser);
            nb.classList.add('dropdown');
        } 
        else {
            removeListenerFromEvents(document.body, 'click touchstart', dropdownCloser);
            nb.classList.remove('dropdown');
        }
    }
}

// Closes the dropdown menu when open and clicked outside it
function dropdownCloser(e) {
    if(e.target.id !== 'topNavigationBar'){
        removeListenerFromEvents(document.body, 'click touchstart', dropdownCloser);
        let nb = document.getElementById('topNavigationBar');
        nb.classList.remove('dropdown');
    }
}

// Delays the scroll to an anchor
// Used in order to allow animations to finish before redirecting
function delayedRedirection(anchorId) {
    if(isToggleNavVisible()) {
        setTimeout(() => { scrollToAnchor(anchorId); }, 100);
    }
    else {
        scrollToAnchor(anchorId);
    }
}

// Smoothly scrolls to an anchor location
function scrollToAnchor(anchorID) {
    let el = $(anchorID);
    $('html,body').animate({scrollTop: el.offset().top}, 'slow');
}

// Checks if the ToggleNav is visible (small display) or not (big display)
function isToggleNavVisible() {
    let tn = document.getElementById('toggle-nav');
    return isVisible(tn);    
}
