function nbToggle() {
    var nb = document.getElementById("topNavigationBar");
    if (nb.className === "navigationBar") {
        nb.classList.add('dropdown');
    } else {
        nb.classList.remove('dropdown');
    }
}