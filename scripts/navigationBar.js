// Sets up the navigation bar on window load 
window.onload = function() {
    // Adds a listener to prevent the dropdown closer to close the dropdown right after opening it
    var nb = document.getElementById("topNavigationBar");
    nb.addEventListener('click', function(e) {e.stopPropagation()}, false);
}

// Deploys and collapses the dropdown menu in small devices
function nbToggle() {
    var nb = document.getElementById("topNavigationBar");
    if (nb.className === "navigationBar") {
        document.body.addEventListener('click', dropdownCloser, false);
        nb.classList.add('dropdown');
    } 
    else {
        document.body.removeEventListener('click', dropdownCloser, false);
        nb.classList.remove('dropdown');
    }
}

// Closes the dropdown menu when open and clicked outside it
function dropdownCloser(e) {
    if(e.target.id != 'topNavigationBar'){
        document.body.removeEventListener('click', dropdownCloser, false);
        var nb = document.getElementById("topNavigationBar");
        nb.classList.remove('dropdown');
    }
}   