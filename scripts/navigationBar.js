// Sets up the navigation bar on window load 
window.onload = function() {
    // Adds a listener to prevent the dropdown closer to close the dropdown right after opening it
    var nb = document.getElementById("topNavigationBar");
    addListenerToEvents(nb, 'click touchstart', function(e) {e.stopPropagation()});
}

// Deploys and collapses the dropdown menu in small devices
function nbToggle() {
    var tn = document.getElementById("toggle-nav");
    if(isVisible(tn)) {
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
