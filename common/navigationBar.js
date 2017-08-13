// Sets up the navigation bar (to be called once the HTML is loaded)
function initNavigationBar() {
    // Adds a listener to prevent the dropdown closer to close the dropdown right after opening it
    var nb = document.getElementById("topNavigationBar");
    addListenerToEvents(nb, 'click touchstart', e => e.stopPropagation());
    
    // Detect if current page is part of the menu bar and highlight it
    var url = window.location.pathname;
    var links = document.getElementById("nb-menu-items").getElementsByClassName("nb-menu-link");
    var i, href;
    for (i=0; i<links.length; i++) {
        href = links[i].getAttribute('href');
        if(href.includes(url)) {
            links[i].classList.add('nb-menu-link-current');
        }       
    }
}

// Deploys and collapses the dropdown menu in small devices
function nbToggle() {
    if(isToggleNavVisible()) {
        var nb = document.getElementById("topNavigationBar");
        if (nb.className === "navigationBar") {
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
    if(e.target.id != 'topNavigationBar'){
        removeListenerFromEvents(document.body, 'click touchstart', dropdownCloser);
        var nb = document.getElementById("topNavigationBar");
        nb.classList.remove('dropdown');
    }
}

// Delays the redirection to an URL
// Used in order to allow animations to finish before redirecting
function delayRedirection(URL) {
    if(isToggleNavVisible()) {
        setTimeout(() => { window.location = URL; }, 500);
    }
    else {
        window.location = URL;
    }
}

// Checks if the ToggleNav is visible (small display) or not (big display)
function isToggleNavVisible() {
    var tn = document.getElementById("toggle-nav");
    return isVisible(tn);    
}