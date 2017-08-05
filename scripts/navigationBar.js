function responsiveNavBar() {
    var x = document.getElementById("topNavigationBar");
    if (x.className === "navigationBar") {
        x.className += " dropdown";
    } else {
        x.className = "navigationBar";
    }
}